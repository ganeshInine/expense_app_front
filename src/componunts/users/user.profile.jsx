import { useEffect, useState } from "react";
import { GetUserSevice } from "../service/user.service";
const UserProfile=()=>{
    const [user,setUser]=useState({
        name:'',
        email:'',
        phone:''
    });

    useEffect(()=>{
        getUser(1)
    },[]);

    const getUser = async(id)=>{
        try {
            const user = await GetUserSevice(id);
            
            if(user){
                setUser({
                    name:user.name,
                    email:user.email,
                    phone:user.phone
                })
            }
        } catch (error) {
            console.log(error);
        }
        
        console.log(user);
    }

    return(
        <h1>Welcome...!{user.name}</h1>
    )
}

export default UserProfile;