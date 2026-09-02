"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Ngo() {

    const partnerLogos = [
  { id: 1,  src: "/magicbus.jpeg" },
  { id: 2,  src: "/casp.jpeg" },
  { id: 3,  src: "/talwar.jpeg" },
  { id: 4,  src: "/sleepwell.jpg" },
  { id: 5,  src: "/deepalaya.jpeg" },
  { id: 6,  src: "/earth.jpeg" },
  { id: 7,  src: "/prayatna.jpeg" },
  { id: 8,  src: "/cks.jpeg" },
  { id: 9,  src: "/lakshya.jpeg" },
  { id: 10, src: "/sakashm.jpeg" },
  { id: 11, src: "/smile.png" },
  { id: 12, src: "/reach.png" },
  { id: 13, src: "/Niveda.jpeg" },
  { id: 14, src: "/Udaan.jpeg" },
  { id: 15, src: "/Noda.jpeg" },
  { id: 16, src: "/nab.jpeg" },
  { id: 17, src: "/adarshila23.jpeg" },
  { id: 18, src: "/rotary.jpeg" },
  { id: 19, src: "/youthinvest.jpeg" },
];

const partnering=[...partnerLogos,...partnerLogos]

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/ngorg.jpeg" className="w-full h-[790px]  max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center  max-[887px]:mt-20 justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold max-[500px]:text-2xl">NGO Partners</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-20 text-black  p-15 max-[1000px]:mt-10 max-[1000px]:p-5">
                    <div className="flex flex-col items-start justify-center gap-20">
                        <div className="flex flex-col gap-7">
                    <p className="text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">3DReach Program</p>
                    <p className="w-[90vw] max-[500px]:text-sm">3DWebSoft Foundation, through its 3DReach Program, works to build the capacity of partner NGOs that are providing training and education opportunities to underprivileged youth across the country. </p>
                    <p className="max-[500px]:text-sm">Under 3DReach, we equip our partners with all the support they need to implement high-quality programs that create real benefit for young people.</p>
                    <p className="max-[500px]:text-sm"> Faculty training, curriculum, assessments, and industry-recognized certification are some of the key offerings we provide to partner organizations.</p>
                   
                    
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="uppercase text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">3DReach Partner Process</p>
                        <ul className="flex flex-col gap-3 list-disc pl-10">
                            <li className="max-[500px]:text-sm">Organizations undergo a detailed selection process.</li>
                            <li className="max-[500px]:text-sm">Selected partners enter into an agreement with 3DWebSoft Foundation.</li>
                            <li className="max-[500px]:text-sm">Training is provided to the faculty of the partner organization.</li>
                            <li className="max-[500px]:text-sm">Mapped courseware is delivered to the partner organization. Partners can choose from a variety of courses — including skill training, career courses, digital literacy, and school IT lab programs — depending on the beneficiary profile and requirements.</li>
                            <li className="max-[500px]:text-sm">Regular handholding and follow-up support is provided to the partner NGO throughout.</li>
                        </ul>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                    <p className="text-3xl font-bold text-[#06896B]">Key NGO Partners</p>
                <div className="w-full overflow-hidden">
                        <div className="marquee-track">
                            {partnering.map((x, index) => (
                                <div key={`${x.id}-${index}`} className="w-[230px] max-[500px]:w-[90vw] h-[300px] shrink-0 border border-black flex items-center justify-center rounded-lg overflow-hidden bg-white">
                                    <img src={x.src} alt={`Funding partner ${x.id}`} className="h-full w-full object-contain" />
                                </div>
                            ))}
                        </div>
                    
            
            </div>
            </div>
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
