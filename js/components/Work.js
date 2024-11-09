const Work = ({ content }) => {
    const [expandedProjects, setExpandedProjects] = React.useState([]);

    const toggleProject = (index) => {
        if (expandedProjects.includes(index)) {
            setExpandedProjects(expandedProjects.filter(i => i !== index));
        } else {
            setExpandedProjects([...expandedProjects, index]);
        }
    };

    // Sample projects data - you can modify this
    const projects = [
        {
            title: "HistoricVeda (Frontend)",
            description: "The frontend for a platform that allows users to search and view historical data about places. It was my hackathon project and it is responsive",
            image: ".js\components\images\projects\historicveda-preview.png",
            tags: ["HTML", "CSS", "JavaScript"],
            liveLink: "https://kunalgupta25.github.io/HistoricVeda/",
            githubLink: "https://github.com/KunalGupta25/HistoricVeda"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website built with React and TailwindCSS My first fully ready project",
            image: ".js\components\images\projects\portfolio-preview.png",
            tags: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
            liveLink: "https://personal-portfolio-azure-three.vercel.app/",
            githubLink: "https://github.com/KunalGupta25/portfolio"
        },
        // {
        //     title: "Task Management App",
        //     description: "A task management application with real-time updates",
        //     image: "https://placehold.co/300x200",
        //     tags: ["React", "Firebase", "Material-UI"],
        //     liveLink: "#",
        //     githubLink: "#"
        // },
        // {
        //     title: "Weather Dashboard",
        //     description: "Real-time weather dashboard using OpenWeather API",
        //     image: "https://placehold.co/300x200",
        //     tags: ["JavaScript", "API", "Bootstrap"],
        //     liveLink: "#",
        //     githubLink: "#"
        // }
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold">MY WORK</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 ml-4 mt-2"></div>
            </div>

            {/* Projects Grid - Adjust columns for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"
                        />
                        
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">
                                {expandedProjects.includes(index) 
                                    ? project.description
                                    : project.description.slice(0, 100) + '...'}
                                {project.description.length > 100 && (
                                    <button 
                                        onClick={() => toggleProject(index)}
                                        className="text-orange-500 hover:text-orange-600 ml-2"
                                    >
                                        {expandedProjects.includes(index) ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex}
                                        className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a 
                                    href={project.liveLink}
                                    className="flex items-center text-orange-500 hover:text-orange-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    Live Demo
                                </a>
                                <a 
                                    href={project.githubLink}
                                    className="flex items-center text-gray-700 hover:text-gray-900"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github mr-2"></i>
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export to window object for browser usage
window.Work = Work;
