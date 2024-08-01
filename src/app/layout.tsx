"use client";
import { MetaHead } from "@/components/MetaHead";
import "./globals.css";
import { jetBrains, poppins } from "./font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetBrains.variable}`}>
      <MetaHead
        title="Personal Website"
        description="ini metadata untuk home page"
      />
      <body>{children}</body>
    </html>
  );
}
