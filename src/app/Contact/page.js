"use client"
import Image from "next/image";
import axios from "axios";
import { useState,useEffect } from "react";
import Toastify from "toastify";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import MapEmbed from "@/Components/MapEmbed/page";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle,Check, TrendingUpIcon } from "lucide-react";

export default function Contact() {
    const [state,setState]=useState("")
    const [partnerfalse,setPartnerfalse]=useState(false)
    const [admissionfalse,setAdmissionfalse]=useState(false)
    const [ngofalse,setNgofalse]=useState(false)
    const [volunteerfalse,setVolunteerFalse]=useState(false)
    const [partnershipType, setPartnershipType] = useState("")
    const [coursePreference, setCoursePreference] = useState("")
    const [Area, setArea] = useState("")
     

    const [part,setPart]=useState({partnership:"",Name:"",phone:"",email:"",company:"",remarks:""})
    const [adm,setAdm]=useState({student:"",contact:"",email:"",remarks:"",city:"",course:""})
    const [nger,setNger]=useState({ngo:"",name:"",contact:"",city:"",email:"",remarks:""})
    // state,volunteer,contact,email,city,area
    const [voluntr,setVoluntr]=useState({state:"",volunteer:"",contact:"",email:"",city:"",area:""})
    


    function handlePart(e){
        e.preventDefault()
        setPartnerfalse(true)
        axios.post("http://localhost:9000/partnership",{
            partnership:part.partnership,
            Name:part.Name,
            phone:part.phone,
            email:part.email,
            company:part.company,
            remarks:part.remarks

        }).then(()=>{setTimeout(()=>{setPartnerfalse(false)},3000),setPart({partnership:"",Name:"",phone:"",email:"",company:"",remarks:""});Toastify.success("partnership added successfully")}).catch(error=>{console.log("error",error.message);Toastify.error("error occured in partnership")})


    }

    function handleAdm(e){
        e.preventDefault()
        setAdmissionfalse(true)
        axios.post("http://localhost:9000/admission",{
            student:adm.student,
            contact:adm.contact,
            email:adm.email,
            remarks:adm.remarks,
            city:adm.city,
            course:adm.course
        }).then(()=>{setTimeout(()=>{setAdmissionfalse(false)},3000),setAdm({student:"",contact:"",email:"",remarks:"",city:"",course:""})}).catch(error=>console.log("error",error.message))
    }

    function handleNgo(e){
        e.preventDefault()
        setNgofalse(true)
        axios.post("http://localhost:9000/ngo",{
            ngo:nger.ngo,
            name:nger.name,
            contact:nger.contact,
            city:nger.city,
            email:nger.email,
            remarks:nger.remarks
        }).then(()=>{setTimeout(()=>{setNgofalse(false)},3000),setNger({ngo:"",name:"",contact:"",city:"",email:"",remarks:""})}).catch(error=>console.log("error",error.message))
        
    }

    function handleVolunteer(e){
        e.preventDefault()
        setVolunteerFalse(true)
        axios.post("http://localhost:9000/volunteer",{
            state:voluntr.state,
            volunteer:voluntr.volunteer,
            contact:voluntr.contact,
            email:voluntr.email,
            city:voluntr.city,
            area:voluntr.area
        }).then(()=>{setTimeout(()=>{setVolunteerFalse(false)},3000),setVoluntr({state:"",volunteer:"",contact:"",email:"",city:"",area:""})}).catch(error=>console.log("error",error.message))
        
    }

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest  leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full items-center -mt-10">
            <div className="relative w-full">
            <img src="/Contuctor.jpeg" className="w-full  h-[790px] object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold italic max-[500px]:text-2xl">Contact us</p>
                  <p className="font-semibold text-xl italic  max-[500px]:text-sm">Reach out to us and be a part of someone's future</p>
                </div>
            </div>
            <div className="p-20 font-sans text-black">                      
              <div className="flex max-[1100px]:flex-col gap-7 items-center w-full">
                <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-semibold italic text-4xl  max-[500px]:text-2xl">Partnerships</p>
                    <p className="w-[25vw] max-[1100px]:w-[90vw]  max-[500px]:text-sm">please write to us at <span className="italic text-[#06896B] w-[25vw]">info.3DWEBSOFTorg@gmail.com</span> to know more about the partnership opportunities.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-semibold italic text-4xl  max-[500px]:text-2xl">Admission</p>
                    <p className="w-[25vw] max-[1100px]:w-[90vw]  max-[500px]:text-sm">please write to us at <span className="italic text-[#06896B] w-[25vw]">info.3DWEBSOFTorg@gmail.com</span> along with your course preference and contact details.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-semibold italic text-4xl  max-[500px]:text-2xl">Volunteering</p>
                    <p className="w-[25vw] max-[1100px]:w-[90vw]  max-[500px]:text-sm">please write to us at <span className="italic text-[#06896B] w-[25vw]">info.3DWEBSOFTorg@gmail.com</span> with your core skills, interest areas and location preference.

</p>
                </div>
              </div>
              <div className="flex flex-col items-center italic pt-10 gap-3">
                        <p className="text-4xl text-[#06896b] font-semibold  max-[500px]:text-2xl">OR</p>
                        <p className="w-[80vw] max-[1100px]:w-[90vw] p-2 rounded-lg bg-[#06896b] font-semibold text-center  max-[500px]:text-2xl text-white text-3xl">Fill the form below</p>
              </div>
              <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl  max-[500px]:text-2xl">For Partnerships:</p>
                <form onSubmit={handlePart} className="grid grid-cols-3  max-[900px]:grid-cols-1  gap-x-5 gap-y-5">
                    <select
                        value={part.partnership}
                        onChange={(e)=>setPart({...part,partnership:e.target.value})}
                        className="w-[25vw] max-[900px]:w-[90vw] h-[50px]  max-[500px]:text-sm text-center border rounded-lg border-gray-800"
                    required>
                        <option value="" disabled>
                            Select type of partnership
                        </option>
                        <option value="candidates for placement">candidates for placement</option>
                        <option value="csr project for implementation">csr project for implementation</option>
                        <option value="others">others</option>
                    </select>
                    <input value={part.Name} onChange={(e)=>setPart({...part,Name:e.target.value})} placeholder="Contact Person Name" className="w-[25vw]  max-[500px]:text-sm max-[900px]:w-[90vw]  h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={part.phone} onChange={(e)=>setPart({...part,phone:e.target.value})} placeholder="Contact Number" className="w-[25vw]  max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={part.email} onChange={(e)=>setPart({...part,email:e.target.value})} placeholder="Email Id" className="w-[25vw]  max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={part.company} onChange={(e)=>setPart({...part,company:e.target.value})} placeholder="Company Name" className="w-[25vw]  max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={part.remarks} onChange={(e)=>setPart({...part,remarks:e.target.value})} size={20} placeholder="Remarks" className="w-[25vw]  max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    
                     <button type="submit" className="w-fit max-[900px]:col-span-1 col-span-3 justify-self-center hover:scale-110 translate-[50%,50%] cursor-pointer px-4 py-2 rounded-lg text-white bg-[#06996b]">{partnerfalse===false?"Submit":"Submitting..."}</button>
                     
                </form>
               
              </div>
               <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl max-[500px]:text-2xl">For Admission Inquiry:</p>
                <form onSubmit={handleAdm} className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-x-5 gap-y-5">
                    <select
                        value={adm.course}
                        name="Type of partnership"
                        onChange={(e)=>setAdm({...adm,course:e.target.value})}
                        className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800"
                    required>
                        <option value="" disabled>
                            Course preference
                        </option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Web-development">Web-Development</option>
                        <option value="Voice and Non voice process">Voice and Non-voice process</option>
                        <option value="Backend">Backend</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Others">others</option>
                        {/* -- Alter table Admission add course enum("Digital Marketing","E-commerce","Web-development","Voice and Non voice process","Backend","Fullstack","Others"); */}
                    </select>
                    <input value={adm.city} onChange={(e)=>setAdm({...adm,city:e.target.value})} placeholder="City" className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={adm.student} onChange={(e)=>setAdm({...adm,student:e.target.value})} placeholder="Student Name" className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={adm.contact} onChange={(e)=>setAdm({...adm,contact:e.target.value})} placeholder="Contact Number" className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={adm.email} onChange={(e)=>setAdm({...adm,email:e.target.value})} placeholder="Email-Id" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] max-[500px]:text-sm text-center border rounded-lg border-gray-800" required/>
                    <input value={adm.remarks} onChange={(e)=>setAdm({...adm,remarks:e.target.value})} placeholder="Remarks" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] max-[500px]:text-sm text-center border rounded-lg border-gray-800" required/>
                     <button type="submit" className="w-fit  hover:scale-110 max-[900px]:col-span-1 col-span-3 justify-self-center cursor-pointer px-4 py-2 rounded-lg text-white bg-[#06996b]">{admissionfalse===false?"Submit":"Submitting..."}</button>
                </form>
               
              </div>
               <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl max-[500px]:text-2xl">For NGO Partnership:</p>
                <form onSubmit={handleNgo} className="grid grid-cols-3  max-[900px]:grid-cols-1 gap-x-5 gap-y-5">
                    <input value={nger.ngo} onChange={(e)=>setNger({...nger,ngo:e.target.value})} placeholder="Your NGO Name" className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={nger.name} onChange={(e)=>setNger({...nger,name:e.target.value})} placeholder="Contact Person Name" className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={nger.contact} onChange={(e)=>setNger({...nger,contact:e.target.value})} placeholder="Contact Number" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] max-[500px]:text-sm text-center border rounded-lg border-gray-800" required/>
                    <input value={nger.city} onChange={(e)=>setNger({...nger,city:e.target.value})} placeholder="City" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center max-[500px]:text-sm border rounded-lg border-gray-800" required/>
                    <input value={nger.email} onChange={(e)=>setNger({...nger,email:e.target.value})} placeholder="Email" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center max-[500px]:text-sm border rounded-lg border-gray-800" required/>
                    <input value={nger.remarks} onChange={(e)=>setNger({...nger,remarks:e.target.value})} placeholder="Remarks" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center max-[500px]:text-sm border rounded-lg border-gray-800" required/>
                     <button type="submit" className="w-fit  max-[900px]:col-span-1 col-span-3 justify-self-center px-4 py-2 hover:scale-110 cursor-pointer rounded-lg text-white bg-[#06996b]">{ngofalse===false?"Submit":"Submitting..."}</button>
                </form>
               
                
                
              </div>
               <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl max-[500px]:text-2xl">Be a Volunteer:</p>
                <form onSubmit={handleVolunteer} className="grid grid-cols-3  max-[900px]:grid-cols-1 gap-x-5 gap-y-5">
                    <select
                        value={voluntr.state}
                        name="Type of partnership"
                        onChange={(e)=>setVoluntr({...voluntr,state:e.target.value})}
                        className="w-[25vw] max-[900px]:w-[90vw] h-[50px] max-[500px]:text-sm text-center border rounded-lg border-gray-800"
                    required>
                        <option value="" disabled>
                            State
                        </option>
                        <option value="Telangana">Telangana</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="others">Others</option>
                    </select>
                    <input value={voluntr.volunteer} onChange={(e)=>setVoluntr({...voluntr,volunteer:e.target.value})}  placeholder="Volunteer Name" className="w-[25vw] max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={voluntr.contact} onChange={(e)=>setVoluntr({...voluntr,contact:e.target.value})} placeholder="Contact Number" className="w-[25vw] max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={voluntr.email} onChange={(e)=>setVoluntr({...voluntr,email:e.target.value})} placeholder="Email Id" className="w-[25vw] max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <input value={voluntr.city} onChange={(e)=>setVoluntr({...voluntr,city:e.target.value})} placeholder="City" className="w-[25vw] max-[500px]:text-sm max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800" required/>
                    <select
                        
                        name="Type of partnership"
                        value={voluntr.area}
                        onChange={(e)=>setVoluntr({...voluntr,area:e.target.value})}
                        className="w-[25vw] max-[900px]:w-[90vw] max-[500px]:text-sm h-[50px] text-center border rounded-lg border-gray-800"
                    required>
                        <option value="" disabled>
                            Area of Interest
                        </option>
                        <option value="candidates for placement">English Training</option>
                        <option value="csr project for implementation">IT Training</option>
                        <option value="Soft Skills Training">Soft Skills Training</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Content Writing">Content Writing</option>
                        <option value="others">Others</option>
                    </select>
                     <button type="submit" className="w-fit max-[900px]:col-span-1 col-span-3 justify-self-center hover:scale-110 cursor-pointer px-4 py-2 rounded-lg text-white bg-[#06996b]">{volunteerfalse===false?"Submit":"Submitting..."}</button>
                </form>
               
                
                
              </div>
              
              
              
              
              <div className="flex pt-20 max-[900px]:flex-col">
                <MapEmbed className=""/>
                <div className="w-[50vw] bg-[#06896B] rounded-lg flex text-white flex-col gap-7 items-center p-10  justify-center max-[900px]:w-[90vw]">
                        <p className="font-bold text-4xl max-[500px]:text-2xl">Registered Office:</p>
                        <div className="h-2 bg-white w-[70px]">
                            
                        </div>
                        <div className="flex flex-col gap-3 max-[500px]:text-sm">
                            <p>Head Office:- Plot No. 2-69/6 Near</p>
                            <p>Gowtham Model School, Market</p>
                            <p>Road, Narsingi Telangana - 500089</p>
                        </div>
                </div>
              </div>
              <div></div>
                  </div>

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
