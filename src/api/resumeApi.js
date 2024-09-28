import axios from 'axios';

// Function to submit resume data
export const submitResume = async (resumeData) => {
    try {
        const response = await axios.post('http://localhost:8080/resume', resumeData);  // Backend URL
        return response.data;  // Return the response data
    } catch (error) {
        console.error('Error creating resume:', error);
        throw error;
    }
};
