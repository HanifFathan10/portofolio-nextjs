"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import EmailSection from "@/components/EmailSection/EmailSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-primary">
      <div className="flex flex-col max-w-7xl">
        <Navbar />
        <div className="container mt-24 md:mt-40 mx-auto py-4">
          <HeroSection />
          <AboutSection id="about" />
          <ProjectsSection id="project" />
          <EmailSection id="contact" />
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
