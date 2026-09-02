"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Link from "next/link";
import { ArrowRight} from "lucide-react";
import Overheadbar from "@/Components/Overhead-bar/page";

import axios from "axios";
import {  GraduationCap,
  BookOpen,
  Monitor,
  BriefcaseBusiness,
  Globe,
  MapPin,
  PinIcon,
  PhoneIcon,
  CheckCircle,
  Users, 
  Briefcase,
  LucideLuggage,
  Mail,
  Banknote,
  CurrencyIcon,
  ClipboardList,
  Shield,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight} from "lucide-react";

export default function Careers() {


    
  return (
    <div className="flex flex-col  gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col    w-full">
            <div className="flex gap-4  items-center justify-center">
                <div className="text-black flex flex-col gap-7">
                    <p className="font-bold text-left tracking-widest text-5xl w-[55vw] text-black">Fundraising Executive
<span className="text-[#06896B]"> cum Mobilization Manager</span></p>
<p className="w-[35vw] text-lg text-gray-800">3DWebsoft Foundation is looking for a dynamic, target-oriented and responsible professional to join our team in Narsingi, Hyderabad.</p>
<div className="flex gap-4">
    <a href="mailto:contact@3dwebsoftitsolutions.com?subject=CV Submission" className="rounded-lg bg-[#06896B] flex gap-2 items-center font-bold p-2 text-white">
        <Mail/>
  Share your CV
  
</a>
<a href="mailto:contact@3dwebsoftitsolutions.com?subject=CV Submission" className="rounded-lg bg-[#06896B] flex gap-2 items-center font-bold p-2 text-white">
  View details
  <ArrowRight size={20}/>
</a>
</div>
                </div>
                <img src="/hirangel.jpeg" className="w-[36vw] h-auto rounded-lg"/>
            </div>
            <div className="min-w-screen mt-10 h-0.5 bg-gray-300"></div>
            <div className="grid grid-cols-4 gap-x-5 w-full mt-10 p-10">
                <div className="w-[22vw] shadow-md shadow-gray-500 flex text-black flex-col gap-5 min-h-[50px] border-1 p-3 rounded-lg col-span-1 justify-start items-start border-black">
                        <div className="flex gap-1 items-center">
                            <p className="text-[#06896B]"><Banknote/></p>
                            <p>Salary</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-xl font-bold">₹20,000</p>
                            <p>per month</p>
                        </div>
                </div>
                <div className="w-[22vw] shadow-md shadow-gray-500 flex flex-col gap-5 min-h-[50px] border-1 p-3 text-black rounded-lg col-span-1 justify-self-center border-black">
                    <div className="flex gap-1 items-center">
                            <p className="text-[#06896B]"><Clock/></p>
                            <p>OFFICE TIMING</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-xl font-bold">9:00 AM – 6:00 PM</p>
                            
                        </div>
                </div>
                <div className="w-[22vw] shadow-md shadow-gray-500 flex flex-col gap-5 min-h-[50px] border-1 text-black p-3 rounded-lg col-span-1 justify-self-center border-black">
                    <div className="flex gap-1 items-center">
                            <p className="text-[#06896B]"><Shield/></p>
                            <p>PF</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-xl font-bold">Applicable</p>
                            <p>as per company policy</p>
                        </div>
                </div>
                <div className="w-[22vw] shadow-md shadow-gray-500 flex flex-col gap-5 text-black min-h-[50px] border-1 p-3 rounded-lg col-span-1 justify-self-center border-black">
                    <div className="flex gap-1 items-center">
                            <p className="text-[#06896B]"><Calendar/></p>
                            <p>Workings days</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-xl font-bold">6 Days</p>
                            <p>a week</p>
                        </div>
                </div>
            </div>
            <div className="grid grid-cols-2 max-[1237px]:grid-cols-1 gap-x-10 mt-10 p-10">
                <div className="p-10 flex flex-col gap-7 text-sm shadow-md break-words shadow-gray-500 gap-5 items-start justify-start text-black border-1 border-black rounded-lg min-w-[40vw] min-h-[300px] ">
                            <div className="flex gap-5 items-center">
                                <p className="bg-black/10 rounded-full p-3"><ClipboardList size={30} className="text-[#06896B]"/></p>
                                <p className="font-semibold text-black text-2xl">Key responsibilities</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Identify and approach Corporate CSR teams, donors, foundations & funding agencies</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Generate CSR/fundraising leads and coordinate meetings</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Prepare and follow up on CSR proposals and funding opportunities</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Mobilize students/beneficiaries for skill development, education & employment programs</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Build partnerships with colleges, NGOs, corporates & government institutions</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Conduct awareness programs, seminars, job melas and mobilization drives</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Manage field teams and achieve monthly fundraising & mobilization targets</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><ArrowRight size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Maintain donor, partner and beneficiary databases and submit regular MIS reports</p>
                            </div>
                </div>
                  <div className="p-10 flex flex-col shadow-md text-sm break-words shadow-gray-500 gap-5 items-start justify-start text-black border-1 border-black rounded-lg min-w-[45vw] min-h-[300px] ">
                            <div className="flex gap-5 items-center">
                                <p className="bg-black/10 rounded-full p-3"><Users size={30} className="text-[#06896B]"/></p>
                                <p className="font-semibold text-black text-2xl">Candidate profile</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <p><CheckCircle size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Excellent communication & networking skills</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><CheckCircle size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Strong convincing and follow-up ability</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><CheckCircle size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Experience in fundraising, CSR, mobilization, sales or business development preferred</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><CheckCircle size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Mobilize students/beneficiaries for skill development, education & employment programs</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><CheckCircle size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[100vw]">Willingness to travel and meet organizations/institutions</p>
                            </div>
                             <div className="flex gap-5 items-center">
                                <p><CheckCircle size={20} className="text-[#06896B]"/></p>
                                <p className="break-words w-[40vw] max-[1237px]:w-[80vw]">Target-oriented and self-motivated</p>
                            </div>
                            <div className="w-full h-0.5 bg-gray-200 mt-5"></div>
                            <div className="grid grid-cols-2 gap-x-5">
                                <div className="w-[20vw] flex items-center bg-black/10 gap-5 p-5 min-h-[20px] rounded-lg border-1 border-gray-500">
                                            <p className="text-[#06896B]"><MapPin size={30}/></p>
                                            <div className="flex flex-col">
                                                <p>Job location</p>
                                                <p className="font-bold ">Narsingi, Hyderabad</p>
                                            </div>
                                </div>
                                 <div className="w-[20vw] flex items-center bg-black/10 gap-5 p-5 min-h-[20px] rounded-lg border-1 border-gray-500">
                                            <p className="text-[#06896B]"><BriefcaseBusiness size={30}/></p>
                                            <div className="flex flex-col">
                                                <p>Employment</p>
                                                <p className="font-bold ">Full-Time</p>
                                            </div>
                                </div>
                            </div>
                </div>
            </div>
            <div className="p-10">
                  <div className="w-[95vw] flex items-start p-10 justify-start gap-10 bg-[#06896B] border-1 border-gray-300 rounded-lg min-h-[400px]">
                    <div className="flex flex-col gap-4 ">
                        <p className="font-bold text-4xl">Interested? Share your updated CV.</p>
                        <p className="w-[45vw]">We review every application and will reach out to shortlisted candidates for further discussion.</p>
                         <a href="mailto:contact@3dwebsoftitsolutions.com?subject=CV Submission" className="bg-[#06896B] text-center w-[13vw] rounded-lg border-1 border-white flex gap-2 items-center justify-center font-bold p-2 text-white">
        <Mail/>
  mail your CV
  
</a>
                    </div>
                    <div className="flex flex-col gap-3 break-words bg-[#3C8A7D] p-5 rounded-lg border-1 border-white w-[50vw] min-h-[300px]">
                            <p className="text-xl font-bold">Contact details</p>
                            <div className="flex gap-10  items-center">
                                <p className="w-18">Phone</p>
                                <div className="flex gap-2 items-center">
                                    <p><PhoneIcon size={20}/></p>
                                    <p>91085 34041</p>
                                </div>
                            </div>
                             <div className="flex gap-10  items-center">
                                <p className="w-18">Phone</p>
                                <div className="flex gap-2 items-center">
                                    <p><PhoneIcon size={20}/></p>
                                    <p>93811 92595</p>
                                </div>
                            </div>
                             <div className="flex gap-10  items-center">
                                <p className="w-18">Email</p>
                                <div className="flex gap-2 items-center">
                                    <p><Mail size={20}/></p>
                                    <p>Info@3dwebsoftfoundation.org</p>
                                </div>
                            </div>
                             <div className="flex gap-10  items-center">
                                <p className="w-18">Alt. email</p>
                                <div className="flex gap-2 items-center">
                                     <p><Mail size={20}/></p>
                                    <p>3dwebsoft.edu@gmail.com</p>
                                </div>
                            </div>
                             <div className="flex gap-10 items-center">
                                <p className="w-18">Website</p>
                                <div className="flex gap-2 items-center">
                                    <p><Globe size={20}/></p>
                                    <p>www.3dwebsoftfoundation.org</p>
                                </div>
                            </div>
                    </div>
                  </div>
            </div>
           
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
