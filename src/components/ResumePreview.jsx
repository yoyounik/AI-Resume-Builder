// src/components/ResumePreview.jsx
const ResumePreview = ({ resume }) => {
    return (
        <div className="p-4 border rounded max-w-lg mx-auto mt-4">
            <h2 className="text-xl font-bold">{resume.name}</h2>
            <p>Email: {resume.email}</p>
            <h3 className="font-semibold mt-4">Skills</h3>
            <p>{resume.skills}</p>

            {/* Render other fields like experiences and educations */}
            {resume.experiences && resume.experiences.length > 0 && (
                <div>
                    <h3 className="font-semibold mt-4">Experiences</h3>
                    {resume.experiences.map((experience, index) => (
                        <div key={index}>
                            <p>{experience.jobTitle} at {experience.company}</p>
                            <p>{experience.startDate} - {experience.endDate}</p>
                        </div>
                    ))}
                </div>
            )}

            {resume.educations && resume.educations.length > 0 && (
                <div>
                    <h3 className="font-semibold mt-4">Education</h3>
                    {resume.educations.map((education, index) => (
                        <div key={index}>
                            <p>{education.degree} from {education.institution}</p>
                            <p>{education.startDate} - {education.endDate}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResumePreview;
