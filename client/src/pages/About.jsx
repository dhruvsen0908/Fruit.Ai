import { NavLink } from "react-router-dom";
// import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";
 
export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>Welcome,
                {user ?  ` ${user.username} to our website` : ` to our website`}</p>
              <h1>Fruit.Ai - Be Healthy</h1>
              <p>
              Whether you are looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
              </p>
              <p>
              Fruits are natures nutrient-rich offerings, packed with vitamins, minerals, and antioxidants that benefit the body in numerous ways. They come in a wide variety of flavors, colors, and textures, offering a diverse range of health benefits. From sweet and juicy options like apples and berries to tropical choices like mangoes and pineapples, fruits are not only delicious but also essential for a balanced diet. Their high water content helps keep the body hydrated, while their fiber promotes good digestion. Whether eaten fresh, dried, or juiced, fruits are a vital part of a healthy lifestyle, supporting immune function and overall well-being.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Chat.</button>
                </NavLink>
                <button className="btn secondary-btn">ABOUT</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/homepic2.jpg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};