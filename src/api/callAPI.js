import axios from 'axios';

// Tạo instance axios với cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  // timeout: 10000, // Uncomment nếu cần timeout
});

// Flag để prevent multiple token renewal đồng thời
let isRenewingToken = false;

/**
 * Request Interceptor - Tự động thêm token và set headers
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('token_user') : null;
    
    if (token) {
      config.headers.token = token;
    }
    
    // Set Content-Type nếu chưa có
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor - Xử lý response và error
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Trả về response nguyên gốc (không tự động lấy data)
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;
      
      // Case 1: Token hết hạn (401)
      if (status === 401 && data?.msg === 'Token hết hạn, bạn hãy đăng nhập lại!') {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token_user');
          alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại');
          
          // Redirect về login với current pathname
          if (window.location.pathname !== '/login') {
            const redirect = encodeURIComponent(
              window.location.pathname + window.location.search
            );
            window.location.href = `/login?redirect=${redirect}`;
          }
        }
      }
      
      // Case 2: Token no longer true - Quyền đã thay đổi, cần renew token
      else if (data?.msg === 'Token no longer true' && data?.data?.renew_token) {
        if (isRenewingToken) return Promise.reject(error);
        
        isRenewingToken = true;
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('token_user', data.data.renew_token);
          
          // Hiển thị thông báo (có thể dùng toast library)
          alert('Hệ thống phát hiện quyền của bạn đã thay đổi, trang sẽ tự động tải lại sau vài giây');
          
          // Reload page sau 2.5s
          setTimeout(() => {
            isRenewingToken = false;
            window.location.reload();
          }, 2500);
        }
      }
    }
    
    return Promise.reject(error);
  }
);

/**
 * Main API Call Function
 * @param {string} endpoint - API endpoint (không cần dấu / ở đầu)
 * @param {string} method - HTTP method: 'get', 'post', 'put', 'patch', 'delete'
 * @param {object|FormData} body - Request body hoặc params (cho GET)
 * @returns {Promise<any>} Response data
 */
export default async function callApi(endpoint, method = 'get', body) {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token_user') : null;

    // Kiểm tra xem body có phải FormData không
    const isFormData =
      body &&
      typeof body === 'object' &&
      typeof body.append === 'function' &&
      body.constructor.name === 'FormData';

    // Set headers
    const headers = {
      token,
      ...(isFormData 
        ? { 'Content-Type': 'multipart/form-data' } 
        : { 'Content-Type': 'application/json' }
      ),
    };

    // Cấu hình request
    const config = {
      method: method.toLowerCase(),
      url: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/${endpoint}`,
      headers,
    };

    // GET method dùng params, các method khác dùng data
    if (method.toLowerCase() === 'get') {
      config.params = body;
    } else {
      config.data = body;
    }

    const { data } = await axiosInstance(config);
    return data;
  } catch (err) {
    const { status, data } = err.response || {};
    
    // Hiển thị error message cho lỗi 500
    if (status === 500) {
      const errorMsg = process.env.NODE_ENV === 'development' 
        ? data?.msg || 'Lỗi server' 
        : 'Có lỗi trong quá trình xử lý';
      
      // Có thể thay bằng toast library của bạn
      console.error(errorMsg);
      alert(errorMsg);
    }
    
    // Vẫn return data để component có thể handle
    return data;
  }
}

// Export axios instance nếu cần sử dụng trực tiếp
export { axiosInstance };
