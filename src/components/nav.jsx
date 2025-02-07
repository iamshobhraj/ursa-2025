'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
    const [activeHash, setActiveHash] = useState('#home');

    useEffect(() => {
        const sections = ['home', 'about', 'committee', 'dates', 'regfees', 'guidelines', 'call', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveHash('#' + entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) observer.unobserve(element);
            });
        };
    }, []);
    const handleScroll = (e, hash) => {
        e.preventDefault();
        setActiveHash(hash);
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className="flex justify-between h-[48%] items-center font-semibold font-sans w-full text-lg">
            <div className="flex justify-center items-center h-full w-1/3 border-r border-solid border-[#333333]">X</div>
            <Link href="#home" onClick={(e) => handleScroll(e, '#home')} className={`flex items-center justify-center h-full w-full ${activeHash === '#home' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                HOME
            </Link>
            <Link href="#about" onClick={(e) => handleScroll(e, '#about')} className={`flex items-center justify-center  h-full w-full ${activeHash === '#about' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                ABOUT
            </Link>
            <Link href="#committee" onClick={(e) => handleScroll(e, '#committee')} className={`flex items-center justify-center h-full w-full ${activeHash === '#committee' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                COMMITTEE
            </Link>
            <Link href="#dates" onClick={(e) => handleScroll(e, '#dates')} className={`flex items-center justify-center h-full w-full ${activeHash === '#dates' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                IMPORTANT DATES
            </Link>
            <Link href="#regfees" onClick={(e) => handleScroll(e, '#regfees')} className={`flex items-center justify-center  h-full w-full ${activeHash === '#regfees' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                REGISTRATION
            </Link>
            <Link href="#guidelines" onClick={(e) => handleScroll(e, '#guidelines')} className={`flex items-center justify-center  h-full w-full ${activeHash === '#guidelines' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                GUIDELINES
            </Link>
            <Link href="#call" onClick={(e) => handleScroll(e, '#call')} className={`flex items-center justify-center  h-full w-full ${activeHash === '#call' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                CALL FOR PAPERS
            </Link>
            <Link href="#contact" onClick={(e) => handleScroll(e, '#contact')} className={`flex items-center justify-center  h-full w-full ${activeHash === '#contact' ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                CONTACT
            </Link>

        </nav>
    );
}