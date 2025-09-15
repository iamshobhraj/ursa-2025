'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

export default function Nav({isMobile}) {
    const [activeHash, setActiveHash] = useState('#home');
    const [isAtBottom, setIsAtBottom] = useState(false);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef(null);

    // Refs for the nav items to calculate the highlight's position
    const navItemRefs = useRef([]);
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0, opacity: 0 });

    const navItems = [
        {label: 'HOME', href: '#home'},
        {label: 'ABOUT', href: '#about'},
        {label: 'COMMITTEE', href: '#committee'},
        {label: 'IMPORTANT DATES', href: '#dates'},
        {label: 'REGISTRATION FEES', href: '#regfees'},
        {label: 'GUIDELINES', href: '#guidelines'},
        {label: 'CALL FOR PAPERS', href: '#call'},
        {label: 'CONTACT', href: '#contact'}
    ];

    // Effect to update the highlight position when activeHash changes or on resize
    useEffect(() => {
        if (isMobile) return;

        const updateHighlight = () => {
            const activeIndex = navItems.findIndex(item => item.href === activeHash);
            const activeNavItem = navItemRefs.current[activeIndex];

            if (activeNavItem) {
                setHighlightStyle({
                    left: activeNavItem.offsetLeft,
                    width: activeNavItem.offsetWidth,
                    opacity: 1,
                });
            }
        };

        // Delay initial calculation to allow for rendering
        const timeoutId = setTimeout(updateHighlight, 100);
        window.addEventListener('resize', updateHighlight);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updateHighlight);
        };
    }, [activeHash, isMobile]);


    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            if (isScrollingRef.current) return;
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

        // Check if at bottom
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            setIsAtBottom(windowHeight + scrollTop >= documentHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            navItems.forEach(section => {
                const element = document.getElementById(section.href.split('#')[1]);
                if (element) observer.unobserve(element);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToNextSection = () => {
        if (isAtBottom) {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // Find next section
        const currentIndex = navItems.findIndex(item => item.href === activeHash);
        const nextIndex = (currentIndex + 1) % navItems.length;
        const nextHash = navItems[nextIndex].href;

        const element = document.querySelector(nextHash);
        if (element) {
            const headerOffset = 160;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = (e, hash) => {
        e.preventDefault();
        setActiveHash(hash);
        isScrollingRef.current = true;

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        const element = document.querySelector(hash);
        if (element) {
            const headerOffset = 160;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000); // Adjust timeout if scrolling takes longer
        } else {
            isScrollingRef.current = false;
        }
    }

    return (
        <nav className={`${isMobile ? 'flex flex-col p-4' : 'flex justify-between items-center font-semibold font-sans w-full text-base h-full'}`}>
            <div
                onClick={scrollToNextSection}
                className="hidden lg:flex justify-center items-center h-full w-1/4 border-r border-solid border-[#333333] cursor-pointer hover:bg-[#f0eee8]"
            >
                {isAtBottom ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
            </div>
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`flex items-center justify-center text-center px-1 h-16 border-b border-gray-600 lg:h-full w-full ${activeHash === item.href ? 'bg-[#333333] text-white' : 'hover:bg-[#f0eee8]'}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );

}
