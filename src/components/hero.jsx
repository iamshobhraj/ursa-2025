import Image from "next/image";
import nitp from "../../public/nitp.webp";

export default function Hero() {
  return (
    <div className="hero overflow-hidden h-full">
        <Image
            src={nitp}
            alt="nitp"
            className="h-full object-fill"
        />
    </div>
  );
}