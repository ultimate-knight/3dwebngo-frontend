"use client"
import Image from "next/image";
import axios from "axios";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle,TrashIcon } from "lucide-react";
import Ngo from "../Ngo/page";

export default function Blog() {
    const [partnership,setPartnership]=useState([])
    const [partner,setPartner]=useState(null)
    const [user1,setUser1]=useState(null)
    const [admission,setAdmission]=useState([])
    const [ngo,setNgo]=useState([])
    const [volunteer,setVolunteer]=useState([])
    const [newsletter,setNewsletter]=useState([])
    const [enrollment,setEnrollment]=useState([])
    const [editId,setEditId]=useState(null)


    useEffect(()=>{
    const load = () => axios.get(" https://threedfoundation-backend.onrender.com/partnership").then(prev=>setPartnership(prev.data.data))
    load()
    window.addEventListener("focus", load)
    return () => window.removeEventListener("focus", load)
},[])

    useEffect(()=>{
        const load=()=>axios.get(" https://threedfoundation-backend.onrender.com/admission").then(prev=> setAdmission(prev.data.data))
        load()
        window.addEventListener("focus",load)
        return ()=>window.removeEventListener("focus",load)
    },[])

    useEffect(()=>{
        axios.get(" https://threedfoundation-backend.onrender.com/ngo").then(prev=>setNgo(prev.data.data))
    },[])

     useEffect(()=>{
        const load=()=>axios.get(" https://threedfoundation-backend.onrender.com/volunteer").then(prev=> setVolunteer(prev.data.data))
        load()
        window.addEventListener("focus",load)
        return ()=>window.removeEventListener("focus",load)
    },[])

    useEffect(()=>{
        const load=()=>axios.get(" https://threedfoundation-backend.onrender.com/newsletter").then(prev=>setNewsletter(prev.data.data))
        load()
        window.addEventListener("focus",load)
        return ()=>window.removeEventListener("focus",load)
    },[])

    useEffect(()=>{
        const load=()=>axios.get(" https://threedfoundation-backend.onrender.com/enrollment").then(prev=>setEnrollment(prev.data.data))
        load()
        window.addEventListener("focus",load)
        return ()=>window.removeEventListener("focus",load)
    },[])

    function addclick(){
        setUser1(partner)
    }


    function partnerdelete(editId){
        axios.delete(` https://threedfoundation-backend.onrender.com/partnership/${editId}`)
        .then(() => {
            setPartnership((currentPartnership) =>
                currentPartnership.filter((item) => item.id !== editId)
            )
            console.log("Deleted successfully")
        })
        .catch((error) => {
            console.log("Delete error:", error.message)
        })

        }


    function admissiondelete(editId){
        axios.delete(` https://threedfoundation-backend.onrender.com/admission/${editId}`)
        .then(() => {
            setAdmission((currentPartnership) =>
                currentPartnership.filter((item) => item.id !== editId)
            )
            console.log("Deleted successfully")
        })
        .catch((error) => {
            console.log("Delete error:", error.message)
        })

        }



    function ngodelete(editId){
        axios.delete(` https://threedfoundation-backend.onrender.com/ngo/${editId}`)
        .then(() => {
            setNgo((currentPartnership) =>
                currentPartnership.filter((item) => item.id !== editId)
            )
            console.log("Deleted successfully")
        })
        .catch((error) => {
            console.log("Delete error:", error.message)
        })

        }



    function volunteerdelete(editId){
        axios.delete(` https://threedfoundation-backend.onrender.com/volunteer/${editId}`)
        .then(() => {
            setVolunteer((currentPartnership) =>
                currentPartnership.filter((item) => item.id !== editId)
            )
            console.log("Deleted successfully")
        })
        .catch((error) => {
            console.log("Delete error:", error.message)
        })

        }


          function letterdelete(editId){
        axios.delete(` https://threedfoundation-backend.onrender.com/newsletter/${editId}`)
        .then(() => {
            setNewsletter((currentPartnership) =>
                currentPartnership.filter((item) => item.id !== editId)
            )
            console.log("Deleted successfully")
        })
        .catch((error) => {
            console.log("Delete error:", error.message)
        })

        }

         function enrollmentdelete(editId){
        axios.delete(` https://threedfoundation-backend.onrender.com/enrollment/${editId}`)
        .then(() => {
            setEnrollment((currentPartnership) =>
                currentPartnership.filter((item) => item.id !== editId)
            )
            console.log("Deleted successfully")
        })
        .catch((error) => {
            console.log("Delete error:", error.message)
        })

        }



    
  return (
    <div className="flex flex-col flex-1 transition-transform duration-500 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col gap-9  p-10   w-full">
          <p className="text-3xl text-green-600 font-bold">{`Form submission table for ${user1}`}</p>

            <select value={partner} onChange={(e)=>setUser1(e.target.value)} className="w-full max-w-[200px] font-bold line-clamp-2 truncate p-5 min-w-0 border-1 border-white rounded-2xl bg-green-800">
                <option value="">Select your Table</option>
                <option  value="Partnership">Partnership</option>
                <option value="Admission">Admission</option>
                <option value="Ngo">Ngo</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Newsletter">Newsletter</option>
                <option value="enrollment">enrollment</option>

            </select>

            {/* partnership */}
            
            {user1==="Partnership" && 
            (
            <div className="min-h-[400px] flex flex-col gap-10 min-w-[90vw] bg-green-800 text-white border-1 text-gray-800 border-black rounded-2xl p-5">
                <div className="grid grid-cols-9 gap-x-7">
                    <p className="font-extrabold">id</p>
                    <p className="font-extrabold">Partnership</p>
                    <p className="font-extrabold">Name</p>
                    <p className="font-extrabold">phone no.</p>
                    <p className="font-extrabold">email</p>
                    <p className="font-extrabold">company</p>
                    <p className="font-extrabold">remarks</p>
                    <p className="font-extrabold">createdAt</p>
                    <p className="font-extrabold">Delete</p>

                </div>
                {
                    partnership.map(x=>(
                        <div key={x.id} className="grid grid-cols-9 text-white break-words gap-x-7 text-gray-800  ">
                            <p>{x.id}</p>
                            <p>{x.partnership}</p>
                            <p>{x.Name}</p>
                             <p>{x.phone}</p>
                             <p>{x.email}</p>
                             <p>{x.company}</p>
                             <p>{x.remarks}</p>
                             <p>{x.created_at?.slice(0,10)}</p>
                             <button onClick={() => partnerdelete(x.id)} className="w-[100px] h-[50px] cursor-pointer bg-red-600 text-white font-semibold rounded-lg">Delete</button>
                         </div>
                    
                        
                    ))
                }
                </div>)}


                 {/* Admission */}
            
            {user1==="Admission" && 
            (
            <div className="min-h-[400px] flex flex-col gap-10 min-w-[90vw] bg-green-800 text-white border-1 text-gray-800 border-black rounded-2xl p-5">
                <div className="grid grid-cols-9 gap-x-7">
                    <p className="font-extrabold">id</p>
                    <p className="font-extrabold">Name</p>
                    <p className="font-extrabold">phone no.</p>
                    <p className="font-extrabold">email</p>
                    <p className="font-extrabold">city</p>
                    <p className="font-extrabold">course</p>
                    <p className="font-extrabold">remarks</p>
                    <p className="font-extrabold">createdAt</p>
                    <p className="font-extrabold">Delete</p>
                </div>
                {
                    admission.map(x=>(
                        <div key={x.id} className="grid grid-cols-9 text-white break-words gap-x-10 text-gray-800  ">
                            <p>{x.id}</p>
                            <p>{x.student}</p>
                            <p>{x.contact}</p>
                             <p>{x.email}</p>   
                             <p>{x.city}</p>
                             <p>{x.course}</p>  
                             <p>{x.remarks}</p> 
                             <p>{x.created_at?.slice(0,10)}</p>
                             <button onClick={() => admissiondelete(x.id)} className="w-[100px] h-[50px] cursor-pointer bg-red-600 text-white font-semibold rounded-lg">Delete</button>       
                         </div>
                    
                        
                    ))
                }
                </div>)}


                     {/* Ngo */}
            
            {user1==="Ngo" && 
            (
            <div className="min-h-[400px] flex flex-col gap-10 bg-green-800 text-white min-w-[90vw] border-1 text-gray-800 border-black rounded-2xl p-5">
                <div className="grid grid-cols-9 gap-x-7">
                    <p className="font-extrabold">id</p>
                    <p className="font-extrabold">Ngo</p>
                    <p className="font-extrabold">Name</p>
                    <p className="font-extrabold">Phone</p>
                    <p className="font-extrabold">City</p>
                    <p className="font-extrabold">email</p>
                    <p className="font-extrabold">remarks</p>
                    <p className="font-extrabold">createdAt</p>
                    <p className="font-extrabold">Delete</p>
                </div>
                {
                    ngo.map(x=>(
                        <div key={x.id} className="grid grid-cols-9 text-white break-words gap-x-10 text-gray-800  ">
                            <p>{x.id}</p>
                            <p>{x.ngo}</p>
                            <p>{x.name}</p>
                             <p>{x.contact}</p>   
                             <p>{x.city}</p>
                             <p>{x.email}</p>
                             <p>{x.remarks}</p>   
                             <p>{x.created_at?.slice(0,10)}</p> 
                             <button onClick={() => ngodelete(x.id)} className="w-[100px] h-[50px] cursor-pointer bg-red-600 text-white font-semibold rounded-lg">Delete</button>             
                         </div>
                    
                        
                    ))
                }
                </div>)}


{/* volunteer */}
                 {user1==="Volunteer" && 
            (
            <div className="min-h-[400px] flex flex-col gap-10 bg-green-800 min-w-[90vw] border-1 text-gray-800 border-black rounded-2xl p-5">
                <div className="grid grid-cols-9 gap-x-7 text-white">
                    <p className="font-extrabold">id</p>
                    <p className="font-extrabold">Name</p>
                    <p className="font-extrabold">Phone</p>
                    <p className="font-extrabold">City</p>
                    <p className="font-extrabold">email</p>
                    <p className="font-extrabold">area of interest</p>
                    <p className="font-extrabold">State</p>
                    <p className="font-extrabold">createdAt</p>
                    <p className="font-extrabold">Delete</p>
                </div>
                {
                    volunteer.map(x=>(
                        <div key={x.id} className="grid text-white grid-cols-9 break-words gap-x-10 text-gray-800  ">
                            <p>{x.id}</p>      
                            <p>{x.volunteer}</p>
                             <p>{x.contact}</p>    
                             <p>{x.city}</p>                    
                             <p>{x.email}</p>
                             <p>{x.area}</p>  
                             <p>{x.state}</p> 
                             <p>{x.created_at?.slice(0,10)}</p>
                             <button onClick={() => volunteerdelete(x.id)} className="w-[100px] h-[50px] cursor-pointer bg-red-600 text-white font-semibold rounded-lg">Delete</button>
                         </div>
                    
                        
                    ))
                }
                </div>)}

{/* newsletter */}
                  {user1==="Newsletter" && 
            (
            <div className="min-h-[400px] flex flex-col gap-10 bg-green-800 text-white break-words min-w-[90vw] border-1 text-gray-800 border-black rounded-2xl p-5">
                <div className="grid grid-cols-7 gap-x-7 text-white">
                    <p className="font-extrabold">id</p>
                    <p className="font-extrabold">email</p>
                    <p className="font-extrabold">createdAt</p>
                    <p className="font-extrabold">Delete</p>

                   
                </div>
                {
                    newsletter.map(x=>(
                        <div key={x.id} className="grid grid-cols-7 text-white  gap-x-10 text-gray-800  ">
                            <p>{x.id}</p>      
                             <p>{x.email}</p>
                             <p>{x.created_at?.slice(0,10)}</p>
                             <button onClick={() => letterdelete(x.id)} className="w-[100px] h-[50px] cursor-pointer bg-red-600 text-white font-semibold rounded-lg">Delete</button>
                         </div>
                    
                        
                    ))
                }
                </div>)}


                

                 {user1==="enrollment" && 
            (
            <div className="min-h-[400px] flex flex-col gap-10 bg-green-800 text-white min-w-[90vw] border-1 text-gray-800 border-black rounded-2xl p-5">
                <div className="grid grid-cols-9 gap-x-7 ">
                    <p className="font-extrabold">id</p>
                    <p className="font-extrabold">course</p>
                    <p className="font-extrabold">name</p>
                    <p className="font-extrabold">contact</p>
                    <p className="font-extrabold">email</p>
                    <p className="font-extrabold">gender</p>
                    <p className="font-extrabold">state</p>
                    <p className="font-extrabold">createdAt</p>
                    <p className="font-extrabold">Delete</p>
                </div>
                {
                    enrollment.map(x=>(
                        <div key={x.id} className="grid grid-cols-9 text-white break-words gap-x-10 text-gray-800  ">
                            <p>{x.id}</p>      
                            <p>{x.course}</p>
                             <p>{x.name}</p>                        
                             <p>{x.contact}</p>
                             <p>{x.email}</p>  
                             <p>{x.gender}</p> 
                             <p>{x.state}</p> 
                             <p>{x.created_at.slice(0,10)}</p>
                             <button onClick={() => enrollmentdelete(x.id)} className="w-[100px] h-[50px] cursor-pointer bg-red-600 text-white font-semibold rounded-lg">Delete</button>
                             
                         </div>
                    
                        
                    ))
                }
                </div>)}


                






           

            
            

                                
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
