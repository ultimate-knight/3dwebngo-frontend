"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import axios from "axios";
import {  GraduationCap,
  BookOpen,
  Monitor,
  BriefcaseBusiness,
  Users, 
  ChevronLeft,
  ChevronRight} from "lucide-react";

export default function Courses() {

    const [state,setState]=useState(0)
    const [isDesktop,setIsDesktop]=useState(false)
    const [enrollmentfalse,setEnrollmentFalse]=useState(false)
    const [text,setText]=useState("")
    const [letter,setLetter]=useState("")
    const [enrollment,setEnrollment]=useState({course:"",name:"",contact:"",email:"",state:"",gender:""})

    const array1=[
        {id:2,imager:"/ngo1.jpeg"},
        {id:3,imager:"/ngo2.jpeg"},
        {id:4,imager:"/ngo3.jpeg"},
        {id:5,imager:"/ngo4.jpeg"},
        {id:6,imager:"/ngo5.jpeg"}
    ]

    

      const itemsperpage=isDesktop?3:1
        const start=state*itemsperpage

    const visible=array1.slice(start,start+itemsperpage)

    function prev(){
        if(start>0){
            setState(state-1)
        }
    }

    useEffect(() => {
        function updateViewport() {
            setIsDesktop(window.innerWidth >= 1000)
        }

        updateViewport()
        window.addEventListener("resize", updateViewport)

        return () => window.removeEventListener("resize", updateViewport)
    }, [])

    useEffect(() => {
       
    const timer = setTimeout(() => {
        
        if (start+itemsperpage< array1.length) {
            setState((currentState) => currentState + 1);
        } else {
            setState(0);
        }
    }, 5000);

   

    return () => clearTimeout(timer);
}, [state,itemsperpage,start]);


// course:"",name:"",contact:"",email:"",state:"",gender:""

// function handleCreate(e){
//     e.preventDefault()
//     setEnrollmentFalse(true)
//     axios.post("https://threedfoundation-backend.onrender.com/enrollment",{
//             course:enrollment.course,
//             name:enrollment.name,
//             contact:enrollment.contact,
//             email:enrollment.email,
//             state:enrollment.state,
//             gender:enrollment.gender
//     }).then(()=>{
//         setEnrollment({course:"",name:"",contact:"",email:"",state:"",gender:""})
//     }).catch((error)=>{
//         console.log("error",error.message)
//     }).finally(()=>{
//         setEnrollmentFalse(false)
//     })
// }

// function handleCreate(e){
//     e.preventDefault()
//     setEnrollmentFalse(true)
//     axios.post("https://threedfoundation-backend.onrender.com/enrollment",{
//         course:enrollment.course,
//         name:enrollment.name,
//         contact:enrollment.contact,
//         email:enrollment.email,
//         state:enrollment.state,
//         gender:enrollment.gender
//     })
//     .then((response)=>{
//         console.log("success response:", response.data)  
//         setTimeout(()=>{setEnrollmentFalse(false)},3000)
//         setEnrollment({course:"",name:"",contact:"",email:"",state:"",gender:""})
//     })
//     .catch((error)=>{
//         console.log("error", error.message)
//     })
//     .finally(()=>{
//         setEnrollmentFalse(false)
//     })
// }




function handleCreate(e){
    e.preventDefault()
    console.log("1. handleCreate STARTED")
    setEnrollmentFalse(true)
    console.log("2. about to send, data:", enrollment)
    axios.post("https://threedfoundation-backend.onrender.com/enrollment", enrollment, {
    timeout: 90000
})
    .then((response)=>{
        console.log("3. THEN ran:", response.status)
        setEnrollment({course:"",name:"",contact:"",email:"",state:"",gender:""})
    })
    .catch((error)=>{
        console.log("4. CATCH ran:", error.message)
    })
    .finally(()=>{
        console.log("5. FINALLY ran")
        setEnrollmentFalse(false)
    })
}


function next() {
    if (start + itemsperpage < array1.length) {
    setState((currentState) => currentState + 1);
  } else {
    setState(0);
  }
}

const partnering=[...array1,...array1]
    

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/courses.jpeg" className="w-full  h-[790px]   max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold  max-[500px]:text-2xl">Building skills for tomorrow</p>
                </div>
            </div>
            <div className="p-30 max-[1100px]:p-10 max-[500px]:-ml-5  max-[1100px]:p-5 flex flex-col items-center gap-6 justify-center  font-sans text-black">
                <p className="text-xl max-[500px]:text-sm">3DWebSoft Foundation offers inclusive, future-ready learning courses designed to empower youth, students, teachers, and communities with digital, professional, and employability skills. </p>
                <p className="text-xl max-[500px]:text-sm">With course durations ranging from short 2-hour awareness modules to intensive 6-month career-oriented programs, our initiatives focus on bridging the digital divide and creating sustainable opportunities through technology-enabled education and skilling.</p>
                <div className="grid grid-cols-2 max-[1100px]:grid-cols-1  gap-x-10 gap-y-20 pt-20">
                    <div className="bg-[#06896B] flex flex-col gap-10 w-[40vw] max-[1100px]:w-[90vw]  rounded-4xl text-white p-15  min-min-h-[700px]">
                            <p className="text-4xl font-bold max-[500px]:text-2xl">Career & Skill Development</p>
                            <div className="h-0.5 w-[400px] bg-white"></div>
                            <p className="text-xl max-[500px]:text-sm">Our Career and Skill Development courses equip youth with industry-relevant skills, workplace readiness, and digital competencies to enhance employability and livelihood opportunities.</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-3xl font-bold max-[500px]:text-2xl">Focus Areas</p>
                                <ul className="list-disc flex flex-col p-5 text-xl max-[500px]:text-sm">
                                    <li>Digital Literacy & Office Productivity</li>
                                    <li>Communication & Professional Skills</li>
                                    <li>Employability & Workplace Readiness</li>
                                    <li>Entrepreneurship & Financial Awareness</li>
                                    <li>Web & Frontend Development Fundamentals</li>
                                </ul>
                            </div>
                    </div>
                   <div className="bg-[#06396B] flex flex-col gap-10 w-[40vw] max-[1100px]:w-[90vw] rounded-4xl text-white p-15 min-h-[700px]">
                            <p className="text-4xl font-bold max-[500px]:text-2xl">STEM for Schools & Teachers</p>
                            <div className="h-0.5 w-[400px] bg-white"></div>
                            <p className="text-xl max-[500px]:text-sm">Our STEM education initiatives promote innovation, critical thinking, and technology-enabled learning among students, while supporting teachers with modern teaching practices and digital tools.</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-3xl font-bold max-[500px]:text-2xl">Focus Areas</p>
                                <ul className="list-disc max-[500px]:text-sm flex flex-col p-5 text-xl">
                                    <li>Science, Technology & Mathematics</li>
                                    <li>Coding & Computational Thinking</li>
                                    <li>Robotics & Digital Learning</li>
                                    <li>Teacher Capacity Building</li>
                                    <li>AI & Emerging Technology Awareness</li>
                                </ul>
                            </div>
                    </div>
                    <div className="bg-[#06896B] flex flex-col gap-10 w-[40vw] max-[1100px]:w-[90vw] rounded-4xl text-white p-15 min-h-[700px]">
                            <p className="text-4xl font-bold max-[500px]:text-2xl">AI-Enabled Career Courses in IT & ITeS</p>
                            <div className="h-0.5 w-[400px] bg-white"></div>
                            <p className="text-xl max-[500px]:text-sm">These courses prepare learners for emerging opportunities in the digital economy through technology-focused, industry-aligned training.</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-3xl font-bold max-[500px]:text-2xl">Focus Areas</p>
                                <ul className="list-disc max-[500px]:text-sm flex flex-col p-5 text-xl">
                                    <li>Artificial Intelligence Fundamentals</li>
                                    <li>Cybersecurity Awareness</li>
                                    <li>IT & ITeS Skills</li>
                                    <li>Web Development & Digital Operations</li>
                                    <li>Professional Skills for Technology Careers</li>
                                </ul>
                            </div>
                    </div>
                    <div className="bg-[#06396B] flex flex-col gap-10 w-[40vw] max-[1100px]:w-[90vw] rounded-4xl text-white p-15 min-h-[700px]">
                            <p className="text-4xl font-bold max-[500px]:text-2xl">Entrepreneurial Courses</p>
                            <div className="h-0.5 w-[400px] bg-white"></div>
                            <p className="text-xl max-[500px]:text-sm">Our entrepreneurial learning programmes encourage self-reliance and innovation by helping learners develop the business, financial, and digital skills needed to start or grow livelihood opportunities and micro-enterprises.</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-3xl font-bold max-[500px]:text-2xl">Focus Areas</p>
                                <ul className="list-disc flex  max-[500px]:text-sm flex-col p-5 text-xl">
                                    <li>Entrepreneurship Development</li>
                                    <li>Digital Marketing Basics</li>
                                    <li>Financial & Business Literacy</li>
                                    <li>Small Business Management</li>
                                    <li>Communication & Customer Engagement</li>
                                </ul>
                            </div>
                    </div>
                     <div className="bg-[#06896B] flex flex-col gap-10 w-[40vw] max-[1100px]:w-[90vw] rounded-4xl text-white p-15 min-h-[700px]">
                            <p className="text-4xl font-bold max-[500px]:text-2xl">ChangeMaker Academy (CMA)</p>
                            <div className="h-0.5 w-[400px] bg-white"></div>
                            <p className="text-xl max-[500px]:text-sm">Our Career and Skill Development courses equip youth with industry-relevant skills, workplace readiness, and digital competencies to enhance employability and livelihood opportunities.</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-3xl font-bold max-[500px]:text-2xl">Focus Areas</p>
                                <ul className="list-disc flex flex-col p-5 text-xl max-[500px]:text-sm">
                                    <li>Develop entrepreneurial and business skills to turn ideas into action</li>
                                    <li>Build the confidence to start and run your own enterprise</li>
                                    <li>Work on real-world business challenges with mentor support</li>
                                   
                                </ul>
                            </div>
                    </div>
                    <div className="bg-[#06396B] flex flex-col gap-10 w-[40vw] max-[1100px]:w-[90vw] rounded-4xl text-white p-15 min-h-[700px]">
                            <p className="text-4xl font-bold max-[500px]:text-2xl">Awareness Courses</p>
                            <div className="h-0.5 w-[400px] bg-white"></div>
                            <p className="text-xl max-[500px]:text-sm">Our awareness courses are designed to build digital confidence, social awareness, and responsible technology usage across communities.</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-3xl font-bold max-[500px]:text-2xl">Focus Areas</p>
                                <ul className="list-disc max-[500px]:text-sm flex flex-col p-5 text-xl">
                                    <li>Digital & Financial Literacy</li>
                                    <li>Cyber Safety & Online Awareness</li>
                                    <li>Responsible Use of Technology</li>
                                    <li>Health, Hygiene & Community Awareness</li>
                                    <li>AI Awareness for Everyday Life</li>
                                </ul>
                            </div>
                    </div>
                    
                </div>
                <div className="pt-10 flex flex-col items-center gap-10">
                    <p className="text-[#06896B] text-4xl font-bold max-[500px]:text-2xl">Our Approach</p>
                    <p className="text-xl max-[500px]:text-sm">Through these courses, 3DWebSoft Foundation continues to enable education, employability, and digital empowerment at scale.</p>
                    <div className="grid grid-cols-3 max-[800px]:grid-cols-1 gap-x-9 gap-y-10">
                        <div className="flex gap-5 items-center">
                            <GraduationCap className="bg-[#06896B] text-white rounded-lg p-2" size={70}/>
                            <p className="text-xl font-semibold max-[500px]:text-base">Industry-aligned curriculum</p>
                            
                        </div>
                        <div className="flex gap-5 items-center">
                            <BookOpen className="bg-[#06896B] text-white rounded-lg p-2" size={70}/>
                            <p className="text-xl font-semibold max-[500px]:text-base">Practical & experiential learning</p>
                            
                        </div>
                        <div className="flex gap-5 items-center">
                            <Monitor className="bg-[#06896B] text-white rounded-lg p-2" size={70}/>
                            <p className="text-xl font-semibold max-[500px]:text-base">Hybrid and digital learning models</p>
                            
                        </div>
                        
                        <div className="flex gap-5 items-center">
                            <BriefcaseBusiness className="bg-[#06896B] text-white rounded-lg p-2" size={70}/>
                            <p className="text-xl font-semibold max-[500px]:text-base">Career guidance & placement support</p>
                            
                        </div>
                        <div className="flex gap-5 items-center">
                            <Users className="bg-[#06896B] text-white rounded-lg p-2" size={70}/>
                            <p className="text-xl font-semibold max-[500px]:text-base">Inclusive skilling for underserved communities</p>
                            
                        </div>
                    </div>
                </div>
               <div className="w-full overflow-hidden mt-10">
                        <div className="marquee-track">
                            {partnering.map((x, index) => (
                                <div key={`${x.id}-${index}`} className="w-[330px] max-[500px]:w-[90vw] h-[350px] shrink-0 border border-black flex items-center justify-center rounded-lg overflow-hidden bg-white">
                                    <img src={x.imager} alt={`Funding partner ${x.id}`} className="h-full w-[330px] " />
                                </div>
                            ))}
                        </div>
                    
                </div>
                 <div className=" flex flex-col items-start w-full max-[500px]:p-5  gap-7 pt-20 max-[1120px]:p-10 p-30 ">
                        <div className="flex flex-col  gap-3">
                        <p id="fomarik" className="text-[#06896B] font-bold text-4xl max-[500px]:text-2xl">Contact Us</p>
                        <p className="text-black text-2xl max-[500px]:text-base">For Enrollment, kindly share your Details</p>
                        </div>
                        <form id="formarika" onSubmit={handleCreate} className="grid grid-cols-2 max-[1120px]:grid-cols-1 gap-x-11  gap-y-7">
                            <select value={enrollment.course} onChange={(e)=>setEnrollment({...enrollment,course:e.target.value})} className="w-[30vw] rounded-lg max-[1120px]:w-[80vw] h-auto border-1 max-[500px]:text-sm p-2 border-black" required>
                                <option value="">select course preference</option>
                                <option value="Awareness course">Awareness course</option>
                                <option value="Career & Skill development">Career & Skill development</option>
                                <option value="Education Coursese">Education Courses</option>
                                <option value="Enterprenuerial courses">Enterprenuerial courses</option>
                                <option value="AI enabled courses in IT and ITES">AI enabled courses in IT and ITES</option>
                            </select>
                            <input value={enrollment.name} onChange={(e)=>setEnrollment({...enrollment,name:e.target.value})} placeholder="Name" className="w-[30vw] rounded-lg max-[500px]:text-sm max-[1120px]:w-[80vw] p-1 h-auto border-1 border-black" required/>
                            <input value={enrollment.contact} onChange={(e)=>setEnrollment({...enrollment,contact:e.target.value})}  placeholder="Mobile No." className="w-[30vw] rounded-lg max-[500px]:text-sm max-[1120px]:w-[80vw] p-1 h-auto border-1 border-black" required/>
                            <input value={enrollment.email} onChange={(e)=>setEnrollment({...enrollment,email:e.target.value})} type="email" placeholder="Email Id" className="w-[30vw] rounded-lg max-[500px]:text-sm max-[1120px]:w-[80vw] p-1 h-auto border-1 border-black" required/>
                            <input value={enrollment.state} onChange={(e)=>setEnrollment({...enrollment,state:e.target.value})} placeholder="State" className="w-[30vw] max-[1120px]:w-[80vw] rounded-lg max-[500px]:text-sm p-1 h-auto border-1 border-black" required/>
                            <select value={enrollment.gender} onChange={(e)=>setEnrollment({...enrollment,gender:e.target.value})} className="w-[30vw] rounded-lg max-[500px]:text-sm max-[1120px]:w-[80vw] max-[1120px]:p-3 h-auto border-1 border-black" required>
                                <option value="">select gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                             <button type="submit" className="bg-[#06896B] max-[500px]:text-lg w-[200px] text-white rounded-lg p-1 hover:scale-105 hover:bg-green-800">{enrollmentfalse===false?"Submit":"Submitting..."}</button>
                        </form>
                   
                </div>
               
                                </div>
                                

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
