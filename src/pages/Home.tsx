import  { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Laptop, Menu, XIcon } from 'lucide-react';
import Votera from '../assets/votera.png';
import Filmfave from '../assets/verse.png';
import Verse from '../assets/filmfave.png';
import Edusol from '../assets/edusol.png';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const projects = [
  {
    id: 1,
    title: 'Votera',
    category: 'web',
    tech: 'React, Node.js, WebSockets',
    image: Votera,
    link: 'https://votera.vercel.app/',
    description:
      'A real-time voting platform that enables users to create polls, participate in live elections, and view instant results powered by WebSocket communication.',
  },
  {
    id: 2,
    title: 'Verse',
    category: 'web',
    tech: 'Next.js, WebSockets, PostgreSQL',
    image: Verse,
    link: 'https://verse-gold.vercel.app/',
    description:
      'A language exchange chat platform that connects learners worldwide, allowing them to practice, teach, and improve languages through real-time conversations—similar to Duolingo, but community-driven.',
  },
  {
    id: 3,
    title: 'Datrisoft',
    category: 'mobile',
    tech: 'React Native',
    image: '🏦',
    link: 'https://your-link-here.com/datrisoft',
    description:
      'A secure mobile banking fintech application that provides users with digital wallets, account management, and seamless financial transactions.',
  },
  {
    id: 4,
    title: 'Remindr',
    category: 'mobile',
    tech: 'React Native',
    image: '⏰',
    link: 'https://your-link-here.com/remindr',
    description:
      'A smart reminder app that helps users schedule and manage important activities such as utility payments, subscriptions, and personal tasks.',
  },
  {
    id: 5,
    title: 'Educesol',
    category: 'web',
    tech: 'Next.js',
    image: Edusol,
    link: 'https://www.educesol.com/',
    description:
      'A comprehensive school management platform that enables students, teachers, and administrators to manage academic records, attendance, results, and overall educational processes.',
  },
  {
    id: 6,
    title: 'FilmFave',
    category: 'web',
    tech: 'React, Node.js',
    image: Filmfave,
    link: 'https://filmfave.vercel.app/',
    description:
      'A movie recommendation platform that helps users discover new films based on preferences, ratings, and trending content.',
  },
];




  const experiences = [
    { role: 'Software Developer', company: 'Metroblue Tech Ltd', period: '2025 - Present' },
    { role: 'Junior Developer Intern', company: 'Metroblue Tech Ltd', period: '2023 - 2023' },
    { role: 'Freelance Software Developer', company: 'Innova Digital', period: '2022 - 2026' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#132440] text-white overflow-x-hidden">
      {/* CursorFollower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(100,100,100,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-zinc-700">
        <div className=" mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-mono tracking-wider">
            <span className="text-white">SAMUEL</span>
            <span className="text-[#FF6D1F]">.DEV</span>
          </div>
          <div className="hidden md:flex gap-6 text-[#FFF] ">
            <a href="#about" className=" hover:text-[#FF6D1F]">About</a>
            <a href="#work" className="hover:text-[#FF6D1F] ">Work</a>
            <a href="#experience" className=" hover:text-[#FF6D1F]">Experience</a>
            <a href="#contact" className="hover:text-[#FF6D1F] ">Contact</a>
          </div>
           <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Menu size={30} />
            </button>
            {mobileMenuOpen && (
            <div
                className="md:hidden absolute top-full left-0 w-full
                        bg-black/60 backdrop-blur-xl
                        border-t border-white/10
                        shadow-2xl"
            >
                <div className="flex flex-col py-4">
                {["About", "Work", "Experience", "Contact"].map((item) => (
                    <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-4 text-[#FFF]
                                hover:bg-[#FF6D1F] hover:text-white
                                transition"
                    >
                    {item}
                    </a>
                ))}
                </div>
            </div>
            )}

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl">
          <div className="overflow-hidden mb-4">
            <h1 
              className="text-7xl md:text-8xl font-bold tracking-tight"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            >
              Building Digital
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 
              className="text-7xl md:text-8xl font-bold tracking-tight text-zinc-600"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            >
              Experiences
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl mb-12">
            Full-stack developer specializing in crafting scalable applications 
            and intuitive user interfaces that solve real problems.
          </p>
          <div className="flex gap-6 justify-center ">
            <a href="#work" className="px-8 py-4 bg-white text-black font-medium hover:bg-zinc-200 transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 border border-zinc-700 hover:border-white transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <div className="w-20 h-1 bg-white mb-8"></div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                 I bring ideas to reality through code. Whether it is mobile or web related projects.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                With expertise across the full stack, I bring ideas to life through 
                clean code, thoughtful architecture, and pixel-perfect implementations.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-zinc-800 pl-6 hover:border-white transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-2">FrontEnd Skills</h3>
                <p className="text-zinc-400">React, Tailwind CSS, TypeScript, Nextjs </p>
              </div>
              <div className="border-l-2 border-zinc-800 pl-6 hover:border-white transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-2">Backend Skills</h3>
                <p className="text-zinc-400">Nodejs, MYSQl, Postgresql, Expressjs, NestJS, MongoDB</p>
              </div>
              <div className="border-l-2 border-zinc-800 pl-6 hover:border-white transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-2">Mobile</h3>
                <p className="text-zinc-400">React Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 ">
        <div className=" mx-auto">
          <h2 className="text-5xl font-bold mb-4">Projects </h2>
          <div className="w-20 h-1 bg-white mb-12"></div>
          
          {/* Filter Buttons */}
          <div className="flex gap-4 mb-16 flex-wrap">
            {[
              { id: 'all', label: 'All Projects', icon: Code2 },
              { id: 'web', label: 'Web', icon: Laptop },
              { id: 'mobile', label: 'Mobile', icon: Smartphone }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 border transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-white text-black border-white'
                    : 'border-zinc-700 text-zinc-400 hover:border-white hover:text-white'
                }`}
              >
                <filter.icon size={18} />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative border border-zinc-800 hover:border-white transition-all duration-500 overflow-hidden"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="aspect-square bg-[#132440] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4">{project.tech}</p>
                   <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-center items-center gap-1 text-zinc-400 group-hover:text-white transition-colors">
                    {/* <span className="text-sm mr-2">View Project</span> */}
                       <a  href={project.link}
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-sm  flex items-center">View Project
                        </a>
                    <ExternalLink size={16} className="inline-block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className=" mx-auto">
          <h2 className="text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-white mb-16"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-zinc-800 pl-8 hover:border-white transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold group-hover:text-zinc-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-zinc-500">{exp.period}</span>
                </div>
                <p className="text-zinc-400 text-lg">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 ">
        <div className=" mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="https://github.com/samueldobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ikechukwu-frank-dobi-b47563266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:frankdobisamuel@gmail.com"
              className="p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://x.com/SamuelDean_dev"
              className="p-4 border border-zinc-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <XIcon size={24} />
            </a>
          </div>
          
          <a 
            href="mailto:hello@example.com"
            className="inline-block px-12 py-4 bg-white text-black text-lg font-medium hover:bg-zinc-200 transition-colors duration-300"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© 2024 Samuel Dean. All rights reserved.</p>
          {/* <p>Designed & Built with passion</p> */}
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}