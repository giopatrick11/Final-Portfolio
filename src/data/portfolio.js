export const experience = {
  role: "Full-Stack Developer",
  company: "Ibotika Solutions Inc.",
  period: "Jan 2026 — Jun 2026",
  stack: ["Laravel", "Livewire", "Filament"],
  highlights: [
    "Built and enhanced clinic workflows for appointment scheduling, patient check-in, session management, and walk-in appointments, reducing manual steps for clinic staff.",
    "Developed invoicing, payment tracking, shift management, and Z-report features, improving daily transaction visibility and end-of-shift reporting.",
    "Implemented role-based dashboards, backend APIs, and database logic for appointments, payments, orthodontic records, and clinic operations.",
  ],
};

export const projects = [
  {
    id: "helpdesk",
    number: "01",
    title: "AI-Powered Helpdesk & Ticketing System",
    type: "Full-stack · AI-assisted support",
    date: "Jul 2026",
    summary:
      "A full-stack helpdesk platform with secure ticket ownership, RESTful workflows, and Gemini-powered triage for faster, more structured support handling.",
    highlights: [
      "Built JWT authentication and RESTful ticket management with FastAPI, PostgreSQL, and React.",
      "Used Gemini API to classify tickets, assign priority, categorize issues, and generate concise summaries.",
      "Implemented SQLAlchemy services, Pydantic validation, authenticated ownership, and structured database workflows.",
    ],
    roadmap:
      "Planned next: Redis-backed caching and background processing, plus RAG-based knowledge retrieval for context-aware support responses.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "Gemini API",
      "JWT",
      "Pydantic",
      "Uvicorn",
      "Docker",
      "REST API",
      "Git",
    ],
  },
  {
    id: "tracker",
    number: "02",
    title: "Client Project Tracker",
    type: "Full-stack · Project management",
    date: "Dec 2025",
    summary:
      "An authenticated project management system for organizing client work, searching and filtering records, tracking due dates, and surfacing timely dashboard data.",
    highlights: [
      "Built RESTful project CRUD with Laravel, React, TypeScript, Inertia, validation, and structured API responses.",
      "Added server-side search, status and priority filters, due-date sorting, and pagination.",
      "Integrated Redis dashboard caching with automatic invalidation and scheduled, queued due-date notifications.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "React",
      "TypeScript",
      "Inertia.js",
      "MySQL",
      "Redis",
      "Tailwind CSS",
      "Laravel Sanctum",
      "Laravel Scheduler",
      "Laravel Queues",
      "Eloquent ORM",
      "Vite",
      "Git",
    ],
  },
  {
    id: "pos",
    number: "03",
    title: "Restaurant Point-of-Sale System",
    type: "Full-stack · Transaction system",
    date: "Sep 2025",
    summary:
      "A restaurant POS system that supports the cashier workflow from browsing products and managing a cart through order processing, payments, receipts, shifts, and reporting.",
    highlights: [
      "Built a reusable Livewire cashier interface for dine-in, take-out, and delivery orders, including queue numbers and receipt viewing.",
      "Used Laravel database transactions with rollback handling for reliable order, item, payment, and inventory processing.",
      "Created a Filament back office for menu management, transaction history, receipt details, cashier shifts, and Z-reports.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "Livewire",
      "Filament",
      "MySQL",
      "Eloquent ORM",
      "Blade",
      "Tailwind CSS",
      "Laravel Fortify",
      "Vite",
      "Git",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["PHP", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & UI",
    items: ["Laravel", "FastAPI", "React", "Livewire", "Filament", "Inertia.js", "Tailwind CSS"],
  },
  {
    title: "Data & APIs",
    items: ["MySQL", "PostgreSQL", "Redis", "SQLAlchemy", "Eloquent ORM", "REST APIs"],
  },
  {
    title: "Tools & workflow",
    items: ["Git", "GitHub", "Vite", "Postman", "VS Code", "Docker"],
  },
];

export const education = {
  school: "Mindanao State University — Iligan Institute of Technology",
  degree: "B.S. in Information Technology (Database Major)",
  period: "2023 — Present",
  expected: "Expected June 2027",
  gpa: "1.35569",
  honors: ["1× Rizal’s Lister", "2× Chancellor’s Lister", "3× Dean’s Lister"],
  thesis:
    "Keyword-Based Smishing Detection in Text Messages Using Rule-Based Scam Link and Suspicious Keyword Analysis",
};

export const certificates = [
  {
    issuer: "Scrimba",
    title: "Learn React",
    detail: "React fundamentals, state management, and reusable components",
  },
  {
    issuer: "freeCodeCamp",
    title: "Responsive Web Design",
    detail: "HTML and CSS responsive design certification",
  },
];
