import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Journey = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const journeyItems = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Started Learning Web Development',
      description:
        'Began my self-taught journey with HTML, CSS, and JavaScript. Built my first static websites and fell in love with coding.',
      date: 'January 2023',
      status: 'completed',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'First React Projects',
      description:
        'Dove deep into React ecosystem, learned hooks, state management, and built several personal projects to solidify my understanding.',
      date: 'July 2023',
      status: 'completed',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Firebase & Backend Integration',
      description:
        'Mastered Firebase for authentication, real-time databases, and cloud functions. Built full-stack applications with complete CRUD functionality.',
      date: 'March 2024',
      status: 'completed',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'News App - Major Project',
      description:
        'Developed a comprehensive news application with role-based admin panel, real-time features, and advanced user interface.',
      date: 'November 2024',
      status: 'completed',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Redux Toolkit & Advanced State Management',
      description:
        'Enhanced my skills with Redux Toolkit for complex state management and learned React Query for efficient data fetching.',
      date: 'January 2025',
      status: 'completed',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Seeking Full-Time Opportunities',
      description:
        'Currently looking for a full-time role as a Full Stack Developer where I can contribute to meaningful projects and grow professionally.',
      date: 'Present',
      status: 'current',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From curiosity to capability - here&apos;s how I&apos;ve grown as a developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-8">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline Dot */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                    item.status === 'current'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400 shadow-lg shadow-blue-500/25'
                      : 'bg-slate-800 border-slate-600'
                  }`}
                >
                  <div
                    className={`${
                      item.status === 'current' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div
                    className={`p-6 rounded-lg border transition-all duration-300 ${
                      item.status === 'current'
                        ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/50'
                        : 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3
                        className={`text-xl font-semibold ${
                          item.status === 'current' ? 'text-blue-400' : 'text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    {item.status === 'current' && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          🚀 Currently Active
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready for the Next Chapter</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m excited to bring my passion for development and problem-solving to a dynamic
            team. Let&apos;s build something amazing together!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
