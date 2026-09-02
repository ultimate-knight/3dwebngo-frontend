"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle,Check } from "lucide-react";

export default function Literacy() {

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/literatur23.jpeg" className="w-full h-[790px]  max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col max-[887px]:mt-20  items-center justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold max-[500px]:text-2xl">Digital Literacy Program</p>
                </div>
            </div>
            <div className="p-20 mt-10 max-[1000px]:p-5 font-sans text-black">
                <div className="flex flex-col gap-20 items-start">
                    <div className="flex flex-col gap-4">
                    <p className="uppercase text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">Digital Literacy Program</p>
                    <p className="max-[500px]:text-sm">In the current digital age, it is difficult to imagine education and learning without access to technology and e-learning content. Yet a huge digital gap persists in the access to and quality of education provided to the underprivileged sections of our society.</p>
                    <p className="max-[500px]:text-sm">3DWEBSOFT Foundation has made a number of significant interventions to bridge this divide and is striving towards an inclusive and equitable digital India. One of the key interventions in this direction is the Digital Literacy Program.</p>
                    <p className="max-[500px]:text-sm">The pedagogy and curriculum are innovative, striking the right balance between theory and practice and making learning engaging for all. Students who undergo the Digital Literacy training become tech-savvy — able to send and receive emails, search the internet for information, and become aware of the larger world around them.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p className="max-[500px]:text-sm">The Digital Literacy Program begins by mobilising and orienting key stakeholders and the larger community. Students who show interest in enrolling undergo counselling, and their parents are counselled as well and informed about the program's benefits.</p>
                    <p className="max-[500px]:text-sm">The course covers topics ranging from an introduction to digital devices and operating them, to an introduction to the internet, communicating using the internet, and the everyday applications of the internet. The curriculum is designed to provide both theoretical and practical knowledge.</p>
                    <p className="max-[500px]:text-sm"> Students who complete the course are assessed and awarded a certificate at the end. On completion, each student is able to understand the role of digital technology in everyday life and use it effectively.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 pt-20">
                    <div className="flex flex-col gap-5">
                        <p className="text-[#06896B] w-[80vw] font-bold text-3xl text-center max-[500px]:w-[90vw] max-[500px]:text-2xl">3DWEBSOFT Foundation follows three models of implementation in the Digital Literacy Program:</p>
                        <ul className="flex flex-col gap-3 list-disc">
                            <li className="max-[500px]:text-sm"><span className="font-bold">Center-based training</span> — structured digital literacy sessions delivered at 3DWEBSOFT Foundation centers, guided by trained facilitators</li>
                            <li className="max-[500px]:text-sm"><span className="font-bold">Rural outreach</span> — taking digital skills directly into underserved and remote communities to bridge the digital divide at the doorstep</li>
                            <li className="max-[500px]:text-sm"><span className="font-bold">Community-led learning</span> — training local Master Trainers and forming peer groups so digital knowledge continues to spread within the community</li>
                        </ul>
                    </div>
                  
                </div>
                  <div className="flex flex-col items-center gap-3  pt-20">
                        <p className="text-[#06896B] text-3xl font-bold">Success Story</p>
                        <img src="/ashwin.jpeg" className="rounded-full object-cover aspect-square w-[200px] h-[200px]"/>
                        <p className="text-2xl font-semibold ">Ashwin</p>
                        <div className="text-center flex flex-col gap-5 w-[60vw] max-[500px]:w-[90vw] text-left">
                        <p className="max-[500px]:text-sm">Ashwin comes from a farming family in rural Karnataka. His father works the land and his mother manages the home, and with two elder brothers already married, much of the responsibility of supporting the household falls on Ashwin. He began looking for ways to build a better future for his family from a young age.</p>
                        <p className="max-[500px]:text-sm">Ashwin enrolled in the Certified Digital Literacy course at a 3DWEBSOFT Foundation center. He took to the course quickly and, encouraged by his progress, went on to explore more advanced digital skills. When disruptions forced the center to pause in-person classes, Ashwin refused to let his momentum slow — he used the time to volunteer in community awareness drives run by the Foundation.</p>
                        <p className="max-[500px]:text-sm">As soon as online classes began, Ashwin adapted and resumed his learning. He encouraged other children in his area, whose schooling had been interrupted, to keep learning through the Foundation's digital resources. But his proudest achievement has been the change within his own family.</p>
                        <p className="max-[500px]:text-sm"> His mother has begun connecting with other women in the community, motivating them to become digitally literate, and his father — once reserved and rarely one to speak up — now takes it upon himself to spread the importance of education and digital literacy among friends, family, and neighbours. Ashwin has not only transformed his own life, but inspired his parents to lead change in theirs.</p>
                        </div>
                    </div>
                                </div>

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
