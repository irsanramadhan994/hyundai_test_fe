import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// API Base URL (replace with your API URL)
const API_URL = 'http://192.168.100.12:5000/api'; // Update if using a hosted version

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set JWT token for Authorization header
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User APIs
export const signUp = (email: string, password: string,confirmPassword:string) => {
  return api.post('/auth/register', { email, password ,confirmPassword});
};

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};

// Task APIs
export const createTask = (task: any) => {
  return api.post('/task', task);
};

export const getTasks = () => {
  return api.get('/task');
};

export const getTaskDetails = (id: number) => {
  return api.get(`/task/${id}`);
};

export const updateTask = (id: number, task: any) => {
  return api.put(`/task/${id}`, task);
};

export const deleteTask = (id: number) => {
  return api.delete(`/task/${id}`);
};

export const completeTask = (id: number) => {
  return api.post(`/task/${id}/complete`);
};

export const getTaskHistory = (id: number) => {
  return api.get(`/task/history/${id}`);
};

export const shareTask = (id: number, sharedWith: string[]) => {
  return api.put(`/task/${id}`, { sharedWith });
};