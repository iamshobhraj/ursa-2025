import Link from "next/link";
import Nav from "./nav";
import Image from "next/image";
import nitp_logo from "../../public/nitp_logo.png";
export default function Header() {
  return (
    <header className="fixed h-36 top-0 left-0 right-0 bg-white dark:bg-1/6 z-20">
        <div className="flex h-[52%] justify-between items-center px-9">
            <div className="flex flex-col items-center">
                <h1 className={`antialiased text-4xl tracking-[0.2em] font-[family-name:var(--font-poppins)]`}>U<span className="text-stroke">R</span>SA</h1>
                <div className="flex w-full justify-between items-center">
                    {/* <h1 className="font-semibold antialiased text-xs tracking-widest w-full items-center">NIT PATNA</h1> */}
                    <h1 className="font-semibold antialiased text-xs tracking-widest w-full">NOVEMBER 15-16, 2025</h1>
                </div>
            </div>
              <Image
                  src={nitp_logo}
                  alt="nitp logo"
                  height="70"
                  width="70"
                  className="cursor-pointer pt-1"
                  href="https://nitp.ac.in/"
                  />

        </div>
      <Nav />
    </header>
  );
}