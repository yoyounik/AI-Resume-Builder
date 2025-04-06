// src/components/ResumeForm.jsx
import React, { useState } from 'react';

const ResumeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        personalInfo: {
            name: '',
            email: '',
            linkedin: '',
            phone: '',
            location: '',
        },
        workExperience: [{
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: '',
        }],
        education: [{
            institution: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
        }],
        certifications: [{
            name: '',
            issuer: '',
            date: '',
        }],
        skills: [],
    });

    const handleInputChange = (section, field, value, index = null) => {
        if (index !== null) {
            setFormData(prev => ({
                ...prev,
                [section]: prev[section].map((item, i) => 
                    i === index ? { ...item, [field]: value } : item
                )
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        }
    };

    const addNewItem = (section) => {
        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], {}]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Resume</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-2 border rounded"
                            value={formData.personalInfo.name}
                            onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border rounded"
                            value={formData.personalInfo.email}
                            onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="LinkedIn URL"
                            className="p-2 border rounded"
                            value={formData.personalInfo.linkedin}
                            onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="p-2 border rounded"
                            value={formData.personalInfo.phone}
                            onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="p-2 border rounded"
                            value={formData.personalInfo.location}
                            onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                        />
                    </div>
                </section>

                {/* Work Experience */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Work Experience</h3>
                        <button
                            type="button"
                            onClick={() => addNewItem('workExperience')}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Add Experience
                        </button>
                    </div>
                    {formData.workExperience.map((exp, index) => (
                        <div key={index} className="border p-4 rounded space-y-4">
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="p-2 border rounded w-full"
                                value={exp.company}
                                onChange={(e) => handleInputChange('workExperience', 'company', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Position"
                                className="p-2 border rounded w-full"
                                value={exp.position}
                                onChange={(e) => handleInputChange('workExperience', 'position', e.target.value, index)}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Start Date"
                                    className="p-2 border rounded"
                                    value={exp.startDate}
                                    onChange={(e) => handleInputChange('workExperience', 'startDate', e.target.value, index)}
                                />
                                <input
                                    type="text"
                                    placeholder="End Date"
                                    className="p-2 border rounded"
                                    value={exp.endDate}
                                    onChange={(e) => handleInputChange('workExperience', 'endDate', e.target.value, index)}
                                />
                            </div>
                            <textarea
                                placeholder="Description"
                                className="p-2 border rounded w-full"
                                value={exp.description}
                                onChange={(e) => handleInputChange('workExperience', 'description', e.target.value, index)}
                            />
                        </div>
                    ))}
                </section>

                {/* Education */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Education</h3>
                        <button
                            type="button"
                            onClick={() => addNewItem('education')}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Add Education
                        </button>
                    </div>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="border p-4 rounded space-y-4">
                            <input
                                type="text"
                                placeholder="Institution"
                                className="p-2 border rounded w-full"
                                value={edu.institution}
                                onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                className="p-2 border rounded w-full"
                                value={edu.degree}
                                onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Field of Study"
                                className="p-2 border rounded w-full"
                                value={edu.field}
                                onChange={(e) => handleInputChange('education', 'field', e.target.value, index)}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Start Date"
                                    className="p-2 border rounded"
                                    value={edu.startDate}
                                    onChange={(e) => handleInputChange('education', 'startDate', e.target.value, index)}
                                />
                                <input
                                    type="text"
                                    placeholder="End Date"
                                    className="p-2 border rounded"
                                    value={edu.endDate}
                                    onChange={(e) => handleInputChange('education', 'endDate', e.target.value, index)}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                {/* Certifications */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Certifications</h3>
                        <button
                            type="button"
                            onClick={() => addNewItem('certifications')}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Add Certification
                        </button>
                    </div>
                    {formData.certifications.map((cert, index) => (
                        <div key={index} className="border p-4 rounded space-y-4">
                            <input
                                type="text"
                                placeholder="Certification Name"
                                className="p-2 border rounded w-full"
                                value={cert.name}
                                onChange={(e) => handleInputChange('certifications', 'name', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Issuing Organization"
                                className="p-2 border rounded w-full"
                                value={cert.issuer}
                                onChange={(e) => handleInputChange('certifications', 'issuer', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Date Obtained"
                                className="p-2 border rounded w-full"
                                value={cert.date}
                                onChange={(e) => handleInputChange('certifications', 'date', e.target.value, index)}
                            />
                        </div>
                    ))}
                </section>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                >
                    Generate Resume
                </button>
            </form>
        </div>
    );
};

export default ResumeForm;
