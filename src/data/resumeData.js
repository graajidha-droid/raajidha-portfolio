// Centralized Resume Data for Gadde Raajidha

export const resumeData = {
  personalInfo: {
    name: "Gadde Raajidha",
    title: "Computer Science Engineering Student",
    specialization: "Artificial Intelligence & Machine Learning",
    subroles: ["AI/ML Specialist", "Full-Stack Developer", "Software Engineer"],
    email: "raajidhag@gmail.com",
    phone: "+91 955342669",
    location: "Rajahmundry, Andhra Pradesh, India",
    github: "https://github.com/graajidha-droid",
    linkedin: "https://www.linkedin.com/in/raajidha-gadde",
    leetcode: "https://leetcode.com/u/raajidha_gadde/",
    githubUsername: "graajidha-droid",
    linkedinUsername: "raajidha-gadde",
    profileSummary: "Motivated and detail-oriented Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning with a strong foundation in software development and product engineering. Skilled in Python, SQL, and OOP, with hands-on experience in building AI-driven and data-centric applications.",
  },
  education: [
    {
      institution: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology, Chennai",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 - 2027",
      gradeType: "CGPA",
      grade: "8.9",
      icon: "graduation-cap",
      highlights: ["Specialization in Artificial Intelligence and Machine Learning", "Hands-on engineering projects"]
    },
    {
      institution: "Sri Chaitanya Junior College, Rajamundry",
      degree: "Higher Secondary Education (MPC)",
      duration: "2021 - 2023",
      gradeType: "CGPA",
      grade: "9.0",
      icon: "book-open",
      highlights: ["Mathematics, Physics, Chemistry stream"]
    },
    {
      institution: "Sasi E.M High School, Velivennu",
      degree: "Secondary School Certificate (SSC)",
      duration: "2020 - 2021",
      gradeType: "CGPA",
      grade: "9.9",
      icon: "school",
      highlights: ["Outstanding Academic record"]
    }
  ],
  experience: [
    {
      role: "ML Engineer Intern",
      company: "Branic Tech Solutions",
      duration: "July 2025 - September 2025",
      description: "Developed and tested machine learning models in Python on 5,000+ image samples to improve real-time object detection accuracy. Processed and annotated computer vision datasets to optimize workflows.",
      technologies: ["Python", "YOLO", "OpenCV", "Computer Vision", "Machine Learning"],
      bullets: [
        "Developed and tested machine learning models in Python on 5,000+ image samples to improve real-time object detection accuracy. Built a Wild Animal Detection System using YOLO capable of detecting multiple animal classes from live video streams.",
        "Improved detection efficiency by optimizing image preprocessing and model inference workflows. Processed and annotated datasets for computer vision training, reducing manual validation time by 30%.",
        "Learned: Gained hands-on experience in Python, machine learning, computer vision, dataset handling, and model implementation."
      ]
    }
  ],
  skills: {
    programmingLanguages: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 80 }
    ],
    web: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "API Integration", level: 80 },
      { name: "Node.js", level: 75 }
    ],
    databases: [
      { name: "MySQL", level: 85 }
    ],
    softSkills: [
      "Collaboration", 
      "Teamwork", 
      "Problem Solving", 
      "Time Management",
      "Communication Skills"
    ]
  },
  projects: [
    {
      id: "wild-animal-detection",
      title: "Wild Animal Detection System",
      category: "AI/ML",
      technologies: ["Python", "YOLO", "OpenCV", "Computer Vision"],
      description: "Evolved an AI-driven detection system using YOLO and OpenCV for real-time identification. Enforced efficient image processing and modular design for high detection accuracy.",
      contribution: "ML Engineer Intern - Developed model training pipeline, optimized preprocessing, and performed live validation on video streams.",
      features: [
        "Real-time wild animal class classification",
        "Trained and tested on 5,000+ custom-curated image samples",
        "Optimized image scaling and preprocessing workflow",
        "30% reduction in validation check times"
      ],
      github: "https://github.com/graajidha-droid/Wild-Animal-Detection",
      live: null
    },
    {
      id: "automated-quiz-engine",
      title: "Automated Quiz Engine with PDF Generation",
      category: "Full-Stack",
      technologies: ["Java", "MySQL", "PDF Generation"],
      description: "Refined a web-based quiz system with automated quiz generation, real-time evaluation, secure login, timer-based sessions, and PDF report export.",
      contribution: "Core Developer - Architected session timers, SQL transaction structures, and integrated report libraries.",
      features: [
        "Automated quiz selection and shuffling",
        "Timer-based user session validation",
        "Secure student authentication",
        "Exportable PDF reports for results analysis"
      ],
      github: "https://github.com/graajidha-droid/Fullstack/tree/main/Automated%20Quiz%20Engine%20with%20PDF%20Certification%20Generation",
      live: null
    },
    {
      id: "smart-campus-event",
      title: "Smart Campus Event Management System",
      category: "Full-Stack",
      technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
      description: "Initiated a full-stack web application for managing campus events, workshops, and student registrations using Spring Boot and MySQL. Implemented secure admin authentication, event CRUD operations, seat availability tracking, and responsive UI design.",
      contribution: "Lead Full-Stack Developer - Designed event registration databases, integrated Thymeleaf frontends, and wrote admin security layers.",
      features: [
        "Secure administrator login authentication dashboard",
        "Real-time student seat counts and tracking updates",
        "Event creation, read, update, and delete (CRUD) capabilities",
        "Responsive, modern layout tailored for campus users"
      ],
      github: "https://github.com/graajidha-droid/Fullstack/tree/main/SMART%20CAMPUS%20EVENT%20MANAGEMENT%20AND%20REGISTRATION%20SYSTEM%20USING%20SPRING%20BOOT",
      live: null
    }
  ],
  certifications: [
    {
      title: "Data Science for Beginners",
      issuer: "Board Infinity",
      type: "Tech Course",
      date: "25-04-2026",
      id: "CERT-20260425-8814848",
      image: "/certifications/data-science-beginners.png"
    },
    {
      title: "Data Visualisation using Python",
      issuer: "Infosys Springboard",
      type: "Tech Course",
      date: "April 9, 2026",
      image: "/certifications/data-visualisation-python.png"
    },
    {
      title: "Explore Machine Learning with TensorFlow",
      issuer: "Infosys Springboard",
      type: "Tech Course",
      date: "April 12, 2026",
      image: "/certifications/explore-ml-tensorflow.png"
    },
    {
      title: "NodeJS Case Study - Movie App on Node JS and MongoDB",
      issuer: "Infosys Springboard",
      type: "Tech Course",
      date: "April 12, 2026",
      image: "/certifications/nodejs-case-study.png"
    },
    {
      title: "STEP Standardised Test of English Proficiency (STEP Train 50 hours)",
      issuer: "The Hindu Group & Learning Links Foundation",
      type: "Language Course",
      date: "8th May, 2026",
      id: "SP/20260508093910/109100463",
      image: "/certifications/step-english-proficiency.png"
    },
    {
      title: "ML Engineer Intern",
      issuer: "Certified Machine Learning Engineer with hands-on experience in building models.",
      type: "Internship",
      date: "2025",
      image: null
    },
    {
      title: "DBMS Course - Master the Fundamentals Concepts",
      issuer: "Completed an in-depth DBMS course covering database design, normalization, SQL queries, and concepts through practical modules and challenges.",
      type: "Tech Course",
      date: "2024",
      image: null
    },
    {
      title: "Requirements Engineering: Software Engineering",
      issuer: "Infosys Springboard",
      type: "Tech Course",
      date: "N/A",
      image: null
    }
  ],
  achievements: [
    {
      title: "Project Leadership",
      detail: "Led my team during project presentations and hackathons."
    },
    {
      title: "Workshops",
      detail: "Attended personality development workshop."
    },
    {
      title: "Soft Skills",
      detail: "Improved communication, confidence, and interpersonal skills."
    }
  ],
  currentlyLearning: [
    "Advanced Deep Learning & Neural Network tuning",
    "Tailwind CSS v4 & Next.js frameworks",
    "Cloud Deployments (Docker, AWS fundamentals)"
  ],
  stats: [
    { value: "5000", label: "ML Training Images", suffix: "+" },
    { value: "30", label: "Val. Efficiency Boost", suffix: "%" }
  ],
  codingProfiles: [
    {
      id: "leetcode",
      platform: "LeetCode",
      username: "raajidha_gadde",
      link: "https://leetcode.com/u/raajidha_gadde/",
      stats: [
        { label: "Problems Solved", value: "150+" },
        { label: "Badges", value: "2" }
      ]
    },
    {
      id: "github",
      platform: "GitHub",
      username: "graajidha-droid",
      link: "https://github.com/graajidha-droid",
      stats: [
        { label: "Repositories", value: "12" },
        { label: "Contributions", value: "250+" }
      ]
    },
    {
      id: "hackerrank",
      platform: "HackerRank",
      username: "raajidhag",
      link: "https://www.hackerrank.com/raajidhag",
      stats: [
        { label: "Badges", value: "4 Stars" },
        { label: "Skill Verified", value: "Python, SQL" }
      ]
    }
  ]
};
