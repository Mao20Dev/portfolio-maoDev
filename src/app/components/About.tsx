"use client"

import React from 'react'
import Image from 'next/image'
import profile from './aboutmepicture.png'



export default function About() {

    const handleDownloadCV = () => {
        window.open('/LatestCVMauroUribe.pdf', '_blank');
    };
    
    return (
        <div className="w-full bg-neutral-900 p-11 lg:p-0 flex flex-col lg:flex-row relative z-40" id='about'>
            {/* Contenedor de "About Me" */}
            <div className="hidden lg:flex lg:w-1/4 md:flex-col items-end justify-center px-12">
                <div>
                    <div className='text-neutral-800 sm:text-3xl md:text-5xl lg:text-7xl font-bold'>
                        About 
                    </div>
                    <div className='text-neutral-800 sm:text-3xl md:text-5xl lg:text-7xl font-bold'>
                        Me
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden md:w-full md:flex items-center justify-start px-1 py-8 gap-4">
                
                    <div className='text-neutral-800 text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold'>
                        About 
                    </div>
                    <div className='text-neutral-800 text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold'>
                        Me
                    </div>
                
            </div>

            {/* Contenedor de la foto */}
            <div className="bg-neutral-800 w-full lg:w-1/4 flex justify-center px-[12px] lg:px-0">
                <div className="hidden lg:flex h-full items-center justify-center ">
                    <Image
                        src={profile}
                        width={900}
                        height={300}
                        alt="Picture of the author MaoDev"
                        style={{objectFit: "contain"}}
                        
                    />
                </div>
                <div className="lg:hidden flex h-full items-center justify-center  ">
                    <Image
                        src={profile}
                        width={300}
                        height={300}
                        alt="Picture of the author MaoDev"
                        style={{objectFit: "contain"}}
                    />
                </div>
            </div>

            {/* Contenedor de la descripción */}
            <div className="w-full lg:w-2/4 px-4 py-11">
                    <div className='text-zinc-400 tracking-[18px] mb-3 text-xl'>WHO AM I</div>
                    <div className='text-white text-4xl font-semibold bg-orange-300 inline-block mb-10 p-2 '>MAURO URIBE.</div>
                    <div className='text-white text-xl mb-3'>Professional Web Developer</div>
                    <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[85%]'>
                    I am an electromechanical engineer CUM LAUDE who found his passion in programming and its immediacy and ease to develop tangible and real projects. 
                    </div>

                    <div className='text-neutral-400 leading-6  mb-2 text-md w-full md:w-[85%]'>
                    Gamer by birth. 
                    </div>
                    <div className='text-neutral-400 leading-6 mb-2 text-md w-full md:w-[85%]'>
                    Reader of poetry and not very long novels. 
                    </div>
                    <div className='text-neutral-400 leading-6 mb-2 text-md w-full md:w-[85%]'>
                    Anime lover. 
                    </div>
                    <div className='text-neutral-400 leading-6 mb-2 text-md w-full md:w-[85%]'>
                    I love learning new things.
                    </div>
                    
                        <button
                        className="flex justify-center items-center group relative bg-white  overflow-hidden w-40 h-10 border border-white rounded-xl mt-8"
                        onClick={handleDownloadCV}
                        >
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-orange-200 transition-all group-hover:w-full group-active:bg-orange-200 duration-500"
                        ></span>

                        <span
                            className="relative text-sm flex justify-center items-center font-medium text-orange-200 transition-colors group-hover:text-white"
                        >
                            Download CV
                        </span>
                        </button>
        
                </div>
                
        </div>

    )
}
