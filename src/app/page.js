"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function App() {
  const [data,setData]=useState(0)


   function next() {
        if (data < Math.ceil(slides.length) - 1) {
          setData(data + 1);
        }
    
        if (data === slides.length - 1) {
          setData(0);
        }
      }
    
      function prev() {
        if (data > 0) {
          setData(data - 1);
        }
      }
    

   useEffect(()=>{
        const timer=setTimeout(()=>{
          next()
        },2000)
    
        return ()=>clearTimeout(timer)
      },[data])



      const slides = [
        {
          image: "/pexel.jpeg",
          heading: "Women Empowerment Programs",
          text: "3DWEBSOFT Foundation conducts women-focused skill development programs including tailoring, beauty parlour training, handicrafts, and home-business support.",
        },
        {
          image: "/healthbar.jpg",
          heading: "Health Awareness Camps",
          text: "3DWEBSOFT Foundation organizes free health camps and community outreach programs to promote better health and well-being among underserved communities.",
        },
        {
          image: "/rural.jpeg",
          heading: "Digital Literacy in Rural Areas",
          text: "3DWEBSOFT Foundation’s Digital Literacy initiative works to empower rural and underserved communities by providing essential digital skills, access to technology, and opportunities for technology-based learning.",
        },
        {
          image: "/computerator.jpeg",
          heading: "Computer Training Programs",
          text: "3DWEBSOFT Foundation’s Computer Training Programs are designed to equip individuals with essential digital and computer skills that can support their education, employment, and everyday professional activities.",
        },
        {
          image:"/modi.jpeg",
          heading:"",
          text:""
        }
      ];

    

    
  return (
    <div className="flex flex-col z-50 leading-loose flex-1 items-center overflow-x-hidden justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
         
          {/* main */}
          <div className="flex flex-col  items-start -mt-10 justify-between w-full">
            <div className="flex">
              <button onClick={prev}><ChevronLeft size={46} className="h-14 max-[940px]:hidden ml-10 z-20 absolute cursor-pointer bg-[#06896B] text-white"/></button>
              
              <div className="relative" >
                <img
                  src={slides[data].image}
                  className="min-w-screen object-cover  rounded-lg max-[887px]:mt-20   h-[600px]"
                  
                />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg max-[887px]:mt-20 bg-black/40 px-6 text-center text-white">
                  <p className="text-4xl font-extrabold max-[500px]:text-xl">{slides[data].heading}</p>
                  <p className="mt-2 max-w-3xl text-base max-[500px]:text-sm font-medium tracking-widest">{slides[data].text}</p>
                </div>
                
              </div>
              <button onClick={next}><ChevronRight size={46} className="h-14 max-[940px]:hidden -ml-20 z-20 bg-[#06896B] absolute cursor-pointer text-white"/></button>
            </div>
             
            <div className="p-15 max-[1000px]:p-5 mt-10 text-black">
              
              <div className="flex flex-col gap-6">
               
            <p className="text-3xl text-[#06896B] font-bold max-[500px]:text-3xl">3DWEBSOFT Foundation</p>
            <p className="text-xl font-semibold max-[500px]:text-sm">Empowering India with Education, Skills, and Support</p>
            </div>
            <div className="text-left text-lg flex pt-10 tracking-widest flex-col  gap-7 max-[500px]:text-sm">
            <p>3DWEBSOFT Foundation is a non-profit organization incorporated under Section 8 of the Companies Act, 2013 and registered with the Government of India. The Foundation is committed to transforming lives through education, skill development, employment support, women empowerment, digital literacy, healthcare awareness, and community development.</p>
            <p>With a focus on underserved communities, 3DWEBSOFT Foundation works to create equal opportunities, strengthen livelihoods, and promote dignity, inclusion, and self-reliance.</p>
            <p>Its mission is to empower youth, women, students, and job seekers by providing practical education, industry-relevant skills, career-focused training, and employment opportunities. The Foundation aims to bridge the gap between learning and earning while supporting communities in building sustainable livelihoods.</p>
            <p>3DWEBSOFT Foundation focuses on creating meaningful opportunities through education and skill development programs, employment and placement initiatives, women empowerment programs, and community development activities. Through these initiatives, the Foundation works toward creating a more skilled, empowered, and self-reliant society.</p>
            <p>The Foundation's programs include Computer Training, Web Designing & Development, Full Stack Development, Job Drives, Campus Placements, Employer Tie-Ups, Tailoring & Self-Employment Training, Beauty Parlour Training, Handicrafts & Home Business Support, Health Awareness Camps, Environmental Programs, and Digital Literacy in Rural Areas.</p>
            <p>3DWEBSOFT Foundation also aims to strengthen collaboration between communities, educational institutions, employers, and organizations to create sustainable opportunities for skill development, employment, entrepreneurship, and social development.</p>
            <p>The Foundation places strong emphasis on youth and women empowerment while also working to improve digital access and awareness in underserved communities. Through practical training, placement assistance, vocational programs, and community initiatives, 3DWEBSOFT Foundation strives to turn education and skills into meaningful opportunities and sustainable livelihoods.</p>
            </div>
            </div>

            {/* rotating card spotlight */}
            <div className="flex flex-col gap-5 items-center justify-center pt-30 w-full text-black">
              
              <p className="uppercase text-[#06896B] font-semibold text-6xl max-[500px]:text-3xl">Spotlight</p>
              <p className="text-xl font-semibold text-gray-700 tracking-wider p-5 max-[500px]:text-lg text-center">A glimpse into 3DWEBSOFT Foundation's education, employment, women empowerment, and community development initiatives.</p>


              <div className="grid grid-cols-2 max-[750px]:grid-cols-1 justify-items-center  gap-5 p-5">
                <div className="flex flex-col gap-3">
                  <p className="text-3xl font-semibold text-gray-600 max-[500px]:text-2xl">Computer Training Programs</p>
            <div className="group w-[40vw] max-[750px]:w-[90vw] h-[500px] [perspective:1000px]">
  
  
  
  <div className="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    
    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white [backface-visibility:hidden]">
      <img src="/training.jpeg" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
    </div>

    
    <div className="absolute flex flex-col gap-6 inset-0 h-full w-full rounded-2xl bg-slate-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                              <p>Computer Training Programs are designed to provide individuals with essential digital skills required for education, employment, and everyday professional activities. Participants gain practical computer knowledge through hands-on learning and career-oriented training.</p>
                            <button className="w-fit p-2 rounded-lg border-2 border-white ">Know More</button>
    </div>
    </div>
    
    </div>
    </div>


    {/* rotating cards */}

      <div className="flex flex-col gap-3">
                  <p className="text-3xl font-semibold text-gray-600 max-[500px]:text-2xl">Web Designing & Development</p>
      <div className="group w-[40vw] h-[500px] max-[750px]:w-[90vw] [perspective:1000px]">
  
  
  
  <div className="relative flex h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    
    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white [backface-visibility:hidden]">
      <img src="/web-design.jpeg" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
    </div>

    
    <div className="absolute flex flex-col gap-6 text-white inset-0 h-full w-full rounded-2xl bg-slate-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <p>The Web Designing & Development program provides learners with practical knowledge of designing and developing professional websites. The program focuses on creative design, development skills, and industry-relevant learning.</p>
                            <button className="w-fit p-2 rounded-lg border-2 border-white ">Know More</button>
    </div>
    </div>
    
    </div>
    </div>
      <div className="flex flex-col gap-3">
                  <p className="text-3xl font-semibold text-gray-600 max-[500px]:text-2xl">Full Stack Development</p>
      <div className="group  w-[40vw] h-[500px] max-[750px]:w-[90vw] [perspective:1000px]">
  
  
  
  <div className="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    
    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white [backface-visibility:hidden]">
      <img src="/fullstack.jpeg" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
    </div>

    
    <div className="absolute flex flex-col gap-6 inset-0 h-full w-full rounded-2xl bg-slate-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <p>The Full Stack Development program helps learners build comprehensive technical skills across frontend and backend development. Practical projects and coding experience help participants develop job-ready technology skills.</p>
                           <Link href="/Contact"><button className="w-fit p-2 rounded-lg border-2 border-white ">Know More</button></Link>
    </div>
    </div>
    
    </div>
    </div>
    <div className="flex flex-col gap-3">
                  <p className="text-3xl font-semibold text-gray-600 max-[500px]:text-2xl">Digital Literacy in Rural Areas</p>
      <div class="group  w-[40vw] h-[500px] max-[750px]:w-[90vw] [perspective:1000px]">
  
  
  
  <div class="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    
    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white [backface-visibility:hidden]">
      <img src="/rural.jpeg" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
    </div>

    
    <div class="absolute inset-0 flex flex-col gap-6 h-full w-full rounded-2xl bg-slate-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                              <p>The Digital Literacy initiative aims to provide rural communities with essential digital skills and access to technology-based learning. The program works toward reducing the digital divide and improving digital inclusion.</p>
                            <Link href="/Contact"><button className="w-fit p-2 rounded-lg border-2 border-white ">Know More</button></Link>
    </div>
    </div>
    
    </div>
    </div>
      <div className="flex flex-col gap-3">
                  <p className="text-3xl font-semibold text-gray-600 max-[500px]:text-2xl">Job Drives</p>
      <div class="group  w-[40vw] h-[500px] max-[750px]:w-[90vw] [perspective:1000px]">
  
  
  
  <div class="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    
    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white [backface-visibility:hidden]">
      <img src="/jobdrive.jpeg" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
    </div>

    
    <div class="absolute flex flex-col gap-6 inset-0 h-full w-full rounded-2xl bg-slate-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <p>Job Drives provide candidates with opportunities to interact directly with employers and participate in recruitment processes. These initiatives help connect trained individuals with potential employment opportunities.</p>
                            <Link href="/Contact"><button className="w-fit p-2 rounded-lg border-2 border-white ">Know More</button></Link>
    </div>
    </div>
    
    </div>
    </div><div className="flex flex-col gap-3">
                  <p className="text-3xl font-semibold text-gray-600 max-[500px]:text-3xl">Women Empowerment Programs</p>
      <div class="group  w-[40vw] h-[500px]  max-[750px]:w-[90vw]  [perspective:1000px]">
  
  
  
  <div class="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    
    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white [backface-visibility:hidden]">
      <img src="/emp.jpeg" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />

     
    </div>

    
    <div class="absolute inset-0 h-full flex flex-col gap-5 w-full rounded-2xl bg-slate-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                              <p>3DWEBSOFT Foundation conducts women-focused skill development programs including tailoring, beauty parlour training, handicrafts, and home-business support. These programs are designed to encourage self-employment, entrepreneurship, and financial independence.</p>
                            <Link href="/Contact"><button className="w-fit cursor-pointer p-2 rounded-lg border-2 border-white ">Know More</button></Link>
    </div>
    </div>
    
    </div>
    </div>
  </div>
</div>
<div className="flex max-[979px]:flex max-[979px]:flex-col gap-3 p-5 items-center justify-center w-full pt-20">
  <div className="flex  flex-col gap-5 ">
              <p className="text-center text-[#06896B] font-semibold text-3xl max-[500px]:text-3xl">Impact story</p>
             <img src="/shalini.jpeg" className=" hover:scale-110 max-[979px]:w-[90vw] max-[979px]:h-auto max-[979px]:h-[600px] w-[400px] h-[300px]"/>
             <p className="w-[27vw] max-[979px]:w-[80vw] text-gray-600 text-center italic tracking-widest max-[500px]:text-sm">Shalini: Read Shalini’s inspiring journey from our women empowerment program. With limited opportunities for employment, she developed practical tailoring and self-employment skills through training, helping her gain confidence and work toward becoming financially independent.</p>   
  </div>
  <div className="flex flex-col gap-5">
     <p className="text-center text-[#06896B] font-semibold text-3xl max-[500px]:text-3xl">Success story</p>
             <img src="/rahul.jpeg" className=" hover:scale-110 max-[979px]:w-[90vw] max-[979px]:h-auto max-[979px]:h-[600px] w-[400px] h-[300px]"/> 
             <p className="w-[27vw] max-[979px]:w-[80vw] text-gray-600 text-center italic tracking-widest max-[500px]:text-sm">Rahul: Read Rahul’s success story as he developed his computer and web development skills through practical training. With improved technical knowledge, hands-on experience, and placement support, he gained the confidence to pursue new career opportunities in the technology sector.</p>     
  </div>
  <div className="flex flex-col gap-5">
    <p className="text-center text-[#06896B] font-semibold text-3xl max-[500px]:text-3xl">Community Story</p>
             <img src="/community.jpeg" className="hover:scale-110 max-[979px]:w-[90vw] max-[979px]:h-auto max-[979px]:h-[600px] w-[400px] h-[300px]"/>   
             <p className="w-[29vw] max-[979px]:w-[80vw] max-[500px]:text-sm text-gray-600 text-center italic tracking-widest">Read about 3DWEBSOFT Foundation’s digital literacy initiative in rural communities. Through accessible computer and digital skills training, participants gain the knowledge and confidence to use technology for education, communication, and everyday opportunities.</p>     
  </div>

</div>
<div className="flex gap-10 items-center justify-center max-[1108px]:flex-col pt-20 max-[1108px]:p-5 p-10 w-full">
  
  <img src="/thank.jpeg" className="hover:scale-110 max-[1108px]:w-[90vw] max-[1108px]:h-auto h-[500px]"/>
  
  <div className="flex flex-col items-center max-[1108px]:items-start   gap-2 p-5">

    <p className="text-3xl text-[#06896B] font-semibold max-[1108px]:text-2xl max-[500px]:text-3xl">Thank you for being with us on this journey</p>
    <div className="flex flex-col gap-4 justify-start p-1 w-full tracking-widest max-[500px]:text-sm">
    <p className="text-left w-[35vw] text-gray-800 max-[1108px]:w-[90vw]">Your time, support, participation, and contribution can play a significant role in 3DWEBSOFT Foundation's efforts to empower individuals and strengthen communities.</p>
     <p className="text-left w-[35vw]  text-gray-800 max-[1108px]:w-[90vw]">Together, we can help create opportunities through education, skills, employment, and community development.</p>
     </div>
     <Link href="/Donate"><button className="bg-[#06896B] w-28 py-4 font-semibold rounded-lg hover:scale-105 cursor-pointer">Donate now</button></Link>
  </div>

</div>

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
