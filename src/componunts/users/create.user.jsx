import React, { use, useState } from "react";
import {CreateUserService} from "../service/user.service";
const CreateUser =()=>{
    const[user,setUser]=useState({
        name:'',
        email:'',
        phone:''
    });
    const setValues=(e)=>{
        const{name,value}=e.target;
        
        setUser((prevUser)=>({
            ...prevUser,
            [name]:value
        })
        )
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        const updatedUser ={
            ...user,
            phone:parseInt(user.phone,10)
        }
        CreateUserService(updatedUser)
        console.log("Submit Button...",{user})

    }
    return(
        <>
        <form  onSubmit={onSubmit}>
            <h3>Create User ...</h3>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={setValues} placeholder="Enter name"/>
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={(e)=>setValues(e)}  placeholder="Enter name"/>
            <label>Phone</label>
            <input type="phone" name="phone" value={user.phone} onChange={(e)=>setValues(e)} placeholder="Enter name"/>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}

export default CreateUser;