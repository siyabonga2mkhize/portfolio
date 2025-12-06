// import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactSectionProps {
  isDark: boolean;
}

export default function ContactSection({ isDark }: ContactSectionProps) {

  const socialLinks = [
    { icon: Github, href: "https://github.com/siyabonga2mkhize", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/siyabonga-mkhize-22b1ab313", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
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
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: Mail, text: "siyabonga2mkhize@gmail.com", href: "mailto:siyabonga2mkhize@gmail.com" },
                { icon: Phone, text: "+27 67 989 8434", href: "tel:+27679898434" },
                { icon: MapPin, text: "Durban", href: "#" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <a 
                    href={contact.href}
                    className={`text-lg hover:text-blue-500 transition-colors ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {contact.text}
                  </a>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                      isDark
                        ? "bg-white/5 border border-white/10 hover:bg-white/10"
                        : "bg-black/5 border border-black/10 hover:bg-black/10"
                    }`}
                  >
                    <social.icon className="w-5 h-5 text-blue-500" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form action="https://formspree.io/f/xldqlzvv" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    Name
                  </label>
                  <Input
                    name="name"
                    required
                    className={`backdrop-blur-xl rounded-2xl border-0 ${
                      isDark ? "bg-white/10 text-white placeholder-gray-400" : "bg-black/5 text-gray-900"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    className={`backdrop-blur-xl rounded-2xl border-0 ${
                      isDark ? "bg-white/10 text-white placeholder-gray-400" : "bg-black/5 text-gray-900"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}>
                  Subject
                </label>
                <Input
                  name="subject"
                  required
                  className={`backdrop-blur-xl rounded-2xl border-0 ${
                    isDark ? "bg-white/10 text-white placeholder-gray-400" : "bg-black/5 text-gray-900"
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}>
                  Message
                </label>
                <Textarea
                  name="message"
                  required
                  rows={6}
                  className={`backdrop-blur-xl rounded-2xl border-0 resize-none ${
                    isDark ? "bg-white/10 text-white placeholder-gray-400" : "bg-black/5 text-gray-900"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl py-3 font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
