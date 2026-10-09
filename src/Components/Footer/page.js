"use client"

import {
  
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  
  
} from "react-icons/fa";
import axios from "axios";
import { MapPin,PhoneCallIcon,MessageSquare } from 'lucide-react';
import { useState,useEffect } from "react";

import Link from "next/link";





export default function Footer(){
  const [news,setNews]=useState({email:""})
  const [loading,setloading]=useState(false)
  const [stator,setStator]=useState("")
  const [texter,setTexter]=useState("Subscribe")

  function newsupdate(e){
    e.preventDefault()

    if(!news.email.trim()){
      return
    }
    setloading(true)

    axios.post(" https://threedfoundation-backend.onrender.com/newsletter",{
      email:news.email
    }).then(response=>{
      setNews({email:""})
      setStator("You are subscribed successfully")
    }).catch(error=>{
      setStator(error.response.data.message)
      setNews({email:""})
      console.log("error",error.message)
    }).finally(()=>{
      setloading(false)
      setTimeout(()=>setStator(""),3000)
    })

      
    }
  
  return (
    <div className="w-full flex  text-white tracking-widest break-words mt-auto max-[900px]:flex-col max-[900px]:gap-20  justify-center  items-start  p-10 max-[900px]:p-5  min-h-[400px] mt-20 bg-blue-950">
          <div className="flex w-[25vw] max-[900px]:mt-10 max-[900px]:order-1 h-auto flex-col gap-6">
            <div className="flex gap-5  items-center">
              <img src="/images2.jpeg" className="rounded-tr-4xl w-[70px] max-[900px]:w-[80px]"/>
              <p className="text-2xl font-bold max-[900px]:w-[90vw]">3DWEBSOFT Foundation</p>
            </div>
            <p className="w-[30vw] max-[900px]:w-[90vw]">Empowering communities across India through education, skill development, women empowerment, and community initiatives.</p>
            <p className="w-[30vw] max-[900px]:w-[90vw]">CNI REG NO: U85499TS2026NPL220500</p>
              <p className="w-[30vw] max-[900px]:w-[90vw]">DARPAN ID: TS/2026/1176375</p>
             <div className="flex gap-3">
                           <Link className="hover:-translate-y-3 transform:transition duration-300 cursor-pointer" href="https://www.facebook.com/share/17i8pDvytw/"><p className="bg-blue-600 p-3 rounded-lg"><FaFacebookF/></p></Link>
                  <Link className="hover:-translate-y-3 transform:transition duration-300 cursor-pointer" href="https://www.instagram.com/3dwebsoft_foundation"><p className="bg-blue-600 p-3 rounded-lg bg-pink-300"><FaInstagram/></p></Link>
                  <p className="bg-blue-600 cursor-pointer hover:-translate-y-3 transform:transition duration-300 p-3 rounded-lg"><FaTwitter/></p>
                  <p className="bg-red-600 cursor-pointer hover:-translate-y-3 transform:transition duration-300 p-3 rounded-lg"><FaYoutube/></p>
                  <p className="bg-blue-600 cursor-pointer hover:-translate-y-3 transform:transition duration-300 p-3 rounded-lg"><FaLinkedinIn/></p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <p className="font-semibold max-[900px]:w-[90vw]">Subscribe to our newsletter</p>
                        
                        <form onSubmit={newsupdate} className="flex gap-5">
                          <input type="text" value={news.email} onChange={(e)=>setNews({...news,email:e.target.value})} placeholder="enter your email" className="rounded-lg p-2 text-gray-700 bg-white" required/>

                          <button type="submit" className="w-fit p-2 hover:-translate-y-3 transform:transition duration-300 cursor-pointer  rounded-lg text-white bg-[#06896B]">{loading===true?"Subscribing...":texter}</button>
                        </form>
                        {stator && <p className="text-green-500 font-bold">{stator}</p>}
                        
                      </div>
          </div>
          {/* quick links */}
          <div className="flex flex-col max-[900px]:order-2 flex w-[25vw] h-auto ml-[10vw] max-[900px]:ml-0 gap-6">
            <p className="text-[#06896B] font-bold text-lg">Quick Links</p>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Home</Link>
               <Link href="/About" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">About Us</Link>
                <Link href="/Contact" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Volunteer</Link>
                 <Link href="/Donate" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Donate</Link>
                  <Link href="https://3dwebsoftlms-learning.online" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Learn-lms</Link>
                   <Link href="/Contact" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Join us</Link>
            </div>
          </div>
           <div className="flex flex w-[25vw] max-[900px]:order-3 h-auto flex-col gap-6">
            <p className="text-[#06896B] font-bold text-lg">Explore</p>
            <div className="flex flex-col gap-3">
              <Link href="/Blog" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Blogs</Link>
               <Link href="/Gallery" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Gallery</Link>
                <Link href="/FAQ" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">FAQ</Link>
                
            </div>
          </div>
          <div className="flex flex-col max-[900px]:order-4   h-auto gap-3">
            <p className="text-[#06896B] font-bold text-lg">Contact us</p>
            <div className="flex flex-col gap-7">
           
              <div className="flex gap-2 ">
                <MapPin className="text-[#06896b] mt-2" size={30}/>
                <p className="w-[20vw] max-[900px]:w-[90vw]">Head Office:- Plot No. 2-69/6 Near Gowtham Model School, Market Road, Narsingi Telangana - 500089</p>
              </div>
               <div className="flex gap-2">
                <PhoneCallIcon className="text-[#06896b] mt-2" size={30}/>
                <p>+91 8374972501</p>
                <p>+91 9381192595</p>
              </div>
              <div className="flex gap-2">
                <MessageSquare className="mt-1 text-[#06896b]" size={30}/>
                <div className="flex flex-col gap-1">
                  <p>info@3DWEBSOFTitsolutions,</p>
                  <p>ceo@3DWEBSOFTitsolutions,</p>
                  <p>hr@3DWEBSOFTitsolutions,</p>
                  <p>contact@3DWEBSOFTitsolutions</p>
                </div>
                
              </div>
                 
            </div>
          </div>
     </div>
  )
}