'use client';

import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
    const pathname = usePathname();
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname]);

  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
        <Hero />
        <About />
        <Contact />
    </div>
  );
}
