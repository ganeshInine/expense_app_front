const CreateUserService=(createUser)=>{
    fetch("http://localhost:3001/user/createUser", {
        method: "POST",
        headers: {
        "Content-Type": "application/json", // Fixed the content-type
        },
        body: JSON.stringify(createUser), // Send the user object directly
    })
    .then(response=>response.json())
        .then(console.log)
        .catch(err=>{
            console.log(err)
    })
}
const GetUserSevice=async(id)=>{
    try {
        const response = await fetch(`http://localhost:3001/user/getUser/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;  // Return the user data to the calling function
      } catch (err) {
        console.log('Error fetching user:', err);
        return null;  // Return null in case of an error
      } 
}
const UpdateUserService=(updatedUser,id)=>{
    fetch(`http://localhost:3001/user/updatedUser/${id}`,{
        method:'PUT',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(updatedUser),
    })
    .then(response=>response.json())
    .then(console.log).catch((err)=>{
        console.log(err);
    })
}
const UserList=()=>{
    console.log("Create User Service Get Called")
}

export  {CreateUserService,GetUserSevice,UpdateUserService,UserList}