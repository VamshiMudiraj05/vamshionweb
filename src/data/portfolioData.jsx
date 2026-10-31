import React from "react";

export const personalInfo = {
  name: "Pulaboina Vamshi",
  displayName: "Vamshi Mudiraj",
  brandName: "vamshionweb",
  role: "Full-Stack Developer & Data Science Engineer",
  shortBio: "B.Tech CSE (Data Science) Graduate from Malla Reddy University (CGPA: 8.85) & Trainee Software Engineer.",
  location: "Hyderabad, Telangana, India",
  email: "vmudiraj230@gmail.com",
  status: "Available for Full-Time & Freelance Roles",
  github: "https://github.com/VamshiMudiraj05",
  linkedin: "https://www.linkedin.com/in/vamshi05/",
  twitter: "https://x.com/vamshimudiraj",
  youtube: "https://www.youtube.com/@vamshi_verse",
  instagram: "https://www.instagram.com/vamshi__verse/",
  memePage: "https://www.instagram.com/mruh_meme_project_/",
  resume: "/Vamshi_SD.pdf",
  resumeUrl: "/Vamshi_SD.pdf",
  liveUrl: "https://vamshiportfolio-sigma.vercel.app/",
};

export const rotatingRoles = [
  "Full-Stack Developer",
  "Student Content Creator",
  "YouTube Creator (15K+)",
  "Data Science Engineer",
  "Problem Solver",
];

export const heroBio = [
  {
    id: 1,
    content: (
      <>
        I build software products that are{" "}
        <strong className="font-semibold text-gray-900 dark:text-white">
          scalable, reliable, and delightful to use
        </strong>
        . From architecting robust RESTful backends in Java Spring Boot to crafting interactive, fluid interfaces in React and Tailwind CSS, I ensure that{" "}
        <strong className="font-semibold text-gray-900 dark:text-white">
          clean code meets thoughtful product engineering
        </strong>
        .
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        A Computer Science Engineering graduate specializing in{" "}
        <strong className="font-semibold text-gray-900 dark:text-white">
          Data Science (CGPA: 8.85)
        </strong>{" "}
        from{" "}
        <strong className="font-semibold text-gray-900 dark:text-white">
          Malla Reddy University, Hyderabad
        </strong>
        . Beyond engineering, I create{" "}
        <strong className="font-semibold text-gray-900 dark:text-white">
          student-focused tech and campus content
        </strong>{" "}
        reaching a combined community of{" "}
        <strong className="font-semibold text-[#c2185b] dark:text-[#f3b9c8]">
          35,000+ students and aspiring developers
        </strong>
        .
      </>
    ),
  },
];

