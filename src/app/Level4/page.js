"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,NotebookIcon,CheckCircle,ChevronLeft, DivideCircle,Check,MapPin, Clock } from "lucide-react";

export default function Level4() {

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          
            <div className="p-10 flex max-[1212px]:flex-col gap-8 items-start  justify-center max-[1000px]:p-10 max-[1000px]:-mt-0  min-w-screen max-[840px]:p-5 font-sans text-black">
                  <div className="flex flex-col gap-7 max-[1212px]:order-2">
                    <p className="bg-violet-600 text-white p-2 w-[100px] text-center rounded-lg font-bold">Level 4</p>
                    <div className="flex flex-col gap-3">
                    <p className="text-4xl font-bold">Advanced Technology
Learning Program</p>
                    <p className="text-xl font-bold">11th - 12th Standard</p>
                    </div>
                    <p className="w-[45vw] max-[1212px]:w-[95vw]">Build advanced technology skills through AI, Generative AI,cybersecurity, programming and real-world projects.</p>
                    <div className="bg-violet-600 p-5 max-[1212px]:w-[95vw] grid grid-cols-4 max-[800px]:grid-cols-2 gap-x-6 gap-y-6  items-center rounded-lg w-[50vw] min-h-[100px]">
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
                     
                  </div>
                  
                    <img src="technologia3.jpeg" className="w-[40vw] max-[1212px]:w-[95vw] h-[500px] max-[1212px]:order-1 object-cover"/>
                  

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
