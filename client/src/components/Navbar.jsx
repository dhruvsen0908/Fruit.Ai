import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
    <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <a href="/">DhruvTechnical</a>
                </div>

                <nav>
                    <ul>
                        <l1><NavLink to="/"> Home </NavLink></l1>
                        <l1><NavLink to="/about"> About </NavLink></l1>
                        <l1><NavLink to="/service">Services</NavLink></l1>
                        <l1><NavLink to="/contact"> Contact</NavLink></l1>

                        { isLoggedIn ? ( 
                            <l1><NavLink to="/logout"> Logout</NavLink></l1> ): (
                        <>
                        <l1><NavLink to="/register">Register</NavLink></l1>
                        <l1><NavLink to="/login">Login</NavLink></l1>
                        </>
                        )}
                        
                    </ul>
                </nav>
            </div>
        </header>
    </>
    );
};