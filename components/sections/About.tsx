import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Started Self-Learning",
      description: "Began my journey with HTML, CSS, and JavaScript fundamentals",
      year: "2023"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "React Mastery",
      description: "Dove deep into React, hooks, and modern development practices",
      year: "2024"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Firebase Integration",
      description: "Mastered real-time databases, authentication, and cloud functions",
      year: "2024"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Full Stack Projects",
      description: "Built and deployed complete applications including my News App",
      year: "2025"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate self-taught developer who believes in the power of technology to solve real problems. 
            My journey started with curiosity and has evolved into a deep love for creating meaningful applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Developer Journey</h3>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4 bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{milestone.title}</h4>
                    <span className="text-sm text-blue-400 font-medium">{milestone.year}</span>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">What Drives Me</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  🚀 I&apos;m passionate about building applications that provide real value to users. 
                  My focus is on creating seamless, responsive experiences that work flawlessly across all devices.
                </p>
                <p>
                  💡 I love solving complex problems with clean, efficient code. Every project is an opportunity 
                  to learn something new and push the boundaries of what&apos;s possible.
                </p>
                <p>
                  🎯 Currently seeking a full-time role where I can contribute to meaningful projects 
                  and continue growing as a developer in a collaborative environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => window.open('https://linkedin.com/in/sujoy-sarkar', '_blank')}
                  >
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => window.open('https://github.com/sujoy1610', '_blank')}
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
