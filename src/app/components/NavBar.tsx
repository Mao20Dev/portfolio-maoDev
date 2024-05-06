"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";

declare global {
  interface Window {
    lastScrollTop: number;
  }
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null); // Especifica el tipo de menuRef

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingDown(scrollTop > 0 && scrollTop > (window.lastScrollTop || 0));
      window.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full p-3 bg-neutral-900 bg-opacity-100 ${isScrollingDown ? 'hidden' : 'block'} fixed z-50 ${isMenuOpen ? 'h-auto' : 'h-15'}`} >

      <div className=" container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <Link href="#home" className=''>
            <div className="text-white text-2xl font-bold tracking-widest">
              Maodev
            </div>
          </Link>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                    <></>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <ul
            ref={menuRef}
            className={`${isMenuOpen ? 'block bg-neutral-900  p-4  rounded-sm absolute right-[1.8rem] top-2  z-50' : 'hidden'} md:flex gap-x-10 text-white`}
          >
            <li>
              <Link href="#home" className="text-orange-200 text-sm">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-sm">
                <p>About me</p>
              </Link>
            </li>
            <li>
              <Link href="#work" className="text-sm">
                <p>Work</p>
              </Link>
            </li>
            <li>
              <Link href="#stack" className="text-sm">
                <p>Skills</p>
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm">
                <p>Hire me</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
