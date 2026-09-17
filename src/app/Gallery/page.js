"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Gallery() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col gap-10   w-full">
            <div className="min-w-screen flex flex-col gap-5 items-center text-center max-[1070px]:mt-20 -mt-10 max-[700px]:mt-20 max-[800px]:p-10 justify-center p-5 max-[887px]:mt-30  text-white min-h-[300px] bg-[#4038]">
                            <p className="text-yellow-700 font-semibold ">Gallery</p>
                            <p className="text-4xl font-semibold max-[500px]:text-2xl">Campus Gallery</p>
                            <p className="max-[500px]:text-sm">A glimpse into classrooms, workshops and student life at 3DWEBSOFT foundation.</p>
            </div>
            <div className="pt-10 p-10 grid grid-cols-3 max-[800px]:grid-cols-1 max-[1000px]:grid-cols-2 gap-x-10 gap-y-10">
                <img src="/glimpse1.jpeg" className="w-[30vw] hover:-translate-y-3 transform-transition duration-300 max-[800px]:w-[90vw] max-[1000px]:w-[45vw] h-[500px] object-cover"/>
                <img src="/glimpse2.jpeg" className="w-[30vw] hover:-translate-y-3 transform-transition duration-300 max-[800px]:w-[90vw] max-[1000px]:w-[45vw] h-[500px] object-cover"/>
                <img src="/glimpse3.jpeg" className="w-[30vw] hover:-translate-y-3 transform-transition duration-300 max-[800px]:w-[90vw] max-[1000px]:w-[45vw] h-[500px] object-cover"/>
                 <img src="/glimpse4.jpeg" className="w-[30vw] hover:-translate-y-3 transform-transition duration-300 max-[800px]:w-[90vw] max-[1000px]:w-[45vw] h-[500px] object-cover"/>
                <img src="/glimpse5.jpeg" className="w-[30vw] hover:-translate-y-3 transform-transition duration-300 max-[800px]:w-[90vw] max-[1000px]:w-[45vw] h-[500px] object-cover"/>
                <img src="/glimpse6.jpeg" className="w-[30vw] hover:-translate-y-3 transform-transition duration-300 max-[800px]:w-[90vw] max-[1000px]:w-[45vw] h-[500px] object-cover"/>
            </div>

                                
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
