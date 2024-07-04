import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username:"",
    email:"",
    message:"",
};

export const Contact = () => {
    const [contact,setContact] = useState(defaultContactFormData);

    const [userData , setUserData] = useState(true);

    const { user }= useAuth();

    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message:"",
        });

        setUserData(false);
    }
// lets handle our handleInput
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]:value,
        });
    }


    // handle form getFormSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact),
            });
            if(response.ok){
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("message send successfully");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                <h1 className="main-heading">contact us</h1>


                    <div>
                        {/* contact page main  */}
            
                        <div className="container grid grid-two-cols">
                            <div className="contact-img">
                                <img src="/images/support.png" alt="we are always ready to help" />
                            </div>

                            {/* contact form content actual */}
                            <section className="section-form">
                                <form action="" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input type="text" name="username" id="username" autoComplete="off" 
                                        value={contact.username} onChange={handleInput}
                                        required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name="email" id="email" autoComplete="off" required
                                        value={contact.email} onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message">message</label>
                                        <textarea name="message" id="message" cols="30" rows="6" required
                                        value={contact.message} onChange={handleInput}
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button type="submit">submit</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

                <section className="mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1756829.5422956818!2d75.21053012521615!3d30.681617565423597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39053f1a51700069%3A0xbe222b5bf8de0cfb!2sPhoenix%20Glam%20Stop!5e0!3m2!1sen!2sin!4v1719540255352!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
                </section>
            </section>
        </>
    );
};