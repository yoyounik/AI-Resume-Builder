// src/App.jsx
import { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import AIComponent from './components/AIComponent';

function App() {
    const [resumeData, setResumeData] = useState(null); // Store resume data here after form submission

    

    // This function will be passed to the form component to update the resume data state
    const handleResumeSubmit = (data) => {
        setResumeData(data);  // Set the resume data that comes from the form
    };


    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">AI Resume Builder</h1>
                    <p className="text-gray-600 mt-2">Create your professional resume with AI assistance</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <ResumeForm onSubmit={handleResumeSubmit} />
                        <AIComponent />
                    </div>
                    <div>
                        {resumeData && <ResumePreview resume={resumeData} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
