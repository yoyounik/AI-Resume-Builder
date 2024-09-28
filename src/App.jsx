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
        <div className="App">
            {/* Render the Resume Form */}
            <ResumeForm onSubmit={handleResumeSubmit} />
            
            {/* Conditionally render the Resume Preview if resume data is available */}
            {resumeData && <ResumePreview resume={resumeData} />}

            <AIComponent />
        </div>
    );
}

export default App;
