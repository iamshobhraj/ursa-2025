'use client';
import Link from "next/link";
import Nav from "./nav";
import Image from "next/image";
import nitp_logo from "../../public/nitp_logo.png";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed flex flex-row lg:flex-col h-24 lg:h-36 top-0 left-0 right-0 bg-white dark:bg-1/6 z-20">
        <div className="flex h-full lg:h-[52%] justify-between items-center px-9 w-full">
            <div className="flex flex-col items-center">
                <h1 className={`antialiased text-4xl tracking-[0.2em] font-[family-name:var(--font-poppins)]`}>U<span className="text-stroke">R</span>SA</h1>
                <div className="flex w-full justify-between items-center">
                    <h1 className="font-semibold antialiased text-xs tracking-widest w-full">NOVEMBER 15-16, 2025</h1>
                </div>
            </div>
              <Image
                  src={nitp_logo}
                  alt="nitp logo"
                  height="70"
                  width="70"
                  className="invisible lg:visible cursor-pointer pt-1"
                  href="https://nitp.ac.in/"
                  />
                <button
                    className="lg:hidden z-50 p-2"
                    onClick={toggleMenu}
                >
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 tranlate-y-2.5' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 tranlate-y-2.5' : ''}`}></span>
                    </div>
                </button>
        </div>
        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed top-24 right-0 h-screen w-64 bg-white dark:bg-gray-800 transform trabsition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <Nav isMobile={true} />
        </div>

        {/* Desktop Navigation*/}
        <div className="hidden lg:block h-full">
            <Nav />
        </div>
    </header>
  );
}