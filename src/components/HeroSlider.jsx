"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import Images
import nitp1 from "../../public/nitp.webp";
import nitp2 from "../../public/nit-patna-006.jpg";
import nitp3 from "../../public/nit-patna-009.jpg";
import ursa from "../../public/ursa.png";

export default function HeroSlider() {
    const images = [
        { img: nitp1, name: "First" },
        { img: nitp2, name: "Second" },
        { img: nitp3, name: "Third" },
    ];

    return (
        <div className="relative w-full h-[95vh] lg:h-screen overflow-hidden">
            <div className="absolute inset-0 bg-black/40 flex  items-end  text-white z-10">
                <div className="w-full flex sm:items-center items-start flex-col sm:flex-row text-center sm:mb-0 mb-28">
                    <Image src={ursa} alt="Ursa" className="sm:mb-4 mb-0 lg:h-[220px] lg:w-[320px] h-[110px] w-[150px]" />
                    <div className="flex flex-col items-start pl-4 sm:pl-0">
                        <h1 className="text-xl sm:text-4xl font-bold text-start text-balance">2025 International Conference on Urban Resilience and Sustainable Architecture</h1>
                        <p className="text-base sm:text-xl sm:mt-2">National Institute of Technology, Patna</p>
                    </div>
                </div>
            </div>
            {/* Swiper Hero Slider inside the existing div */}
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full h-full"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-auto">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                    className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent sm:to-35% to-45%"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
