'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
    const [activeHash, setActiveHash] = useState('#home');
    const handleScroll = (e, hash) => {
        e.preventDefault();
        setActiveHash(hash);
        const element = document.querySelector(hash);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <nav className="flex justify-between items-center font-semibold font-sans w-full px-6 text-xl">
          <Link href="#home" onClick={(e) => handleScroll(e, '#home')} className={`flex items-center justify-center p-6 w-1/6 ${activeHash === '#home' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                HOME
            </Link>
          <Link href="#about" onClick={(e) => handleScroll(e, '#about')} className={`flex items-center justify-center p-6 w-1/6 ${activeHash === '#about' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                About
            </Link>
          <Link href="#committee" onClick={(e) => handleScroll(e, '#committee')} className={`flex items-center justify-center p-6 w-1/6 ${activeHash === '#committee' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                Committee
            </Link>
          <Link href="#dates" onClick={(e) => handleScroll(e, '#dates')} className={`flex items-center justify-center p-6 w-1/6 ${activeHash === '#dates' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                Important Dates
            </Link>
            <Link href="#regfees" onClick={(e) => handleScroll(e, '#regfees')} className={`flex items-center justify-center p-6 w-1/6 ${activeHash === '#regfees' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                Registeration Fees
            </Link>
            <Link href="#contact" onClick={(e) => handleScroll(e, '#contact')} className={`flex items-center justify-center p-6 w-1/6 ${activeHash === '#contact' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                  Contact
              </Link>

    </nav>
  );
}