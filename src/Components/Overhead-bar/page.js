 "use client"
 import { useState,useEffect,useRef} from "react"
 import Link from "next/link";
 import { MenuIcon,XIcon } from "lucide-react";
 import { usePathname } from "next/navigation";
 import {
  
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  
} from "react-icons/fa";




 export default function Overheadbar(){

    const pathname=usePathname()

    const mobileref=useRef(null);
      
      const [state,setState]=useState(null)
      const [active,setActive]=useState(null)
      const [hover,setHover]=useState(null)
      const [display,setDisplay]=useState(null)
      const [ham,setHam]=useState(false)
    
      const showdisplay=hover || display

      const text="3DWEBSOFT Foundation is a non-profit organization incorporated under Section 8 of the Companies Act, 2013 and registered with the Government of India.The Foundation is committed to transforming lives through education, skill development, employment support, women empowerment, digital literacy, healthcare awareness, and community development.3DWEBSOFT Foundation is a non-profit organization incorporated under Section 8 of the Companies Act, 2013 and registered with the Government of India.The Foundation is committed to transforming lives through education, skill development, employment support, women empowerment, digital literacy, healthcare awareness, and community development."

      const partnerText=[...text,...text]

    useEffect(()=>{
      if(!pathname) return
       setHam(true);
      setHover(null);

      const p = pathname.toLowerCase()
      if(p === "/") setActive("home")
      else if(p==="/about") setActive("about")
      else if(p==="/skill" || p==="/digital" || p==="/literacy" || p==="/future") setActive("programs")
     else if(p.startsWith("/funding") || p.startsWith("/placement") || p.startsWith("/ngo") ) setActive("partners")
    else if(p.startsWith("/impact") || p.startsWith("/courses") || p.startsWith("/gallery") || p.startsWith("/blog") ) setActive("resources")
      else if(p.startsWith("/contact")) setActive("contact")
    else if(p.startsWith("/faq")) setActive("faq")
      else setActive(null)
    },[pathname])


    useEffect(()=>{
      function clicker(event){
        if(window.innerWidth>=1040){
          return
        }

        if(mobileref.current && !mobileref.current.contains(event.target)){
          setHam(true)
          setHover(null)
        }
      }

      document.addEventListener("pointerdown",clicker)

      return ()=>document.removeEventListener("pointerdown",clicker)
    },[])
    
      
    
     
 
 return (
 <div className="flex flex-col transform:transition text-white duration-300 z-80 gap-5 top-0 h-64  min-w-screen p-5 ">
                <div className="bg-white w-full h-32 flex max-[1066px]:flex-col max-[1066px]:h-64 gap-20 max-[1066px]:gap-5 items-center justify-center">
                      <div className="flex gap-4 max-[887px]:grid max-[887px]:grid-cols-2 max-[887px]:gap-x-10 max-[887px]:place-items-center ">
                        <Link className="hover:-translate-y-3 transform:transition duration-300" href="/Contact"><button className="border-1 cursor-pointer border-white bg-[#06896B] text-white font-bold rounded-full py-3 text-sm px-7">Volunteer</button></Link>
                        <Link className="hover:-translate-y-3 transform:transition duration-300" href="/Donate"><button className="border-1 cursor-pointer border-white bg-[#06896B] text-white font-bold rounded-full py-3 text-sm px-7">Donate</button></Link>
                        <Link className="hover:-translate-y-3 transform:transition duration-300" href="/Learn"><button className="border-1 border-white bg-[#06896B] text-white font-bold cursor-pointer rounded-full py-3 px-7 text-sm">Learn-Lms</button></Link>
                        <Link  href="/Careers" className="border-1 hover:-translate-y-3 transform:transition duration-300 border-white bg-[#06896B] text-white font-bold text-sm rounded-full py-3 px-7">Join-Us</Link>
                        
                      </div>
                      
                      <div className="flex gap-3 transform:transition duration-300">
                           <Link className="hover:-translate-y-3 transform:transition duration-300" href="https://www.facebook.com/share/17i8pDvytw/"><p className="bg-blue-600 p-3 rounded-lg"><FaFacebookF/></p></Link>
                  <Link className="hover:-translate-y-3 transform:transition duration-300" href="https://www.instagram.com/3dwebsoft_foundation"><p className="bg-blue-600  p-3 rounded-lg bg-pink-300"><FaInstagram/></p></Link>
                  <p className="bg-blue-600 cursor-pointer p-3 rounded-lg hover:-translate-y-3 transform:transition duration-300"><FaTwitter/></p>
                  <p className="bg-red-600 p-3 cursor-pointer rounded-lg hover:-translate-y-3 transform:transition duration-300"><FaYoutube/></p>
                  <p className="bg-blue-600 p-3 cursor-pointer rounded-lg hover:-translate-y-3 transform:transition duration-300"><FaLinkedinIn/></p>
                      </div>
                      <Link href="/Login" className="bg-[#06896B] py-2 px-7 rounded-full hover:-translate-y-3 transform:transition duration-300 text-white rounded-2xl    text-center font-semibold max-[700px]:hidden">Admin</Link>
                </div>
                
                 <div className={`flex justify-start gap-20 p-5 items-center bg-[#06896B] min-w-screen h-30`}>
                  
                      <img src="/images2.jpeg"  className="pl-20 max-[1099px]:-ml-20 h-30 rounded-4xl  w-[270px]"/>
                      <div ref={mobileref} className="min-[1099px]:hidden  flex flex-col items-center justify-center">
                        {ham===true?<MenuIcon onClick={()=>setHam((prev)=>!prev)} size={50} className="absolute right-10"/>:<XIcon onClick={()=>setHam((prev)=>!prev)} size={50} className="absolute right-10"/>}
                          {ham===false && (
                             <div className="flex gap-10 mt-30    max-[1099px]:flex-col  max-[1099px]:absolute max-[1099px]:right-0 max-[1099px]:mt-[600px] max-[1099px]:bg-[#06896B] max-[1099px]:w-[300px] max-[1099px]:items-start max-[1099px]:p-7">
                          
                          <Link onClick={()=>{setActive("home"),setHam(true),setHover(null)}} onMouseLeave={()=>setState(null)} onMouseEnter={()=>setState("home")} href="/" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-16 after:left-0 ${state==="home" || active==="home"?"after:block":"after:hidden"}`}>Home</Link>
                          
                         
                          
                           
                          <Link onClick={()=>{setActive("about"),setHam(true)
          ,setHover(null)}} onMouseLeave={()=>setState(null)} onMouseEnter={()=>{setState("about"); setHover("about")}} href="/About" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-24 after:left-0 ${state==="about" || active==="about"?"after:block":"after:hidden"}`}>about us</Link>
                          
                        
                          <Link onClick={()=>setActive(active==="programs"?"":"programs")} href="" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:left-0 ${state==="programs" || active==="programs"?"after:block":"after:hidden"}`}>programs</Link>
                           {active==="programs" && (
                            <div  className="flex flex-col gap-3 rounded-lg p-1   w-[300px]  bg-[#06896B]">
                                     <Link onClick={()=>{setHover(null)}} href="/Skill"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg ">Skill Development Center</p></Link>
                                     <Link href="/Digital"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Digital Sparks Learning Station</p></Link>
                                  <Link href="/Literacy"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Digital Literacy Program</p></Link>
                                  <Link href="/Future"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Future tech School Program</p></Link>
                                  
                            </div>
                          )}
                          
                          
                          <Link onClick={()=>setActive(active==="partners"?"":"partners")}  href="" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:-left-1 ${state==="partners" || active==="partners"?"after:block":"after:hidden"}`}>partners</Link>
                           {active==="partners" && (
                            <div  className="flex flex-col gap-3 rounded-lg p-1    w-[300px]  bg-[#06896B]">
                                   <Link href="/Funding"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg ">Funding partners</p></Link>
                                  <Link href="/Placement"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Placement partners</p></Link>
                                  <Link href="/Ngo"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">NGO partners</p></Link>
                                  
                            </div>
                          )}
                           
                          <Link onClick={()=>setActive(active==="resources"?"":"resources")}  href="" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:left-0 ${state==="resources" || active==="resources"?"after:block":"after:hidden"}`}>resources</Link>
                          {active==="resources" && (
                            <div className="flex flex-col gap-3 rounded-lg p-1  w-[300px]  bg-[#06896B]">
                                <Link href="/Impact"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg ">Impact stories</p></Link>
                                  <Link href="/Courses"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:hover:bg-green-950 hover:rounded-lg">Courses</p></Link>
                                  <Link href="/Gallery"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:hover:bg-green-950 hover:rounded-lg">Gallery</p></Link>
                                  <Link href="/Blog"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:hover:bg-green-950 hover:rounded-lg">Blogs</p></Link>
                            </div>
                          )}
                          

                          

                         
                          <div className="flex flex-col gap-2">
                          <Link onClick={()=>{setActive("contact"),setHam(true),setHover(null)}} onMouseLeave={()=>setState(null)} onMouseEnter={()=>setState("contact")} href="/Contact" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:ml-0 after:left-0 ${state==="contact" || active==="contact"?"after:block":"after:hidden"}`}>contact us</Link>
                          
                          </div>
                            <div className="flex flex-col gap-2">
                          <Link onClick={()=>{setActive("faq"),setHam(true),setHover(null)}} onMouseLeave={()=>setState(null)} onMouseEnter={()=>setState("faq")} href="/FAQ" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-10 after:ml-0 after:left-0 ${state==="faq" || active==="faq"?"after:block":"after:hidden"}`}>FAQ</Link>
                          
                          </div>
                      </div>
                 

                          )}
                      </div>
                      <div className="flex gap-10 max-[1099px]:hidden max-[1099px]:flex-col">
                          
                          <Link onClick={()=>setActive("home")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>setState("home")} href="/" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-16 after:left-0 ${state==="home" || active==="home"?"after:block":"after:hidden"}`}>Home</Link>

                          
                         
                          
                           
                          <Link onClick={()=>setActive("about")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>{setState("about"); setHover("about")}} href="/About" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-24 after:left-0 ${state==="about" || active==="about"?"after:block":"after:hidden"}`}>about us</Link>
                          
                           
                          <Link onClick={()=>setActive("programs")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>{setState("programs"); setHover("programs")}} href="" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:left-0 ${state==="programs" || active==="programs"?"after:block":"after:hidden"}`}>programs</Link>
                           {showdisplay==="programs" && (
                            <div onMouseLeave={()=>{setHover(null)}} className="absolute  flex flex-col gap-3 rounded-lg p-7 top-[190px]  left-[580px]  w-[300px]  bg-[#06896B]">
                                     <Link href="/Skill"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg ">Skill Development Center</p></Link>
                                     <Link href="/Digital"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Digital Sparks Learning Station</p></Link>
                                  <Link href="/Literacy"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Digital Literacy Program</p></Link>
                                  <Link href="/Future"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Future tech School Program</p></Link>
                                  
                            </div>
                          )}
                          
                          
                          
                          <Link onClick={()=>setActive("partners")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>{setState("partners"); setHover("partners")}} href="" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:-left-1 ${state==="partners" || active==="partners"?"after:block":"after:hidden"}`}>partners</Link>
                           {showdisplay==="partners" && (
                            <div onMouseLeave={()=>{setHover(null)}} className="absolute flex flex-col items-start justify-center gap-3 rounded-lg p-3 top-[190px]  left-[710px]  w-[200px] h-[200px] bg-[#06896B]">
                                   <Link href="/Funding"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg ">Funding partners</p></Link>
                                  <Link href="/Placement"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">Placement partners</p></Link>
                                  <Link href="/Ngo"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg">NGO partners</p></Link>
                                  
                            </div>
                          )}
                           
                          <Link onClick={()=>setActive("resources")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>{setState("resources"); setHover("resources")}} href="" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:left-0 ${state==="resources" || active==="resources"?"after:block":"after:hidden"}`}>resources</Link>
                          {showdisplay==="resources" && (
                            <div onMouseLeave={()=>{setHover(null)}} className="absolute flex flex-col gap-3 rounded-lg p-7 top-[190px]  left-[860px]  w-[200px]  bg-[#06896B]">
                                <Link href="/Impact"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:bg-green-950 hover:rounded-lg ">Impact stories</p></Link>
                                  <Link href="/Courses"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:hover:bg-green-950 hover:rounded-lg">Courses</p></Link>
                                  <Link href="/Gallery"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:hover:bg-green-950 hover:rounded-lg">Gallery</p></Link>
                                  <Link href="/Blog"><p onClick={()=>{setHover(null)}} className="font-semibold cursor-pointer p-2 hover:hover:bg-green-950 hover:rounded-lg">Blogs</p></Link>
                            </div>
                          )}

                         
                          <div className="flex flex-col gap-2">
                          <Link onClick={()=>setActive("contact")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>setState("contact")} href="/Contact" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-28 after:ml-0 after:left-0 ${state==="contact" || active==="contact"?"after:block":"after:hidden"}`}>contact us</Link>
                          
                          </div>
                            <div className="flex flex-col gap-2">
                          <Link onClick={()=>setActive("faq")} onMouseLeave={()=>setState(null)} onMouseEnter={()=>setState("faq")} href="/FAQ" className={`uppercase relative font-bold after:absolute after:bg-white after:h-1 after:w-10 after:ml-0 after:left-0 ${state==="faq" || active==="faq"?"after:block":"after:hidden"}`}>FAQ</Link>
                          
                          </div>
                          <img/>
                          <img/>
                          
                      </div>
                 </div>
                 
          </div>
 )
}