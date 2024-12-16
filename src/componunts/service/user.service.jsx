const CreateUserService=(createUser)=>{
    fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(console.log)
    .catch(err=>{
        console.log(err)
    })
}
const GetUser=()=>{
    console.log("Create User Service Get Called")
}
const UpdateUser=()=>{
    console.log("Create User Service Get Called")
}
const UserList=()=>{
    console.log("Create User Service Get Called")
}

export  {CreateUserService,GetUser,UpdateUser,UserList}