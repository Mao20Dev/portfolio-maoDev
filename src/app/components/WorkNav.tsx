'use client'


import React from 'react'
import { Link } from "next-view-transitions";
import { usePathname, useRouter } from 'next/navigation';

export default function WorkNav() {
    const router = usePathname()

    const isActive = (href:any) => router === href

 
  return (
    <div className=" w-full bg-stone-950 flex gap-0 md:gap-2  relative z-40 p-0 md:p-11">
        <Link href='/' className={isActive("/")?  "text-white  bg-orange-300 p-5 font-bold tracking-normal w-full flex justify-center  text-sm sm:text-2xl md:text-3xl lg:text-4xl rounded-sm" :"text-neutral-800  p-5 font-bold tracking-normal w-full flex justify-center  text-sm sm:text-2xl md:text-3xl lg:text-4xl hover:bg-orange-100 transition-all duration-10 rounded-sm"}>
        Fullstack
        </Link>

        <Link href='/front' className={isActive("/front")?  "text-white  bg-orange-300 p-5 font-bold tracking-normal w-full flex justify-center  text-sm sm:text-2xl md:text-3xl lg:text-4xl rounded-sm" :"text-neutral-800  p-5 font-bold tracking-normal w-full flex justify-center  text-sm sm:text-2xl md:text-3xl lg:text-4xl hover:bg-orange-100 transition-all duration-10 rounded-sm"}>
        Frontend
        </Link>

        <Link href='/back' className={isActive("/back")?  "text-white  bg-orange-300 p-5 font-bold tracking-normal w-full flex justify-center text-sm sm:text-2xl md:text-3xl lg:text-4xl rounded-sm" :"text-neutral-800  p-5 font-bold tracking-normal w-full flex justify-center  text-sm sm:text-2xl md:text-3xl lg:text-4xl hover:bg-orange-100 transition-all duration-10 rounded-sm"}>
        Backend
        </Link>
    </div>
  )
}
