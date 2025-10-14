import axios from "axios";

// Base API URL from .env
const API_ROOT = import.meta.env.VITE_API_ROOT;

// Axios instance
const api = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------------- Authentication ----------------
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// ---------------- Categories ----------------
export const getCategories = async (page = 1, limit = 5) => {
  const response = await api.get("/category", {
    params: { page, limit },
  });
  return response.data;
};

// ---------------- Products ----------------
export const getProducts = async (page = 1, limit = 10) => {
  const response = await api.get("/products/top", {
    params: { page, limit },
  });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export default api;
