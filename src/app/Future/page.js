"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown, ChevronRight, ChevronLeft, Lightbulb, Calendar, DivideCircle, Clock } from "lucide-react";

export default function Future() {
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
      {/* overhead bar */}
      <Overheadbar />

      {/* main */}
      <div className="flex flex-col w-full -mt-10">
        <div className="relative w-full">
          <img src="/kergoling.jpeg" className="w-full h-[790px] max-[887px]:mt-20 object-cover" />
          <div className="absolute inset-0 z-10 flex flex-col items-center max-[887px]:mt-20 justify-center w-full rounded-lg bg-black/56 text-center text-white">
            <p className="text-7xl font-extrabold max-[500px]:text-2xl">Future Tech School Program</p>
          </div>
        </div>

        <div className="flex flex-col gap-7 items-center text-black p-15 max-[1070px]:p-10">
          <div className="flex flex-col items-center gap-8">
            <p className="font-bold text-white bg-yellow-600 rounded-lg w-[150px] text-center py-2 uppercase">our program</p>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-4xl font-bold text-black">Explore Our Future Tech Learning Journey</p>
              <p className="text-black">Choose the perfect technology program designed for every age group</p>
            </div>

            <div className="grid grid-cols-4 max-[1416px]:grid-cols-2 max-[800px]:justify-items-center max-[800px]:grid-cols-1 gap-y-10 gap-x-10">

              {/* Level 1 */}
              <div className="min-h-[300px] w-[22vw] max-[1416px]:w-[45vw] max-[800px]:w-[90vw] relative rounded-lg p-6 flex flex-col gap-5 items-center border border-black shadow-md shadow-gray-400">
                <p className="absolute top-0 bg-yellow-600 rounded-t-lg h-[40px] text-white font-extrabold w-full text-center">Level 1</p>
                <Lightbulb size={50} className="mt-20 text-yellow-600" />
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-2xl font-extrabold">Junior Innovators</p>
                  <p className="text-gray-500">5th - 6th Standard</p>
                  <img src="/juniorinnovator.jpeg" className="w-[55vw] object-cover h-[200px]" />
                  <div className="mt-10 flex flex-col items-start justify-start max-[800px]:w-[80vw] w-full">
                    <p>Computer Basics</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Introduction to AI</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Scratch Programming</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Cyber Safety</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Mini AI Projects</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <p className="items-center flex gap-3"><Calendar className="text-yellow-600" size={20} /><span className="font-extrabold">Duration:</span> 5 Months</p>
                  <p className="flex gap-3 items-center"><Clock className="text-yellow-600" size={20} /><span className="font-extrabold">Hours:</span> 300+</p>
                </div>
                <Link href="/Level1" className="bg-yellow-600 rounded-lg p-2 w-full text-center font-bold text-white">View Details</Link>
              </div>

              {/* Level 2 */}
              <div className="min-h-[300px] w-[22vw] max-[1416px]:w-[45vw] max-[800px]:w-[90vw] relative rounded-lg p-6 flex flex-col gap-5 items-center border border-black shadow-md shadow-gray-400">
                <p className="absolute top-0 bg-green-700 rounded-t-lg h-[40px] text-white font-extrabold w-full text-center">Level 2</p>
                <Lightbulb size={50} className="mt-20 text-green-700" />
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-2xl font-extrabold">Young Technologist</p>
                  <p className="text-gray-500">7th - 8th Standard</p>
                  <img src="/technologia.png" className="w-[55vw] object-cover h-[200px]" />
                  <div className="mt-10 flex flex-col items-start justify-start max-[800px]:w-[80vw] w-full">
                    <p>Python Basics</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>AI Tools & ChatGPT</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Machine Learning Basics</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Cyber Security</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>AI Projects</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <p className="items-center flex gap-3"><Calendar className="text-green-700" size={20} /><span className="font-extrabold">Duration:</span> 5 Months</p>
                  <p className="flex gap-3 items-center"><Clock className="text-green-700" size={20} /><span className="font-extrabold">Hours:</span> 300+</p>
                </div>
                <Link href="/Level2" className="bg-green-700 rounded-lg p-2 w-full text-center font-bold text-white">View Details</Link>
              </div>

              {/* Level 3 */}
              <div className="min-h-[300px] w-[22vw] max-[1416px]:w-[45vw] max-[800px]:w-[90vw] relative rounded-lg p-6 flex flex-col gap-5 items-center border border-black shadow-md shadow-gray-400">
                <p className="absolute top-0 bg-blue-700 rounded-t-lg h-[40px] text-white font-extrabold w-full text-center">Level 3</p>
                <Lightbulb size={50} className="mt-20 text-blue-700" />
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-2xl font-extrabold">Future Engineers</p>
                  <p className="text-gray-500">9th - 10th Standard</p>
                  <img src="/technologia2.jpeg" className="w-[55vw] h-[200px] object-cover" />
                  <div className="mt-10 flex flex-col items-start justify-start max-[800px]:w-[80vw] w-full">
                    <p>Python Programming</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Machine Learning</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Data Science Basics</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Ethical Hacking Basics</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Real-Time Projects</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <p className="items-center flex gap-3"><Calendar className="text-blue-700" size={20} /><span className="font-extrabold">Duration:</span> 5 Months</p>
                  <p className="flex gap-3 items-center"><Clock className="text-blue-700" size={20} /><span className="font-extrabold">Hours:</span> 300+</p>
                </div>
                <Link href="/Level3" className="bg-blue-700 rounded-lg p-2 w-full text-center font-bold text-white">View Details</Link>
              </div>

              {/* Level 4 */}
              <div className="min-h-[300px] w-[22vw] max-[1416px]:w-[45vw] max-[800px]:w-[90vw] relative rounded-lg p-6 flex flex-col gap-5 items-center border border-black shadow-md shadow-gray-400">
                <p className="absolute top-0 bg-violet-700 rounded-t-lg h-[40px] text-white font-extrabold w-full text-center">Level 4</p>
                <Lightbulb size={50} className="mt-20 text-violet-700" />
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-2xl font-extrabold">AI-Professional</p>
                  <p className="text-gray-500">11th - 12th Standard</p>
                  <img src="/technologia3.jpeg" className="w-[55vw] object-cover h-[200px]" />
                  <div className="mt-10 flex flex-col items-start justify-start max-[800px]:w-[80vw] w-full">
                    <p>Advanced Python</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Machine Learning & AI</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Generative AI</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Cyber Security</p>
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    <p>Capstone Projects</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <p className="items-center flex gap-3"><Calendar className="text-violet-700" size={20} /><span className="font-extrabold">Duration:</span> 5 Months</p>
                  <p className="flex gap-3 items-center"><Clock className="text-violet-700" size={20} /><span className="font-extrabold">Hours:</span> 300+</p>
                </div>
                <Link href="/Level4" className="bg-violet-700 rounded-lg p-2 w-full text-center font-bold text-white">View Details</Link>
              </div>

            </div>
          </div>
          <Link href="/Courses#formarika" className="bg-[#06896B] mt-5 font-bold hover:scale-110 text-center text-white py-2 rounded-2xl w-[200px]">Enroll now</Link>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
