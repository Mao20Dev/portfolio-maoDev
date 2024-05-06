import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="w-full bg-stone-950 flex gap-0 md:gap-2 relative z-40 p-0 md:p-11" id='contact'>
      <footer className="bg-stone-950 w-full">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-zinc-500 sm:text-5xl">Like what you see? Let's make some magic together!</h2>

            <p className="mx-auto mt-4 max-w-sm text-zinc-500 text-3xl">
              I'm ready to rock your next project. Shall we chat?
            </p>

            <a href="https://api.whatsapp.com/send?phone=573123750476&text=Hi%2C%20I%20just%20saw%20your%20portfolio%20MaoDev." target="_blank" className="mt-8">
              <button className="flex justify-center items-center group relative overflow-hidden w-72 md:w-60 h-12 md:h-20 border border-white rounded-xl">
                <span className="absolute inset-y-0 left-0 w-[2px] bg-orange-200 transition-all group-hover:w-full group-active:bg-orange-200 duration-500"></span>

                <span className="relative text-sm md:text-base w-full flex justify-center items-center font-medium text-white transition-colors group-hover:text-white">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-1 w-7 " /> <p className='w-2/5'>Whatsapp</p> 
                </span>
              </button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
