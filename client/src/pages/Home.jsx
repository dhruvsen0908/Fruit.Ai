// import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">  
                        <div className="hero-content">  
               
                            <h1>Welcome to Fruit.Ai</h1>
                            <p>
                            Whether you are looking to discover new fruits, understand their nutritional values, or find the perfect 
                            fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations
                             tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
                            </p>
                            <div className="btn-group">  
                                <a href="/contact">
                                    <button className="btn">Chat.</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">FAQs</button>
                                </a>
                            </div>
                        </div>
                        {/* hero image  */}
                        <div className="hero-image"> 
                            <img src="/images/homepic.jpg" alt="coding together" width="500" height="500" />
                        </div>
                    </div>
                </section>
            </main>

        <section className="section-hero">
                <div className="container gird grid-two-cols">

                    {/* hero images */}
                    <div className="hero-image">  
                            <img src="/images/picturehome.jpg" alt="fruits" width="500" height="500" />
                    </div>
                    
                    <div className="hero-content">  
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                        Fruits play a crucial role in maintaining a healthy and balanced diet. They are rich sources of essential vitamins,
                         minerals, and antioxidants that support overall well-being. Regular consumption of fruits can boost the immune system, 
                         improve digestion, and reduce the risk of chronic diseases like heart disease, stroke, and certain cancers. 
                        </p>
                        <div className="btn btn-group">  
                            <a href="/google">
                                <button className="btn">Google Translate</button>
                            </a>
                            <a href="/about">
                                <button className="btn secondary-btn">ABOUT</button>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}