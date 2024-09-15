
export const Contact = () => {
    return (
        <>
            <section className="section-chatbot">
                <div className="chatbot-container" style={{ position: 'relative', height: '100vh' }}>
                <h1 className="main-heading">Chat.</h1>
                    
                    {/* Chatbot Integration */}
                    <script src="https://bot.orimon.ai/deploy/index.js"></script>
                    <iframe
                        src="https://bot.orimon.ai/?tenantId=3b0fac9f-dfc2-4318-a863-98a59965f287&fullScreenBot=true"
                        style={{
                            height: '85vh', // Adjust height as needed
                            width: '1500px', // Adjust width as needed
                            border: 'none',
                            borderRadius: '15px', // Rounded corners
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
                            position: 'fixed',
                            bottom: '10px',
                            right: '10px',
                            zIndex: 9999, // Ensure it is on top
                        }}
                        title="Chatbot"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

