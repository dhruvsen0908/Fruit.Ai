import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast} from "react-toastify";

export const AdminContacts = () => {
    const [contactData,setContactData] = useState([]);
    const { authorizationToken } = useAuth();
    const getContactsData = async() => {
        try{
            const response = await fetch("https://fruit-ai-2-8y2p.onrender.com/api/admin/contacts",{
                method: "GET",
                headers:{
                    Authorization:authorizationToken
                }
            });
            const data = await response.json()
            console.log("Contact data" , data);
            if(response.ok){
                setContactData(data);
            }
        }catch(error){
            console.log(error);
        }
    } 

    //defining the function
    const deleteContactsById = async(id) => {
        try{
            const response = await fetch(`https://fruit-ai-2-8y2p.onrender.com/api/admin/contacts/delete/${id}`,{
                method: "DELETE",
                headers:{
                    Authorization:authorizationToken
                },
            })
            if(response.ok){
                getContactsData();
                toast.success("deleted successfully");
            }
            else{
                toast.error("Not deleted");
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getContactsData();
    },[]);

    return (
    <>
        <section className="admin-contacts-section">
            <h1>Admin Contact Data</h1>
            <div className="container admin-users">
                {contactData.map((curContactData,index) => {
                    const { username,email,message, _id} = curContactData;

                    return (
                        <div key={index}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <button className="btn" onClick={() => deleteContactsById(_id)}>delete</button>
                        </div>
                    );
                })}
            </div>
        </section>
    </> 
    )
};