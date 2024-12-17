import { useEffect, useState } from "react";
import { GetUserSevice,UpdateUserService } from "../service/user.service";
const UpdateUser =()=>{
    const[user,setUser]=useState({
        name:'',
        email:'',
        phone:''
    });

    useEffect(()=>{
        GetUser(1)
    },[]);
    const GetUser= async(id)=>{
        try {
         
        const user = await GetUserSevice(id);
        
        if (user) {
            setUser({
              name: user.name,
              email: user.email,
              phone: user.phone
            });
          } else {
            console.log("User data is undefined.");
          }   
        } catch (error) {
            console.log(error)
        }
    }
    const setValue=(e)=>{
        const{name,value} =e.target;
        setUser((prevUser)=>({
            ...prevUser,
            [name]:value
        }))
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        UpdateUserService(user,1);
    }
    return(
        <form onSubmit={onFormSubmit}>
            <lable>Name</lable>
            <input type="text" name="name" value={user.name} onChange={setValue} />
            <lable>Name</lable>
            <input type="email" name="email" value={user.email} onChange={setValue} />
            <lable>Name</lable>
            <input type="phone" name="phone" value={user.phone} onChange={setValue} />
            <input type="submit" value="submit"/>     
        </form>
    )
}
export default UpdateUser;