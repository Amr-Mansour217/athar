import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 hero-gradient">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-right mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              حلول تقنية مبتكرة لعالم رقمي متطور
            </h1>
            <p className="text-xl text-white/90 mb-8">
              نساعد الشركات على النمو والتطور من خلال تقديم حلول تقنية متكاملة تلبي احتياجات العصر الرقمي
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse justify-center md:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                تواصل معنا
              </Button>
              <Button 
                onClick={scrollToServices}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                خدماتنا
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="glass-card rounded-2xl p-4 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="صورة توضيحية للتقنيات الحديثة" 
                className="w-full h-auto rounded-xl object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
