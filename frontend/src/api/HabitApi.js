import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchHabits = async () => {
    try {
        const response = await axios.get(`${API_URL}/habits`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Error fetching habits", error);
        throw error;
    }
};

export const createHabit = async (habitData) => {
    try {
        const response = await axios.post(`${API_URL}/habits`, habitData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Error creating habit", error);
        throw error;
    }
};
