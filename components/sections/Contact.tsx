'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!', {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'srkarsujoy715@gmail.com',
      action: () => window.open('mailto:srkarsujoy715@gmail.com')
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 9382420874',
      action: () => window.open('tel:+919382420874')
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      action: () => window.open('https://www.linkedin.com/in/sujoy-sarkar-b74018319')
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: 'GitHub',
      value: 'View my repositories',
      action: () => window.open('https://github.com/sujoy1610')
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Kolkata, West Bengal, India',
      action: null
    }
  ];

  const downloadResume = () => {
    const resumeContent = `
SUJOY SARKAR
Full Stack Developer

Email: srkarsujoy715@gmail.com
Phone: +91 9382420874
Location: Kolkata, West Bengal, India
LinkedIn: https://www.linkedin.com/in/sujoy-sarkar-b74018319
GitHub: https://github.com/sujoy1610

SKILLS:
- Frontend: HTML5, CSS3, JavaScript, React, Tailwind CSS, Vite
- Backend: Node.js, Express.js, Firebase
- Database: MongoDB, Firebase Firestore
- State Management: Redux Toolkit
- Tools: Git, VS Code, Vercel, Postman

PROJECTS:
1. Real-Time News App (SS News)
   - Role-based authentication system
   - Real-time news updates with Firebase
   - Bookmark functionality and dark mode
   - Built with React, Firebase, Redux Toolkit

2. Patient Management System
   - MERN stack healthcare management system
   - Doctor selection by specialty
   - Appointment booking and management
   - Admin panel for oversight

3. Portfolio Website
   - Modern portfolio with 3D elements
   - Responsive design with animations
   - Built with React, Vite, Framer Motion, Spline 3D

EXPERIENCE:
- Self-taught Full Stack Developer
- Passionate about building real-time applications
- Seeking opportunities in full-stack development
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sujoy_Sarkar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success('Resume downloaded successfully!');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're looking for a developer, have a project in mind, or just want to connect,
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card
                    className={`bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 ${info.action ? 'cursor-pointer' : ''}`}
                    onClick={info.action || undefined}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-gray-300 text-sm">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30"
            >
              <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={downloadResume}
                >
                  Download Resume
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Projects
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or just say hello!"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
