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
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Experience",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 6,
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

const obsScreens = [
  { src: "/assets/projects/obs/home.webp", caption: "Home — season hero, event categories & chapter network" },
  { src: "/assets/projects/obs/globe.webp", caption: "Interactive WebGL globe of 187 chapters in 108 countries" },
  { src: "/assets/projects/obs/calendar.webp", caption: "Season calendar — 100 days across 28 countries" },
  { src: "/assets/projects/obs/program.webp", caption: "100 Days Program — day-by-day schedule with country filters" },
  { src: "/assets/projects/obs/chapters.webp", caption: "Chapters directory with flagship & tiered markets" },
  { src: "/assets/projects/obs/flagship.webp", caption: "Ten flagship events of the season" },
  { src: "/assets/projects/obs/speakers.webp", caption: "Speakers directory with topic filters" },
  { src: "/assets/projects/obs/about.webp", caption: "About One Business Season" },
];

const karobarScreens = [
  { src: "/assets/projects/karobar-sathi/dashboard.webp", caption: "Live dashboard — today's sales, profit & quick actions" },
  { src: "/assets/projects/karobar-sathi/pos.webp", caption: "POS billing — tap, search or scan to add items" },
  { src: "/assets/projects/karobar-sathi/cart.webp", caption: "Review & pay with GST worked out automatically" },
  { src: "/assets/projects/karobar-sathi/invoice.webp", caption: "Invoices with item-level profit, shared as PDF or printed" },
  { src: "/assets/projects/karobar-sathi/khata.webp", caption: "Khata ledger — track udhaar and record payments" },
  { src: "/assets/projects/karobar-sathi/profit.webp", caption: "FIFO-costed profit & loss" },
  { src: "/assets/projects/karobar-sathi/stock.webp", caption: "Stock value, low-stock alerts & movement history" },
  { src: "/assets/projects/karobar-sathi/assistant.webp", caption: "Ask Sathi — AI assistant over the shop's own numbers" },
  { src: "/assets/projects/karobar-sathi/hindi.webp", caption: "Fully localised in 11 languages (Hindi shown)" },
  { src: "/assets/projects/karobar-sathi/tools.webp", caption: "Built-in GST, margin, EMI & interest calculators" },
  { src: "/assets/projects/karobar-sathi/welcome.webp", caption: "Onboarding with Sathi, the in-app mascot" },
];

