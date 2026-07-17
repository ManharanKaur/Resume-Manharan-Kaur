import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificatesData } from "../data/certificates";
import "../styles/Certificates.css";

export const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-blue/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="certificates-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink animate-gradient">
              Certificates
            </span>
          </h2>
          <p className="text-cyber-white/60">Credentials & Learning</p>
        </motion.div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => {
            const isPink = cert.theme === "pink";
            
            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`certificate-card group ${
                  isPink 
                    ? "certificate-card--pink" 
                    : "certificate-card--blue"
                }`}
              >
                {/* Shine animation effect */}
                <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-cyber-black border border-white/10 ${isPink ? "text-cyber-pink glow-pink" : "text-cyber-blue glow-blue"}`}>
                    <Award size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-cyber-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-cyber-white/70 text-sm mb-4">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-medium text-cyber-white/50 mb-6">
                    <div className={`w-2 h-2 rounded-full ${isPink ? "bg-cyber-pink" : "bg-cyber-blue"}`} />
                    {cert.status}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap flex-1">
                    {cert.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded border border-white/10 text-cyber-white/60 bg-cyber-black/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-4 p-2 rounded-xl bg-cyber-black border border-white/10 transition-colors duration-300 ${isPink ? "group-hover:text-cyber-pink group-hover:border-cyber-pink" : "group-hover:text-cyber-blue group-hover:border-cyber-blue"}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
