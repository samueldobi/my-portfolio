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
import Verde from '../assets/verde.png';
import Vyze from '../assets/vyze.png';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    id: 13,
    title: 'Vyze',
    category: 'web',
    tech: 'React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy',
    image: Vyze,
    link: 'https://vyze-rho.vercel.app/',
    description:
      'A local-first opportunity discovery and relationship-management platform that helps users find, evaluate, and manage job opportunities, agency partnerships, and prospective clients using evidence-based scoring and human-reviewed outreach.',
  },
  {
    id: 8,
    title: 'Verde Health',
    category: 'mobile',
    tech: 'React Native, Node.js, Pharmacy APIs',
    image: Verde,
    link: 'https://verdehealth.org/',
    description:
      'A digital pharmacy mobile application that allows users to order prescriptions, consult with pharmacists, and manage their medications seamlessly from their smartphone.',
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
    id: 11,
    title: 'Mesuhuin Foundation CMS',
    category: 'cms',
    tech: 'WordPress, PHP, Custom Theme',
    image: Mesuhuin,
    link: 'https://mesuhuinfoundation.org/',
    description:
      'A CMS platform for Mesuhuin Foundation, providing tools for content management, event organization, and community outreach initiatives.',
  },
  // {
  //   id: 10,
  //   title: 'Theokike Foundation CMS',
  //   category: 'cms',
  //   tech: 'WordPress, PHP, Elementor',
  //   image: 'https://placehold.co/600x600/fbf7f0/FF6D1F?text=Theokike',
  //   link: 'https://theokikefoundation.com/',
  //   description:
  //     'A content management system for Theokike Foundation, enabling the organization to share their mission, manage donations, and engage with their community.',
  // },
  // {
  //   id: 3,
  //   title: 'Datrisoft',
  //   category: 'mobile',
  //   tech: 'React Native',
  //   image: '🏦',
  //   link: 'https://your-link-here.com/datrisoft',
  //   description:
  //     'A secure mobile banking fintech application that provides users with digital wallets, account management, and seamless financial transactions.',
  // },
  // {
  //   id: 4,
  //   title: 'Remindr',
  //   category: 'mobile',
  //   tech: 'React Native',
  //   image: '⏰',
  //   link: 'https://your-link-here.com/remindr',
  //   description:
  //     'A smart reminder app that helps users schedule and manage important activities such as utility payments, subscriptions, and personal tasks.',
  // },
];



  const experiences = [
    { role: 'Software Developer', company: 'Metroblue Tech Ltd', period: '2025 - 2025' },
    { role: 'Junior Developer Intern', company: 'Metroblue Tech Ltd', period: '2023 - 2023' },
    { role: 'Freelance Software Developer', company: 'Innova Digital', period: '2022 - 2024' },
    { role: 'Software Engineer', company: 'Verde Health', period: '2025 - 2026' },
    { role: 'Software Engineer', company: 'Qwikfleet Digital Technology', period: '2026 - present' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden">

      {/* Navigation */}
      <nav className="site-nav fixed top-0 w-full z-50">
        <div className="px-6 md:px-10 py-7 flex justify-between items-center">
          <div className="site-mark">
            <span>SAMUEL</span>
            <span>.DEV</span>
          </div>
          <div className="hidden md:flex gap-8 site-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
           <button
             className="md:hidden nav-toggle"
             aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
             aria-expanded={mobileMenuOpen}
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
                    {mobileMenuOpen ? <XIcon size={30} /> : <Menu size={30} />}
            </button>
            {mobileMenuOpen && (
            <div
                className="md:hidden absolute top-full left-0 w-full
                        bg-black border-t border-[#333]"
            >
                <div className="flex flex-col py-4">
                {["About", "Work", "Experience", "Contact"].map((item) => (
                    <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-4 text-white border-b border-[#333] transition"
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
      <section className="hero-section relative min-h-screen flex items-center px-6 md:px-[4.5rem]">
        <div className="hero-inner relative z-10 w-full pt-24">
          <div className="hero-identity">
            <div>
              <p className="hero-name">Frank-Dobi Samuel</p>
              <p className="hero-role">Full-stack Developer · Software Engineer</p>
            </div>
          </div>
          <div className="overflow-hidden hero-title">
            <h1 className="display-title">
              Building Digital
            </h1>
          </div>
          <div className="overflow-hidden mb-10 hero-title">
            <h1 className="display-title">
              Experiences
            </h1>
          </div>
          <p className="hero-copy max-w-2xl mb-12 hero-desc">
            Full-stack developer specializing in crafting scalable applications 
            and intuitive user interfaces that solve real problems.
          </p>
          <div className="flex gap-4 flex-wrap hero-cta">
            <a href="#work" className="editorial-button editorial-button-light">
              View Projects
            </a>
            <a href="#contact" className="editorial-button editorial-button-dark">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="light-section section-pad">
        <div>
          <div className="grid md:grid-cols-2 gap-16 about-animate">
            <div>
              <h2 className="section-title">About Me</h2>
              <div className="hairline mb-8"></div>
              <p className="body-copy">
                I enjoy building things that people actually use. Whether it's a website, a mobile app, or a new product idea, I like taking something from a rough concept and turning it into a polished experience. Most of my time is spent working across web and mobile applications, but what keeps me interested is solving problems and learning along the way.
              </p>
            </div>
            <div className="space-y-0 skill-list">
              <div className="skill-row">
                <h3>FrontEnd Skills</h3>
                <p>React, Tailwind CSS, TypeScript, Nextjs </p>
              </div>
              <div className="skill-row">
                <h3>Backend Skills</h3>
                <p>Nodejs, MYSQl, Postgresql, Expressjs, NestJS, MongoDB</p>
              </div>
              <div className="skill-row">
                <h3>Mobile</h3>
                <p>React Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="dark-section section-pad">
        <div>
          <h2 className="section-title">Projects </h2>
          <div className="hairline mb-12"></div>
          
          {/* Filter Buttons */}
          <div className="flex gap-3 mb-16 flex-wrap filter-row">
            {[
              { id: 'all', label: 'All Projects', icon: Code2 },
              { id: 'web', label: 'Web', icon: Laptop },
              { id: 'mobile', label: 'Mobile', icon: Smartphone },
              { id: 'cms', label: 'CMS', icon: Globe }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-button flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'active'
                    : ''
                }`}
              >
                <filter.icon size={18} />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative"
              >
                <div className="project-image aspect-square overflow-hidden">
<img
      src={project.image}
      alt={project.title}
      className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${['Educesol', 'Verse', 'Jaybzsig CMS', 'Mesuhuin Foundation CMS', 'Verde Health'].includes(project.title) ? 'object-cover object-center' : 'object-cover object-top'}`}
  />
                </div>
                <div className="project-info pt-5">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-meta">{project.tech}</p>
                   <p className="project-description">{project.description}</p>
                  {project.link && <div className="project-link flex items-center gap-2">
                    {/* <span className="text-sm mr-2">View Project</span> */}
                       <a  href={project.link}
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-sm  flex items-center">View Project
                        </a>
                    <ExternalLink size={16} className="inline-block" />
                  </div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="light-section section-pad">
        <div>
          <h2 className="section-title">Experience</h2>
          <div className="hairline mb-16"></div>
          
          <div className="experience-cards">
            {experiences.map((exp, index) => (
                <div
                key={index}
                className="experience-card relative group"
                >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3>
                    {exp.role}
                    </h3>
                    <span>{exp.period}</span>
                </div>
                <p>{exp.company}</p>
                {/* <p className="text-[#fff] leading-relaxed">{exp.description}</p> */}
                </div>
            ))}
</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="dark-section section-pad contact-section">
        <div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-copy mb-12 max-w-2xl">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex gap-3 mb-12 social-links">
            <a 
              href="https://github.com/samueldobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ikechukwu-frank-dobi-b47563266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:frankdobisamuel@gmail.com"
              className="social-link"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://x.com/SamuelDean_dev"
              className="social-link"
            >
              <XIcon size={24} />
            </a>
          </div>
          
          <a 
            href="mailto:hello@example.com"
            className="editorial-button editorial-button-light"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer py-8 px-6 md:px-[4.5rem]">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024  frankdobisamuel@gmail.com</p>
          {/* <p>Designed & Built with passion</p> */}
        </div>
      </footer>

    </div>
  );
}