export const myProjects = [
  {
    shortName: "OBS",
    title: "OBS Events — One Business Season Platform",
    category: "Web Platform",
    status: "Live",
    role: "Full Stack Developer · Built at Kyptronix LLP · 2026",
    desc: "The production platform for One Business Season — a Dubai-based, chapter-based global business network running a 100-day season of summits across 28 countries. It brings event discovery and ticketing together with chapters, speakers, sponsors, a newsroom and the 100 Days Program calendar.",
    subdesc:
      "Built as a MERN monorepo with Stripe checkout (atomic inventory holds, idempotent webhooks), QR tickets and PDF invoices, an organizer portal with a 6-step event wizard and door check-in scanner, plus admin and super-admin control planes with TOTP MFA, audit logs and kill switches. Deployed on a VPS behind nginx with PM2 cluster mode, a background job worker and CI with bundle-size budgets.",
    highlights: [
      "Stripe checkout with QR tickets & PDF invoices",
      "Organizer portal with QR door check-in",
      "37-page admin + super-admin control plane",
      "TOTP MFA, refresh-token rotation & audit logs",
      "WebGL chapter globe & 100 Days calendar",
      "380+ API endpoints across 48 data models",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe", "nginx · PM2"],
    href: "https://onebseason.com/",
    texture: "/textures/project/obs.mp4",
    logo: "/assets/projects/obs/logo.svg",
    logoWide: true,
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid rgba(255, 255, 255, 0.9)",
      boxShadow: "0px 0px 60px 0px rgba(255, 255, 255, 0.12)",
    },
    spotlight: "/assets/spotlight1.png",
    screens: obsScreens,
  },
  {
    shortName: "Karobar Sathi",
    kind: "mobile",
    title: "Karobar Sathi — Billing, Khata & Stock App for Shops",
    category: "Mobile App · iOS & Android",
    status: "In Development",
    role: "Designed & built end to end — mobile app, API and admin console · 2026",
    desc: "A multi-business POS, inventory and profit-management app for independent Indian retailers — from kirana and hardware stores to pharmacies, restaurants and tea stalls. Owners bill at the counter, track udhaar in a khata ledger and always know their real profit.",
    subdesc:
      "Built with Expo and React Native (new architecture) on a Laravel 12 API. Stock moves on every sale and purchase using FIFO cost layers, sales queue offline and sync when the connection returns, invoices print to 58mm/80mm thermal or A4 PDF, and the whole app runs in 11 languages. “Ask Sathi”, an AI assistant, answers questions about the shop's own numbers within each user's permissions.",
    highlights: [
      "POS with cash, UPI, card & udhaar payments",
      "Khata ledgers for customers & suppliers",
      "FIFO-costed P&L and 12 business reports",
      "Offline sales queue with auto-sync",
      "11 languages · 22 business-type presets",
      "Staff roles with ~50 fine-grained permissions",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query", "Laravel 12", "MySQL", "Razorpay"],
    href: null,
    cta: "Coming soon to Play Store",
    comingSoonNote:
      "Karobar Sathi is in active development and testing ahead of its Play Store launch.",
    accent: "#4F46E5",
    logo: "/assets/projects/karobar-sathi/logo.png",
    logoStyle: {
      backgroundColor: "#13132B",
      border: "0.2px solid #2B2A5C",
      boxShadow: "0px 0px 60px 0px #4F46E54D",
    },
    spotlight: "/assets/spotlight5.png",
    screens: karobarScreens,
  },
  {
    shortName: "Housbe",
    title: "Housbe — Complete Real Estate Technology Platform",
    category: "SaaS Marketplace",
    status: "Live",
    desc: "Housbe is a full-featured SaaS real estate marketplace connecting buyers, sellers, agents, and lenders. It facilitates advanced property listings, AI-powered lead generation, and real-time communication within a comprehensive ecosystem.",
    subdesc:
      "The platform features role-based dashboards, OTP verification, and secure payment processing via Stripe and PayPal. It includes advanced property filtering, a buying leads marketplace, real-time messaging with media sharing, and automated document management with mPDF, providing a complete end-to-end solution for the real estate industry.",
    highlights: [
      "Role-based dashboards for every participant",
      "Stripe & PayPal payments",
      "Buying-leads marketplace",
      "Real-time messaging with media sharing",
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "Stripe", "PayPal", "mPDF"],
    href: "https://housbe.com",
    texture: "/textures/project/housbe.mp4",
    logo: "/assets/projects/housbe/logo.png",
    logoStyle: {
      backgroundColor: "#1E1012",
      border: "0.2px solid #3B1D21",
      boxShadow: "0px 0px 60px 0px #E11D484D",
    },
    spotlight: "/assets/spotlight2.png",
    screens: [
      { src: "/assets/projects/housbe/0.webp", caption: "Home — Deal Room and Property Passport" },
      { src: "/assets/projects/housbe/900.webp", caption: "Marketplace for buyers, sellers & renters" },
      { src: "/assets/projects/housbe/2700.webp", caption: "Active opportunities with search & filters" },
      { src: "/assets/projects/housbe/4500.webp", caption: "Promote and list properties" },
    ],
  },
  {
    shortName: "Al-Rasheed Academy",
    title: "Al-Rasheed Academy — School Management System",
    category: "Full Stack Web App",
    status: "Live",
    desc: "A comprehensive full-stack web application designed for Al-Rasheed Academy's complete school management. Features a public website with carousels and school information, role-based authentication for admins, staff, parents, and students, plus enrollment forms and student/parent surveys.",
    subdesc:
      "Built with modern web technologies, the system includes a calendar events module, photo gallery, contact forms, job and volunteer applications, and an administration dashboard. The comprehensive forms system handles health records, emergency contacts, picture authorizations, transfer records, and tuition contracts, providing complete school management in one integrated platform.",
    highlights: [
      "Role-based access for admins, staff, parents & students",
      "Online enrollment & survey forms",
      "Events calendar, gallery & applications",
      "Health, transfer & tuition record forms",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    href: "https://alrasheedacademy.org",
    texture: "/textures/project/alrasheed.mp4",
    logo: "/assets/projects/alrasheed/logo.png",
    logoStyle: {
      backgroundColor: "#0F2422",
      border: "0.2px solid #1D403C",
      boxShadow: "0px 0px 60px 0px #14B8A64D",
    },
    spotlight: "/assets/spotlight3.png",
    screens: [
      { src: "/assets/projects/alrasheed/0.webp", caption: "Public website home" },
      { src: "/assets/projects/alrasheed/900.webp", caption: "About the academy & parent reviews" },
      { src: "/assets/projects/alrasheed/2700.webp", caption: "Core values, features & programs" },
      { src: "/assets/projects/alrasheed/3600.webp", caption: "Academics, admissions & news" },
    ],
  },
  {
    shortName: "SellSync",
    title: "SellSync — Smart POS System for Modern Retail",
    category: "Product Website",
    status: "Live",
    desc: "SellSync is an all-in-one cloud-powered Point-of-Sale system designed to streamline billing, inventory, and customer management for retail stores. It combines powerful software with high-performance hardware integration.",
    subdesc:
      "Built for speed and accuracy, SellSync offers real-time inventory synchronization, advanced analytics, and multi-store support. It supports various payment methods, customizable receipt management, and automated alerts, ensuring seamless retail operations for businesses of all sizes.",
    highlights: [
      "Real-time inventory sync",
      "Multi-store support & analytics",
      "Hardware catalogue & demo booking",
      "Multiple payment methods",
    ],
    tags: ["React", "Tailwind CSS", "Cloud Integration", "Analytics"],
    href: "https://sellsync.com",
    texture: "/textures/project/sellsync.mp4",
    logo: "/assets/projects/sellsync/logo.png",
    logoStyle: {
      backgroundColor: "#22150E",
      border: "0.2px solid #3F2618",
      boxShadow: "0px 0px 60px 0px #F973164D",
    },
    spotlight: "/assets/spotlight4.png",
    screens: [
      { src: "/assets/projects/sellsync/0.webp", caption: "Product homepage" },
      { src: "/assets/projects/sellsync/900.webp", caption: "About SellSync" },
      { src: "/assets/projects/sellsync/2700.webp", caption: "Integrated POS hardware" },
      { src: "/assets/projects/sellsync/4500.webp", caption: "Feature overview" },
    ],
  },
];

// Either an image `path` or a react-icons `icon` key (see Tech.jsx) with its brand `color`.
export const technologies = [
  { name: "React.js", path: "/assets/react.svg" },
  { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
  { name: "React Native", icon: "reactnative", color: "#61DAFB" },
  { name: "Expo", icon: "expo", color: "#FFFFFF" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", path: "/assets/js.png" },
  { name: "Tailwind CSS", path: "/assets/tailwindcss.png" },
  { name: "Node.js", path: "/assets/nodel.svg" },
  { name: "Express.js", path: "/assets/express.svg" },
  { name: "MongoDB", path: "/assets/framer.svg" }, // file holds the MongoDB logo
  { name: "SQL", path: "/assets/sql.svg" },
  { name: "Firebase", icon: "firebase", color: "#FFCA28" },
  { name: "Java", path: "/assets/java.png" },
  { name: "Spring Boot", path: "/assets/figma.svg" }, // file holds the Spring logo
  { name: "Three.js", path: "/assets/threejs.png", invert: true },
  { name: "shadcn/ui", path: "/assets/shadcn.png" },
  { name: "GitHub", path: "/assets/github.svg" },
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
    name: "Kyptronix LLP",
    pos: "Full Stack Developer",
    duration: "Sep 2025 - Present",
    title:
      "Building production web platforms and cross-platform mobile apps for international clients. I own features end to end — React / Next.js frontends, React Native apps, Node.js + Express APIs, MongoDB schemas, payments and deployment — on client products such as the OBS events platform.",
    icon: "/assets/kyptronix.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Kyptronix LLP",
    pos: "Development Intern",
    duration: "Jun 2025 - Aug 2025",
    title:
      "Joined live client projects from day one, working in an Agile team with daily stand-ups, code reviews and SOP-driven delivery. Shipped MERN-stack features and bug fixes, and converted the internship into a full-time role.",
    icon: "/assets/kyptronix.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "University of Engineering & Management, Kolkata",
    pos: "B.Tech, Computer Science & Engineering",
    duration: "2022 - 2026",
    title:
      "B.Tech in Computer Science with a 9.15 CGPA. Built a strong foundation in data structures, OOP with Java, DBMS and system design, alongside projects in machine learning, sign-language detection and generative AI.",
    icon: "/assets/java.png",
    animation: "salute",
  },
];
