import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

console.log("API Base URL:", API_URL);

const API = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Log request for debugging
  console.log(`${config.method.toUpperCase()} ${config.baseURL}${config.url}`, {
    data: config.data,
    headers: config.headers
  });
  
  return config;
});

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => API.post('/auth/login', credentials),
  verify: () => API.get('/auth/verify'),
};

export const galleryAPI = {
  getAll: () => API.get('/gallery'),
  create: (formData) => API.post('/gallery', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  update: (id, formData) => API.put(`/gallery/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id) => API.delete(`/gallery/${id}`),
};

export const announcementsAPI = {
  getAll: () => API.get('/announcements'),
  create: (data) => API.post('/announcements', data),
  update: (id, data) => API.put(`/announcements/${id}`, data),
  delete: (id) => API.delete(`/announcements/${id}`),
};

export const careersAPI = {
  getAll: () => API.get('/careers'),
  create: (data) => API.post('/careers', data),
  update: (id, data) => API.put(`/careers/${id}`, data),
  delete: (id) => API.delete(`/careers/${id}`),
};

/* ---------------- BLOG APIs ---------------- */
export const blogAPI = {
  getAll: () => API.get("/blogs"),
  create: (data) => API.post("/blogs", data),
  update: (id, data) => API.put(`/blogs/${id}`, data),
  delete: (id) => API.delete(`/blogs/${id}`),
  
  // Bulk operations
  bulkCreate: (formData) => API.post("/blogs/bulk", formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  bulkDelete: (ids) => API.post("/blogs/bulk-delete", { ids }),
};