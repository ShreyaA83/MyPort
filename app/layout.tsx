import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
// import { Stars } from "@react-three/drei";
import StarsCanvas from "./components/main/StarBackground";
// import Navbar from "./components/main/Navbar";
import {FloatingNav} from "./components/ui/floating-navbar";
import { FaHome } from 'react-icons/fa';


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Shreya's Chaos",
  description: "A chatotic portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased`}
      >
        <StarsCanvas />
        <FloatingNav  navItems={
          
          [
            {name: 'Home', link: '/', icon: <FaHome/>},
            {name: 'Projects', link: '/#projects'},
            {name: 'Connect', link: '/#connect'},
          ]
        } />
        {children}
      </body>
    </html>
  );
}
