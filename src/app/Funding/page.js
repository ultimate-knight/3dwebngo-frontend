"use client"
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";

export default function Funding() {
   const partnerLogos = [
  { id: 1,  src: "/infoedge.jpeg" },
  { id: 2,  src: "/chiratae.jpeg" },
  { id: 3,  src: "/omidyar.jpeg" },
  { id: 4,  src: "/lightspeed.jpeg" },
  { id: 5,  src: "/venture.jpeg" },
  { id: 6,  src: "/orios.jpeg" },
  { id: 7,  src: "/kalaari.jpeg" },
  { id: 8,  src: "/sequioa.jpeg" },
  { id: 9,  src: "/ivycap.jpeg" },
  { id: 10, src: "/stellaris.jpeg" },
  { id: 11, src: "/blume.jpeg" },
  { id: 12, src: "/ankur.jpeg" },
  { id: 13, src: "/accel.jpeg" },
  { id: 14, src: "/matrix.jpeg" },
  { id: 15, src: "/eppendorf.jpeg" },
  { id: 16, src: "/cipla.jpeg" },
  { id: 17, src: "/hdfc.jpeg" },
  { id: 18, src: "/persistent.jpeg" },
  { id: 19, src: "/praj.jpeg" },
  { id: 20, src: "/intox.jpeg" },
];

  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/rightnow600.jpeg" className="w-full h-[790px]  max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center max-[887px]:mt-20 justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold max-[500px]:text-2xl">Funding Partners</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-20 text-black  p-15 max-[1000px]:p-5 mt-10">
                    <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">PARTNER WITH 3DWEBSOFT FOUNDATION</p>
                    <p className="w-[80vw] max-[1000px]:w-[90vw] max-[500px]:text-sm">At 3DWebSoft Foundation, we deeply value our collaborations with the funding partners who support us in our mission to eliminate unemployment and digital illiteracy across India.</p>
                    <p className="max-[500px]:text-sm">3DWebSoft Foundation has well-defined, technology-driven systems and processes in place to deliver skill-development and empowerment programs at the grassroots level.</p>
                    <p className="max-[500px]:text-sm">  We are committed to ensuring a high level of transparency, which builds the credibility and accountability that define every project we deliver with our corporate partners.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="uppercase text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">Reasons to partner with us:</p>
                        <ul className="flex flex-col gap-3 list-disc pl-10 max-[500px]:text-sm">
                            <li>A trusted and dedicated partner to manage and execute your CSR projects.</li>
                            <li>Complete transparency and accountability at every stage.</li>
                            <li>Greater social impact by maximizing the reach of your philanthropic investment.</li>
                            <li>Strong community presence with deep local roots.</li>
                            <li>Scalable and replicable programs designed for long-term change.</li>
                        </ul>
                    </div>
            </div>
            <div className="flex flex-col gap-8 items-center p-40 max-[1090px]:p-10 max-[800px]:p-20">
                    <p className="text-3xl font-bold text-[#06896B] w-[90vw] pl-10 max-[500px]:text-2xl text-center">Key Funding Partners</p>
                    <div className="w-full overflow-hidden">
                        <div className="marquee-track">
                            {partnerLogos.map((x, index) => (
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
