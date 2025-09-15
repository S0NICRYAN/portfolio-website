import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showFunFact, setShowFunFact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [showTravelModal, setShowTravelModal] = useState(false);
  const [activeTravelTab, setActiveTravelTab] = useState('trips');
  const [activeCollectionTab, setActiveCollectionTab] = useState('pokemon');
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showTravelModal) setShowTravelModal(false);
        if (showCollectionModal) setShowCollectionModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showTravelModal, showCollectionModal]);

  // Trigger staggered slide-in animations on page load
  useEffect(() => {
    const timers = [
      setTimeout(() => setIsHeroVisible(true), 100),
      setTimeout(() => setIsImageVisible(true), 300),
      setTimeout(() => setIsTextVisible(true), 600),
      setTimeout(() => setIsButtonsVisible(true), 900)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Collection data
  const collectionItems = [
    {
      id: 1,
      name: "Felt Hat Pikachu",
      type: "Pokemon Card",
      year: "2023",
      image: "/images/felthat.png",
      description: "Pikachu X Van Gogh"
    },
    {
      id: 2,
      name: "Rayquaza GX",
      type: "Pokemon Card",
      year: "2018",
      image: "/images/ray.jpg",
      description: "Shiny Rayquaza"
    },
    {
      id: 3,
      name: "Kanto Starter Trio",
      type: "Pokemon Card",
      year: "2023",
      image: "/images/trio.jpg",
      description: "They are all pidgey themed!"
    }
  ];

  // Travel data
  const travelExperiences = [
    {
      id: 1,
      location: "Sydney & Melbourne, Australia",
      year: "2024", 
      image: "/images/australia.jpg",
      description: "Marveled at the iconic Opera House, went on road trips to countless places, and explored the beautiful landscapes of Australia.",
      highlights: ["Sydney Opera House", "Twelve Apostles", "Great Ocean Road"]
    },
    {
      id: 2,
      location: "Tokyo, Osaka & Hokkaido, Japan",
      year: "2023",
      image: "/images/japan.jpg",
      description: "First ever overseas trip with friends, explored the bustling streets of Tokyo, Osaka and Hokkaido, and went skiing in Niseko.",
      highlights: ["Niseko", "Harajuku", "Tsukiji Fish Market"]
    },
    {
      id: 3,
      location: "Bangkok, Thailand", 
      year: "2023",
      image: "/images/bangkok.jpg",
      description: "A relaxed family trip to Bangkok, explored the vibrant culture, visited floating markets, and enjoyed incredible street food.",
      highlights: ["Chatuchak Market", "Chatuchak Park", "Khao San Road"]
    },
  ];

  // Collection categories data
  const shoesCollection = [
    {
      id: 1,
      name: "Morph Mules",
      brand: "Rotten Closet",
      description: "Favourite loafers for smart casual",
      image: "/images/rotten.jpg"
    },
    {
      id: 2,
      name: "Chicago Jordan 1 ",
      brand: "Jordan", 
      description: "My grail since I was 14",
      image: "/images/chicago.jpg"
    },
    {
      id: 3,
      name: "Nike X Stussy Spiridons",
      brand: "Nike",
      description: "Cool collaboration",
      image: "/images/stussy.jpg"
    }
  ];

  // Travel photos data
  const travelPhotos = [
    {
      id: 1,
      title: "Returning Home",
      location: "Shanghai, China",
      date: "December 2023",
      description: "Returning to my childhood home and reunited with my old helper!",
      image: "/images/shanghai.jpg"
    },
    {
      id: 2,
      title: "Basketball in Vietnam",
      location: "Ho chi minh, Vietnam", 
      date: "August 2024",
      description: "Experienced a VBA game!",
      image: "/images/vietnam.jpg"
    },
    {
      id: 3,
      title: "Amazing Sunset",
      location: "Phuket, Thailand",
      date: "May 2023", 
      description: "Almost drowned at the beach",
      image: "/images/phuket.jpg"
    },
    {
      id: 4,
      title: "Bali Beach",
      location: "Bali, Indonesia",
      date: "May 2023", 
      description: "Coolest Sunset",
      image: "/images/bali.jpg"
    },
    {
      id: 5,
      title: "Niseko Ski Trip",
      location: "Niseko, Japan",
      date: "February 2023",
      description: "Niseko is amazing",
      image: "/images/niseko.jpg"
    },
    {
      id: 6,
      title: "Ici Cest Paris!",
      location: "Paris, France",
      date: "November 2022", 
      description: "Bought me and my dad tickets to a PSG game",
      image: "/images/paris.jpg"
    }
  ];

  // Education data
  const educationData = [
    {
      id: 'smu',
      name: 'Singapore Management University',
      degree: 'Information Systems',
      specialization: 'Business Analytics & Financial Technology',
      period: 'Aug 2023 - Present',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
      logo: '/images/smu.png',
      achievement: 'Dean\'s List AY24/25',
      activities: [
        { icon: '🦉', title: 'Ellipsis (SCIS Student Body)', role: 'Welfare Executive' },
        { icon: '🤾', title: 'Handball', role: 'Varsity Team Member 2023-2024' },
        { icon: '⛳', title: 'Golf', role: 'Club Member' },
        { icon: '🏀', title: 'Recreational Basketball', role: 'Club Member' }
      ]
    },
    {
      id: 'eunoia',
      name: 'Eunoia Junior College',
      degree: 'A-Levels',
      specialization: 'PCME',
      period: 'Feb 2019 - Nov 2020',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600 dark:text-purple-400',
      logo: '/images/ejc.jpg',
      activities: [
        { icon: '🏐', title: 'Volleyball', role: 'VIA Representative' }
      ]
    },
    {
      id: 'sji',
      name: "St Joseph's Institution",
      degree: 'O-Levels',
      specialization: 'Secondary School',
      period: 'Jan 2015 - Nov 2018',
      borderColor: 'border-green-500',
      textColor: 'text-green-600 dark:text-green-400',
      logo: '/images/sji.png',
      activities: [
        { icon: '🤺', title: 'Fencing', role: 'VIA Representative' }
      ]
    }
  ];

  const roles = [
    {
      title: "Aspiring Software Engineer",
      description: "Passionate about building innovative web applications and solving complex problems through code.",
      emoji: "💻",
      image: "/images/engineer.jpg",
      buttonText: "View My Work",
      buttonLink: "#projects"
    },
    {
      title: "Aspiring Product Manager", 
      description: "Focused on creating user-centered products that deliver exceptional experiences and drive business value.",
      emoji: "📊",
      image: "/images/product-manager.jpg",
      buttonText: "View My Work",
      buttonLink: "#projects"
    },
    {
      title: "Aspiring Business/Data Analyst",
      description: "Leveraging data insights to drive strategic decisions and optimize business processes.",
      emoji: "📈",
      image: "/images/data-analyst.jpg",
      buttonText: "View My Work",
      buttonLink: "#projects"
    },
    {
      title: "Collector",
      description: "Always on the hunt for unique items and experiences that tell a story, enjoying the thrill of discovering and building a personal collection.",
      emoji: "🎯",
      image: "/images/collector.jpg",
      buttonText: "View My Collection!",
      buttonLink: "#about"
    },
    {
      title: "Traveller",
      description: "Exploring new cultures, cuisines, and perspectives from around the world, creating unforgettable experiences and lifelong memories with friends along the way.",
      emoji: "✈️",
      image: "/images/traveller.jpg",
      buttonText: "Travel Experiences",
      buttonLink: "#about"
    }
  ];

  const nextRole = () => {
    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
  };

  const prevRole = () => {
    setCurrentRoleIndex((prev) => (prev - 1 + roles.length) % roles.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 15000); // Change every 15 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const projects = [
    {
      title: "Volunteer Connect",
      description: "We built a full-stack volunteering platform that helps SMU students discover opportunities, track their 80-hour graduation requirement, schedule events via a calendar, and donate to charities, while also enabling organisations to list opportunities and connect with volunteers—all in one place.",
      image: "/images/volunteer.jpg",
      technologies: ["Vue", "Firebase", "Bootstrap", "Javascript", "Leaflet.js"],
      category: "Software Development",
      link: "https://admirable-medovik-71ba4c.netlify.app/"
    },
    {
      title: "Fixit App",
      description: "Tired of hunting for a reliable handyman through word-of-mouth or endless calls? FixIt connects you instantly with trusted local repair professionals in Singapore, covering everything from plumbing and electrical fixes to furniture assembly and home maintenance. Browse verified profiles, check reviews, get transparent quotes, and book services seamlessly—all from your phone. FixIt makes home repairs simple, fast, and stress-free.",
      image: "/images/fixit.jpg",
      technologies: ["Figma","Product Strategy", "Design Thinking", "Roadmap Planning", "User Research", "A/B Testing", "Empathy Maps"],
      category: "Product Development",
      link: "https://www.figma.com/proto/OhBL6xLnsqf3vtu5Ir9qq3/FixFinder?node-id=82-429&p=f&viewport=1878%2C-339%2C0.22&t=ojDXWfG5IPInTvC4-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A14707"
    },
    {
      title: "Skills Up!",
      description: "A course platform for migrant workers to upskill themselves, made with individual microservices for each feature to ensure scalability and maintainability. Utilised Stripe for payments and implemented an automated email system to send updates to users.",
      image: "/images/skillsup.png",
      technologies: ["Python", "Flask", "Outsystems", "FAST API", "Docker", "Kong Gateway", "Javascript", "PostgreSQL","Stripe"],
      category: "Software Development",
      link: "https://github.com/chloetay/esd_t5"
    },
    {
      title: "Odoo Instance",
      description: "Upscaling and maintaining an Odoo instance to handle the company's ERP needs. Utilised Kubernetes for deployment and Microsoft Azure for hosting. Implemented an automated email system to send updates to users using Azure Functions and Azure AI",
      image: "/images/odoo.png",
      technologies: ["Odoo", "PostgreSQL", "Docker", "Kubernetes","Microsoft Azure"],
      category: "DevOps & Infrastructure",
    },
    {
      title: "VendGO",
      description: "A project focused on reinventing and digitising the manual operations of vending machine businesses, including stock and inventory management, company procedures, leasing methods, and overall operational workflows. We analysed existing inefficiencies and pain points, then proposed a digital transformation that streamlines processes, enables real-time monitoring, and leverages data-driven insights. By integrating innovative solutions, the platform optimises operations, reduces human error, and modernises the way vending businesses operate, transforming traditional practices into an efficient, scalable digital model.",
      image: "/images/vendo.png",
      technologies: ["Figma", "Product Strategy", "Business Analysis", "Stakeholder Management", "Data Analysis", "Market Research"],
      category: "Business Transformation & Product Management",
      link:"https://www.figma.com/design/RtVluwZ0bqMODK3xOFdySo/Page1?node-id=0-1&t=60Cu7T6Gumm98m9z-1",
    },
    {
      title: "Pokemarket SG (In Progress)",
      description: "A passion project to create a telegram bot that allows users to buy and sell Pokemon cards in Singapore.",
      image: "/images/pokemarket.jpeg",
      technologies: ["Telegram", "Python","MongoDB","Flask"],
      category: "Software Development",
      link:"#",
    },
    {
      title: "Portfolio Website",
      description: "A website to showcase my projects and skills",
      image: "/images/portfolio.png",
      technologies: ["React", "Tailwind CSS", "Vite", "TypeScript"],
      category: "Software Development",
      link:"#"
    }
  ];

  const skillsCategories = [ // Updated skills
    {
      title: "Product Management",
      skills: ["Figma","Product Strategy", "Design Thinking", "Roadmap Planning", "User Research", "A/B Testing", "Stakeholder Management", "Agile/Scrum"],
      color: "bg-purple-100 text-purple-800 border border-purple-200"
    },
    {
      title: "Software Development", 
      skills: ["JavaScript", "TypeScript", "Vue.js", "React", "Node.js", "HTML", "CSS", "Tailwind CSS", "Next.js", "Express"],
      color: "bg-green-100 text-green-800 border border-green-200"
    },
    {
      title: "Data & Analytics",
      skills: ["SQL", "Tableau", "Pandas", "Data Visualization", "Excel", "Power BI"],
      color: "bg-blue-100 text-blue-800 border border-blue-200"
    },
    {
      title: "Technical Tools",
      skills: ["JIRA", "Git", "Docker", "Microsoft Azure", "Firebase","MongoDB", "Vercel", "Signavio"],
      color: "bg-orange-100 text-orange-800 border border-orange-200"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent">My Portfolio</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
                <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              </div>
              <a 
                href="/files/Resume_Ryan_Cheng.pdf" 
                download="Ryan_Cheng_Resume.pdf"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/files/Resume_Ryan_Cheng.pdf"
                  download="Resume_Ryan_Cheng.pdf"
                  className="block px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg mx-2 mt-2 transition-colors flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className={`pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-1000 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            {/* Static Profile Photo */}
            <div className={`w-48 h-48 mx-auto rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden bounce-slow transition-all duration-700 ease-out ${
              isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <img 
                src="/images/hero.jpg" 
                alt="Ryan Cheng" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Carousel Container */}
            <div className="relative">
              <div className={`text-center mb-8 transition-all duration-700 ease-out ${
                isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <p className="text-2xl bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-4">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-6 pb-2">
                  Ryan!
            </h1>

                <div className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-2xl md:text-3xl">{roles[currentRoleIndex].emoji}</span>
                  <span className="ml-2 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent">{roles[currentRoleIndex].title}</span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                  {roles[currentRoleIndex].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <button
                  onClick={prevRole}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-200 shadow-lg hover:scale-105"
                  aria-label="Previous role"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
              </button>

                {/* Dots Indicator */}
                <div className={`flex space-x-2 transition-all duration-700 ease-out ${
                  isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {roles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentRoleIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentRoleIndex 
                          ? 'bg-black dark:bg-white' 
                          : 'bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-50'
                      }`}
                      aria-label={`Go to role ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextRole}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-200 shadow-lg hover:scale-105"
                  aria-label="Next role"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </button>
              </div>

              {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 transition-all duration-700 ease-out ${
                  isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {roles[currentRoleIndex].buttonText === "View My Collection!" ? (
                  <button 
                    onClick={() => setShowCollectionModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 text-white font-medium rounded-lg transition-all duration-200 hover:bg-teal-500 hover:scale-105 shadow-lg inline-block"
                  >
                    {roles[currentRoleIndex].buttonText}
                  </button>
                ) : roles[currentRoleIndex].buttonText === "Travel Experiences" ? (
                  <button 
                    onClick={() => setShowTravelModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 text-white font-medium rounded-lg transition-all duration-200 hover:bg-teal-500 hover:scale-105 shadow-lg inline-block"
                  >
                    {roles[currentRoleIndex].buttonText}
                  </button>
                ) : (
                  <a 
                    href={roles[currentRoleIndex].buttonLink}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 text-white font-medium rounded-lg transition-all duration-200 hover:bg-teal-500 hover:scale-105 shadow-lg inline-block"
                  >
                    {roles[currentRoleIndex].buttonText}
                  </a>
                )}
                <a 
                  href="/files/Resume_Ryan_Cheng.pdf" 
                  download="Resume_Ryan_Cheng.pdf"
                  className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-teal-500 hover:text-white hover:scale-105 shadow-lg inline-block"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <a 
                  href="https://www.linkedin.com/in/ryan-cheng-32624a299/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-200 shadow-lg hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:ryan.cheng02@gmail.com" 
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-200 shadow-lg hover:scale-105"
                  aria-label="Send Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-16 pb-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <button
              onClick={() => setShowFunFact(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              🎉 Fun Fact!
            </button>
          </div>
          <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            I’m a penultimate-year Information Systems student at SMU, majoring in Business Analytics and FinTech, 
            passionate about innovating and solving real-world user problems by turning complex challenges into simple, 
            effective designs and clean, efficient code.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              When I'm not coding, you can find me exploring new technologies, 
              meeting friends, playing sports, or travelling!
            </p>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-8 text-center">Education 🎓</h3>
            <div className="max-w-4xl mx-auto">
              {/* SMU - Always visible */}
              <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border-l-4 ${educationData[0].borderColor} transition-all duration-500`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 p-2 shadow-md border-2 border-slate-200 dark:border-slate-600 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={educationData[0].logo} 
                      alt={`${educationData[0].name} Logo`} 
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.log('Image failed to load:', educationData[0].logo);
                        target.style.display = 'none';
                        const container = target.parentElement;
                        if (container) {
                          container.innerHTML = `<span class="text-xs font-bold text-slate-600 dark:text-slate-300">${educationData[0].name.split(' ')[0]}</span>`;
                        }
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', educationData[0].logo);
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{educationData[0].name}</h4>
                  <p className={`${educationData[0].textColor} font-medium`}>{educationData[0].degree}</p>
                  <p className="text-slate-600 dark:text-slate-300">{educationData[0].specialization}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{educationData[0].period}</p>
                  {educationData[0].achievement && (
                    <div className="mt-2 flex justify-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200">
                        🏆 {educationData[0].achievement}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* SMU Activities */}
                <div className="grid md:grid-cols-2 gap-4">
                  {educationData[0].activities.map((activity, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 h-20 flex items-center">
                      <div className="flex items-center space-x-3 w-full">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">{activity.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">{activity.title}</h5>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">{activity.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Arrow */}
              <div className="flex justify-center my-6">
                <button
                  onClick={() => setIsEducationExpanded(!isEducationExpanded)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 hover:from-purple-500 hover:to-blue-500 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label={isEducationExpanded ? "Show less" : "Show more"}
                >
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${isEducationExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Other Schools - Expandable */}
              <div className={`space-y-8 transition-all duration-500 overflow-hidden ${isEducationExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {educationData.slice(1).map((school) => (
                  <div key={school.id} className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border-l-4 ${school.borderColor} transform transition-all duration-500 ${isEducationExpanded ? 'translate-y-0' : 'translate-y-4'}`}>
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 p-2 shadow-md border-2 border-slate-200 dark:border-slate-600 mx-auto mb-4 flex items-center justify-center">
                        <img 
                          src={school.logo} 
                          alt={`${school.name} Logo`} 
                          className="w-full h-full rounded-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            console.log('Image failed to load:', school.logo);
                            target.style.display = 'none';
                            const container = target.parentElement;
                            if (container) {
                              container.innerHTML = `<span class="text-xs font-bold text-slate-600 dark:text-slate-300">${school.name.split(' ')[0]}</span>`;
                            }
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', school.logo);
                          }}
                        />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{school.name}</h4>
                      <p className={`${school.textColor} font-medium`}>{school.degree}</p>
                      <p className="text-slate-600 dark:text-slate-300">{school.specialization}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{school.period}</p>
                      {school.achievement && (
                        <div className="mt-2 flex justify-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200">
                            🏆 {school.achievement}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Activities */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {school.activities.map((activity, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 h-20 flex items-center">
                          <div className="flex items-center space-x-3 w-full">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">{activity.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">{activity.title}</h5>
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">{activity.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Modal */}
      {showFunFact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md mx-4 shadow-2xl transform transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Fun Fact!</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I lived in Shanghai for 6 years! 🇨🇳
              </p>
              <button
                onClick={() => setShowFunFact(false)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-16 pb-2">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 ${category.color} rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-16 pb-2">Featured Projects ✨</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const visibleTechs = project.technologies.slice(0, 4);
              const remainingCount = project.technologies.length - 4;
              const isExpanded = expandedProject === index;
              
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:p-0.5 transition-all duration-300 cursor-pointer transform relative" onClick={() => setExpandedProject(isExpanded ? null : index)}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden h-full">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold rounded-md shadow-lg border border-slate-200 dark:border-slate-600">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                      <p className={`text-slate-600 dark:text-slate-300 mb-4 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
                        {project.description}
                      </p>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                          {isExpanded ? (
                            // Show all technologies when expanded
                            project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">
                                {tech}
                              </span>
                            ))
                          ) : (
                            // Show limited technologies when collapsed
                            <>
                              {visibleTechs.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                              {remainingCount > 0 && (
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">
                                  +{remainingCount} more
                                </span>
                              )}
                            </>
                          )}
                  </div>
                        <div className="flex justify-center">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 hover:bg-teal-500 text-white font-medium rounded-md transition-all duration-200 text-sm shadow-md hover:scale-105" onClick={(e) => e.stopPropagation()}>
                            Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-16 pb-2">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I'm always open to discussing new opportunities and interesting projects!
              Currently open to full-time/part-time internship roles in Singapore.
              Open to unpaid opportunities to gain valuable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:ryan.cheng02@gmail.com" className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:scale-105">
              Send Email
            </a>
            <a href="https://www.linkedin.com/in/ryan-cheng-32624a299/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-teal-500 hover:text-white hover:scale-105 shadow-lg">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-teal-500 hover:text-white hover:scale-105 shadow-lg">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300">
            © 2025 Ryan Cheng. Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Collection Modal */}
      {showCollectionModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowCollectionModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent">Highlights of my collection</h2>
              <button
                onClick={() => setShowCollectionModal(false)}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {/* Tab Navigation */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700">
                  {[
                    { id: 'pokemon', label: 'Pokemon Cards', icon: '⚡' },
                    { id: 'shoes', label: 'Shoes', icon: '👟' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCollectionTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                        activeCollectionTab === tab.id
                          ? 'bg-teal-500 text-white border-b-2 border-teal-500'
                          : 'text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div>
                {activeCollectionTab === 'pokemon' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionItems.map((item) => (
                      <div key={item.id} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <div className="aspect-square bg-slate-200 dark:bg-slate-600 rounded-lg mb-4 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback-text');
                              if (fallback) {
                                (fallback as HTMLElement).style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-full h-full flex items-center justify-center hidden">
                            <span className="text-slate-500 dark:text-slate-400 text-sm">Image not found</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.name}</h3>
                        <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                          <p><span className="font-medium">Type:</span> {item.type}</p>
                          <p><span className="font-medium">Year:</span> {item.year}</p>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeCollectionTab === 'shoes' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shoesCollection.map((shoe) => (
                      <div key={shoe.id} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <div className="aspect-square bg-slate-200 dark:bg-slate-600 rounded-lg mb-4 overflow-hidden">
                          <img 
                            src={shoe.image} 
                            alt={shoe.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback-text');
                              if (fallback) {
                                (fallback as HTMLElement).style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-full h-full flex items-center justify-center hidden">
                            <span className="text-slate-500 dark:text-slate-400 text-sm">Image not found</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{shoe.name}</h3>
                        <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                          <p><span className="font-medium">Brand:</span> {shoe.brand}</p>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">{shoe.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Travel Modal */}
      {showTravelModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTravelModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-700 to-purple-600 bg-clip-text text-transparent">Travel Highlights</h2>
              <button
                onClick={() => setShowTravelModal(false)}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {/* Fun Travel Fact */}
              <div className="mb-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-teal-700 dark:text-teal-300">
                      In 2023, I embarked on <span className="font-bold text-teal-800 dark:text-teal-100">6 amazing trips</span> and explored <span className="font-bold text-teal-800 dark:text-teal-100">4 different countries</span>! 🌍
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700">
                  {[
                    { id: 'trips', label: 'Trips', icon: '🌍' },
                    { id: 'photos', label: 'Photos', icon: '📸' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTravelTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                        activeTravelTab === tab.id
                          ? 'bg-teal-500 text-white border-b-2 border-teal-500'
                          : 'text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-8">
                {activeTravelTab === 'trips' && (
                  <>
                    {travelExperiences.map((experience) => (
                      <div key={experience.id} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <div className="aspect-video bg-slate-200 dark:bg-slate-600 rounded-lg overflow-hidden">
                              <img 
                                src={experience.image} 
                                alt={experience.location}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  target.style.display = 'none';
                                  const fallback = target.parentElement?.querySelector('.fallback-text');
                                  if (fallback) {
                                    (fallback as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                              <div className="w-full h-full flex items-center justify-center hidden fallback-text">
                                <span className="text-slate-500 dark:text-slate-400 text-sm">Image not found</span>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{experience.location}</h3>
                              <span className="text-slate-500 dark:text-slate-400 font-medium">{experience.year}</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">{experience.description}</p>
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Highlights:</h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.highlights.map((highlight, index) => (
                                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {activeTravelTab === 'photos' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {travelPhotos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <div className="aspect-video bg-slate-200 dark:bg-slate-600 rounded-lg overflow-hidden">
                          <img 
                            src={photo.image} 
                            alt={photo.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback-text');
                              if (fallback) {
                                (fallback as HTMLElement).style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-full h-full flex items-center justify-center hidden">
                            <span className="text-slate-500 dark:text-slate-400 text-sm">Photo not found</span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
                          <p className="text-sm font-medium">{photo.location}, {photo.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
