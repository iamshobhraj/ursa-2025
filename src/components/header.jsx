import Link from "next/link";
import Nav from "./nav";
import Image from "next/image";
import ursa from "../../public/ursa.webp";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-1/6 z-10">
        <div className="flex h-24 justify-between items-center pl-6">
            <div className="flex flex-col items-center">
                <h1 className="font-extrabold antialiased text-3xl">URSA 2025</h1>
                <h1 className="font-semibold antialiased text-xl">NIT PATNA</h1>
            </div>
              <Image
                  src={ursa}
                  alt="ursa logo"
                  height="80"
                  width="160"
                  />
        </div>
      <Nav />
    </header>
  );
}