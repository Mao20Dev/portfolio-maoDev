"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from 'next/link';

export function Typewriter() {
  const words = [
    // {
    //   text: "Welcome!",
    // },
    {
      text: "I",
    },{
        text: " ",
      },
    {
      text: "am",
    },
    {
        text: " ",
      },
      {
        text: "a",
      },{
        text: " ",
      },
      {
        text: " ",
      },
    {
      text: "Full Stack Developer",
      className: "text-orange-300 dark:text-orange-300",
    }
  ];

  const words2 = [
  
    {
      text: "Full Stack developer",
      className: "text-orange-300 dark:text-orange-300",
    },
  ];
  return (
    <div className=" flex flex-col items-center justify-center h-[40rem]  mt-6">
      <div className=" text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-normal text-center text-white">
        Welcome !
      </div>
      <TypewriterEffectSmooth words={words} />
      {/* <TypewriterEffectSmooth words={words2} /> */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-orange-200  transition-all duration-500"
          style={{ backgroundPosition: '100% 0' }}
        >
          View Work
        </button> */}

  <Link href="#work" >
        <button
          className="flex justify-center items-center group relative  overflow-hidden w-40 h-10 border border-white rounded-xl "
          
        >
          <span
            className="absolute inset-y-0 left-0 w-[2px] bg-orange-200 transition-all group-hover:w-full group-active:bg-orange-200 duration-500"
          ></span>

          <span
            className="relative text-sm flex justify-center items-center font-medium text-white transition-colors group-hover:text-white"
          >
            View Work
          </span>
        </button>
        </Link>

        <Link href="#contact" >
        <button
          className="flex justify-center items-center group relative bg-white  overflow-hidden w-40 h-10 border border-white rounded-xl "
          
        >
          <span
            className="absolute inset-y-0 left-0 w-[2px] bg-orange-200 transition-all group-hover:w-full group-active:bg-orange-200 duration-500"
          ></span>

          <span
            className="relative text-sm flex justify-center items-center font-medium text-orange-200 transition-colors group-hover:text-white"
          >
            Hire me
          </span>
        </button>
        </Link>
       
      </div>
    </div>
  );
}
