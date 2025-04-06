// src/components/ResumePreview.jsx
import React from 'react';

const ResumePreview = ({ resume }) => {
    if (!resume) return null;

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">{resume.personalInfo.name}</h1>
                    <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                        <p>{resume.personalInfo.email}</p>
                        <p>•</p>
                        <p>{resume.personalInfo.phone}</p>
                        <p>•</p>
                        <p>{resume.personalInfo.location}</p>
                    </div>
                    {resume.personalInfo.linkedin && (
                        <a 
                            href={resume.personalInfo.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            LinkedIn Profile
                        </a>
                    )}
                </div>

                {/* Work Experience */}
                <section>
                    <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2">Work Experience</h2>
                    {resume.workExperience.map((exp, index) => (
                        <div key={index} className="mt-4">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                <p className="text-gray-600">
                                    {exp.startDate} - {exp.endDate}
                                </p>
                            </div>
                            <p className="text-gray-700 font-medium">{exp.company}</p>
                            <p className="mt-2 text-gray-600">{exp.description}</p>
                        </div>
                    ))}
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2">Education</h2>
                    {resume.education.map((edu, index) => (
                        <div key={index} className="mt-4">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                <p className="text-gray-600">
                                    {edu.startDate} - {edu.endDate}
                                </p>
                            </div>
                            <p className="text-gray-700 font-medium">{edu.institution}</p>
                            <p className="text-gray-600">{edu.field}</p>
                        </div>
                    ))}
                </section>

                {/* Certifications */}
                {resume.certifications.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2">Certifications</h2>
                        {resume.certifications.map((cert, index) => (
                            <div key={index} className="mt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                                    <p className="text-gray-600">{cert.date}</p>
                                </div>
                                <p className="text-gray-700">{cert.issuer}</p>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
};

export default ResumePreview;
