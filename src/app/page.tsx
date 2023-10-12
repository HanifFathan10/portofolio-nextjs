'use client'
import AboutSection from "@/components/AboutSection/AboutSection";
import EmailSection from "@/components/EmailSection/EmailSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mt-44 mx-auto px-12 py-4">
        <HeroSection></HeroSection>
        <AboutSection id="about" />
        <ProjectsSection id="project" />
        <EmailSection id="contact" />
      </div>
      <FooterSection></FooterSection>
    </main>
  );
}
