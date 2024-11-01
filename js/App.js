const App = () => {
    const [activeTab, setActiveTab] = React.useState('home');

    // Render content based on active tab
    const renderContent = () => {
        switch(activeTab) {
            case 'home': return <window.Home content={window.content} />;
            case 'resume': return <window.Resume content={window.content} />;
            case 'work': return <window.Work content={window.content} />;
            case 'contact': return <window.Contact content={window.content} />;
            default: return <window.Home content={window.content} />;
        }
    };

    return (
        <div className="flex flex-col items-center p-6">
            {/* Header */}
            <header className="w-full max-w-[1200px] flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">
                    Kunal <span className="text-orange-500">Gupta</span>
                </h1>
                
                <nav className="flex space-x-4">
                    {['home', 'resume', 'work', 'contact'].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-4 py-2 rounded-full 
                                relative overflow-hidden
                                transform transition-transform hover:scale-105
                                ${activeTab === tab 
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }
                                before:absolute
                                before:inset-0
                                before:bg-gradient-to-r
                                before:from-orange-500
                                before:to-yellow-500
                                before:opacity-0
                                before:transition-opacity
                                before:duration-300
                                hover:before:opacity-100
                                ${activeTab !== tab ? 'hover:text-white' : ''}
                                `}
                        >
                            <span className="relative z-10">
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </span>
                        </button>
                    ))}
                </nav>
            </header>

            {/* Main Content Area */}
            <div className="flex w-full max-w-[1200px] gap-8">
                <div className="w-[380px] h-[700px]">
                    <div className="bg-white rounded-lg shadow-md p-8 h-full">
                        <window.Sidebar content={window.content} />
                    </div>
                </div>
                
                <main className="flex-1 bg-white p-6 rounded-lg shadow-md h-[700px] overflow-y-auto scrollbar-hide">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

// Render after all components are loaded
window.addEventListener('load', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

window.App = App;