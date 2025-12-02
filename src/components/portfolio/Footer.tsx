import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/siyabonga-mkhize-22b1ab313", label: "LinkedIn" }
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={`px-6 py-12 mt-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`w-full h-px mb-12 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Logo size="text-2xl" />
            <p className="mt-4 text-sm max-w-xs">
              ICT Applications Development student passionate about full stack development, cloud infrastructure, and cybersecurity.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="hover:text-blue-500 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className={`p-3 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`w-full h-px my-8 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Siyabonga Mkhize. All Rights Reserved.</p>
          <p className="mt-1">Designed & Built by Siyabonga Mkhize.</p>
        </div>
      </div>
    </footer>
  );
}
