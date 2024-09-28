// src/components/ResumeForm.jsx
import { useState } from 'react';
import { submitResume } from '../api/resumeApi';

const ResumeForm = ({ onSubmit }) => {
  const [resume, setResume] = useState({
      name: '',
      email: '',
      experiences: [],
      educations: [],
      skills: ''
  });

  const handleChange = (e) => {
      setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Call the API to send the resume data to the backend
          const response = await submitResume(resume);
          onSubmit(response);  // Pass the response data to the parent component
      } catch (error) {
          console.error('Error submitting resume:', error);
      }
  };

  return (
      <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
          <input
              name="name"
              value={resume.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 w-full mb-4"
          />
          <input
              name="email"
              value={resume.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 w-full mb-4"
          />
          <textarea
              name="skills"
              value={resume.skills}
              onChange={handleChange}
              placeholder="Skills (comma separated)"
              className="border p-2 w-full mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
              Generate Resume
          </button>
      </form>
  );
};

export default ResumeForm;
