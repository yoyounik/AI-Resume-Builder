import React, { useState } from 'react';
import { getAIResponse } from '../api/aiApi'; // Adjust the import path if necessary

const AIComponent = () => {
    const [aiResponse, setAIResponse] = useState('');
    const [prompt, setPrompt] = useState(''); // To hold the prompt input

    const handleGenerateResponse = async () => {
        try {
            const response = await getAIResponse(prompt);
            setAIResponse(response); // Set the AI response to state
        } catch (error) {
            console.error('Error generating AI response:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Enter your prompt here" 
            />
            <button className="bg-blue-500  text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300" onClick={handleGenerateResponse}>Generate AI Response</button>
            <p className="mt-4 text-gray-800">AI Response: {aiResponse}</p>
        </div>
    );
};

export default AIComponent;