const Resume = ({ content }) => {
    // Define the skills arrays
    const workSkills = [
        'JavaScript', 'React', 'Java',
        'Python', 'C', 'C++', 'HTML', 'CSS',
        'SQL', 'Git', 'Docker', 'UI/UX Desiging', 'Figma'
    ];

    const softSkills = [
        'Communication', 'Teamwork',
        'Problem Solving', 'Time Management',
        'Adaptability', 'Leadership', 'Creativity',
        'Critical Thinking', 'Work Ethic'
    ];

    // Education data
    const education = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            school: "Parul University",
            period: "2023-2027(ongoing)"
        },
        {
            degree: "Higher Secondary School",
            school: "Delhi Public School, Pali",
            period: "2021-2023"
        }
    ];

    // Experience data
    const experience = [
        // {
        //     title: "FullStack Developer",
        //     company: "Google",
        //     period: "2021 - Present"
        // },
        // {
        //     title: "Frontend Developer",
        //     company: "Microsoft",
        //     period: "2019 - 2021"
        // },
        // {
        //     title: "Backend Developer",
        //     company: "Amazon",
        //     period: "2017 - 2019"
        // },
        // {
        //     title: "Intern",
        //     company: "IBM",
        //     period: "2015 - 2017"
        // }
    ];

    return (
        <div className="overflow-y-auto scrollbar-hide">
            {/* Education Section */}
            <div className="mb-8">
                <div className="flex items-center mb-6">
                    <i className="fas fa-graduation-cap text-2xl text-orange-500 mr-3"></i>
                    <h2 className="text-2xl font-bold">EDUCATION</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {education.map((edu, index) => (
                        <div key={index} className="p-4 rounded-lg bg-orange-100">
                            <h4 className="text-lg font-bold">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.school}</p>
                            <p className="text-sm text-gray-500">{edu.period}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            {/* <div className="mb-8">
                <div className="flex items-center mb-6">
                    <i className="fas fa-briefcase text-2xl text-orange-500 mr-3"></i>
                    <h2 className="text-2xl font-bold">EXPERIENCE</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {experience.map((job, index) => (
                        <div key={index} className="p-4 rounded-lg bg-orange-100">
                            <h4 className="text-lg font-bold">{job.title}</h4>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="text-sm text-gray-500">{job.period}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Skills Section */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Work Skills */}
                <div>
                    <div className="flex items-center mb-4">
                        <i className="fas fa-code text-2xl text-orange-500 mr-3"></i>
                        <h3 className="text-xl font-bold">Work Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {workSkills.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <div className="flex items-center mb-4">
                        <i className="fas fa-users text-2xl text-orange-500 mr-3"></i>
                        <h3 className="text-xl font-bold">Soft Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {softSkills.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

window.Resume = Resume;