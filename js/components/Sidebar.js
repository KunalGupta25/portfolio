const Sidebar = ({ content }) => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <img 
                src={content.personal.image || "https://placehold.co/150x150"} 
                alt="Profile"
                className="w-[150px] h-[150px] rounded-full mb-4"
            />

            {/* Name and Role */}
            <h2 className="text-2xl font-bold mb-1">{content.personal.name}</h2>
            <p className="text-gray-600 mb-6">{content.personal.role}</p>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
                <a href={content.personal.social.facebook} className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:text-orange-500">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href={content.personal.social.linkedin} className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:text-orange-500">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={content.personal.social.github} className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:text-orange-500">
                    <i className="fab fa-github"></i>
                </a>
                <a href={content.personal.social.instagram} className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:text-orange-500">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

            {/* Contact Info Box */}
            <div className="w-full bg-gray-100 rounded-lg p-6 space-y-6">
                {/* Phone */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-1">
                        <i className="fas fa-mobile-alt text-orange-500"></i>
                        <span className="text-gray-600">Phone</span>
                    </div>
                    <span className="text-gray-800">{content.personal.phone}</span>
                </div>

                {/* Email */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-1">
                        <i className="fas fa-envelope text-orange-500"></i>
                        <span className="text-gray-600">Email</span>
                    </div>
                    <span className="text-gray-800">{content.personal.email}</span>
                </div>

                {/* Location */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-1">
                        <i className="fas fa-map-marker-alt text-orange-500"></i>
                        <span className="text-gray-600">Location</span>
                    </div>
                    <span className="text-gray-800">{content.personal.location}</span>
                </div>

                {/* Download Resume Button */}
                <a 
                    href={content.personal.cv}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4"
                >
                    <i className="fas fa-download"></i>
                    Download Resume
                </a>
            </div>
        </div>
    );
};

window.Sidebar = Sidebar;