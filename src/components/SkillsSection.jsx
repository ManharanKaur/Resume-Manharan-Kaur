import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Wrench, Zap } from 'lucide-react';
import '../styles/SkillsSection.css';

export const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Core Computing",
      skills: ["Python", "C++", "JavaScript", "SQL", "HTML/CSS", "ML", "DL", "NLP", "Computer Vision", "DSA", "OOPs", "DBMS", "OS", "Networks", "Cryptography", "EDA", "Data Visualization"],
      icon: <Code className="text-cyber-blue mb-4" size={32} />
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Numpy", "Pandas", "NLTK", "Scikit-learn", "TensorFlow", "Keras", "pyttsx3", "SpeechRecognition"],
      icon: <Cpu className="text-cyber-pink mb-4" size={32} />
    },
    {
      title: "Tools & Platforms",
      skills: ["VS Code", "Terminal", "Git & GitHub", "npm", "Vite", "Figma", "Tableau"],
      icon: <Wrench className="text-cyber-blue mb-4" size={32} />
    },
    {
      title: "Soft Skills",
      skills: ["Debugging", "Leadership", "Problem Solving", "Communication"],
      icon: <Zap className="text-cyber-pink mb-4" size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills-section" className="skills-section">
      <div className="skills-container">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink animate-gradient">
              My Arsenal
            </span>
          </h2>
          <p className="text-cyber-white/60 max-w-2xl mx-auto">
            The technologies and tools I use to build robust and scalable digital experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="skill-card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/0 to-cyber-blue/0 group-hover:from-cyber-pink/5 group-hover:to-cyber-blue/5 transition-all duration-500" />
              
              <div className="relative z-10">
                {group.icon}
                <h3 className="text-2xl font-semibold mb-6 text-cyber-white tracking-wide">{group.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="skill-chip cursor-default relative overflow-hidden"
                    >
                      <span className="relative z-10">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
