"use client"

import Link from "next/link";
import { useRouter } from "next/router"
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function Signup(){
const router = useRouter;
const [user, setuser] = React.useState({
    email: "",
    password: "",
    username: "",
})

const [buttonDisabled, setbuttonDisabled] = React.useState(false);
const [loading, setloading] = React.useState(false);
const onSignup = async ()=>{
    try {
        
    } catch (error:any) {
        console.log("Sign up failed", error.message);
        toast.error(error.message);
    }
}


useEffect (()=>{
    if(user.email.length > 0 && user.password.length> 0 && user.username.length> 0){
      setbuttonDisabled(false);
    }else{
      setbuttonDisabled(true);
    }
  },[user]);

    return(
        <div className= "text-xl justify-center flex flex-col items-center r min-h-screen py-2 ">
            <h1 className="mb-4">SignUp</h1>
            <hr/>
            <label htmlFor="username">username</label>
           <input
           className="p-2 border border-gray-300 rounded-lg 
           mb-4 focus:outline-none focus:border-gray-600 text-black"
           id = "username"
           type = "text"
           value = {user.username}
           onChange={(e) => setuser({...user, username:e.target.value})}

           placeholder="username"
           />
             <label htmlFor="email">email</label>
           <input
           className="p-2 border border-gray-300 rounded-lg 
           mb-4 focus:outline-none focus:border-gray-600 text-black"
           id = "email"
           type = "text"
           value = {user.email}
           onChange={(e) => setuser({...user, email:e.target.value})}

           placeholder="email"
           />
             <label htmlFor="password">password</label>
           <input
           className="p-2 border border-gray-300 rounded-lg 
           mb-4 focus:outline-none focus:border-gray-600 text-black"
           id = "password"
           type = "password"
           value = {user.password}
           onChange={(e) => setuser({...user, password:e.target.value})}

           placeholder="password"
          />

<button
          onClick={onSignup}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
          focus:border-gray-600">
            {buttonDisabled ? "Signup" : "Signup"}

          </button>
          <Link href= "/login">Visit Login Page</Link>
        </div>
    )
}