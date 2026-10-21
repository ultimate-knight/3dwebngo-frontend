"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Gallery() {
  const rezor=[
    {id:1,scr:"video1.mp4"},
    {id:3,scr:"video3.mp4"},
    {id:4,scr:"video4.mp4"},
    {id:5,scr:"video5.mp4"},
    {id:6,scr:"video6.mp4"},
    {id:7,scr:"video7.mp4"},
    {id:8,scr:"video8.mp4"},
    {id:9,scr:"video9.mp4"},
    {id:10,scr:"video10.mp4"},
    {id:11,scr:"video11.mp4"},
    {id:12,scr:"video12.mp4"},
    {id:13,scr:"video13.mp4"},
    {id:14,scr:"video14.mp4"},
    {id:15,scr:"video15.mp4"},
    {id:16,scr:"video16.mp4"},
    {id:17,scr:"video17.mp4"},
    {id:18,scr:"video18.mp4"},
    {id:19,scr:"video19.mp4"},
    {id:20,scr:"video20.mp4"},
    {id:21,scr:"video21.mp4"},
    {id:22,scr:"video22.mp4"},
    {id:23,scr:"video23.mp4"},
    {id:24,scr:"video24.mp4"},
    {id:25,scr:"video25.mp4"},
    {id:26,scr:"video26.mp4"},
  ]

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col gap-10   w-full">
            <div className="min-w-screen flex flex-col gap-5 items-center text-center max-[1070px]:-mt-10 max-[1066px]:mt-10 -mt-10 max-[700px]:mt-10 max-[800px]:p-10 justify-center p-5 max-[887px]:mt-30  text-white min-h-[300px] bg-[#4038]">
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
                {
                  rezor.map(x=>(
                    <div key={x.id} className="w-full">
                      <iframe src={x.scr} title="video mp4" className="w-full aspect-video rounded-lg" allowFullScreen/>
                    </div>
                  ))
                }
            </div>

                                
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
