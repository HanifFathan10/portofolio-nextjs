"use client";
import { MetaHead } from "@/components/MetaHead";
import "./globals.css";
import { JetBrains_Mono, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MetaHead
        title="Personal Website"
        description="ini metadata untuk home page"
      />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
