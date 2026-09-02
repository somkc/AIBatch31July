
function login(username,password){


    if(username==""){
        throw new Error("Username cannot be empty")
    }
     if(password==""){
        throw new Error("Password cannot be empty")
    }
    if(username!="user1" || password!="1234"){
        throw new Error("Invalid username or password")
    }
    
    return "Login Successfull";
}

let res= login("dfsdfs","");