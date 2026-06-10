import  { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Laptop, Globe, Menu, XIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Votera from '../assets/votera1.png';
import Filmfave from '../assets/filmfave.png';
import Verse from '../assets/verse.png';
import Edusol from '../assets/edusol.png';
import Fundflow from '../assets/fundflow.png';
import Readersboon from '../assets/readersboon.png';
import Mesuhuin from '../assets/mesuhuin.png';
import Jaybzsig from '../assets/jaybaig.png';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .fromTo('.hero-title', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 })
      .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3');

    gsap.fromTo('.about-animate', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-animate', start: 'top 80%' },
    });

    gsap.fromTo('.project-card', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' },
    });

    gsap.fromTo('.experience-card', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.experience-cards', start: 'top 80%' },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
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
  {
    id: 7,
    title: 'Fundflow',
    category: 'web',
    tech: 'Solidity, React, Web3.js, Smart Contracts',
    image: Fundflow,
    link: 'https://fundflow-fe.vercel.app/',
    description:
      'A Web3 blockchain-based crowdfunding platform that enables decentralized fundraising through smart contracts, providing transparency and security for campaign creators and backers.',
  },
  {
    id: 9,
    title: 'Readersboon CMS',
    category: 'cms',
    tech: 'WordPress, PHP, Custom Theme',
    image: Readersboon,
    link: 'https://readersboonafrica.com/',
    description:
      'An African literary magazine CMS that showcases African authors, poets, and storytellers with a rich reading experience and content management system.',
  },
  {
    id: 11,
    title: 'Mesuhuin Foundation CMS',
    category: 'cms',
    tech: 'WordPress, PHP, Custom Theme',
    image: Mesuhuin,
    link: 'https://mesuhuinfoundation.org/',
    description:
      'A CMS platform for Mesuhuin Foundation, providing tools for content management, event organization, and community outreach initiatives.',
  },
  {
    id: 12,
    title: 'Jaybzsig CMS',
    category: 'cms',
    tech: 'WordPress, WooCommerce, PHP',
    image: Jaybzsig,
    link: 'https://jaybzsig.com/',
    description:
      'An African e-commerce platform built on WordPress with WooCommerce, featuring a CMS-powered storefront for African artisans and businesses to sell their products online.',
  },
  {
    id: 10,
    title: 'Theokike Foundation CMS',
    category: 'cms',
    tech: 'WordPress, PHP, Elementor',
    image: 'https://placehold.co/600x600/fbf7f0/FF6D1F?text=Theokike',
    link: 'https://theokikefoundation.com/',
    description:
      'A content management system for Theokike Foundation, enabling the organization to share their mission, manage donations, and engage with their community.',
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
    id: 8,
    title: 'Verde Health',
    category: 'mobile',
    tech: 'React Native, Node.js, Pharmacy APIs',
    image: 'https://placehold.co/600x600/fbf7f0/FF6D1F?text=Verde+Health',
    link: 'https://your-link-here.com/verde-health',
    description:
      'A digital pharmacy mobile application that allows users to order prescriptions, consult with pharmacists, and manage their medications seamlessly from their smartphone.',
  },
];



  const experiences = [
    { role: 'Software Developer', company: 'Metroblue Tech Ltd', period: '2025 - 2026' },
    { role: 'Junior Developer Intern', company: 'Metroblue Tech Ltd', period: '2023 - 2023' },
    { role: 'Freelance Software Developer', company: 'Innova Digital', period: '2022 - 2026' },
    { role: 'Software Engineer', company: 'Verde Health', period: '2026 - present' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#fbf7f0] text-[#2d2d2d] overflow-x-hidden">
      {/* CursorFollower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-[#e5e0d8]">
        <div className=" mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-mono tracking-wider">
            <span className="text-[#2d2d2d]">SAMUEL</span>
            <span className="text-[#FF6D1F]">.DEV</span>
          </div>
          <div className="hidden md:flex gap-6 text-[#2d2d2d] ">
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
                        bg-white/95 backdrop-blur-xl
                        border-t border-[#e5e0d8]
                        shadow-2xl"
            >
                <div className="flex flex-col py-4">
                {["About", "Work", "Experience", "Contact"].map((item) => (
                    <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-4 text-[#2d2d2d]
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
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.05) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl">
          <div className="overflow-hidden mb-4 hero-title">
            <h1 
              className="text-7xl md:text-8xl font-bold tracking-tight"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            >
              Building Digital
            </h1>
          </div>
          <div className="overflow-hidden mb-8 hero-title">
            <h1 
              className="text-7xl md:text-8xl font-bold tracking-tight text-[#a09888]"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            >
              Experiences
            </h1>
          </div>
          <p className="text-xl text-[#6b7280] max-w-2xl mb-12 hero-desc">
            Full-stack developer specializing in crafting scalable applications 
            and intuitive user interfaces that solve real problems.
          </p>
          <div className="flex gap-6 justify-center hero-cta">
            <a href="#work" className="px-8 py-4 bg-[#2d2d2d] text-white font-medium hover:bg-[#4a4a4a] transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 border border-[#d4cdc0] hover:border-[#2d2d2d] transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-16 about-animate">
            <div>
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <div className="w-20 h-1 bg-[#2d2d2d] mb-8"></div>
              <p className="text-[#6b7280] text-lg leading-relaxed">
                I enjoy building things that people actually use. Whether it's a website, a mobile app, or a new product idea, I like taking something from a rough concept and turning it into a polished experience. Most of my time is spent working across web and mobile applications, but what keeps me interested is solving problems and learning along the way.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-[#e5e0d8] pl-6 hover:border-[#2d2d2d] transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-2">FrontEnd Skills</h3>
                <p className="text-[#6b7280]">React, Tailwind CSS, TypeScript, Nextjs </p>
              </div>
              <div className="border-l-2 border-[#e5e0d8] pl-6 hover:border-[#2d2d2d] transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-2">Backend Skills</h3>
                <p className="text-[#6b7280]">Nodejs, MYSQl, Postgresql, Expressjs, NestJS, MongoDB</p>
              </div>
              <div className="border-l-2 border-[#e5e0d8] pl-6 hover:border-[#2d2d2d] transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-2">Mobile</h3>
                <p className="text-[#6b7280]">React Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 ">
        <div className=" mx-auto">
          <h2 className="text-5xl font-bold mb-4">Projects </h2>
          <div className="w-20 h-1 bg-[#2d2d2d] mb-12"></div>
          
          {/* Filter Buttons */}
          <div className="flex gap-4 mb-16 flex-wrap">
            {[
              { id: 'all', label: 'All Projects', icon: Code2 },
              { id: 'web', label: 'Web', icon: Laptop },
              { id: 'mobile', label: 'Mobile', icon: Smartphone },
              { id: 'cms', label: 'CMS', icon: Globe }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 border transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-[#2d2d2d] text-white border-[#2d2d2d]'
                    : 'border-[#d4cdc0] text-[#6b7280] hover:border-[#2d2d2d] hover:text-[#2d2d2d]'
                }`}
              >
                <filter.icon size={18} />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative border border-[#e5e0d8] hover:border-[#2d2d2d] transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-square bg-[#ede4d8] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
<img
      src={project.image}
      alt={project.title}
      className={`w-full h-full ${['Educesol', 'Verse', 'Jaybzsig CMS', 'Mesuhuin Foundation CMS'].includes(project.title) ? 'object-contain' : 'object-cover object-top'}`}
  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF6D1F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8a8a8a] text-sm mb-4">{project.tech}</p>
                   <p className="text-[#6b7280] text-sm mb-4">{project.description}</p>
                  <div className="flex justify-center items-center gap-1 text-[#6b7280] group-hover:text-[#2d2d2d] transition-colors">
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
          <div className="w-20 h-1 bg-[#2d2d2d] mb-16"></div>
          
          <div className="space-y-8 experience-cards">
            {experiences.map((exp, index) => (
                <div
                key={index}
                className="experience-card relative border border-[#e5e0d8] p-8 hover:border-[#FF6D1F] hover:bg-[#f5f0e8] transition-all duration-300 group hover:scale-[1.02]"
                >
                <div className="absolute -left-2.25 top-8 w-4 h-4 rounded-full bg-[#d4cdc0] border-2 border-[#fbf7f0] group-hover:bg-[#FF6D1F] transition-all duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold group-hover:text-[#FF6D1F] transition-colors">
                    {exp.role}
                    </h3>
                    <span className="text-[#2d2d2d] text-sm md:text-base">{exp.period}</span>
                </div>
                <p className="text-[#6b7280] text-lg mb-3">{exp.company}</p>
                {/* <p className="text-[#fff] leading-relaxed">{exp.description}</p> */}
                </div>
            ))}
</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 ">
        <div className=" mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-[#6b7280] text-xl mb-12 max-w-2xl mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="https://github.com/samueldobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-[#e5e0d8] hover:border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ikechukwu-frank-dobi-b47563266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-[#e5e0d8] hover:border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:frankdobisamuel@gmail.com"
              className="p-4 border border-[#e5e0d8] hover:border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://x.com/SamuelDean_dev"
              className="p-4 border border-[#e5e0d8] hover:border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white transition-all duration-300"
            >
              <XIcon size={24} />
            </a>
          </div>
          
          <a 
            href="mailto:hello@example.com"
            className="inline-block px-12 py-4 bg-[#2d2d2d] text-white text-lg font-medium hover:bg-[#4a4a4a] transition-colors duration-300"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#e5e0d8]">
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-center text-[#8a8a8a] text-sm">
          <p>© 2024  frankdobisamuel@gmail.com</p>
          {/* <p>Designed & Built with passion</p> */}
        </div>
      </footer>

    </div>
  );
}
