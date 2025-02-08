'use client';

import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Call from "../components/call";
import Committee from "@/components/committee";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Dates from "@/components/dates";
import RegFees from "@/components/regfees";
import Guidelines from "@/components/guidelines";

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
    <div className="flex flex-col items-center justify-center h-full py-2 ">
        <Hero />
        <About />
        <Committee />
        <Dates />
        <RegFees />
        <Guidelines />
        <Call/>
        <Contact />
    </div>
  );
}
