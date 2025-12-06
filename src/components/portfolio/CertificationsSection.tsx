import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications } from "./projectData";

interface CertificationsSectionProps {
  isDark: boolean;
}

export default function CertificationsSection({ isDark }: CertificationsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Certifications" },
    { key: "cloud", label: "Cloud & Data" },
    { key: "security", label: "Security" },
    { key: "networking", label: "Networking" },
    { key: "development", label: "Development" }
  ];

  const filteredCertifications = activeFilter === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section id="certifications" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Professional certifications demonstrating my commitment to continuous learning
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
                    : isDark
                    ? "border-white/20 text-gray-300 hover:bg-white/5"
                    : "border-black/20 text-gray-700 hover:bg-black/5"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`h-full block backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${
                    isDark 
                      ? "bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10" 
                      : "bg-black/5 border border-black/10 hover:border-blue-500/50 hover:bg-black/10"
                  } hover:shadow-2xl hover:shadow-blue-500/10`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className={`text-sm font-medium mb-2 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}>
                      {cert.issuer}
                    </div>
                    <h3 className={`text-lg font-bold mb-2 leading-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                      {cert.title}
                    </h3>
                    <p className={`text-sm mb-4 leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-xs rounded-full ${
                            isDark
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-500/10 text-blue-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
