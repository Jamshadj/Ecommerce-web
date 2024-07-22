import { jwtDecode } from "jwt-decode";
import axiosInstance from "./axiosInstance";

export const isClient = () => typeof window !== 'undefined';

export const registerUser = async (userData) => {
  try {
    console.log("sw");
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/login', userData);
    console.log(response);
    if (isClient()) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signOut = () => {
  if (isClient()) {
    localStorage.removeItem('token');
    window.location.reload();
  }
};

export const isLoggedIn = () => {
  if (isClient()) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return false;
      }
      return true;
    }
  }
  return false;
};

export const getToken = () => {
  if (isClient()) {
    return localStorage.getItem('token');
  }
  return null;
};
