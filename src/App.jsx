
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
      <Toaster />
    </div>
  );
};

export default App;