export const techSkills = [
  { name: "React", category: "Frontend", color: "#61DAFB", level: "Expert" },
  { name: "Java", category: "Backend", color: "#EA2D2E", level: "Advanced" },
  { name: "Spring Boot", category: "Backend", color: "#6DB33F", level: "Advanced" },
  { name: "JavaScript", category: "Language", color: "#F7DF1E", level: "Expert" },
  { name: "TypeScript", category: "Language", color: "#3178C6", level: "Advanced" },
  { name: "Python", category: "Data Science", color: "#3776AB", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", level: "Expert" },
  { name: "Node.js", category: "Backend", color: "#339933", level: "Advanced" },
  { name: "Express", category: "Backend", color: "#68A063", level: "Advanced" },
  { name: "MySQL", category: "Database", color: "#4479A1", level: "Advanced" },
  { name: "MongoDB", category: "Database", color: "#47A248", level: "Advanced" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1", level: "Intermediate" },
  { name: "REST APIs", category: "Backend", color: "#FF5722", level: "Expert" },
  { name: "Docker", category: "DevOps", color: "#2496ED", level: "Intermediate" },
  { name: "Git", category: "Tools", color: "#F05032", level: "Expert" },
  { name: "GitHub", category: "Tools", color: "#8B5CF6", level: "Expert" },
  { name: "Postman", category: "Tools", color: "#FF6C37", level: "Advanced" },
  { name: "Figma", category: "Design", color: "#F24E1E", level: "Advanced" },
  { name: "Data Analytics", category: "Data Science", color: "#EC4899", level: "Advanced" },
];

export const experienceData = [
  {
    id: 1,
    company: "Isthara Parks Private Limited",
    location: "Hyderabad, India",
    role: "Trainee Software Engineer Intern",
    period: "Recent / May - Oct",
    description:
      "Contributed to enterprise hospitality and co-living SaaS platforms. Developed scalable REST APIs, optimized SQL queries, built intuitive user interfaces, and participated in Agile sprints.",
    responsibilities: [
      "Engineered backend microservices using Java and Spring Boot framework.",
      "Built responsive, accessible user interfaces using React and modern CSS.",
      "Optimized MySQL database queries and schemas for higher performance.",
      "Integrated secure authentication, payment gateway, and third-party APIs.",
      "Collaborated actively in daily standups, code reviews, and sprint planning.",
    ],
    tools: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Git", "Agile/Jira"],
  },
  {
    id: 2,
    company: "Freelance & Independent Projects",
    location: "Remote / Hyderabad",
    role: "Full-Stack Web Developer",
    period: "2024 — Present",
    description:
      "Architected and deployed custom end-to-end web applications and landing pages for clients and startups, prioritizing performance, responsive design, and SEO.",
    responsibilities: [
      "Designed UI wireframes and high-fidelity mockups in Figma.",
      "Implemented full-stack architecture using React, Next.js, Node.js, and MongoDB.",
      "Deployed production applications to Vercel and cloud platforms with automated CI/CD.",
      "Implemented responsive web performance tuning with 95+ Lighthouse scores.",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Figma", "Vercel"],
  },
  {
    id: 3,
    company: "Malla Reddy University",
    location: "Hyderabad, India",
    role: "B.Tech CSE (Data Science) — CGPA 8.85",
    period: "2022 — 2026",
    description:
      "Graduated with distinction in Computer Science & Engineering with specialization in Data Science. Strong academic and practical foundation in Data Structures, OOP, DBMS, Machine Learning, and Software Engineering.",
    responsibilities: [
      "Graduated with top academic standing (CGPA: 8.85 / 10).",
      "Led technical project teams during hackathons and university showcases.",
      "Conducted data analysis and predictive modeling using Python, Pandas, and Scikit-Learn.",
    ],
    tools: ["Python", "Machine Learning", "Data Analytics", "Java", "DSA", "DBMS", "OOP"],
  },
];

export const projectsData = [
  {
    id: "pg-made-eazy",
    title: "PG Made Eazy",
    category: "Full Stack",
    tagline: "Real-time PG listing, search, and booking platform.",
    description:
      "A comprehensive full-stack accommodation portal designed to streamline finding, verifying, and booking student and professional PGs. Features automated rental workflows, interactive maps, admin management, and secure payments.",
    liveUrl: "https://pg-made-eazy.vercel.app/",
    githubUrl: "https://github.com/VamshiMudiraj05/PGMadeEazy",
    tech: ["React", "Spring Boot", "MongoDB", "Tailwind CSS", "REST APIs"],
    gradient: "from-[#F9D3DD] via-[#F7E8EC] to-white",
    highlights: ["Real-time Search & Filters", "Booking Engine", "Admin Dashboard", "Automated Workflows"],
  },
  {
    id: "creator-sphere",
    title: "CreatorSphere",
    category: "Full Stack",
    tagline: "Influencer marketing & brand collaboration platform.",
    description:
      "A full-stack ecosystem bridging creators and brands. Enables brands to discover creators, launch targeted campaigns, track metrics in real time, and process automated milestone payouts.",
    liveUrl: "https://creator-sphere-iota.vercel.app/",
    githubUrl: "https://github.com/VamshiMudiraj05/CreatorSphere",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    gradient: "from-[#E0E7FF] via-[#EEF2FF] to-white",
    highlights: ["Creator Discovery", "Campaign Tracker", "Analytics Dashboard", "Secure Messaging"],
  },
  {
    id: "linkedin-referral-agent",
    title: "LinkedIn Referral Agent",
    category: "AI Agents",
    tagline: "Job Search Automation · Streamlines personalized referral outreach.",
    description:
      "Built an AI-powered LinkedIn Referral Agent that helps identify relevant professional connections and streamlines personalized referral outreach for suitable job opportunities. The agent simplifies networking by organizing potential contacts and automating key steps in the referral request workflow.",
    githubUrl: "https://github.com/VamshiMudiraj05",
    tech: ["AI Agents", "LinkedIn", "Workflow Automation", "LLMs"],
    gradient: "from-[#DBEAFE] via-[#EFF6FF] to-white",
    highlights: ["Connection Identification", "Company & Role Matching", "Personalized Message Prep", "Automated Outreach"],
  },
  {
    id: "naukri-job-agent",
    title: "Naukri Job Application Agent",
    category: "AI Agents",
    tagline: "Browser Automation · Automated job discovery and Quick Apply.",
    description:
      "Developed an AI-powered Naukri Job Application Agent to automate job discovery and streamline applications based on predefined search criteria. The agent leverages an existing candidate profile and resume to identify relevant opportunities and automate supported application workflows, reducing repetitive manual effort.",
    githubUrl: "https://github.com/VamshiMudiraj05",
    tech: ["AI Agents", "Browser Automation", "Web Interaction", "Job Filtering", "Workflow Automation"],
    gradient: "from-[#FEF3C7] via-[#FFFBEB] to-white",
    highlights: ["Role & Skill Matching", "Profile & Resume Sync", "Quick Apply Automation", "Zero Manual Repetition"],
  },
  {
    id: "it-career-discovery-agent",
    title: "IT Career Page Job Discovery Agent",
    category: "AI Agents",
    tagline: "Web Automation · Multi-company career portal scanner & job updates.",
    description:
      "Built an AI-powered IT Career Page Job Discovery Agent that scans multiple IT companies' official career pages and identifies job openings matching predefined skills, experience levels, and location preferences. It consolidates relevant opportunities into a streamlined job discovery workflow, helping candidates reduce manual searching and stay informed about suitable openings.",
    githubUrl: "https://github.com/VamshiMudiraj05",
    tech: ["AI Agents", "Web Automation", "Web Scraping", "Job Matching", "Data Extraction"],
    gradient: "from-[#DCFCE7] via-[#F0FDF4] to-white",
    highlights: ["Multi-Company Scans", "Direct Portal Discovery", "Configurable Filtering", "Consolidated Job Listings"],
  },
  {
    id: "cloud-commerce",
    title: "Cloud Commerce",
    category: "Full Stack",
    tagline: "High-performance modular e-commerce storefront.",
    description:
      "Modern e-commerce platform built with fast client-side state management, real-time product filtering, search autocomplete, persistent cart storage, and checkout flow.",
    liveUrl: "https://github.com/VamshiMudiraj05/Cloud-Commerce",
    githubUrl: "https://github.com/VamshiMudiraj05/Cloud-Commerce",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
    gradient: "from-[#F3E8FF] via-[#FAF5FF] to-white",
    highlights: ["Real-time Filters", "Persistent Cart", "Mock Checkout", "Fast Search"],
  },
  {
    id: "ctr-analysis",
    title: "CTR Machine Learning Analysis",
    category: "Data Science / ML",
    tagline: "Ad Click-Through Rate prediction & exploratory data analysis.",
    description:
      "An end-to-end data science project analyzing digital advertising datasets, performing feature engineering, identifying key drivers of user engagement, and training predictive classification models.",
    liveUrl: "https://github.com/VamshiMudiraj05/CTR-Analysis",
    githubUrl: "https://github.com/VamshiMudiraj05/CTR-Analysis",
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    gradient: "from-[#FCE7F3] via-[#FDF2F8] to-white",
    highlights: ["Exploratory Data Analysis", "Predictive ML Model", "Feature Engineering", "Data Visualizations"],
  },
];

export const contentCreationData = {
  headline: "Empowering 35K+ Students with Tech & Relatable Content",
  subheading:
    "Building an active digital community of 35,000+ students across YouTube and Instagram by delivering honest engineering guides, relatable campus humor, and practical coding tutorials.",
  stats: {
    totalAudience: "35K+",
    youtubeSubs: "15,000+",
    memeFollowers: "15,000+",
    instaFollowers: "5,000+",
    totalImpressions: "1.2M+",
  },
  platforms: [
    {
      id: "youtube",
      name: "YouTube Channel",
      handle: "@vamshi_verse",
      reach: "15,000+ Subscribers",
      type: "Long & Short Form Video",
      focus: "Student Tech Guides & Roadmaps",
      description:
        "Comprehensive engineering roadmaps, full-stack project builds, semester study tactics, and honest survival tips designed for college students.",
      tags: ["Web Dev Tutorials", "Engineering Roadmaps", "Placement Prep", "Student Tech Hacks"],
      url: "https://www.youtube.com/@vamshi_verse",
      accent: "#EF4444",
      gradient: "from-red-500/10 via-rose-500/5 to-transparent",
      badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      highlightMetric: "15K Subs",
      iconType: "youtube",
    },
    {
      id: "meme-page",
      name: "MRUH Meme Project",
      handle: "@mruh_meme_project_",
      reach: "15,000+ Followers",
      type: "Hyper-Engaged Campus Community",
      focus: "Relatable Student Life & Campus Culture",
      description:
        "The go-to viral hub for college students—capturing exam panic, viva experiences, 11:59 PM deadlines, and authentic campus humor with viral reach.",
      tags: ["Campus Memes", "MRUH Relatability", "Hostel Stories", "Student Humor"],
      url: "https://www.instagram.com/mruh_meme_project_/",
      accent: "#F59E0B",
      gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      highlightMetric: "15K Followers",
      iconType: "laugh",
    },
    {
      id: "instagram",
      name: "Instagram Creator Profile",
      handle: "@vamshi__verse",
      reach: "5,000+ Followers",
      type: "Short-Form Reels & Stories",
      focus: "Student Developer Life & Quick Tips",
      description:
        "30-second coding tricks, day in the life of a student developer, desk setups, productivity tools, and daily interactive Q&As with aspiring engineers.",
      tags: ["Developer Reels", "Coding Tips", "Day In The Life", "Productivity"],
      url: "https://www.instagram.com/vamshi__verse/",
      accent: "#EC4899",
      gradient: "from-pink-500/10 via-purple-500/5 to-transparent",
      badgeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
      highlightMetric: "5K Followers",
      iconType: "instagram",
    },
  ],
  pillars: [
    {
      id: 1,
      title: "🎓 Relatable Student Life",
      subtitle: "Connecting with the authentic student journey",
      description:
        "Covering the real college experience—from surviving back-to-back semesters and hostel food to viva struggles and last-minute exam preparation.",
    },
    {
      id: 2,
      title: "💻 Coding for College Students",
      subtitle: "Simplifying software engineering concepts",
      description:
        "Demystifying full-stack development, Java, React, and Data Structures without overwhelming jargon, making tech approachable for college beginners.",
    },
    {
      id: 3,
      title: "⚡ Viral Campus Culture & Memes",
      subtitle: "High-engagement humor & viral storytelling",
      description:
        "Curating top-tier relatable memes that spread organically through student WhatsApp groups, campus circles, and college communities.",
    },
    {
      id: 4,
      title: "🚀 Career & Internship Guidance",
      subtitle: "Navigating resumes, projects & placements",
      description:
        "Actionable advice on building portfolio projects that stand out, applying for off-campus internships, and gaining practical developer experience.",
    },
  ],
  showcaseItems: [
    {
      id: "video-1",
      title: "The Realistic CSE Engineering Roadmap (1st Year to Placements)",
      platform: "YouTube",
      category: "Career & Tech",
      views: "48K+ views",
      description: "A comprehensive guide on what skills actually matter in college vs what they teach in outdated syllabus.",
      tag: "Roadmap",
      duration: "14:20",
      gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    },
    {
      id: "meme-1",
      title: "Exam Night at 3:00 AM vs When the Question Paper Arrives",
      platform: "College Meme Page",
      category: "Student Life",
      views: "120K+ reach",
      description: "Hyper-relatable meme series capturing the collective panic of university semester exams that went viral across colleges.",
      tag: "Campus Humor",
      duration: "Viral Post",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    {
      id: "reel-1",
      title: "3 Websites Every Engineering Student Must Know in 2026",
      platform: "Instagram Reel",
      category: "Student Hacks",
      views: "85K+ views",
      description: "Fast-paced, high-retention reel revealing productivity tools and free resources for college assignments and learning to code.",
      tag: "Productivity",
      duration: "0:45",
      gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
    },
    {
      id: "video-2",
      title: "Building a Full Stack Project as a College Student from Scratch",
      platform: "YouTube",
      category: "Coding & Tech",
      views: "32K+ views",
      description: "Step-by-step walk-through building and deploying a React + Spring Boot application to put on student resumes.",
      tag: "Tutorial",
      duration: "22:15",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    },
    {
      id: "meme-2",
      title: "Internal Viva: Expectation vs Reality with the External Examiner",
      platform: "College Meme Page",
      category: "Student Life",
      views: "95K+ reach",
      description: "Relatable depiction of lab external exams that resonated with thousands of university engineering students.",
      tag: "Relatable",
      duration: "Viral Reel",
      gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    },
    {
      id: "reel-2",
      title: "Day in the Life of a CSE Student & Developer",
      platform: "Instagram Reel",
      category: "Developer Life",
      views: "42K+ views",
      description: "Balancing college classes, coding projects, and content creation from morning till night.",
      tag: "Vlog",
      duration: "0:58",
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    },
  ],
};
