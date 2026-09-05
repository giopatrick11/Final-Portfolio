import helpdeskDashboard from "../../folder_showcasing/ai_helpdesk/full-page-snap-screenshot (3).png";
import helpdeskKnowledgeBase from "../../folder_showcasing/ai_helpdesk/full-page-snap-screenshot (5).png";
import helpdeskLogin from "../../folder_showcasing/ai_helpdesk/full-page-snap-screenshot (1).png";
import helpdeskTickets from "../../folder_showcasing/ai_helpdesk/7f812d35-3d8e-4e7b-b9aa-d057561fc6f1.jpeg";
import posAddItem from "../../folder_showcasing/pos/3bd20555-8a9e-4065-b4a7-4864365f38d8.jpeg";
import posCheckout from "../../folder_showcasing/pos/5310c00c-9008-4672-a2c0-c7482caec534.jpeg";
import posCashier from "../../folder_showcasing/pos/b4bb146d-bcd4-4a4a-95fb-dcd5dee2bb70.jpeg";
import posHome from "../../folder_showcasing/pos/full-page-snap-screenshot (1).png";
import posOrderCreated from "../../folder_showcasing/pos/full-page-snap-screenshot (2).png";
import posOrders from "../../folder_showcasing/pos/full-page-snap-screenshot (3).png";
import posTransactions from "../../folder_showcasing/pos/full-page-snap-screenshot (4).png";

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
    images: [
      {
        src: helpdeskTickets,
        alt: "AI Helpdesk ticket queue showing ticket priority, category, status, and an AI-generated triage summary",
        label: "AI ticket triage",
      },
      {
        src: helpdeskDashboard,
        alt: "AI Helpdesk dashboard showing support queue and knowledge base activity metrics",
        label: "Dashboard overview",
      },
      {
        src: helpdeskKnowledgeBase,
        alt: "AI Helpdesk knowledge base with PDF upload and grounded question panels",
        label: "Knowledge base",
      },
      {
        src: helpdeskLogin,
        alt: "AI Helpdesk sign-in screen",
        label: "Secure sign in",
      },
    ],
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
    images: [
      {
        src: posCashier,
        alt: "Restaurant POS cashier screen with menu items, order types, cart contents, and order total",
        label: "Cashier and cart",
      },
      {
        src: posAddItem,
        alt: "Restaurant POS item customization dialog with variants, quantity, notes, and add-ons",
        label: "Item customization",
      },
      {
        src: posCheckout,
        alt: "Restaurant POS payment checkout with payment methods, keypad, and cash amount shortcuts",
        label: "Payment checkout",
      },
      {
        src: posOrderCreated,
        alt: "Restaurant POS order confirmation with queue number and printable receipt",
        label: "Receipt and queue",
      },
      {
        src: posOrders,
        alt: "Restaurant POS order queue with status filters and order actions",
        label: "Order queue",
      },
      {
        src: posTransactions,
        alt: "Restaurant POS transaction history with payment details and receipt links",
        label: "Transaction history",
      },
      {
        src: posHome,
        alt: "Restaurant POS home screen prompting the cashier to start a shift",
        label: "Shift workflow",
      },
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
