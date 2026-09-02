"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,NotebookIcon,CheckCircle,ChevronLeft, DivideCircle,Check,MapPin, Clock } from "lucide-react";

export default function Level1() {

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          
            <div className="flex p-10 max-[1212px]:flex-col gap-8 items-start max-[1000px]:p-10 max-[1000px]:-mt-0  min-w-screen max-[840px]:p-5 font-sans text-black">
                  <div className="flex flex-col gap-7 max-[1212px]:order-2">
                    <p className="bg-yellow-600 text-white p-2 w-[100px] text-center rounded-lg font-bold">Level 1</p>
                    <div className="flex flex-col gap-3">
                    <p className="text-4xl font-bold">Junior Innovators</p>
                    <p className="text-xl font-bold">5th - 6th Standard</p>
                    </div>
                    <p className="w-[30vw] max-[1212px]:w-[95vw]">Learn advanced programming, machine learning and ethical AI through hands-on projects.</p>
                    <div className="bg-yellow-600 p-5 grid grid-cols-4 max-[800px]:grid-cols-2 gap-x-6 gap-y-6 rounded-lg w-[50vw] max-[1212px]:w-[95vw] min-h-[100px]">
                            <div className="flex gap-5 items-center">
                                <div className="border-2 border-white rounded-full p-2"><Clock /></div>
                                <div className="flex flex-col text-sm gap-2 text-white">
                                    <p>Duration </p>
                                    <p className="-mt-2 font-bold">5 Months*</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="border-2 border-white rounded-full p-2"><NotebookIcon/></div>
                                <div className="flex flex-col text-sm gap-2 text-white">
                                    <p>Learning Hours</p>
                                    <p className="-mt-2 font-bold">200 Hours*</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="border-2 border-white rounded-full p-2"><Clock /></div>
                                <div className="flex text-sm gap-2 flex-col text-white">
                                    <p>Daily</p>
                                    <p className="-mt-2 font-bold">2 Hours</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="border-2 border-white rounded-full p-2"><MapPin/></div>
                                <div className="flex flex-col gap-2 text-sm text-white">
                                    <p>Mode </p>
                                    <p className="-mt-2 font-bold">Online / Offline</p>
                                </div>
                            </div>
                           
                    </div>
                     <div className="flex flex-col gap-3">
                                <p className="text-2xl text-yellow-600 font-bold">Skills Students Gain</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Basic computer skills</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Digital literacy</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Logical thinking</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Creative thinking</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Programming fundamentals</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>AI awareness</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Cyber safety awareness</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Problem-solving</p>
                                <p className="flex gap-3"><CheckCircle className="text-[#06896B]"/>Presentation skills</p>
                            </div>
                  </div>
                  
                    <img src="juniorinnovator.jpeg" className="w-[40vw] max-[1212px]:order-1 max-[1212px]:w-[95vw] h-[500px] max-[1212px]:order-1 object-cover"/>
                  

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
