import Image from "next/image";
import nitp1 from "../../public/nitp.webp";
import nitp2 from "../../public/nit-patna-006.jpg";
import nitp3 from "../../public/nit-patna-009.jpg";
import ursa from "../../public/ursa.png";
import { useState } from "react";
import HeroSlider from "./HeroSlider";


export default function Hero() {
  const images=[
    { img:nitp1,
      name:"First",
    },
    {
      img:nitp2,
      name:"Second",
    },
    {
      img:nitp3,
      name:"Third"
    }
  ];
  const [currImg,newImage]=useState(images[1]);
  return (
    <div id="home" className="bg-slate-500 daro overflow-hidden h-full w-full">

        <HeroSlider/>
    </div>
  );
}