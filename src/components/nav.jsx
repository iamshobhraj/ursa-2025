'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav({isMobile}) {
    const [activeHash, setActiveHash] = useState('#home');
    const navItems = [
        {label: 'HOME', href: '#home'},
        {label: 'ABOUT', href: '#about'},
        {label: 'COMMITTEE', href: '#committee'},
        {label: 'IMPORTANT DATES', href: '#dates'},
        {label: 'REGISTRATION FEES', href: '#regfees'},
        {label: 'GUIDELINES', href: '#guidelines'},
        {label: 'CALL FOR PAPERS', href: '#call'},
        {label: 'CONTACT', href: '#contact'}
    ]

    useEffect(() => {
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

        navItems.forEach(section => {
            const element = document.getElementById(section.href.split('#')[1]);
            if (element) observer.observe(element);
        });

        return () => {
            navItems.forEach(section => {
                const element = document.getElementById(section.href.split('#')[1]);
                if (element) observer.unobserve(element);
            });
        };
    }, []);
    const handleScroll = (e, hash) => {
        e.preventDefault();
        setActiveHash(hash);
        const element = document.querySelector(hash);
        if (element) {
            const headerOffset = 160;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <nav className={`${isMobile ? 'flex flex-col p-4' : 'flex justify-between items-center font-semibold font-sans w-full text-lg h-full'}`}>
            <div className="hidden lg:flex justify-center items-center h-full w-1/3 border-r border-solid border-[#333333]">X</div>
            {navItems.map((item, index) => (
                <Link key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)} className={`flex items-center justify-center h-16 border-b border-gray-600 lg:h-full w-full ${activeHash === item.href ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}>
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}