"use client";
import { MetaHead } from "@/components/MetaHead";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MetaHead
        title="Welcome Guys"
        description="ini metadata untuk home page"
      />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
