import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Update to your Spring Boot server URL

export const getAIResponse = async (prompt) => {
    try {
        const response = await axios.get(`${BASE_URL}/ai/prompt?prompt=${encodeURIComponent(prompt)}`);
        return response.data; // Ensure you're returning the data correctly
    } catch (error) {
        console.error('Error fetching AI response:', error);
        throw error;
    }
};