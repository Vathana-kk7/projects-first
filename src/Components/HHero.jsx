import React, { useState, useEffect } from "react";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsAirplaneFill } from "react-icons/bs";
function HHero() {
  const [menu, setMenu] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false); // 👈 add this
  const images = ["/Angkor4.jpg", "/Angkor2.jpg", "/Angkor3.jpg"];
  const [index, setIndex] = useState(0);
  const [isscroll,setIsScrolled]=useState(false);
  const messages = ["សូមស្វាគមន៍", "មកកាន់ទឹកដីកម្ពុជា"];
  const [displayText, setDisplayText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // background auto slide
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 10000);
    return () => clearInterval(bgInterval);
  }, []);

  // typing animation
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setDisplayText(messages[msgIndex].slice(0, charIndex + 1));
      if (charIndex + 1 === messages[msgIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setMsgIndex((msgIndex + 1) % messages.length);
        }, 1500);
      } else {
        setCharIndex(charIndex + 1);
      }
    }, 200);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, msgIndex]);

  // cursor blinking
  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);
  //set scroll 
  useEffect(()=>{
    const statescrool=()=>{
      if(window.scrollY>50){
          setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll",statescrool);
    return()=> window.removeEventListener("scroll",statescrool);
  },[]);
  return (
    <div className="relative text-white text-2xl">
      {/* Hero background */}
      <div
        className="relative h-[650px] md:h-[940px] bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Header */}
        {/* <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
          ${isScrolled ? "bg-[#231F1F] shadow-lg" : "bg-transparent"}`}
        > */}
          <div className={`k top-0 w-full z-50 fixed  transition-all duration-700 ${isscroll?"bg-[#231F1F]":"tranform"}`}>
              <div className="flex justify-between p-7">
            {/* Desktop header */}
            <div className="hidden lg:flex w-full justify-between items-center text-white">
              <h1 className="font-battambong text-2xl">ខ្មែរ-Tour</h1>
              <div className="flex gap-5">
                <a href="#" className="font-battambong text-xl hover:text-yellow-300">ទំព័រដើម</a>
                <a href="#" className="font-battambong text-xl hover:text-yellow-300">អំពីយើង</a>
                <a href="#" className="font-battambong text-xl hover:text-yellow-300">ទេសចរណ៍</a>
                <a href="#" className="font-battambong text-xl hover:text-yellow-300">ទំនាក់ទំនង</a>
                <a href="#" className="font-battambong text-xl hover:text-yellow-300">ជំនួយការ</a>
              </div>
              <div className="flex gap-5 items-center">
                <IoPeopleCircleOutline className="text-3xl cursor-pointer" />
                <BsFillTelephoneOutboundFill className="text-2xl" />
                <button className="text-xl font-battambong bg-green-400 hover:bg-green-500 transition rounded-2xl py-2 px-5">
                  កក់សំបុត្រ
                </button>
              </div>
          </div>
            {/* </div> */}

            {/* Mobile header */}
            <div className="flex justify-between items-center w-full lg:hidden">
              <IoPeopleCircleOutline className="text-3xl" />
              <h1 className="text-xl font-bold">ខ្មែរ-Tour</h1>
              <button onClick={() => setMenu(!menu)}>
                <IoMdMenu className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Centered hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10">
          <h1 className="text-3xl md:text-6xl font-moul drop-shadow-lg">
            {displayText}
            <span className="text-yellow-400">{showCursor ? "|" : " "}</span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl font-konkhmer leading-relaxed max-w-3xl drop-shadow-md">
            បេតិកភណ្ឌដ៏អស្ចារ្យនៃប្រទេសកម្ពុជា កំពុងរង់ចាំការរុករករបស់អ្នក។
            ចូលរួមក្នុងដំណើរកំសាន្តប្លែកៗមួយជាមួយនឹងការណែនាំពីអ្នកដឹកនាំទេសចរជំនាញ។
          </p>
          <div className="flex gap-5"> 
              <button className="bg-green-400 hover:bg-green-600 transition-transform duration-700 active:ring-1 font-battambong py-2 mt-5 rounded-full px-5 cursor-pointer sm:text-md">
              <div className="flex gap-2 justify-center items-center">
                <BsAirplaneFill />
                តោះយើង 
              </div>
          </button>
          <button
            className="font-battambong text-white py-2 px-5 mt-5 rounded-full active:ring-1 cursor-pointer ">
            ដើរលេងខ្លះទៅ...
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HHero;
