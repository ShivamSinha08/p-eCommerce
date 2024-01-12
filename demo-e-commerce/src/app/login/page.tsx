"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
    
export default function Login() {
    const router = useRouter();
      const [user, setuser] = React.useState({
          email: "",
          password: "",
          
      })
      const [buttonDisabled, setbuttonDisabled] = React.useState(false);
      const [loading, setloading] = React.useState(false);
          const onLogin =async () => {
              try {
                setloading(true);
                const response = await axios.post("/api/users/login", user);
                console.log("Login success", response.data);
                toast.success("Login Success");
                router.push("/profile")
              } catch (error: any) {
                console.log("Login failed", error.message);
                toast.error(error.message);
  
                
              }finally{
                setloading(false);
              }
          }
  
          useEffect (()=>{
             if(user.email.length>0 && user.password.length>0){
              setbuttonDisabled(false);
             }else{
              setbuttonDisabled(true);
             }
          }, [user])

    return(
        <div className="text-xl justify-center flex flex-col items-center r min-h-screen py-2 ">
            <h1 className="mb-5">Login</h1>
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
          onClick={onLogin}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
          focus:border-gray-600">
            Login

          </button>
          <Link href= "/signup">Visit Signup Page</Link>

        </div>
    )
 }