import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUsersAndHabits = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin/users/habits`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching users and habits", error);
    throw error;
  }
};
