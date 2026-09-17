"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import MapEmbed from "@/Components/MapEmbed/page";
import { ChevronDown,ChevronRight,ChevronUp,ChevronLeft, DivideCircle,Check } from "lucide-react";

export default function FAQ() {
    const [state,setState]=useState("")
    
    
  return (
    <div className="flex flex-col flex-1 transition-all duration-300 gap-0 tracking-widest leading-loose  items-center overflow-x-hidden cursor-pointer min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col    w-full items-center  justify-center  text-white ">
            <div className="p-10 font-sans text-white">                      
                    <div className="w-[90vw] bg-[#06896B] flex flex-col items-center justify-center gap-6 max-[1070px]:mt-25 max-[700px]:mt-25 max-[887px]:mt-40 min-h-[300px] p-5 rounded-2xl">
                        <p className="font-extrabold text-4xl tracking-widest uppercase max-[500px]:text-2xl">3DWEBSOFT Foundation FAQ</p>
                        <p className="text-xl text-center w-[80vw] max-[500px]:text-sm text-left">Find answers to common questions about 3DWEBSOFT Foundation's programs and how we support community empowerment in India.</p>
                        <div className="flex flex-col gap-1">
                            <div onClick={()=>setState(state==="computer"?"":"computer")} className="flex transition-all duration-300 justify-between transform-transition duration-500 rounded-lg text-xl font-semibold w-[80vw] p-3 bg-green-950 min-min-h-[50px]">
                                <p className="max-[500px]:text-sm transition-all duration-300">What computer training do you offer?</p>
                                {state==="computer"?<ChevronUp/>:<ChevronDown/>}
                            </div>
                            {state==="computer" && (
                                <div className="flex  justify-between rounded-lg text-xl min-min-h-[100px] font-semibold w-[80vw] p-3  ">
                                    <p className="max-[500px]:text-sm">Our computer training programs cover basic to advanced digital skills suitable for all age groups, focusing on practical knowledge for employment.</p>
                                </div>
                            )}
                           <div onClick={()=>setState(state==="work"?"":"work")} className={`flex justify-between rounded-lg text-xl font-semibold w-[80vw] p-3 bg-green-950 min-h-[50px] `}>
                                <p className="max-[500px]:text-sm">How does the employment support work?</p>
                                 {state==="work"?<ChevronUp/>:<ChevronDown/>}
                            </div>
                            {state==="work" && (
                                <div className="flex justify-between rounded-lg text-xl min-h-[100px] font-semibold w-[80vw] p-3  min-h-[50px]">
                                    <p className="max-[500px]:text-sm">We organize job drives and collaborate with local employers to help you find suitable employment opportunities.</p>
                                </div>
                            )}
                            <div onClick={()=>setState(state==="empowerement"?"":"empowerement")} className="flex  justify-between text-xl font-semibold rounded-lg w-[80vw] p-3 bg-green-950 min-h-[50px]">
                                <p className="max-[500px]:text-sm">What women empowerment programs are available?</p>
                                {state==="empowerement"?<ChevronUp/>:<ChevronDown/>}
                            </div>
                            {state==="empowerement" && (
                                <div className="flex justify-between rounded-lg text-xl min-h-[100px] font-semibold w-[80vw] p-3  min-h-[50px]">
                                    <p className="max-[500px]:text-sm">Women can enroll in our tailoring, beauty parlour, and handicraft training programs designed to promote self-employment and entrepreneurial skills.</p>
                                </div>
                            )}
                            <div onClick={()=>setState(state==="enrollment"?"":"enrollment")} className="flex justify-between text-xl font-semibold rounded-lg w-[80vw] p-3 bg-green-950 min-h-[50px]">
                                <p className="max-[500px]:text-sm">What community development activities do you run?</p>
                                {state==="enrollment"?<ChevronUp/>:<ChevronDown/>}
                            </div>
                             {state==="enrollment" && (
                                <div className="flex justify-between rounded-lg text-xl min-h-[100px] font-semibold w-[80vw] p-3  min-h-[50px]">
                                    <p className="max-[500px]:text-sm">We conduct health awareness camps, environmental programs, and digital literacy initiatives especially targeting rural communities to foster development.</p>
                                </div>
                            )}
                            <div onClick={()=>setState(state==="Info"?"":"Info")} className="flex justify-between text-xl font-semibold rounded-lg w-[80vw] p-3 bg-green-950 min-h-[50px]">
                                <p className="max-[500px]:text-sm">How can I get more information?</p>
                                {state==="Info"?<ChevronUp/>:<ChevronDown/>}
                            </div>
                             {state==="Info" && (
                                <div className="flex justify-between rounded-lg text-xl min-h-[100px] font-semibold w-[80vw] p-3  min-h-[50px]">
                                    <p className="max-[500px]:text-sm">You can contact us via email at santosh.h.rathod@gmail.com for detailed information and enrollment procedures.</p>
                                </div>
                            )}
                            <div onClick={()=>setState(state==="development"?"":"development")} className="flex justify-between transition duration-500 ease-in-out text-xl font-semibold rounded-lg w-[80vw] p-3 bg-green-950 min-h-[50px]">
                                <p className="max-[500px]:text-sm">What community development activities are organised?</p>
                                {state==="development"?<ChevronUp/>:<ChevronDown/>}
                            </div>
                            {state==="development" && (
                                <div className="flex justify-between rounded-lg text-xl min-h-[100px] font-semibold w-[80vw] p-3  min-h-[50px]">
                                    <p className="max-[500px]:text-sm">We conduct health awareness camps, environmental programs, and promote digital literacy in rural areas to strengthen community welfare and sustainable development.</p>
                                </div>
                            )}
                        </div>
                    </div>
                            
              </div>
              
              
              
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
