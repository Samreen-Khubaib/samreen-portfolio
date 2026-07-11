// All the content on the site lives here.
// Edit this file to update your info — you never need to touch the components.

export const profile = {
  name: "Samreen Khubaib",
  title: "Full Stack Software Engineer",
  focus: "MERN Stack · AI-Integrated Web Apps",
  email: "samreenkhubaib@gmail.com",
  phone: "+92 319 6590515",
  linkedin: "https://linkedin.com/in/samreen-khubaib",
  github: "https://github.com/Samreen-Khubaib",
  summary:
    "I build and deploy scalable web applications with the MERN stack and Next.js — from RESTful APIs and real-time systems to production infrastructure on AWS EC2. My final year project paired a full e-commerce platform with an NLP chatbot, a cosine-similarity recommendation engine, WebRTC live commerce, and AR try-on.",
};

export const stack = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux", "HTML5 / CSS3", "CSS Modules", "Responsive Design"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "WebSockets", "WebRTC"],
  },
  {
    id: "ai",
    label: "AI / ML",
    items: ["TensorFlow.js", "MediaPipe", "Hugging Face Embeddings", "Groq API", "Cosine Similarity", "NLP"],
  },
  {
    id: "data",
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "CloudFront", "Vercel", "Nginx", "PM2", "Git / GitHub"],
  },
  {
    id: "lang",
    label: "Languages",
    items: ["JavaScript", "Dart", "Flutter", "C", "C++", "Java"],
  },
];

// Nodes + edges for the hero signature diagram — mirrors the real
// request path through Samreen's stack: client -> API -> data/AI -> infra.
export const systemNodes = [
  { id: "client", label: "React / Next.js", x: 60, y: 40, tier: "client" },
  { id: "api", label: "Node + Express", x: 220, y: 110, tier: "server" },
  { id: "socket", label: "Socket.IO", x: 220, y: 190, tier: "server" },
  { id: "ai", label: "Groq + HF Embeddings", x: 400, y: 60, tier: "ai" },
  { id: "db", label: "MongoDB", x: 400, y: 150, tier: "data" },
  { id: "infra", label: "AWS EC2 / Nginx", x: 400, y: 230, tier: "infra" },
];

export const systemEdges = [
  ["client", "api"],
  ["client", "socket"],
  ["api", "ai"],
  ["api", "db"],
  ["api", "infra"],
  ["socket", "infra"],
];

export const projects = [
  {
    id: "shopsphere",
    name: "ShopSphere",
    tagline: "A Futuristic Shopping Experience",
    role: "Full Stack Developer · Team Lead",
    period: "Final Year Project",
    featured: true,
    description:
      "A full-stack MERN e-commerce platform with multi-role access for users, sellers, and admins. Built the AI layer end to end: a chatbot for semantic product search, a recommendation engine, live AR try-on, and real-time seller-to-buyer commerce.",
    highlights: [
      "Multi-role platform (User / Seller / Admin) with Firebase Authentication",
      "NLP chatbot using Hugging Face embeddings for semantic search + Groq API for fast responses, with Web Speech API voice input",
      "Recommendation engine using cosine similarity scoring against order history",
      "AR virtual try-on with MediaPipe and TensorFlow.js",
      "WebRTC live commerce with Socket.IO real-time seller-to-buyer chat",
    ],
    link: "https://github.com/memoonaajmal/FYPSHOPSPHERE",
    stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Firebase", "TensorFlow.js", "MediaPipe", "Hugging Face", "Groq API", "WebRTC", "Socket.IO", "Redux"],
  },
  {
    id: "ticketing",
    name: "Train Ticket Management System",
    tagline: "End-to-end booking system",
    role: "Full Stack Developer",
    period: "Personal Project",
    featured: false,
    description:
      "A full-stack ticket booking system with JWT-based authentication for secure, stateless session management across the booking flow.",
    highlights: [
      "Seamless end-to-end booking experience",
      "JWT authentication for secure login and session handling",
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "JavaScript"],
    link: "https://github.com/Samreen-Khubaib/Train-Ticket-Management-system",
  },
];

export const experience = [
  {
    id: "endless-invo",
    role: "Node.js Backend Developer",
    org: "Endless Invo",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Designed and maintained RESTful API services with Node.js and Express.js for scalable application workflows",
      "Provisioned AWS EC2 from scratch — configured Nginx reverse proxy, PM2, and UFW firewall rules for HTTP/HTTPS/SSH",
      "Integrated Stripe payments and SendGrid/Nodemailer for transactional email; used AWS S3 for file storage",
      "Implemented real-time bidirectional communication with Socket.IO; deployed to production via Git CI/CD",
    ],
  },
  {
    id: "humanity-alliance",
    role: "Backend Developer Intern",
    org: "Humanity Alliance Organization",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Built and integrated RESTful APIs with Node.js and Express.js for core features and third-party services",
      "Managed relational database operations and schema design using PostgreSQL",
    ],
  },
  {
    id: "developers-hub",
    role: "Frontend Developer Intern",
    org: "Developers.Hub Corporation",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Developed responsive, accessible UI components with React.js, HTML, and CSS for dashboards and profile modules",
      "Deployed the frontend to production using Vercel for CI/CD hosting",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  school: "COMSATS University Islamabad, Lahore Campus",
  period: "Sep 2022 – June 2026",
  detail: "CGPA: 3.56 / 4.00",
};
