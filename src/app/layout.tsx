"use client";
import { MetaHead } from "@/components/MetaHead";
import "./globals.css";
import { JetBrains_Mono, Poppins } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrains",
  display: "swap",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-cubic",
      once: false,
      mirror: true,
      offset: 200,
      // debounceDelay: 50,
      delay: 300,
      duration: 600,
    });
  }, []);
  return (
    <html lang="en">
      <MetaHead title="Personal Website" description="ini metadata untuk home page" />
      <body className={`${poppins.variable} ${jetBrains.variable} scroll-smooth`}>{children}</body>
    </html>
  );
}
