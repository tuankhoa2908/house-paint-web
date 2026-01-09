# Hướng dẫn sử dụng API Helper

## Cấu hình

Tạo file `.env.local` trong thư mục root và thêm:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Cách sử dụng

### 1. Import function

```javascript
import callApi from '@/api/callAPI';
```

### 2. GET Request

```javascript
// Lấy danh sách sản phẩm
try {
  const products = await callApi('products', 'get');
  console.log(products);
} catch (error) {
  console.error('Lỗi khi lấy sản phẩm:', error);
}

// GET với query parameters
try {
  const products = await callApi('products', 'get', {
    page: 1,
    limit: 10,
    category: 'paint'
  });
} catch (error) {
  console.error(error);
}
```

### 3. POST Request

```javascript
// Tạo sản phẩm mới
try {
  const newProduct = await callApi('products', 'post', {
    name: 'Sơn Jotun',
    price: 500000,
    description: 'Sơn nội thất cao cấp'
  });
  console.log('Tạo thành công:', newProduct);
} catch (error) {
  console.error('Lỗi khi tạo sản phẩm:', error);
}
```

### 4. PUT Request

```javascript
// Cập nhật sản phẩm
try {
  const updatedProduct = await callApi('products/123', 'put', {
    name: 'Sơn Jotun Premium',
    price: 600000
  });
  console.log('Cập nhật thành công:', updatedProduct);
} catch (error) {
  console.error('Lỗi khi cập nhật:', error);
}
```

### 5. PATCH Request

```javascript
// Cập nhật một phần thông tin
try {
  const result = await callApi('products/123', 'patch', {
    price: 550000
  });
} catch (error) {
  console.error(error);
}
```

### 6. DELETE Request

```javascript
// Xóa sản phẩm
try {
  const result = await callApi('products/123', 'delete');
  console.log('Xóa thành công');
} catch (error) {
  console.error('Lỗi khi xóa:', error);
}
```

### 7. Upload File (FormData)

```javascript
// Upload hình ảnh - Tự động detect FormData
const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('productId', '123');

  try {
    const result = await callApi('upload', 'post', formData);
    console.log('Upload thành công:', result);
  } catch (error) {
    console.error('Lỗi khi upload:', error);
  }
};
```

## Ví dụ sử dụng trong Component

### Example 1: Product List

```javascript
'use client';

import { useState, useEffect } from 'react';
import callApi from '@/api/callAPI';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await callApi('products', 'get');
      setProducts(data);
    } catch (error) {
      console.error('Lỗi khi tải sản phẩm:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      const newProduct = await callApi('products', 'post', productData);
      setProducts([...products, newProduct]);
      alert('Thêm sản phẩm thành công!');
    } catch (error) {
      alert('Có lỗi xảy ra!');
    }
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Example 2: Form with File Upload

```javascript
'use client';

import { useState } from 'react';
import callApi from '@/api/callAPI';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    price: ''
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 1. Tạo sản phẩm
      const product = await callApi('products', 'post', formData);
      
      // 2. Upload hình ảnh nếu có
      if (image) {
        const uploadData = new FormData();
        uploadData.append('image', image);
        uploadData.append('productId', product.id);
        
        await callApi('products/upload-image', 'post', uploadData);
      }
      
      alert('Tạo sản phẩm thành công!');
    } catch (error) {
      alert('Có lỗi xảy ra!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Tên sản phẩm"
      />
      <input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="Giá"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Tạo sản phẩm</button>
    </form>
  );
}
```

## Tính năng

✅ **Auto FormData Detection**: Tự động phát hiện và set header cho FormData  
✅ **Auto Token**: Tự động thêm token vào header từ localStorage  
✅ **Token Renewal**: Tự động renew token khi quyền thay đổi  
✅ **Auto Redirect**: Tự động redirect về login khi token hết hạn (401)  
✅ **Smart Error Handling**: Xử lý lỗi tập trung với message  
✅ **GET Params**: GET method tự động dùng params thay vì body  

## Chi tiết kỹ thuật

### Token Storage
- Token được lưu trong `localStorage` với key: `'token_user'`
- Header token được gửi dưới dạng: `{ token: 'your_token' }`

### Auto FormData Detection
Function tự động kiểm tra xem `body` có phải `FormData` không:
```javascript
const isFormData = 
  body && 
  typeof body === 'object' && 
  typeof body.append === 'function' && 
  body.constructor.name === 'FormData';
```

### Token Renewal Flow
1. Server trả về response với `msg: "Token no longer true"`
2. Hệ thống tự động lưu `renew_token` mới
3. Hiển thị thông báo cho user
4. Reload page sau 2.5 giây

### Error Handling
- **500 Error**: Hiển thị message (development mode show chi tiết)
- **401 Error**: Auto redirect về login với redirect path
- Luôn return data để component có thể xử lý thêm

## Lưu ý quan trọng

⚠️ **Endpoint không cần dấu `/` ở đầu**
```javascript
// ✅ Đúng
await callApi('products', 'get');

// ❌ Sai
await callApi('/products', 'get');
```

⚠️ **Phải có env variable `NEXT_PUBLIC_API_URL`**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

⚠️ **FormData tự động được detect, không cần set header**
```javascript
// ✅ Đúng - Tự động detect
const formData = new FormData();
await callApi('upload', 'post', formData);

// ❌ Không cần - Header tự động được set
```

