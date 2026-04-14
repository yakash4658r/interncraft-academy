export interface Internship {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  lastUpdated: string;
  category: string;
  image: string;
  skills: string[];
  learnings: string[];
  includes: string[];
  requirements: string[];
  modules: {
    title: string;
    lessons: string[];
    duration: string;
  }[];
  instructor: {
    name: string;
    role: string;
    company: string;
    bio: string;
    students: number;
    internships: number;
    avatar: string;
  };
  testimonials: {
    name: string;
    rating: number;
    review: string;
    avatar: string;
  }[];
}

export const internships: Internship[] = [
  {
    id: "1",
    slug: "machine-learning",
    title: "Machine Learning Internship",
    tagline: "Master ML algorithms and build real-world AI solutions",
    description: "Comprehensive machine learning internship covering supervised and unsupervised learning, neural networks, and model deployment. Work on real datasets from industry partners and build a portfolio that demonstrates your ability to solve complex problems using AI and ML techniques.",
    rating: 4.8,
    reviewCount: 2847,
    studentsEnrolled: 15234,
    duration: "8 weeks",
    level: "Intermediate",
    language: "English",
    lastUpdated: "January 2026",
    category: "Data Science",
    image: "/images/ml-internship.jpg",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Deep Learning"],
    learnings: [
      "Build predictive models using supervised and unsupervised learning",
      "Implement neural networks and deep learning architectures",
      "Process and analyze large datasets with industry-standard tools",
      "Deploy ML models to production environments",
      "Master feature engineering and model optimization",
      "Create data pipelines for automated model training"
    ],
    includes: [
      "24+ hours of on-demand video",
      "5 real-world projects",
      "Certificate of completion",
      "Direct mentor support",
      "Lifetime access to materials",
      "Mobile and TV access"
    ],
    requirements: [
      "Basic Python programming knowledge",
      "Understanding of basic mathematics",
      "Computer with internet access"
    ],
    modules: [
      {
        title: "Introduction to Machine Learning",
        lessons: ["What is Machine Learning?", "Types of ML", "Setting up Environment", "Your First ML Model"],
        duration: "1 week"
      },
      {
        title: "Supervised Learning",
        lessons: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forests", "Model Evaluation"],
        duration: "2 weeks"
      },
      {
        title: "Unsupervised Learning",
        lessons: ["K-Means Clustering", "Hierarchical Clustering", "PCA", "Dimensionality Reduction"],
        duration: "1 week"
      },
      {
        title: "Neural Networks & Deep Learning",
        lessons: ["Neural Network Basics", "Backpropagation", "CNNs for Images", "RNNs for Sequences"],
        duration: "2 weeks"
      },
      {
        title: "Model Deployment",
        lessons: ["Flask APIs", "Docker Containers", "Cloud Deployment", "Monitoring Models"],
        duration: "1 week"
      },
      {
        title: "Capstone Project",
        lessons: ["Project Planning", "Implementation", "Testing", "Presentation"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "Dr. Arjun Sharma",
      role: "Senior ML Engineer",
      company: "Google AI",
      bio: "PhD in Computer Science from IIT Bombay with 8+ years building production ML systems. Previously led ML teams at Flipkart and Microsoft Research.",
      students: 25000,
      internships: 12,
      avatar: "/images/instructor-arjun.jpg"
    },
    testimonials: [
      {
        name: "Priya Desai",
        rating: 5,
        review: "This internship transformed my career. The hands-on projects gave me confidence to crack interviews at top tech companies. The mentor support was incredible.",
        avatar: "PD"
      },
      {
        name: "Rahul Mehta",
        rating: 5,
        review: "Best investment I've made in my career. The curriculum is perfectly structured and the real-world projects helped me land my dream job at Amazon.",
        avatar: "RM"
      },
      {
        name: "Ananya Patel",
        rating: 5,
        review: "From knowing basic Python to building production ML models in 8 weeks. The mentorship and community support made all the difference.",
        avatar: "AP"
      }
    ]
  },
  {
    id: "2",
    slug: "dsa",
    title: "Data Structures & Algorithms Internship",
    tagline: "Master coding interviews with DSA mastery",
    description: "Intensive DSA internship designed to help you crack coding interviews at top tech companies. Learn essential data structures, algorithm patterns, and problem-solving techniques through 200+ hand-picked problems with detailed explanations.",
    rating: 4.9,
    reviewCount: 4532,
    studentsEnrolled: 28456,
    duration: "10 weeks",
    level: "Beginner",
    language: "English",
    lastUpdated: "February 2026",
    category: "Computer Science",
    image: "/images/dsa-internship.jpg",
    skills: ["Problem Solving", "Time Complexity", "Arrays", "Trees", "Graphs", "Dynamic Programming"],
    learnings: [
      "Master all essential data structures",
      "Solve complex problems using recursion and backtracking",
      "Analyze and optimize algorithms for time and space complexity",
      "Apply 15+ coding patterns to solve interview problems",
      "Build systematic approach to tackle any coding challenge",
      "Prepare for FAANG-level technical interviews"
    ],
    includes: [
      "200+ coding problems with solutions",
      "Mock interview sessions",
      "Certificate of completion",
      "1-on-1 mentor feedback",
      "Lifetime access to problem bank",
      "Community discussion forums"
    ],
    requirements: [
      "Basic programming knowledge in any language",
      "Willingness to practice daily",
      "Computer with code editor"
    ],
    modules: [
      {
        title: "Arrays & Strings",
        lessons: ["Two Pointers", "Sliding Window", "Prefix Sums", "String Manipulation"],
        duration: "2 weeks"
      },
      {
        title: "Linked Lists & Stacks",
        lessons: ["Linked List Operations", "Stack Applications", "Queue Implementations", "Pointer Manipulation"],
        duration: "1 week"
      },
      {
        title: "Trees & Binary Search",
        lessons: ["Binary Trees", "BST Operations", "Tree Traversals", "Binary Search Variations"],
        duration: "2 weeks"
      },
      {
        title: "Graphs",
        lessons: ["BFS", "DFS", "Shortest Path", "Topological Sort", "Union Find"],
        duration: "2 weeks"
      },
      {
        title: "Dynamic Programming",
        lessons: ["DP Patterns", "Knapsack Problems", "LIS & LCS", "Matrix Chain"],
        duration: "2 weeks"
      },
      {
        title: "Mock Interviews",
        lessons: ["Mock Session 1", "Feedback Review", "Mock Session 2", "Final Preparation"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "Vikram Joshi",
      role: "Staff Engineer",
      company: "Meta",
      bio: "Former competitive programmer, ACM-ICPC World Finalist. Has conducted 500+ technical interviews and helped 1000+ students land jobs at top companies.",
      students: 45000,
      internships: 8,
      avatar: "/images/instructor-vikram.jpg"
    },
    testimonials: [
      {
        name: "Sneha Reddy",
        rating: 5,
        review: "Cracked Google L4 interview after this internship. The pattern-based approach to problem-solving is game-changing. Worth every penny!",
        avatar: "SR"
      },
      {
        name: "Karthik Nair",
        rating: 5,
        review: "Went from struggling with easy problems to solving hard LeetCode questions confidently. The structured approach and mentor guidance made it possible.",
        avatar: "KN"
      },
      {
        name: "Divya Krishnan",
        rating: 5,
        review: "The mock interviews were invaluable. Got honest feedback that helped me improve. Cleared interviews at 3 unicorn startups.",
        avatar: "DK"
      }
    ]
  },
  {
    id: "3",
    slug: "digital-marketing",
    title: "Digital Marketing Internship",
    tagline: "Become a certified digital marketing professional",
    description: "Master the complete digital marketing ecosystem including SEO, content marketing, social media, paid advertising, email marketing, and analytics. Work on live campaigns and use real marketing tools to build a portfolio that demonstrates ROI-driven marketing skills.",
    rating: 4.7,
    reviewCount: 1923,
    studentsEnrolled: 12890,
    duration: "6 weeks",
    level: "Beginner",
    language: "English",
    lastUpdated: "March 2026",
    category: "Marketing",
    image: "/images/marketing-internship.jpg",
    skills: ["SEO", "Google Ads", "Meta Ads", "Content Strategy", "Email Marketing", "Analytics"],
    learnings: [
      "Build and execute comprehensive digital marketing strategies",
      "Optimize websites for search engines and drive organic traffic",
      "Create and manage high-performing paid ad campaigns",
      "Develop content that converts and builds brand authority",
      "Use analytics to measure and optimize marketing ROI",
      "Master social media marketing across all platforms"
    ],
    includes: [
      "30+ hours of video content",
      "4 real marketing campaigns",
      "Industry-recognized certificate",
      "Access to premium tools worth ₹50,000",
      "Weekly live Q&A sessions",
      "Job placement support"
    ],
    requirements: [
      "No prior marketing experience needed",
      "Laptop with internet connection",
      "Basic computer skills"
    ],
    modules: [
      {
        title: "Digital Marketing Fundamentals",
        lessons: ["Marketing Funnel", "Customer Personas", "Digital Channels Overview", "Marketing Analytics Basics"],
        duration: "1 week"
      },
      {
        title: "SEO Mastery",
        lessons: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO", "SEO Tools"],
        duration: "1 week"
      },
      {
        title: "Social Media Marketing",
        lessons: ["Instagram Marketing", "LinkedIn Strategy", "Twitter/X Growth", "Content Calendar"],
        duration: "1 week"
      },
      {
        title: "Paid Advertising",
        lessons: ["Google Ads Setup", "Meta Ads Manager", "Campaign Optimization", "Retargeting Strategies"],
        duration: "1 week"
      },
      {
        title: "Email & Automation",
        lessons: ["Email Marketing", "Automation Workflows", "CRM Integration", "A/B Testing"],
        duration: "1 week"
      },
      {
        title: "Analytics & Reporting",
        lessons: ["Google Analytics 4", "Data Interpretation", "ROI Calculation", "Creating Reports"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "Neha Kapoor",
      role: "VP of Growth",
      company: "CRED",
      bio: "Built growth teams at 3 unicorns. Managed ₹50Cr+ annual ad spend. Speaker at Meta Marketing Summit and Google Marketing Live.",
      students: 18000,
      internships: 6,
      avatar: "/images/instructor-neha.jpg"
    },
    testimonials: [
      {
        name: "Arjun Bhatia",
        rating: 5,
        review: "From knowing nothing about marketing to running campaigns that generated real revenue. The practical approach and live campaigns were incredible.",
        avatar: "AB"
      },
      {
        name: "Meera Iyer",
        rating: 5,
        review: "Started my own agency after this internship. The mentorship and real campaign experience gave me the confidence to take on clients.",
        avatar: "MI"
      },
      {
        name: "Vivek Sharma",
        rating: 4,
        review: "The ROI-focused approach changed how I think about marketing. Learning from someone who scaled CRED's growth was invaluable.",
        avatar: "VS"
      }
    ]
  },
  {
    id: "4",
    slug: "python-development",
    title: "Python Development Internship",
    tagline: "Build real-world applications with Python",
    description: "Comprehensive Python internship covering fundamentals, web development with Flask and Django, API design, database integration, automation scripting, and deployment. Build multiple projects including web applications, REST APIs, and automation tools.",
    rating: 4.8,
    reviewCount: 3214,
    studentsEnrolled: 19876,
    duration: "8 weeks",
    level: "Beginner",
    language: "English",
    lastUpdated: "January 2026",
    category: "Development",
    image: "/images/python-internship.jpg",
    skills: ["Python", "Flask", "Django", "REST APIs", "SQL", "Docker"],
    learnings: [
      "Build production-ready web applications with Flask and Django",
      "Design and implement RESTful APIs with proper authentication",
      "Work with databases using SQL and ORMs",
      "Create automation scripts and web scrapers",
      "Deploy applications to cloud platforms",
      "Write clean, testable, and maintainable Python code"
    ],
    includes: [
      "40+ hours of video tutorials",
      "6 complete Python projects",
      "Code review sessions",
      "GitHub portfolio setup",
      "Certificate of completion",
      "Job placement assistance"
    ],
    requirements: [
      "Basic programming knowledge helpful",
      "Computer with Python installed",
      "Text editor or IDE"
    ],
    modules: [
      {
        title: "Python Fundamentals",
        lessons: ["Variables & Data Types", "Control Flow", "Functions", "OOP Concepts", "File Handling"],
        duration: "2 weeks"
      },
      {
        title: "Web Development with Flask",
        lessons: ["Flask Basics", "Routing & Views", "Templates", "Forms", "Authentication"],
        duration: "2 weeks"
      },
      {
        title: "Django Framework",
        lessons: ["Django Setup", "Models & ORM", "Admin Interface", "Forms & Views", "Deployment"],
        duration: "2 weeks"
      },
      {
        title: "APIs & Databases",
        lessons: ["REST API Design", "Database Design", "SQL Basics", "API Authentication", "Testing APIs"],
        duration: "1 week"
      },
      {
        title: "Automation & Deployment",
        lessons: ["Web Scraping", "Automation Scripts", "Docker Basics", "AWS Deployment", "CI/CD"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "Rajesh Kumar",
      role: "Principal Engineer",
      company: "Stripe",
      bio: "Python expert with 12+ years building scalable systems. Core contributor to Flask ecosystem. Previously architected systems handling 1M+ requests/day.",
      students: 22000,
      internships: 9,
      avatar: "/images/instructor-rajesh.jpg"
    },
    testimonials: [
      {
        name: "Tanvi Mishra",
        rating: 5,
        review: "Best Python course I've taken. The projects were challenging but the mentor support helped me through. Landed a backend role at Uber!",
        avatar: "TM"
      },
      {
        name: "Aditya Rao",
        rating: 5,
        review: "From writing simple scripts to building full applications. The Django and API modules were particularly well-structured.",
        avatar: "AR"
      },
      {
        name: "Pooja Sharma",
        rating: 5,
        review: "The automation project I built during this internship got me noticed by recruiters. The practical focus makes all the difference.",
        avatar: "PS"
      }
    ]
  },
  {
    id: "5",
    slug: "web-development",
    title: "Web Development Internship",
    tagline: "Master HTML, CSS, JavaScript and modern frameworks",
    description: "Complete web development internship covering frontend fundamentals and modern frameworks. Learn HTML5, CSS3, JavaScript ES6+, React, and responsive design. Build real websites and web applications that work seamlessly across all devices.",
    rating: 4.8,
    reviewCount: 5621,
    studentsEnrolled: 32456,
    duration: "6 weeks",
    level: "Beginner",
    language: "English",
    lastUpdated: "February 2026",
    category: "Development",
    image: "/images/webdev-internship.jpg",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Git"],
    learnings: [
      "Build responsive websites with HTML5 and CSS3",
      "Master JavaScript ES6+ features and DOM manipulation",
      "Create dynamic web applications with React",
      "Implement modern UI/UX design principles",
      "Version control with Git and GitHub",
      "Deploy websites to production servers"
    ],
    includes: [
      "35+ hours of content",
      "5 complete website projects",
      "React fundamentals to advanced",
      "GitHub portfolio building",
      "Certificate of completion",
      "Freelancing guidance"
    ],
    requirements: [
      "No coding experience required",
      "Computer with internet",
      "Text editor (VS Code recommended)"
    ],
    modules: [
      {
        title: "HTML5 & CSS3 Fundamentals",
        lessons: ["HTML Structure", "Semantic Elements", "CSS Selectors", "Box Model", "Flexbox & Grid"],
        duration: "2 weeks"
      },
      {
        title: "JavaScript Essentials",
        lessons: ["Variables & Types", "Functions & Scope", "DOM Manipulation", "Events", "ES6+ Features"],
        duration: "2 weeks"
      },
      {
        title: "React Framework",
        lessons: ["React Basics", "Components & Props", "State & Hooks", "React Router", "API Integration"],
        duration: "1 week"
      },
      {
        title: "Projects & Deployment",
        lessons: ["Portfolio Website", "E-commerce App", "Weather Dashboard", "GitHub Pages", "Netlify Deployment"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "Sarah Johnson",
      role: "Senior Frontend Engineer",
      company: "Airbnb",
      bio: "Frontend specialist with 10+ years experience. Led UI development at Airbnb and Dropbox. Expert in React ecosystem and modern CSS.",
      students: 35000,
      internships: 7,
      avatar: "/images/instructor-sarah.jpg"
    },
    testimonials: [
      {
        name: "Amit Patel",
        rating: 5,
        review: "Zero to hero in web development! I went from no coding knowledge to building my own portfolio website in 6 weeks.",
        avatar: "AP"
      },
      {
        name: "Lisa Chen",
        rating: 5,
        review: "The React section was incredibly well-taught. I now work as a junior frontend developer thanks to this internship.",
        avatar: "LC"
      },
      {
        name: "Michael Brown",
        rating: 5,
        review: "Best structured curriculum I've seen. Each project builds on the previous one perfectly. Highly recommend!",
        avatar: "MB"
      }
    ]
  },
  {
    id: "6",
    slug: "ui-ux-design",
    title: "UI/UX Design Internship",
    tagline: "Design beautiful interfaces and user experiences",
    description: "Comprehensive UI/UX design internship covering design principles, user research, wireframing, prototyping, and design systems. Master Figma, learn design thinking, and build a professional portfolio that showcases your design skills.",
    rating: 4.9,
    reviewCount: 2134,
    studentsEnrolled: 15678,
    duration: "8 weeks",
    level: "Beginner",
    language: "English",
    lastUpdated: "March 2026",
    category: "Design",
    image: "/images/uiux-internship.jpg",
    skills: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems"],
    learnings: [
      "Master Figma for UI design and prototyping",
      "Conduct user research and create personas",
      "Design responsive interfaces for web and mobile",
      "Create wireframes and high-fidelity mockups",
      "Build and maintain design systems",
      "Present designs and receive feedback effectively"
    ],
    includes: [
      "40+ hours of design training",
      "5 complete design projects",
      "Figma pro workspace access",
      "1-on-1 design critiques",
      "Portfolio building guidance",
      "Industry-recognized certificate"
    ],
    requirements: [
      "No design experience required",
      "Computer capable of running Figma",
      "Creative mindset and curiosity"
    ],
    modules: [
      {
        title: "Design Fundamentals",
        lessons: ["Color Theory", "Typography", "Layout Principles", "Visual Hierarchy", "Design Tools Overview"],
        duration: "1 week"
      },
      {
        title: "Figma Mastery",
        lessons: ["Figma Interface", "Frames & Layers", "Components & Variants", "Auto Layout", "Prototyping"],
        duration: "2 weeks"
      },
      {
        title: "User Experience Design",
        lessons: ["User Research", "Personas & Journey Maps", "Information Architecture", "Wireframing", "Usability Testing"],
        duration: "2 weeks"
      },
      {
        title: "UI Design Projects",
        lessons: ["Mobile App Design", "Web Dashboard", "E-commerce Interface", "Design System Creation"],
        duration: "2 weeks"
      },
      {
        title: "Portfolio & Career",
        lessons: ["Case Study Writing", "Portfolio Presentation", "Design Interview Prep", "Freelancing Tips"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "Priya Malhotra",
      role: "Design Lead",
      company: "Figma",
      bio: "Former design lead at Spotify and Uber. Specializes in design systems and accessible design. Mentor to 500+ designers worldwide.",
      students: 20000,
      internships: 5,
      avatar: "/images/instructor-priya.jpg"
    },
    testimonials: [
      {
        name: "Emma Wilson",
        rating: 5,
        review: "From graphic designer to UI designer in 8 weeks. The Figma training and project feedback was exceptional.",
        avatar: "EW"
      },
      {
        name: "James Lee",
        rating: 5,
        review: "The UX research module changed how I approach design. I now work at a startup as their first product designer!",
        avatar: "JL"
      },
      {
        name: "Sofia Garcia",
        rating: 5,
        review: "Best design internship available online. The mentor critiques were invaluable for improving my work.",
        avatar: "SG"
      }
    ]
  },
  {
    id: "7",
    slug: "full-stack",
    title: "Full Stack Development Internship",
    tagline: "Become a complete web developer - frontend to backend",
    description: "Master both frontend and backend development in this comprehensive full stack internship. Learn React, Node.js, databases, APIs, authentication, and deployment. Build complete web applications from scratch and deploy them to production.",
    rating: 4.8,
    reviewCount: 3847,
    studentsEnrolled: 22134,
    duration: "12 weeks",
    level: "Intermediate",
    language: "English",
    lastUpdated: "January 2026",
    category: "Development",
    image: "/images/fullstack-internship.jpg",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Deployment"],
    learnings: [
      "Build complete web applications from scratch",
      "Master React for frontend development",
      "Create RESTful APIs with Node.js and Express",
      "Design and query databases with MongoDB",
      "Implement authentication and security",
      "Deploy full-stack apps to cloud platforms"
    ],
    includes: [
      "60+ hours of comprehensive training",
      "4 full-stack projects",
      "MERN stack certification",
      "Code reviews and feedback",
      "GitHub portfolio optimization",
      "Job placement support"
    ],
    requirements: [
      "Basic JavaScript knowledge required",
      "Understanding of HTML/CSS",
      "Computer with 8GB+ RAM recommended"
    ],
    modules: [
      {
        title: "Frontend with React",
        lessons: ["React Fundamentals", "Hooks & Context", "React Router", "State Management", "API Integration"],
        duration: "3 weeks"
      },
      {
        title: "Backend with Node.js",
        lessons: ["Node.js Basics", "Express Framework", "Middleware", "Error Handling", "Environment Setup"],
        duration: "2 weeks"
      },
      {
        title: "Database & APIs",
        lessons: ["MongoDB Basics", "Mongoose ODM", "CRUD Operations", "API Design", "Authentication JWT"],
        duration: "3 weeks"
      },
      {
        title: "Full Stack Projects",
        lessons: ["E-commerce Platform", "Social Media App", "Task Manager", "Real-time Chat"],
        duration: "3 weeks"
      },
      {
        title: "Deployment & DevOps",
        lessons: ["Git & GitHub", "Docker Basics", "AWS/Heroku Deployment", "CI/CD Pipelines", "Monitoring"],
        duration: "1 week"
      }
    ],
    instructor: {
      name: "David Park",
      role: "Senior Full Stack Engineer",
      company: "Netflix",
      bio: "Full stack architect with 12+ years experience. Built systems handling millions of users at Netflix and Airbnb. MERN stack expert.",
      students: 28000,
      internships: 10,
      avatar: "/images/instructor-david.jpg"
    },
    testimonials: [
      {
        name: "Rohan Verma",
        rating: 5,
        review: "The most comprehensive full stack internship I've taken. The projects are challenging and the mentor support is top-notch.",
        avatar: "RV"
      },
      {
        name: "Anika Desai",
        rating: 5,
        review: "From frontend dev to full stack engineer in 3 months. The curriculum perfectly bridges the gap between frontend and backend.",
        avatar: "AD"
      },
      {
        name: "Kevin Zhang",
        rating: 5,
        review: "Built a startup MVP using skills from this internship. The deployment and DevOps module was particularly valuable.",
        avatar: "KZ"
      }
    ]
  }
];

export const categories = [
  { name: "Data Science", slug: "data-science", count: 1 },
  { name: "Computer Science", slug: "computer-science", count: 1 },
  { name: "Development", slug: "development", count: 3 },
  { name: "Marketing", slug: "marketing", count: 1 },
  { name: "Design", slug: "design", count: 1 },
];

export function getInternshipBySlug(slug: string): Internship | undefined {
  return internships.find((i) => i.slug === slug);
}
