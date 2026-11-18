export const portfolioDataFR = {
  personalInfo: {
    name: "Berios Arol Djeufack Kafack",
    shortName: "B.A",
    title: "Ingénieur IA",
    avatarUrl: "/images/profile.jpg",
    statusBadge: "Disponible pour opportunités",
    headline: {
      part1: "Je conçois des",
      accent: "intelligences",
      part2: "qui résolvent des",
      part3: "problèmes réels."
    },
    heroDescription:
      "Ingénieur IA basé à Douala — je conçois des systèmes RAG, des modèles de machine learning et des applications logicielles centrées utilisateur, du prototype au déploiement.",
    stats: [
      { id: "certs", number: 10, label: "Certifications obtenues" },
      { id: "hours", number: 900, label: "Heures de formation certifiée" },
      { id: "projects", number: 3, label: "Projets livrés" }
    ]
  },

  marqueeKeywords: [
    "RAG & LLM",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "React",
    "Docker Compose",
    "n8n Workflows",
    "Keycloak IAM",
    "Qdrant Vector DB",
    "Computer Vision",
    "NLP",
    "Data Science"
  ],

  projects: {
    featured: {
      id: 1,
      number: "01",
      title: "Assistant RAG Sécurisé pour CAMRAIL",
      role: "Concepteur & Développeur Full-Stack IA · Stage BIGDATA CENTER & AI SARLU",
      problem:
        "Les collaborateurs de CAMRAIL (Cameroon Railways) avaient besoin d'un assistant conversationnel capable d'interroger instantanément et de façon fiable une volumineuse documentation interne (textes normatifs, conventions, guides techniques), tout en cloisonnant strictement les accès selon les groupes d'utilisateurs.",
      solution:
        "Conception et déploiement de bout en bout d'un système de Recherche Documentaire Augmentée (RAG) : interface de chat moderne sous React (streaming de réponses, affichage du raisonnement et citation des sources documentaires), orchestrateur n8n pour l'ingestion multiformat et la recherche hybride (sémantique Qdrant + lexicale BM25), conteneurisation Docker Compose et sécurisation centralisée des identités et accès (IAM) avec Keycloak.",
      tech: [
        "React",
        "RAG / LLM",
        "n8n",
        "Docker Compose",
        "Keycloak (IAM)",
        "Qdrant (Vector DB)",
        "MinIO",
        "Figma"
      ],
      result:
        "Septembre 2026 · Projet candidat retenu pour la compétition « We Challenge You » de CAMRAIL",
      asciiVisual: ` ┌──────────────────────────────────┐
 │  🤖 Assistant RAG · CAMRAIL      │
 │  ├─ 💬 "Que dit la convention...?"│
 │  ├─ ⚡ n8n + Recherche Hybride   │
 │  ├─ 🔍 Qdrant [Dense] + BM25     │
 │  ├─ 🧠 LLM avec flux streaming   │
 │  └─ 🔐 Authentifié via Keycloak  │
 └──────────────────────────────────┘`
    },
    secondary: [
      {
        id: 2,
        number: "02",
        title: "Explorateur de fichiers en ligne",
        role: "Développeur full-stack · Stage Kaidou LAB SARL",
        problem:
          "L'équipe avait besoin d'un outil interne pour naviguer et gérer des fichiers à distance, sans installer de logiciel.",
        solution:
          "Application web complète avec interface de navigation intuitive, upload/download et gestion des permissions, développée en autonomie pendant le stage.",
        tech: ["Java", "HTML5", "CSS3", "JavaScript"],
        result: "Été 2025 · Livré en production chez Kaidou LAB"
      },
      {
        id: 3,
        number: "03",
        title: "Site Web Responsive",
        role: "Concepteur & Développeur",
        desc: "Page web moderne et entièrement responsive (mobile, tablette, desktop) avec animations CSS et interactions JavaScript soignées.",
        tech: ["HTML5", "CSS3 Flex/Grid", "JavaScript"],
        link: "https://riosmac-hai.vercel.app/",
        linkText: "Consulter"
      }
    ]
  },

  about: {
    paragraphs: [
      "Jeune ingénieur en intelligence artificielle basé à Douala, je construis des solutions utiles et centrées utilisateur. Ma pensée algorithmique rigoureuse s'allie à une créativité technique pour concevoir des modèles et architectures logicielles complètes — du machine learning classique aux systèmes RAG et conteneurisés.",
      "Mes expériences de stage m'ont permis de concevoir en conditions réelles un système de Recherche Documentaire Augmentée (RAG) sécurisé pour CAMRAIL chez BIGDATA CENTER & AI (React, workflows n8n, recherche hybride Qdrant + BM25, Docker Compose, Keycloak), ainsi qu'une application de gestion de fichiers déployée en production chez Kaidou LAB.",
      "Certifié par Google (Google Analytics), freeCodeCamp (Python, Machine Learning), Microsoft et Cisco, j'ai cumulé plus de 900 heures de formation certifiée afin de délivrer des solutions d'intelligence artificielle performantes et sécurisées."
    ],
    details: [
      { label: "Localisation", value: "Douala, Cameroun" },
      { label: "Langues", value: "Français (natif), Anglais (B1)" },
      { label: "Formation", value: "Ingénieur Informatique, spé. IA" },
      { label: "Statut", value: "Disponible pour stage / alternance" }
    ]
  },

  skills: {
    featuredAi: {
      title: "IA, Machine Learning & RAG",
      icon: "⟁",
      items: [
        "RAG (Retrieval-Augmented Gen)",
        "Recherche Hybride (BM25 + Dense)",
        "Large Language Models (LLM)",
        "Deep Learning",
        "Machine Learning",
        "TensorFlow & Scikit-learn",
        "Ollama & Embeddings",
        "Pandas & NumPy",
        "NLP & Computer Vision"
      ]
    },
    categories: [
      {
        title: "Frontend & Langages",
        icon: "</>",
        items: [
          "React",
          "JavaScript (ES6+)",
          "Python",
          "Java",
          "C",
          "C#",
          "HTML5 / CSS3",
          "Figma"
        ]
      },
      {
        title: "DevOps, Workflows & Sécurité",
        icon: "⚙",
        items: [
          "Docker & Docker Compose",
          "n8n (Workflows & Automatisation)",
          "Keycloak (IAM, JWT, OIDC)",
          "MinIO (Stockage objet)",
          "Git / GitHub",
          "VS Code"
        ]
      },
      {
        title: "Bases de données & Données",
        icon: "⛁",
        items: [
          "Qdrant (Base vectorielle)",
          "Google Analytics 4",
          "PostgreSQL",
          "MySQL",
          "SQLite",
          "Modélisation relationnelle",
          "Data Analysis"
        ]
      },
      {
        title: "Méthodologie & Soft Skills",
        icon: "◎",
        items: [
          "Pensée algorithmique",
          "Architecture logicielle",
          "Méthodologie Agile & Suivi quotidien",
          "Résolution de problèmes",
          "Esprit d'initiative & Travail d'équipe"
        ]
      }
    ]
  },

  parcours: {
    timeline: [
      {
        date: "Oct 2023 — Juin 2028",
        title: "Ingénieur en Informatique",
        place: "Institut Supérieur de Management et d'Entrepreneuriat — Douala",
        desc: "Spécialisation Intelligence Artificielle · En cours",
        badge: "En cours",
        active: true
      },
      {
        date: "Juil — Sept 2026",
        title: "Stagiaire Ingénieur IA & Logiciel",
        place: "BIGDATA CENTER & AI SARLU — Beedi, Douala",
        desc: "Conception et mise en place d'un système de Recherche Documentaire Augmentée (RAG) sécurisé pour CAMRAIL : interface de chat React avec streaming et explicabilité, workflows n8n pour ingestion et recherche hybride (Qdrant + BM25), conteneurisation Docker Compose (5 microservices) et authentification Keycloak.",
        badge: "Stage",
        active: false
      },
      {
        date: "Juil — Août 2025",
        title: "Stagiaire Développeur",
        place: "Kaidou LAB SARL — Akwa, Douala",
        desc: "Création en autonomie d'une application web « explorateur de fichiers en ligne » avec Java, HTML, CSS et JavaScript. Livré en production.",
        badge: "Stage",
        active: false
      },
      {
        date: "2022 — 2023",
        title: "Baccalauréat C",
        place: "Lycée de Makepe — Douala",
        desc: "Mention Bien",
        badge: null,
        active: false
      },
      {
        date: "2021 — 2022",
        title: "Probatoire C",
        place: "Lycée de Makepe — Douala",
        desc: "Mention Très Bien",
        badge: null,
        active: false
      }
    ],

    certifications: [
      {
        issuer: "Google",
        name: "Google Analytics Certification (2026)",
        date: "Nov 2026",
        category: "Google",
        isLatest: true,
        fileUrl: "/certifications/Google Analytics/Certificat Google Analytics.pdf",
        badgeUrl: "/certifications/Google Analytics/Badge Google Analytics.png",
        verifyUrl: "https://skillshop.credential.net/f478069a-c04e-4777-bd15-291f419452fa"
      },
      {
        issuer: "freeCodeCamp",
        name: "Machine Learning with Python",
        date: "Déc 2025 · ~300h",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Machine Learning with Python.pdf"
      },
      {
        issuer: "freeCodeCamp",
        name: "Python Developer",
        date: "Mars 2026 · ~300h",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Python V9 Certification.pdf"
      },
      {
        issuer: "freeCodeCamp",
        name: "Relational Database",
        date: "Déc 2025 · ~300h",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Relational Database V9.pdf"
      },
      {
        issuer: "freeCodeCamp & Microsoft",
        name: "Foundational C# with Microsoft",
        date: "Sept 2025",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Foundational C# with Microsoft.pdf"
      },
      {
        issuer: "freeCodeCamp",
        name: "B1 English for Developers",
        date: "Janv 2026",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/B1 English for Developers.pdf"
      },
      {
        issuer: "Cisco Networking Academy",
        name: "JavaScript Essentials 1",
        date: "Avril 2026",
        category: "Cisco",
        fileUrl: "/certifications/Mes certifications netacad/JavaScriptEssentials1Update20260418-31-fl5flw.pdf"
      },
      {
        issuer: "Cisco & JS Institute",
        name: "HTML Essentials",
        date: "2026",
        category: "Cisco",
        fileUrl: "/certifications/Mes certifications netacad/HTMLEssentialsv120260414-32-64o2zo.pdf"
      },
      {
        issuer: "Cisco Networking Academy",
        name: "English for IT 2",
        date: "2026",
        category: "Cisco",
        fileUrl: "/certifications/Mes certifications netacad/English_for_IT_2_certificate_arolddjeufack-gmail-com_35a6b579-15e6-4fde-b6ef-72e748f770bb.pdf"
      },
      {
        issuer: "Kaggle Learn",
        name: "Pandas",
        date: "Avril 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Pandas.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Intro to Machine Learning",
        date: "Mai 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Intro to Machine Learning.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Intermediate Machine Learning",
        date: "Juin 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Intermediate Machine Learning.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Advanced SQL",
        date: "Juin 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Advanced SQL.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Data Visualization",
        date: "Juillet 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Data Visualization.png"
      },
      {
        issuer: "LeCloudFacile",
        name: "Kubernetes pour les débutants",
        date: "Mai 2026",
        category: "Cloud",
        fileUrl: "/certifications/Certifications LeCloudFacile/Certificat Kubernetes-pour-les-debutants.pdf"
      },
      {
        issuer: "LeCloudFacile",
        name: "Introduction à Docker",
        date: "Mai 2026",
        category: "Cloud",
        fileUrl: "/certifications/Certifications LeCloudFacile/Certificat Introduction-a-Docker.pdf"
      },
      {
        issuer: "LeCloudFacile",
        name: "Introduction au DevOps",
        date: "Mai 2026",
        category: "Cloud",
        fileUrl: "/certifications/Certifications LeCloudFacile/Certificat Introduction-au-DevOps.pdf"
      },
      {
        issuer: "Cursa",
        name: "Formation Flutter - iOS & Android",
        date: "Mai 2026",
        category: "Mobile",
        fileUrl: "/certifications/Certification Flutter.png"
      },
      {
        issuer: "Google Cloud / Simplilearn",
        name: "Gmail - Declaration of Completion",
        date: "Juillet 2026",
        category: "Google",
        fileUrl: "/certifications/Certificat de completion Gmail.pdf"
      },
      {
        issuer: "Atlassian",
        name: "Trello - Get the most out of Trello Learning Path",
        date: "Juillet 2026",
        category: "Outils",
        fileUrl: "/certifications/Certification Trello - Get the most out of Trello Learning Path.pdf"
      }
    ]
  },

  contact: {
    cta: "Un projet, un stage, une idée ?\nÉcrivez-moi.",
    subtitle: "Je réponds sous 24 h.",
    email: "arolddjeufack@gmail.com",
    linkedin: "https://www.linkedin.com/in/berios-arol-djeufack-605b60219/",
    linkedinUser: "Berios Arol",
    github: "https://github.com/Arol4",
    githubUser: "Arol4",
    phone: "+237 679 139 512"
  }
}

