import React, { useState } from 'react';

const AIComponent = () => {
    const [aiResponse, setAIResponse] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const mockAIResponses = {
        'no experience': `For a resume with no work experience, focus on:
1. Education: Highlight your academic achievements and relevant coursework
2. Projects: Include personal or academic projects that demonstrate your skills
3. Skills: List relevant technical and soft skills
4. Volunteer Work: Include any volunteer experience
5. Certifications: Add any relevant certifications or online courses
6. Extracurricular Activities: Show leadership and teamwork skills`,
        
        'skills': `Essential skills to include in your resume:
1. Technical Skills: Programming languages, tools, software
2. Soft Skills: Communication, teamwork, problem-solving
3. Industry-specific Skills: Relevant to your target job
4. Language Skills: If multilingual
5. Certifications: Professional certifications
6. Tools & Technologies: Software and platforms you're proficient in`,
        
        'format': `Best practices for formatting your resume:
1. Use a clean, professional layout
2. Keep it to 1-2 pages maximum
3. Use bullet points for achievements
4. Start with most recent experience
5. Use action verbs (e.g., "Developed", "Managed", "Led")
6. Quantify achievements where possible
7. Use consistent formatting throughout`,
        
        'default': `Here are some tips for your resume:
1. Tailor your resume for each job application
2. Use keywords from the job description
3. Focus on achievements, not just responsibilities
4. Keep it concise and relevant
5. Proofread for errors
6. Use a professional email address
7. Include relevant links (LinkedIn, portfolio)`
    };

    const handleGenerateResponse = async () => {
        setIsLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Find the most relevant response based on keywords
            const lowerPrompt = prompt.toLowerCase();
            let response = mockAIResponses.default;
            
            if (lowerPrompt.includes('no experience') || lowerPrompt.includes('first resume')) {
                response = mockAIResponses['no experience'];
            } else if (lowerPrompt.includes('skill') || lowerPrompt.includes('what to include')) {
                response = mockAIResponses.skills;
            } else if (lowerPrompt.includes('format') || lowerPrompt.includes('layout')) {
                response = mockAIResponses.format;
            }
            
            setAIResponse(response);
        } catch (error) {
            console.error('Error generating response:', error);
            setAIResponse('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">AI Resume Assistant</h2>
            <p className="text-gray-600 mb-4">
                Ask me anything about resumes, such as:
                <ul className="list-disc pl-6 mt-2">
                    <li>How to write a resume with no experience?</li>
                    <li>What skills should I include?</li>
                    <li>How to format my work experience?</li>
                </ul>
            </p>
            
            <div className="space-y-4">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask your question about resumes..."
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                />
                
                <button
                    onClick={handleGenerateResponse}
                    disabled={isLoading || !prompt.trim()}
                    className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
                        isLoading || !prompt.trim()
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 transition duration-300'
                    }`}
                >
                    {isLoading ? 'Generating...' : 'Get AI Advice'}
                </button>
                
                {aiResponse && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">AI Response:</h3>
                        <p className="text-gray-700 whitespace-pre-line">{aiResponse}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AIComponent;