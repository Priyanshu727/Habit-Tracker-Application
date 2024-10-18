import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = 'http://localhost:8080/api';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Login error", error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Registration error", error);
        throw error;
    }
};
