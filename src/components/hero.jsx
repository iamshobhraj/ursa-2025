import Image from "next/image";
import nitp from "../../public/nitp.webp";

export default function Hero() {
  return (
    <div id="home" className="bg-white daro overflow-hidden h-full">
        <Image
            src={nitp}
            alt="nitp"
            className="h-full object-fill"
        />
    </div>
  );
}