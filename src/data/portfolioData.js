// Central data file - Easy to update and maintain
const portfolioData = {
  personal: {
    name: "Wulnan Shadrach",
    title: "Full Stack Web Developer | Software Engineer",
    location: "Abuja, Nigeria",
    email: "wulnanshadrach268@gmail.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    availability: "Open to Global Remote Roles"
  },
  
  skills: {
    frontend: ["JavaScript", "React.js", "Redux", "Jest", "Axios", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT/bcrypt"],
    database: ["SQL", "SQLite", "Data Modeling"],
    tools: ["Git", "GitHub", "VSCode", "Vercel", "Heroku", "Yup"],
    concepts: ["Data Structures", "Algorithms", "Authentication"]
  },

  projects: [
    {
      id: 1,
      title: "User Onboarding Platform",
      description: "Built a platform that allows user input validation and submitting forms in React. Wrote code that validates input from the user and submits it to an actual registration endpoint.",
      technologies: ["React.js", "Yup", "Node.js"],
      features: [
        "Form validation with Yup",
        "Registration endpoint integration",
        "Real-time input validation"
      ],
      type: "Full Stack"
    },
    {
      id: 2,
      title: "Cereal API Application",
      description: "Built a JWT-secured RESTful API for cereal data. Implemented user login system with protected endpoints.",
      technologies: ["React.js", "Node.js", "JWT Auth"],
      features: [
        "JWT authentication flow",
        "Protected GET /cereals endpoint",
        "Test credentials: username 'tom' or 'liz'",
        "Interactive frontend components"
      ],
      type: "Full Stack"
    },
    {
      id: 3,
      title: "Article Management System",
      description: "Developed a secure article management system with full CRUD operations and comprehensive testing.",
      technologies: ["React.js", "Node.js", "JWT Auth", "Testing"],
      features: [
        "Full CRUD operations",
        "JWT authentication flow",
        "Form validation",
        "Protected API endpoints",
        "Component testing with Spinner utility"
      ],
      type: "Full Stack"
    },
    {
      id: 4,
      title: "Asylum Data Visualization Platform",
      description: "Build a data-driven application, integrating external APIs and secure Authentication.",
      technologies: ["React", "Next.js", "TypeScript", "Auth0"],
      features: [
        "Data visualization",
        "External API integration",
        "Auth0 authentication",
        "Responsive design"
      ],
      type: "Full Stack"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Data System Specialist",
      organization: "WHO Consultancy - WHO Covid-19 Oxygen Program",
      period: "2021-2022",
      responsibilities: [
        "Utilized Excel's Pivot Tables and advanced formulas to analyze national oxygen plant readiness data",
        "Categorized data by state and facility for comprehensive analysis",
        "Delivered percentage-based insights to National Consultant through detailed reports",
        "Collaborated with data managers at Covid-19 isolation centers nationwide",
        "Ensured data quality, accuracy, and completeness across all reporting channels"
      ]
    },
    {
      id: 2,
      role: "Data Assistant",
      organization: "Institute of Human Virology",
      period: "2012-2021",
      responsibilities: [
        "Supported reporting of PEPFAR program indicators",
        "Resolved data quality issues and NDR errors",
        "Implemented preventive measures to avoid error recurrence",
        "Entered patient-level data into Nigeria Medical Record System (NMRS)",
        "Managed National Data Repository (NDR) platform data entry"
      ]
    }
  ],

  education: {
    certificate: {
      title: "Full Stack Web Development",
      institution: "Bloom Institute of Technology",
      hours: "960 hours",
      date: "2023-2025",
      skills: [
        "Full-stack web development curriculum completion",
        "Front-end and back-end project development",
        "Applied computer science curriculum",
        "Complex project integration in BloomTech Labs",
        "Technical interview proficiency"
      ]
    }
  }
};

export default portfolioData;