export const portfolioDataEN = {
  personalInfo: {
    name: "Berios Arol Djeufack Kafack",
    shortName: "B.A",
    title: "AI Engineer",
    avatarUrl: "/images/profile.jpg",
    statusBadge: "Available for opportunities",
    headline: {
      part1: "I build",
      accent: "intelligent systems",
      part2: "that solve",
      part3: "real-world problems."
    },
    heroDescription:
      "AI Engineer based in Douala — I design RAG systems, machine learning models, and user-centric software applications, from prototype to production deployment.",
    stats: [
      { id: "certs", number: 10, label: "Certifications earned" },
      { id: "hours", number: 900, label: "Hours of certified training" },
      { id: "projects", number: 3, label: "Delivered projects" }
    ]
  },

  marqueeKeywords: [
    "RAG & LLM",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "React",
    "Docker Compose",
    "n8n Workflows",
    "Keycloak IAM",
    "Qdrant Vector DB",
    "Computer Vision",
    "NLP",
    "Data Science"
  ],

  projects: {
    featured: {
      id: 1,
      number: "01",
      title: "Secure RAG Assistant for CAMRAIL",
      role: "AI Full-Stack Designer & Developer · Internship at BIGDATA CENTER & AI SARLU",
      problem:
        "CAMRAIL (Cameroon Railways) staff needed a conversational assistant capable of instantly and reliably querying extensive internal documentation (regulatory texts, collective agreements, technical manuals), while strictly partitioning access rights according to user groups.",
      solution:
        "End-to-end design and deployment of a Retrieval-Augmented Generation (RAG) system: modern React chat UI (streaming responses, reasoning visibility, and documentary source citations), n8n orchestrator for multi-format ingestion and hybrid search (Qdrant semantic + BM25 lexical), Docker Compose containerization, and centralized identity & access management (IAM) with Keycloak.",
      tech: [
        "React",
        "RAG / LLM",
        "n8n",
        "Docker Compose",
        "Keycloak (IAM)",
        "Qdrant (Vector DB)",
        "MinIO",
        "Figma"
      ],
      result:
        "September 2026 · Selected candidate project for CAMRAIL's « We Challenge You » competition",
      asciiVisual: ` ┌──────────────────────────────────┐
 │  🤖 RAG Assistant · CAMRAIL      │
 │  ├─ 💬 "What does agreement say?"│
 │  ├─ ⚡ n8n + Hybrid Search       │
 │  ├─ 🔍 Qdrant [Dense] + BM25     │
 │  ├─ 🧠 Streaming LLM inference   │
 │  └─ 🔐 Keycloak Authenticated    │
 └──────────────────────────────────┘`
    },
    secondary: [
      {
        id: 2,
        number: "02",
        title: "Online File Explorer",
        role: "Full-Stack Developer · Internship at Kaidou LAB SARL",
        problem:
          "The team needed an internal tool to browse and manage remote files without installing desktop software.",
        solution:
          "Comprehensive web application featuring intuitive file browsing, upload/download capabilities, and permissions management, independently built during the internship.",
        tech: ["Java", "HTML5", "CSS3", "JavaScript"],
        result: "Summer 2025 · Shipped to production at Kaidou LAB"
      },
      {
        id: 3,
        number: "03",
        title: "Responsive Web Showcase",
        role: "Designer & Developer",
        desc: "Modern, fully responsive web page (mobile, tablet, desktop) crafted with smooth CSS animations and polished JavaScript interactions.",
        tech: ["HTML5", "CSS3 Flex/Grid", "JavaScript"],
        link: "https://riosmac-hai.vercel.app/",
        linkText: "Visit Site"
      }
    ]
  },

  about: {
    paragraphs: [
      "Young artificial intelligence engineer based in Douala, I build impactful, user-centered solutions. My rigorous algorithmic mindset pairs with technical creativity to engineer comprehensive software architectures and AI models — from classic machine learning to containerized RAG systems.",
      "Through my internship experiences, I designed a production-ready, secure Retrieval-Augmented Generation (RAG) platform for CAMRAIL at BIGDATA CENTER & AI (React, n8n workflows, Qdrant + BM25 hybrid search, Docker Compose, Keycloak), along with a remote file management app shipped to production at Kaidou LAB.",
      "Certified by Google (Google Analytics), freeCodeCamp (Python, Machine Learning), Microsoft, and Cisco, I have accumulated over 900 hours of certified coursework to deliver high-performance, secure artificial intelligence solutions."
    ],
    details: [
      { label: "Location", value: "Douala, Cameroon" },
      { label: "Languages", value: "French (Native), English (B1)" },
      { label: "Education", value: "Computer Engineering, AI Major" },
      { label: "Status", value: "Available for internship / apprenticeship" }
    ]
  },

  skills: {
    featuredAi: {
      title: "AI, Machine Learning & RAG",
      icon: "⟁",
      items: [
        "RAG (Retrieval-Augmented Gen)",
        "Hybrid Search (BM25 + Dense)",
        "Large Language Models (LLM)",
        "Deep Learning",
        "Machine Learning",
        "TensorFlow & Scikit-learn",
        "Ollama & Embeddings",
        "Pandas & NumPy",
        "NLP & Computer Vision"
      ]
    },
    categories: [
      {
        title: "Frontend & Languages",
        icon: "</>",
        items: [
          "React",
          "JavaScript (ES6+)",
          "Python",
          "Java",
          "C",
          "C#",
          "HTML5 / CSS3",
          "Figma"
        ]
      },
      {
        title: "DevOps, Workflows & Security",
        icon: "⚙",
        items: [
          "Docker & Docker Compose",
          "n8n (Workflows & Automation)",
          "Keycloak (IAM, JWT, OIDC)",
          "MinIO (Object Storage)",
          "Git / GitHub",
          "VS Code"
        ]
      },
      {
        title: "Databases & Data",
        icon: "⛁",
        items: [
          "Qdrant (Vector DB)",
          "Google Analytics 4",
          "PostgreSQL",
          "MySQL",
          "SQLite",
          "Relational Data Modeling",
          "Data Analysis"
        ]
      },
      {
        title: "Methodology & Soft Skills",
        icon: "◎",
        items: [
          "Algorithmic Thinking",
          "Software Architecture",
          "Agile Methodology & Daily Standups",
          "Problem Solving",
          "Initiative & Teamwork"
        ]
      }
    ]
  },

  parcours: {
    timeline: [
      {
        date: "Oct 2023 — June 2028",
        title: "Computer Engineering Degree",
        place: "Higher Institute of Management and Entrepreneurship — Douala",
        desc: "Specialization in Artificial Intelligence · In progress",
        badge: "In progress",
        active: true
      },
      {
        date: "July — Sept 2026",
        title: "AI & Software Engineering Intern",
        place: "BIGDATA CENTER & AI SARLU — Beedi, Douala",
        desc: "Design and deployment of a secure Retrieval-Augmented Generation (RAG) system for CAMRAIL: React chat interface with streaming and citations, n8n workflows for ingestion and hybrid search (Qdrant + BM25), Docker Compose containerization (5 microservices), and Keycloak authentication.",
        badge: "Internship",
        active: false
      },
      {
        date: "July — Aug 2025",
        title: "Software Developer Intern",
        place: "Kaidou LAB SARL — Akwa, Douala",
        desc: "Autonomous development of an online web file explorer using Java, HTML, CSS, and JavaScript. Delivered to production.",
        badge: "Internship",
        active: false
      },
      {
        date: "2022 — 2023",
        title: "Scientific Baccalaureate (Series C)",
        place: "Makepe High School — Douala",
        desc: "Honors (Mention Bien)",
        badge: null,
        active: false
      },
      {
        date: "2021 — 2022",
        title: "Probatoire C (Math & Physics)",
        place: "Makepe High School — Douala",
        desc: "High Honors (Mention Très Bien)",
        badge: null,
        active: false
      }
    ],

    certifications: [
      {
        issuer: "Google",
        name: "Google Analytics Certification (2026)",
        date: "Nov 2026",
        category: "Google",
        isLatest: true,
        fileUrl: "/certifications/Google Analytics/Certificat Google Analytics.pdf",
        badgeUrl: "/certifications/Google Analytics/Badge Google Analytics.png",
        verifyUrl: "https://skillshop.credential.net/f478069a-c04e-4777-bd15-291f419452fa"
      },
      {
        issuer: "freeCodeCamp",
        name: "Machine Learning with Python",
        date: "Dec 2025 · ~300h",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Machine Learning with Python.pdf"
      },
      {
        issuer: "freeCodeCamp",
        name: "Python Developer",
        date: "Mar 2026 · ~300h",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Python V9 Certification.pdf"
      },
      {
        issuer: "freeCodeCamp",
        name: "Relational Database",
        date: "Dec 2025 · ~300h",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Relational Database V9.pdf"
      },
      {
        issuer: "freeCodeCamp & Microsoft",
        name: "Foundational C# with Microsoft",
        date: "Sep 2025",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/Foundational C# with Microsoft.pdf"
      },
      {
        issuer: "freeCodeCamp",
        name: "B1 English for Developers",
        date: "Jan 2026",
        category: "freeCodeCamp",
        fileUrl: "/certifications/Mes certifications freeCodeCamp/B1 English for Developers.pdf"
      },
      {
        issuer: "Cisco Networking Academy",
        name: "JavaScript Essentials 1",
        date: "Apr 2026",
        category: "Cisco",
        fileUrl: "/certifications/Mes certifications netacad/JavaScriptEssentials1Update20260418-31-fl5flw.pdf"
      },
      {
        issuer: "Cisco & JS Institute",
        name: "HTML Essentials",
        date: "2026",
        category: "Cisco",
        fileUrl: "/certifications/Mes certifications netacad/HTMLEssentialsv120260414-32-64o2zo.pdf"
      },
      {
        issuer: "Cisco Networking Academy",
        name: "English for IT 2",
        date: "2026",
        category: "Cisco",
        fileUrl: "/certifications/Mes certifications netacad/English_for_IT_2_certificate_arolddjeufack-gmail-com_35a6b579-15e6-4fde-b6ef-72e748f770bb.pdf"
      },
      {
        issuer: "Kaggle Learn",
        name: "Pandas",
        date: "Apr 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Pandas.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Intro to Machine Learning",
        date: "May 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Intro to Machine Learning.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Intermediate Machine Learning",
        date: "Jun 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Intermediate Machine Learning.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Advanced SQL",
        date: "Jun 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Advanced SQL.png"
      },
      {
        issuer: "Kaggle Learn",
        name: "Data Visualization",
        date: "Jul 2026",
        category: "Kaggle",
        fileUrl: "/certifications/Mes certifications kaggle/Djeufack Kafack - Data Visualization.png"
      },
      {
        issuer: "LeCloudFacile",
        name: "Kubernetes for Beginners",
        date: "May 2026",
        category: "Cloud",
        fileUrl: "/certifications/Certifications LeCloudFacile/Certificat Kubernetes-pour-les-debutants.pdf"
      },
      {
        issuer: "LeCloudFacile",
        name: "Introduction to Docker",
        date: "May 2026",
        category: "Cloud",
        fileUrl: "/certifications/Certifications LeCloudFacile/Certificat Introduction-a-Docker.pdf"
      },
      {
        issuer: "LeCloudFacile",
        name: "Introduction to DevOps",
        date: "May 2026",
        category: "Cloud",
        fileUrl: "/certifications/Certifications LeCloudFacile/Certificat Introduction-au-DevOps.pdf"
      },
      {
        issuer: "Cursa",
        name: "Flutter Training - iOS & Android",
        date: "May 2026",
        category: "Mobile",
        fileUrl: "/certifications/Certification Flutter.png"
      },
      {
        issuer: "Google Cloud / Simplilearn",
        name: "Gmail - Declaration of Completion",
        date: "Jul 2026",
        category: "Google",
        fileUrl: "/certifications/Certificat de completion Gmail.pdf"
      },
      {
        issuer: "Atlassian",
        name: "Trello - Get the most out of Trello Learning Path",
        date: "Jul 2026",
        category: "Tools",
        fileUrl: "/certifications/Certification Trello - Get the most out of Trello Learning Path.pdf"
      }
    ]
  },

  contact: {
    cta: "A project, an internship, or an idea?\nDrop me a line.",
    subtitle: "I reply within 24 hours.",
    email: "arolddjeufack@gmail.com",
    linkedin: "https://www.linkedin.com/in/berios-arol-djeufack-605b60219/",
    linkedinUser: "Berios Arol",
    github: "https://github.com/Arol4",
    githubUser: "Arol4",
    phone: "+237 679 139 512"
  }
}

export const portfolioData = portfolioDataFR
