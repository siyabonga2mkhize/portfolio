import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./portfolio/HeroSection";
import AboutSection from "./portfolio/AboutSection";
import SkillsSection from "./portfolio/SkillsSection";
import CertificationsSection from "./portfolio/CertificationsSection";
import TestimonialsSection from "./portfolio/TestimonialsSection";
import ContactSection from "./portfolio/ContactSection";
import Navigation from "./portfolio/Navigation";
import ThemeToggle from "./portfolio/ThemeToggle";
import Footer from "./portfolio/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: "-20% 0px -20% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll("section[id]").forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isDark ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800" : "bg-gradient-to-br from-white via-gray-50 to-slate-100"
    }`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      <Navigation activeSection={activeSection} isDark={isDark} />
      
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

      <main>
        <HeroSection isDark={isDark} />
        <AboutSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <CertificationsSection isDark={isDark} />
        <TestimonialsSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>
      
      <Footer isDark={isDark} />
    </div>
  );
}
