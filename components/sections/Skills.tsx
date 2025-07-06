import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "React", level: 90, color: "from-blue-400 to-cyan-400" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-500 to-green-500" },
        { name: "Vite", level: 80, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Firebase", level: 85, color: "from-yellow-600 to-orange-600" },
        { name: "Node.js", level: 70, color: "from-green-600 to-teal-600" },
        { name: "REST APIs", level: 80, color: "from-indigo-500 to-purple-500" }
      ]
    },
    {
      category: "State Management & Tools",
      skills: [
        { name: "Redux Toolkit", level: 80, color: "from-purple-600 to-indigo-600" },
        { name: "Git", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "VS Code", level: 90, color: "from-blue-600 to-indigo-600" },
        { name: "Vercel", level: 85, color: "from-gray-800 to-black" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-8">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Postman', 'Figma', 'Adobe XD', 'Photoshop', 'Framer Motion'].map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-full border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
