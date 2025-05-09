import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono, Poppins, Titan_One } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-titan-one",
});

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URSA 2025",
  description: "International Conference on Urban Resilience and Sustainable Architecture, 2025",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${titanOne.variable} antialiased no-scrollbar`}
      >
          <Header />
          <div>
          {children}
          </div>
      </body>
    </html>
  );
}
