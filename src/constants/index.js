export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Resume",
    href: "https://drive.google.com/file/d/1PWTMa1JCwXRUkiDHHljuJ6q_vXeUjRKK/view?usp=sharing",
    external: true, // optional: flag for handling target=_blank
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Pratyay Chatterjee",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Tushankar was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Subarna Mondal",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Tushankar’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "Souvik ",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Tushankar. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Swarup Sardar",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Tushankar was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "SellSync – Smart POS System for Modern Retail",
    desc: "SellSync is an all-in-one cloud-powered Point-of-Sale system designed to streamline billing, inventory, and customer management for retail stores. It combines powerful software with high-performance hardware integration.",
    subdesc:
      "Built for speed and accuracy, SellSync offers real-time inventory synchronization, advanced analytics, and multi-store support. It supports various payment methods, customizable receipt management, and automated alerts, ensuring seamless retail operations for businesses of all sizes.",
    href: "https://sellsync.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Cloud Integration",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Inventory Sync",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Analytics",
        path: "/assets/js.png",
      },
      {
        id: 4,
        name: "Hardware Ready",
        path: "/assets/shadcn.png",
      },
    ],
  },
  {
    title: "RayOne System - Vitamin & Wellness Platform",
    desc: "RayOne System is a next-generation platform designed to empower entrepreneurs to build, launch, and grow successful vitamin and wellness stores with ease. Positioned as the industry's #1 solution, it provides clarity, structure, and proven strategies for long-term success.",
    subdesc:
      "Built with expert mentorship from Ray/Rayman Khan and transformational support systems, the platform includes step-by-step guidance, personalized support, and scalable tools for both beginners and experienced business owners to confidently enter and succeed in the wellness retail industry.",
    href: "https://rayonesystem.com",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#2D5016",
      border: "0.2px solid #3d6b1f",
      boxShadow: "0px 0px 60px 0px #60f5a150",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Business Tools",
        path: "/assets/js.png",
      },
      {
        id: 4,
        name: "Mentorship",
        path: "/assets/shadcn.png",
      },
    ],
  },
  {
    title: "CareComp - HR Management System",
    desc: "CareComp is a streamlined platform designed to handle and organize essential employee documentation and HR workflows. The system focuses on efficient form management and approval processes, centralizing all employee documents.",
    subdesc:
      "Employees can fill out important compliance and onboarding forms such as W4, W9, and other required documents directly within the system. HR teams can review submissions, approve or request changes, and update employee status through stages: Pending → In Review → Approved → In Progress. This automation reduces manual paperwork and creates smooth communication between employees and HR.",
    href: "https://carecompapp.com",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#1a3a52",
      background:
        "linear-gradient(0deg, #2563EB50, #2563EB50), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(37, 99, 235, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.png",
      },
      {
        id: 4,
        name: "Workflow Management",
        path: "/assets/shadcn.png",
      },
    ],
  },
  {
    title: "Al-Rasheed Academy - School Management System",
    desc: "A comprehensive full-stack web application designed for Al-Rasheed Academy's complete school management. Features a public website with carousels and school information, role-based authentication for admins, staff, parents, and students, plus enrollment forms and student/parent surveys.",
    subdesc:
      "Built with modern web technologies, the system includes a calendar events module, photo gallery, contact forms, job and volunteer applications, and an administration dashboard. The comprehensive forms system handles health records, emergency contacts, picture authorizations, transfer records, and tuition contracts, providing complete school management in one integrated platform.",
    href: "https://alrasheedacademy.org",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#1a3d2e",
      border: "0.2px solid #2d5a47",
      boxShadow: "0px 0px 60px 0px #10b98150",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/nodel.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/framer.svg",
      },
    ],
  },
  {
    title: "Housbe - Complete Real Estate Technology Platform",
    desc: "Housbe is a full-featured SaaS real estate marketplace connecting buyers, sellers, agents, and lenders. It facilitates advanced property listings, AI-powered lead generation, and real-time communication within a comprehensive ecosystem.",
    subdesc:
      "The platform features role-based dashboards, OTP verification, and secure payment processing via Stripe and PayPal. It includes advanced property filtering, a buying leads marketplace, real-time messaging with media sharing, and automated document management with mPDF, providing a complete end-to-end solution for the real estate industry.",
    href: "https://housbe.com",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/framer.svg",
      },
      {
        id: 4,
        name: "Real-time Messaging",
        path: "/assets/js.png",
      },
    ],
  },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const technologies = [
  {
    name: "Java",
    path: "/assets/java.png",
  },
  {
    name: "Spring MVC",
    path: "/assets/mvc2.png",
  },
  {
    name: "Node.js",
    path: "/assets/nodel.svg", // This is actually Node.js
  },
  {
    name: "SQL",
    path: "/assets/sql.svg",
  },
  {
    name: "Express.js",
    path: "/assets/express.svg",
  },
  {
    name: "shadcn/ui",
    path: "/assets/shadcn.png",
  },
  {
    name: "Tailwind CSS",
    path: "/assets/tailwindcss.png",
  },
  {
    name: "MongoDB",
    path: "/assets/framer.svg", // This is actually MongoDB
  },
  {
    name: "Three.js",
    path: "/assets/threejs.png", // This is actually C++
  },
  {
    name: "Spring Boot",
    path: "/assets/figma.svg", // This is actually Spring Boot
  },
  {
    name: "GitHub",
    path: "/assets/github.svg",
  },
  {
    name: "React.js",
    path: "/assets/react.svg",
  },
  {
    name: "JavaScript",
    path: "/assets/js.png", // This is actually JavaScript
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "App Developer",
    pos: "Mobile App Developer",
    duration: "2025 - Present",
    title:
      "React Native enables me to build cross-platform mobile applications for iOS and Android using JavaScript. I leverage its component-based architecture and native performance to create seamless mobile experiences with shared code across platforms.",
    icon: "/assets/react.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Full Stack Developer",
    pos: "Full Stack Developer",
    duration: "2024 - Present",
    title:
      "As a Full Stack Developer, I build complete web applications from frontend to backend. I create seamless user experiences with React, manage backend logic with Node.js and Express, and handle data efficiently using MongoDB and Firebase. My expertise spans the entire development lifecycle, ensuring scalable and efficient solutions.",
    icon: "/assets/framer.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Java Developer",
    pos: "Junior Software Developer",
    duration: "2022 - 2023",
    title:
      "Java is my foundation for building robust and scalable backend applications. I use it for object-oriented programming, enterprise application development, and creating efficient algorithms. Java's strong typing and performance make it ideal for building reliable server-side solutions.",
    icon: "/assets/java.png",
    animation: "salute",
  },
];
