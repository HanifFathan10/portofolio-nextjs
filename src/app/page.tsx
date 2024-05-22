"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import EmailSection from "@/components/EmailSection/EmailSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-black overflow-hidden font-poppins">
      <Navbar />
      <HeroSection />
      <AboutSection id="about" />
      <ProjectsSection id="project" />
      <EmailSection id="contact" />
    </main>
  );
}
