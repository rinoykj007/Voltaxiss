import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    company?: string;
  }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
  updateProfile: async (data: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
  }) => {
    const response = await api.put('/auth/updateprofile', data);
    return response.data;
  },
  updatePassword: async (currentPassword: string, newPassword: string) => {
    const response = await api.put('/auth/updatepassword', {
      currentPassword,
      newPassword,
    });
    return response.data;
  },
};

// Product APIs
export const productAPI = {
  getAll: async (params?: {
    category?: string;
    search?: string;
    featured?: boolean;
    page?: number;
    limit?: number;
  }) => {
    const response = await api.get('/products', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post('/products', data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/products/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
};

// Contact APIs
export const contactAPI = {
  submit: async (data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
  }) => {
    const response = await api.post('/contact', data);
    return response.data;
  },
  getAll: async (params?: { status?: string; page?: number; limit?: number }) => {
    const response = await api.get('/contact/messages', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/contact/messages/${id}`);
    return response.data;
  },
  update: async (id: string, data: { status?: string; responseMessage?: string }) => {
    const response = await api.put(`/contact/messages/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/contact/messages/${id}`);
    return response.data;
  },
};

export default api;
