import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface TestimonialsSectionProps {
  isDark: boolean;
}

export default function TestimonialsSection({ isDark }: TestimonialsSectionProps) {
  const [rating, setRating] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e642?w=150&h=150&fit=crop&crop=face",
      content: "Siyabonga delivered an exceptional website that exceeded all our expectations. His attention to detail and modern design approach really set our brand apart.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, Digital Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Working with Siyabonga was a game-changer for our business. He created a beautiful, fast website that perfectly represents our brand and converts visitors into customers.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, Creative Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Siyabonga has an incredible eye for design and user experience. Our new website looks amazing and has significantly improved our online presence.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen flex items-center px-6 py-20">
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
            What Clients{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Don't just take my word for it - here's what my clients have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-xl rounded-3xl p-8 relative ${
                isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
              }`}
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className={`text-3xl font-bold mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Leave a{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Word
            </span>
          </h3>
          <p className={`text-lg max-w-2xl mx-auto mb-10 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Your feedback means a lot! Share your experience working with me.
          </p>

          <form action="https://formspree.io/f/mwpgwbqp" method="POST" className="max-w-3xl mx-auto space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}>
                  Name
                </label>
                                  <Input
                                  name="name"                  required
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
                                  type="email"                  required
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
                Role/Company
              </label>
              <Input
                name="role"
                className={`backdrop-blur-xl rounded-2xl border-0 ${
                  isDark ? "bg-white/10 text-white placeholder-gray-400" : "bg-black/5 text-gray-900"
                }`}
                placeholder="e.g., CEO of CompanyName"
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}>
                Rating
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer transition-colors ${
                      rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <input type="hidden" name="rating" value={rating} />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}>
                Your Testimonial
              </label>
              <Textarea
                name="message"
                required
                rows={5}
                className={`backdrop-blur-xl rounded-2xl border-0 resize-none ${
                  isDark ? "bg-white/10 text-white placeholder-gray-400" : "bg-black/5 text-gray-900"
                }`}
                placeholder="Share your positive experience here..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl py-3 font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            >
              Submit Testimonial
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
