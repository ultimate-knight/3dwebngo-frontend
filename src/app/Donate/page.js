"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Donate() {

    
  return (
    <div className="flex flex-col flex-1  transition-transform duration-500 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex gap-5  max-[900px]:flex-col items-center justify-center">
          <div className="flex flex-col gap-10 text-black max-[1065px]:mt-20 max-[900px]:mt-40 max-[700px]:mt-30 max-[887px]:mt-50  w-full max-[900px]:p-10  p-20">
                <p className="text-4xl font-semibold text-[#06896B] max-[500px]:text-2xl">Support Those Who Need It Most</p>      
                <p className="max-[500px]:text-sm">3DWebSoft Foundation provides employability and digital skills training to at-risk youth, so they can build a livelihood and support their families during difficult times. Girls, in particular, need this opportunity — when family resources are limited, their education and skilling are too often the first to be sacrificed.</p>   
                <p className="max-[500px]:text-sm">You can also choose to support at-risk families with essentials like food, learning materials, and other critical needs. And to counter misinformation and the digital divide in underserved communities, you can support us in educating vulnerable sections of society on digital literacy, online safety, and responsible use of technology.</p>  
                <p className="max-[500px]:text-sm">We need your support in this mission. Donate now, and change a life today.</p>      
                <p className="max-[500px]:text-sm">After you donate, please share a screenshot of your contribution at info.3dwebsoftorg@gmail.com so we can acknowledge and track your support.</p>
</div>
<img src="/qrcode56.jpeg" className="w-[30vw] max-[900px]:w-[80vw] max-[900px]:h-auto h-auto"/>
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
