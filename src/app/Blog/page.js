"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Blog() {

    
  return (
    <div className="flex flex-col flex-1 transition-transform duration-500 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col    w-full">
            <div className="min-w-screen flex flex-col gap-5 max-[887px]:mt-20 p-10 items-center justify-center max-[887px]:justify-start  text-white min-h-[300px] bg-[#4038]">
                            <p className="text-yellow-700 font-semibold ">Insights / Blogs</p>
                            <p className="text-4xl font-semibold text-center max-[500px]:text-2xl">Blogs, Ideas & Industry Updates</p>
                            <p className="text-lg text-center max-[500px]:text-sm">Technology trends, expert insights and career guidance for students and professionals.</p>
            </div>
            <div className="flex flex-col gap-5 items-center max-[1000px]:p-10 p-20">
                <p className="text-4xl font-bold text-black max-[500px]:text-2xl">Latest From Our Blog</p>
                <p className="text-black text-center text-xl max-[500px]:text-sm w-[50vw] max-[1000px]:w-[90vw] max-[500px]:text-sm">Stay informed with the latest technology trends, expert insights, software development practices, AI innovations, cybersecurity updates, and career guidance designed to empower students, professionals, and businesses in the digital era.</p>
            </div>
            <div className="grid grid-cols-3 max-[1000px]:grid-cols-1 gap-y-10 transform-transition duration-600 p-7 gap-x-10">
                <div className="w-[30vw] max-[1000px]:w-[90vw]  hover:-translate-y-3 transform-transition duration-300 min-h-[500px] rounded-lg border-1 border-black">
                    <img src="webdeveloper2.jpeg" className="w-[30vw] object-cover max-[1000px]:w-[90vw] h-[400px]"/>
                    <p className="p-5 text-black font-semibold max-[500px]:text-sm">Frontend in 2026: What Junior Developers Should Actually Learn First</p>
                </div>
                <div className="w-[30vw]  max-[1000px]:w-[90vw] hover:-translate-y-3 transform-transition duration-300 min-h-[500px] rounded-lg border-1 border-black">
                    <img src="webdeveloper3.jpg" className="w-[30vw]  max-[1000px]:w-[90vw] object-cover h-[400px]"/>
                    <p className="p-5 text-black font-semibold max-[500px]:text-sm">AI for Everyone: How Students Can Use AI Tools Without Falling Behind</p>
                </div>
                 <div className="w-[30vw]   max-[1000px]:w-[90vw] hover:-translate-y-3 transform-transition duration-300 min-h-[500px] rounded-lg border-1 border-black">
                    <img src="ca.jpeg" className="w-[30vw] object-cover  max-[1000px]:w-[90vw] h-[400px]"/>
                    <p className="p-5 text-black font-semibold max-[500px]:text-sm">From Training to First Job: How to Build a Portfolio That Gets You Hired</p>
                </div>
                 
            </div>
            <div className="min-w-screen flex  flex-col gap-5 items-center justify-center  text-white h-[300px] bg-[#4038]">
                            <p className="text-white font-semibold text-4xl text-center max-[500px]:text-2xl">Want More Insights Like These?</p>
                            <p className="text-xl font-semibold max-[500px]:text-sm text-center">Follow our journey as we share what we're learning and building.</p>
                            <Link href="/Contact"><button className="hover:bg-yellow-400 hover:scale-105 px-5 cursor-pointer w-fit bg-yellow-600 text-white rounded-lg p-2">Get in Touch</button></Link>
            </div>

                                
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
