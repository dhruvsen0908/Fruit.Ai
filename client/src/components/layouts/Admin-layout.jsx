import { NavLink , Outlet} from "react-router-dom";
import {FaUser,FaRegListAlt,FaHome} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";
import { useAuth } from "../../store/auth";

// admin navbar and the outlet
export const AdminLayout = () => {
    const { user,isLoading } = useAuth();
    console.log("admin layout",user);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!user.isAdmin){
        return <NavLink to="/" />;
    }
    return (
    <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUser />users</NavLink> </li>
                        <li><NavLink to="/admin/contacts"><FaMessage />contacts</NavLink></li>
                        <li><NavLink to="/service"><FaRegListAlt />Services</NavLink></li>
                        <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
    );
};