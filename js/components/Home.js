const Home = ({ content }) => {
    return (
        <div>
            {/* About Me Header */}
            <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold">ABOUT ME</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 ml-4 mt-2"></div>
            </div>

            {/* Introduction */}
            <div className="text-gray-700 mb-8">
                <p className="mb-4">
                    Hello there! I'm a passionate B.Tech CSE student at Parul University, currently navigating my way through the exciting world of technology in my second year. I specialize in web and app design, wielding tools like Figma and Creative Suite to bring ideas to life through intuitive interfaces.
                </p>
                <p>
                    As a budding web developer, I'm constantly expanding my skills in front-end and back-end technologies. What excites me most is the creative process of turning concepts into reality. Currently, I'm venturing into game development, adding another dimension to my technical repertoire. I believe in continuous learning and am always eager to explore new technologies and challenges.
                </p>
            </div>

            {/* What I do! Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold">What I do!</h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UI/UX Design */}
                <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-paint-brush text-2xl text-orange-500 mr-3"></i>
                        <h3 className="text-xl font-bold">UI/UX Design</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Creating intuitive and visually appealing user interfaces with focus on user experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Figma', 'Adobe XD', 'Canva', 'Prototyping', 'CreatieAI'].map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Frontend Development */}
                <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-code text-2xl text-orange-500 mr-3"></i>
                        <h3 className="text-xl font-bold">Frontend Development</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Creating responsive and interactive web applications with modern frameworks and libraries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'JavaScript', 'HTML/CSS', 'Tailwind'].map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-tools text-2xl text-orange-500 mr-3"></i>
                        <h3 className="text-xl font-bold">Tools & Technologies</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Utilizing modern development tools and practices for efficient workflow.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Git', 'Docker', 'AWS', 'Linux'].map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Game Development */}
                <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-gamepad text-2xl text-orange-500 mr-3"></i>
                        <h3 className="text-xl font-bold">Game Development</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Creating engaging and interactive gaming experiences using modern game engines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Unreal Engine', 'C++'].map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export to window object for browser usage
window.Home = Home;