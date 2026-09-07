"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  DivideCircle,
} from "lucide-react";

export default function About() {
  const [data, setData] = useState(0);

  function next() {
    if (data < slides.length - 1) {
      setData(data + 1);
    }

    if (data === slides.length - 1) {
      setData(0);
    }
  }

  function prev() {
    if (data > 0) {
      setData(data - 1);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 7000);

    return () => clearTimeout(timer);
  }, [data]);

  const slides = [
    {
      image: "/pexel.jpeg",
      heading: "Women Empowerment Programs",
      text: "3DWEBSOFT Foundation conducts women-focused skill development programs including tailoring, beauty parlour training, handicrafts, and home-business support.",
    },
    {
      image: "/healthbar.jpg",
      heading: "Health Awareness Camps",
      text: "3DWEBSOFT Foundation organizes free health camps and community outreach programs to promote better health and well-being among underserved communities.",
    },
    {
      image: "/rural.jpeg",
      heading: "Digital Literacy in Rural Areas",
      text: "3DWEBSOFT Foundation’s Digital Literacy initiative works to empower rural and underserved communities by providing essential digital skills, access to technology, and opportunities for technology-based learning.",
    },
    {
      image: "/rubaler.jpg",
      heading: "Computer Training Programs",
      text: "3DWEBSOFT Foundation’s Computer Training Programs are designed to equip individuals with essential digital and computer skills that can support their education, employment, and everyday professional activities.",
    },
  ];

  return (
    <div className="flex flex-col flex-1  tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
      {/* overhead bar */}
      <Overheadbar />

      {/* main */}
      <div className="flex flex-col   w-full -mt-10">
        <div className="relative w-full">
          <img src="/abouter.jpeg" className="w-full h-[790px]  max-[887px]:mt-20 object-cover" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full rounded-lg max-[887px]:mt-20 bg-black/56  text-center text-white">
            <p className="text-7xl font-extrabold max-[500px]:text-4xl">About us</p>
          </div>
        </div>
        <div className="p-20 max-[1000px]:p-5 max-[500px]:mt-10 max-[500px]:p-1 max-[887px]:p-5 font-sans text-black">
          <div className="flex flex-col gap-5 p-10 max-[500px]:p-5 text-black">
            <p className="text-[#06896B] text-3xl  uppercase font-bold tracking-widest max-[500px]:text-2xl">
              vision
            </p>
            <p className="font-sans max-[500px]:w-[90vw] max-[500px]:text-sm">
              To become a leading organization in skill development and
              technology solutions — empowering individuals with knowledge and
              practical skills to build a better, self-reliant future for all.
            </p>
          </div>
          <div className="flex flex-col gap-5 max-[500px]:p-4  p-10">
            <p className="text-[#06896B]  max-[500px]:text-2xl text-3xl  uppercase font-bold tracking-widest">
              Mission & Values
            </p>
            <ul className="px-6 flex flex-col max-[500px]:text-sm gap-3 list-disc">
              <li>
                <span className="font-bold">Be Customer Centric</span> — put students and employers first by
                providing high-quality training aligned with industry standards.
              </li>
              <li>
                <span className="font-bold">Deliver on every commitment</span> — ensure strong placement support so
                learning translates into successful careers.
              </li>
              <li>
                <span className="font-bold">Drive Innovation</span> — deliver innovative solutions and
                career-focused programs, and strive for excellence in everything
                we do.
              </li>
              <li>
                <span className="font-bold">Commit to Continuous Improvement</span> — stay dedicated to customer
                satisfaction and ongoing growth.
              </li>
              <li>
                <span className="font-bold">Empower for Self-Reliance</span> — bridge the gap between learning and
                earning for youth, women, students, and job seekers.
              </li>
            </ul>
          </div>
          <div>
          <div className="flex flex-col gap-5 max-[500px]:p-4  p-10">
            <p className="text-[#06896B] max-[500px]:text-2xl text-3xl  uppercase font-bold tracking-widest">
              Governing body
            </p>
            <p className="max-[500px]:text-sm">
              3DWEBSOFT Foundation is a non-profit organization incorporated
              under Section 8 of the Companies Act, 2013 and registered with the
              Government of India. Pursuant to the provisions of the Act, given
              below is the list of Governing Body Members of the 3DWEBSOFT
              Foundation.
            </p>
          </div>
          <div className="grid grid-cols-3  gap-y-12 gap-x-20 max-[1000px]:grid-cols-1 p-3 max-[500px]:pl-8 max-[400px]:pl-6 pl-10">
            <div className="w-[28vw] order-1 max-[1000px]:w-[85vw] flex flex-col hover:-translate-y-5 transform-transition duration-300 p-5 items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/director.jpeg"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold max-[500px]:text-2xl">
                  Santosh H Rathod
                </p>
                <p className="">Founder & CEO</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Leads the vision and strategy for 3DWEBSOFT.INC across training,
                staffing and software delivery.
              </p>
            </div>
            <div className="w-[28vw] order-2 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5 items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/director3.jpeg"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex  flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">
                  Anuradha Devanabonia
                </p>
                <p>Director</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Leads strategic planning and manages key business functions.
              </p>
            </div>
            
            
            <div className="w-[28vw] order-3 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5 items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/director2.jpeg"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">Asha Rathod</p>
                <p>Finance Head</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Handles financial planning, budgeting, and overall financial
                management.
              </p>
            </div>
            <div className="w-[28vw] order-3 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5 items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/director5.jpeg"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">
                  Ramesh Jadhav
                </p>
                <p>Director</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Oversees operations and ensures effective execution of
                organizational goals.
              </p>
            </div>
           
            
            </div>
          {/* </div> */}
          
          {/* franchisee partners */}
            <div className="flex flex-col gap-10 mt-10  p-10">
            <p className="text-[#06896B] max-[500px]:text-2xl text-3xl  uppercase font-bold tracking-widest">
              Franchisee Partners
            </p>
            <p className="max-[500px]:text-sm">
            3DWEBSOFT Foundation, a non-profit organization incorporated under Section 8 of the Companies Act, 2013 and registered with the Government of India, extends its mission through a network of authorized Franchisee Partners.
            </p>
            <p className="max-[500px]:text-sm"> These partners operate under the name and guidelines of the Foundation to deliver its programs and services across various regions. Given below is the list of Franchisee Partners associated with the 3DWEBSOFT Foundation.</p>
          </div>
          <div className="grid grid-cols-3  gap-y-12 gap-x-20 max-[1000px]:grid-cols-1 p-3 max-[500px]:pl-8 pl-10">
            
            <div className="w-[28vw] order-4 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5  items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/wanishree23.png"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">WaniShree</p>
                <p>Franchisee partner</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Oversees operations and ensures effective execution of
                organizational goals.
              </p>
            </div>
            <div className="w-[28vw] order-5 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5  items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/rajkumar.jpeg"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">
                  Rajkumar Naik
                </p>
                <p>Franchisee partner</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Manages daily branch operations, coordinates team activities,
                and ensures quality service delivery.
              </p>
              
            </div>
              <div className="w-[28vw] order-7 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5  items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/ishwari23.png"
                className="w-[150px]  h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">
                  Ishwari Ramesh Kapale
                </p>
                <p>Franchisee partner</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Oversees operations and ensures effective execution of
                organizational goals in vijaypur.
              </p>
            </div>
            
            
            {/* <div className="w-[28vw] order-3 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5 items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/director5.jpeg"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">
                  Ramesh Jadhav
                </p>
                <p>Franchisee partner</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
                Oversees operations and ensures effective execution of
                organizational goals.
              </p>
            </div> */}
            <div className="w-[28vw] order-3 max-[1000px]:w-[85vw] transform-transition duration-300 hover:-translate-y-5 flex flex-col p-5 items-center justify-center gap-3  shadow-xl shadow-gray-300 rounded-lg border-2 border-gray-400 min-h-[300px]">
              <img
                src="/malam96.png"
                className="w-[150px] h-[150px] border-4 border-green-600 aspect-square rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl text-[#06896B] font-bold">
                  Malam
                </p>
                <p>Franchisee partner</p>
              </div>
              <p className="text-center w-[25vw] max-[1000px]:w-[70vw] text-sm">
              Oversees operations and ensures effective execution of organizational goals in bilgi.
              </p>
            </div>
          </div>
          </div>
        
          <div className="flex max-[1000px]:flex-col gap-3 p-7 items-center justify-center pt-20">
            <div className="flex flex-col  gap-5 max-[1000px]:order-2">
              <p className="text-3xl text-[#06896B] font-semibold max-[500px]:text-2xl">Founder Message</p>
              <p className="max-[500px]:text-sm">
                Welcome to 3DWebSoft Foundation. It gives me immense pleasure to
                welcome you to an organization dedicated to transforming lives
                through education, skill development, and employment
                opportunities. Our mission is to empower youth, women, students,
                and job seekers by providing quality training programs that
                prepare them for a successful future. 
              </p>
              <p className="max-[500px]:text-sm">In today’s fast-changing
                world, skills are the key to growth and self-reliance. Through
                our IT courses, vocational programs, job-oriented training, and
                placement assistance, we aim to bridge the gap between learning
                and earning.</p>
              <p className="max-[500px]:text-sm">At 3DWebSoft Foundation, we believe every individual has the potential to succeed when given the right guidance and opportunities. We are committed to creating a platform where dreams turn into careers and talent turns into success.</p>
<p className="max-[500px]:text-sm">I invite students, professionals, institutions, CSR partners, and communities to join hands with us in building a brighter and more skilled tomorrow.
Together, let us learn, grow, and succeed.</p>
            </div>
            <img src="/director.jpeg" className="w-[25vw] max-[1000px]:w-[85vw] max-[1000px]:h-auto max-[1000px]:order-1 h-[350px] shrink-0"/>
          </div>
        </div>
        <div className="flex flex-col max-[640px]:items-center gap-4 p-20  text-black">
          <p className="text-3xl font-semibold text-[#06896B]">Our Credentials</p>
          <div className="overflow-hidden flex flex-col gap-4 border-none rounded-2xl border max-[640px]:w-[90vw]  border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-gray-200 bg-slate-50  px-5 py-4  sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-600">
                  PDF
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Legal disclosure</p>
                  <p className="text-sm text-gray-500">3DWEBSOFT_FOUNDATION.pdf</p>
                </div>
              </div>

              <a
                href="/3DWEBSOFT_FOUNDATION (1).pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#06896B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#056d5c]"
              >
                Open PDF
              </a>
            </div>
            <div className="flex flex-col gap-4 border-b border-gray-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-600">
                  PDF
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Certificate of Incorporation</p>
                  <p className="text-sm text-gray-500">3DWEBSOFT_FOUNDATION.pdf</p>
                </div>
              </div>

              <a
                href="/certificator.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#06896B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#056d5c]"
              >
                Open PDF
              </a>
            </div>
          </div>
        </div>
        
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
