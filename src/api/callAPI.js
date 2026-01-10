import axios from "axios";
import { API_URL, VERSION_API } from "@/configs/config";
import { toast } from "sonner";

/**
 * Main API Call Function for Customer Website
 * @param {string} endpoint - API endpoint (không cần dấu / ở đầu)
 * @param {string} method - HTTP method: 'get', 'post', 'put', 'patch', 'delete'
 * @param {object|FormData} body - Request body hoặc params (cho GET)
 * @returns {Promise<any>} Response data
 */
export default async function callApi(endpoint, method = "get", body) {
	try {
		// Lấy token từ localStorage (nếu có)
		const token =
			typeof window !== "undefined" ? localStorage.getItem("token_user") : null;

		// Kiểm tra xem body có phải FormData không
		const isFormData =
			body &&
			typeof body === "object" &&
			typeof body.append === "function" &&
			body.constructor.name === "FormData";

		// Set headers
		const headers = {
			...(token && { token }),
			"Content-Type": isFormData ? "multipart/form-data" : "application/json",
		};

		// Cấu hình request
		const config = {
			method: method.toLowerCase(),
			url: `${API_URL}/api/${VERSION_API}/${endpoint}`,
			headers,
		};

		// GET method dùng params, các method khác dùng data
		if (method.toLowerCase() === "get") {
			config.params = body;
		} else {
			config.data = body;
		}

		const { data } = await axios(config);
		return data;
	} catch (err) {
		console.log(err);
		const { status, data } = err.response || {};

		// Xử lý lỗi 401 - Unauthorized
		if (status === 401) {
			if (typeof window !== "undefined") {
				localStorage.removeItem("token_user");
				
				// Chỉ hiển thị toast nếu có message từ server
				if (data?.msg) {
					toast.error("Yêu cầu đăng nhập", {
						description: "Vui lòng đăng nhập để tiếp tục",
						duration: 3000,
					});
				}
				
				// Redirect về login nếu không phải trang login
				if (window.location.pathname !== "/login") {
					const redirect = encodeURIComponent(
						window.location.pathname + window.location.search
					);
					window.location.href = `/login?redirect=${redirect}`;
				}
			}
		}

		// Return data để component có thể tự xử lý error
		return data;
	}
}
