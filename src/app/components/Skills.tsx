import React from 'react'
import Image from 'next/image'
import python from './assets/python.png'
import typescript from './assets/typescript.png'
import html from './assets/html.png'
import react from './assets/react.png'
import git from './assets/git.png'
import tailwind from './assets/tailwind-css.png'
import linux from './assets/linux.png'
import javascript from './assets/javascript.png'
import bootstrap from './assets/bootstrap.png'
import next from './assets/next.png'
import aws from './assets/aws.png'

export default function Skills() {
  return (
    <div className=" w-full bg-neutral-800 relative z-40 px-10 md:p-12 grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={python}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>Python</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={typescript}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>TypeScript</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={html}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>HTML</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={react}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>React</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={git}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>Git</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={tailwind}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>Tailwind</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={linux}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>Linux</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={javascript}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>JavaScript</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={bootstrap}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>Bootstrap</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={next}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>Next Js</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={aws}
                width={100}
                height={100}
                alt="Picture of the author MaoDev"
                style={{objectFit: "contain"}}
                className="w-12 sm:w-24 h-12 sm:h-24"
            />
            <div className='mt-3 text-zinc-400 text-xl font-semibold'>aws</div>
        </div>
        
    </div>
  )
}
