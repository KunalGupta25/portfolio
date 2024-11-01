(function() {
    emailjs.init("tHjVEPa8FdEiKzLyY");
})();

const Contact = ({ content }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;

        const templateParams = {
            from_name: form.from_name.value,
            reply_to: form.reply_to.value,
            subject: form.subject.value,
            message: form.message.value,
            to_name: 'Kunal'
        };

        try {
            button.disabled = true;
            button.innerHTML = 'Sending...';

            // Log attempt
            console.log('Attempting to send email with params:', templateParams);

            const result = await emailjs.send(
                'service_0di6xn7',
                'template_j0g75j8',
                templateParams,
                'tHjVEPa8FdEiKzLyY'
            ).then(
                function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert('Message sent successfully!');
                    form.reset();
                },
                function(error) {
                    console.log("FAILED...", error);
                    alert('Failed to send message: ' + error.text);
                }
            );

        } catch (error) {
            console.error('Detailed error:', error);
            alert(`Failed to send message: ${error.message || 'Unknown error'}`);
        } finally {
            button.disabled = false;
            button.innerHTML = originalText;
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold">CONTACT</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 ml-4 mt-2"></div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Phone */}
                <div className="flex items-center p-4 bg-orange-100 rounded-lg">
                    <div className="bg-orange-500 p-3 rounded-full text-white mr-4">
                        <i className="fas fa-phone"></i>
                    </div>
                    <div>
                        <h4 className="text-sm text-gray-500">Phone</h4>
                        <p className="font-medium">{content.personal.phone}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center p-4 bg-orange-100 rounded-lg">
                    <div className="bg-orange-500 p-3 rounded-full text-white mr-4">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                        <h4 className="text-sm text-gray-500">Email</h4>
                        <p className="font-medium">{content.personal.email}</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white">
                <div className="flex items-center mb-4">
                    <i className="fas fa-paper-plane text-2xl text-orange-500 mr-3"></i>
                    <h3 className="text-xl font-bold">Send Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="reply_to"
                                name="reply_to"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

window.Contact = Contact;