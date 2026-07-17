import React from "react";
import { motion } from "framer-motion";
import { Mail, Code, Briefcase, Send } from "lucide-react";
import "../styles/ContactSection.css";

export const ContactSection = () => {
  const socialLinks = [
    { label: "Email", url: "mailto:thisismanharankaur@gmail.com", icon: <Mail size={24} /> },
    { label: "GitHub", url: "https://github.com/ManharanKaur", icon: <Code size={24} /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/manharan-kaur/", icon: <Briefcase size={24} /> }
  ];

  return (
    <section className="contact-section" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[120px]" />
      </div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink animate-gradient">
              Let's Connect
            </span>
          </h2>
          <p className="text-cyber-white/60">
            If you'd like to collaborate, connect, or just say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Social Links Side */}
          <motion.div 
            className="flex-1 flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-card group"
              >
                <div className="w-14 h-14 rounded-full bg-cyber-black flex items-center justify-center text-cyber-blue group-hover:text-cyber-pink group-hover:glow-pink group-hover:scale-110 transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyber-white group-hover:text-cyber-pink transition-colors">{link.label}</h3>
                  <p className="text-cyber-white/50 text-sm mt-1">{link.url.replace('mailto:', '').replace('https://', '')}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="contact-form-card group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/5 to-cyber-blue/5 pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-cyber-white/70">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="contact-input"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-cyber-white/70">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-cyber-white/70">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Let's build something amazing together..." 
                    className="contact-input resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="contact-submit-btn group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-blue opacity-80 group-hover/btn:opacity-100 transition-opacity" />
                  <div className="relative bg-cyber-black px-6 py-4 rounded-[11px] flex items-center justify-center gap-2 group-hover/btn:bg-transparent transition-colors duration-300">
                    <Send size={18} />
                    <span>Send Message</span>
                  </div>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};