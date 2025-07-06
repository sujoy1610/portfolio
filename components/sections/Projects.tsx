import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Real-Time News App (SS News)',
      description:
        'A comprehensive news application with role-based admin panel, real-time updates, and advanced features including bookmarking, dark mode, and responsive design.',
      image: '/placeholder.svg',
      tags: ['React', 'Firebase', 'Redux Toolkit', 'Tailwind CSS', 'News API'],
      features: [
        '🔐 Role-based authentication (Admin/User)',
        '📰 Real-time news updates',
        '🔖 Bookmark favorite articles',
        '🌙 Dark/Light mode toggle',
        '📱 Fully responsive design',
        '⚡ Advanced search & filtering',
      ],
      liveUrl: 'https://news-app-demo.vercel.app',
      githubUrl: 'https://github.com/sujoy1610/ss-news',
      featured: true,
    },
    {
      title: 'Patient Management System',
      description:
        'A comprehensive healthcare management system built with MERN stack. Users can login, select doctors by specialty, book appointments, and doctors can manage their schedules with admin panel.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      features: [
        '👤 User authentication & profiles',
        '👨‍⚕️ Doctor selection by specialty',
        '📅 Appointment booking system',
        '✅ Doctor appointment management',
        '🏥 Admin panel for oversight',
      ],
      liveUrl: 'https://patient-management-demo.vercel.app',
      githubUrl: 'https://github.com/sujoy1610/patient-management',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'This very portfolio you&apos;re viewing! Built with modern technologies and smooth animations to showcase my work with 3D elements and responsive design.',
      image: '/placeholder.svg',
      tags: ['React', 'Vite', 'Framer Motion', 'Spline 3D', 'Tailwind CSS'],
      features: [
        '🎨 3D animated elements',
        '📱 Responsive design',
        '⚡ Optimized performance',
        '🎭 Smooth animations',
      ],
      liveUrl: 'https://sujoy-portfolio.vercel.app',
      githubUrl: 'https://github.com/sujoy1610/portfolio',
      featured: false,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={project.featured ? 'ring-2 ring-blue-500/30' : ''}
            >
              <Card
                className={`bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden ${
                  project.featured ? 'border-blue-500/50' : ''
                }`}
              >
                <div
                  className={`grid ${
                    project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-3'
                  } gap-6`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div
                    className={`${
                      project.featured ? 'lg:col-span-1' : 'md:col-span-2'
                    } p-6`}
                  >
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-white mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {project.featured && (
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-300">
                            {project.features.map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            onClick={() => window.open('https://github.com/sujoy1610', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
