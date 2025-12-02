import { motion } from "framer-motion";
import { Code, GitMerge, Zap } from "lucide-react";

interface SkillsSectionProps {
  isDark: boolean;
}

export default function SkillsSection({ isDark }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "HTML & CSS/Bootstrap", level: 85 },
        { name: "C#", level: 75 },
        { name: "PHP", level: 75 },
        { name: "Python & Java", level: 60 }
      ]
    },
    {
      title: "Development & Cloud",
      icon: GitMerge,
      skills: [
        { name: "Backend Development (API)", level: 80 },
        { name: "Git & Version Control", level: 85 },
        { name: "Oracle Cloud Infrastructure", level: 80 },
        { name: "SDLC & Data Management", level: 75 }
      ]
    },
    {
      title: "Tools & Security",
      icon: Zap,
      skills: [
        { name: "Microsoft Office Suite", level: 90 },
        { name: "Visual Studio & GitHub", level: 85 },
        { name: "Cisco Packet Tracer", level: 75 },
        { name: "Cybersecurity Fundamentals", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20">
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
              Skills
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`backdrop-blur-xl rounded-3xl p-8 ${
                isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDark ? "bg-gray-800" : "bg-gray-200"
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
