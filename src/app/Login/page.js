"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle,Check } from "lucide-react";

export default function Login() {
    const [auth,setAuth]=useState({username:"",password:""})
    const [stator,setStator]=useState("")
    const [loading,setLoading]=useState(false)
    const router=useRouter()

   function handleauth() {
    axios.post(" https://threedfoundation-backend.onrender.com/login", {
        username: auth.username,
        password: auth.password
    })
    .then((response) => {
        setLoading(true)
        setStator("you are logged in successfully")
        setAuth({ username: "", password: "" });
        // router.push("/Admin");
         setTimeout(()=>{
            router.push("/Admin");
      },2000)
    })
    .catch((error) => {
        console.log("error", error.message);
         setStator(error.response.data.message)
      setAuth({username:"",password:""})
      console.log("error",error.message)
    }).finally(()=>{
      setTimeout(()=>{
        setLoading(false)
        setStator("")
      },2000)
    })
}
    
  return (
    <div onKeyDown={(e) => {
        if (e.key === "Enter") {
            handleauth();
        }
    }} className="flex  flex-col flex-1 text-black gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          {/* <Overheadbar/> */}
          
          {/* main */}
           
                 
            <div className="border-1 border-gray-700 flex flex-col gap-5 p-3 items-center justify-center relative rounded-lg w-[30vw] min-h-[400px] shadow-md shadow-gray-700">
                <img src="/images2.jpeg" className="absolute w-20 left-5 top-5 rounded-lg"/>
                <p className="text-3xl text-[#06896B] font-semibold mt-30">Admin login</p>
                <p>3DWebSoft foundation dashboard</p>
                <div className="flex flex-col gap-2 items-start w-full p-3">
                    <p className="text-lg">Username</p>
                    <input value={auth.username} onChange={(e)=>setAuth({...auth,username:e.target.value})} type="text" className="border-1 border-black p-2 rounded-lg w-[25vw]" placeholder="enter your username" required/>
                </div>
                <div className="flex flex-col gap-2 items-start w-full p-3">
                    <p className="text-lg">Password</p>
                    <input value={auth.password} onChange={(e)=>setAuth({...auth,password:e.target.value})} className="border-1 border-black p-2 rounded-lg w-[25vw]" type="password" placeholder="enter your password" required/>
                    {(loading===true || loading===false) && <p className="text-green-700 font-bold">{stator}</p>}
                </div>
                <button onKeyDown={(e) => {
        if (e.key === "Enter") {
            handleauth();
        }
    }} onClick={handleauth} className="w-fit p-2 text-white rounded-lg hover:scale-110 cursor-pointer font-bold bg-[#06896b]">Log In</button>
            
</div>
{/* footer */}
{/* <Footer/>           */}
    </div>
  );
}
