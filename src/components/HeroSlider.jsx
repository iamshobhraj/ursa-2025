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
        <div className="relative w-full h-screen overflow-hidden">
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
                        <div className="w-full h-screen">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 flex  items-end  text-white ">
                            <div className=" w-full flex items-center text-center">
                                <Image src={ursa} alt="Ursa" height={300} width={300} className="mb-4" />
                                <div className="flex flex-col items-start">
                                    <h1 className="text-3xl md:text-4xl font-bold text-start text-balance">2025 International Conference on Urban Resilience and Sustainable Architecture</h1>
                                    <p className="text-lg md:text-xl mt-2">National Institute of Technology, Patna</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
