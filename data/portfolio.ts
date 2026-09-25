export type SkillCategoryType =
  | "frontend"
  | "backend"
  | "datascience"
  | "ml"
  | "deeplearning"
  | "mobile";

export interface SkillCategory {
  name: string;
  category: SkillCategoryType;
  tech: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  desc: string;
  isCurrent?: boolean;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  desc: string;
  isCurrent?: boolean;
}

export interface OrganizationItem {
  title: string;
  organization: string;
  period: string;
  desc: string;
  isCurrent?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    category: "frontend",
    tech: "Vue.js, Nuxt.js, React/Next.js",
    items: ["Vue.js", "Nuxt.js", "React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "Backend",
    category: "backend",
    tech: "Node.js, Express.js, LoopBack",
    items: ["Node.js", "Express.js", "LoopBack", "REST APIs", "PostgreSQL", "MySQL"]
  },
  {
    name: "Data Science",
    category: "datascience",
    tech: "Data Analysis, Statistics, Data Visualization",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"]
  },
  {
    name: "Machine Learning",
    category: "ml",
    tech: "Machine Learning, Model Development, Model Evaluation",
    items: ["Python", "Scikit-learn", "XGBoost", "Model Evaluation"]
  },
  {
    name: "Deep Learning",
    category: "deeplearning",
    tech: "Neural Networks, Computer Vision, Deep Learning",
    items: ["TensorFlow/Keras", "CNN", "Transfer Learning", "YOLO", "OpenCV"]
  },
  {
    name: "Mobile",
    category: "mobile",
    tech: "Flutter",
    items: ["Flutter", "Dart", "Cross-Platform"]
  }
];

export const skillsMarqueeRows = [
  // Row 1: AI, Data Science & Computer Vision
  [
    "OpenCV", "YOLO Ultralytics", "scikit-learn", "Pandas", "NumPy",
    "Matplotlib", "seaborn", "TensorFlow/Keras", "CNN", "Transfer Learning", "ResNet50"
  ],
  // Row 2: Backend, APIs & Core Languages
  [
    "Node.js", "Bootstrap", "Java", "Express.js", "FastAPI",
    "Flask", "SQL", "Postman API", "Git/GitHub", "Python", "Vue.js", "Nuxt.js"
  ],
  // Row 3: Frontend, Mobile, Databases & Methodologies
  [
    "React/Next.js", "Flutter", "TypeScript", "PostgreSQL", "MySQL",
    "MongoDB", "AWS", "Agile Methodology", "Scrum"
  ]
];

export const educations: EducationItem[] = [
  {
    degree: "Computer Science",
    institution: "Universitas Lambung Mangkurat",
    period: "Aug 2023 - Present",
    desc: "GPA: 3.80",
    isCurrent: true,
  },
  {
    degree: "Data Science Cohort Learning Path",
    institution: "Coding Camp powered by DBS Foundation",
    period: "Feb 2026 - Present",
    desc: "Participated in an intensive coding camp focusing on Data Science methodologies, machine learning, and practical data analysis.",
    isCurrent: true,
  },
  {
    degree: "Computer and Network Engineering",
    institution: "SMK Negeri 2 Banjarbaru",
    period: "Jul 2020 - Mar 2023",
    desc: "Final Grade: 86.56",
    isCurrent: false,
  }
];

export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    organization: "RuangAlgo.com - IT Solutions",
    period: "Dec 2024 - Present",
    desc: "Freelance professional utilizing TypeScript, PostgreSQL, and various other modern web technologies to build comprehensive IT solutions. Working within an Agile environment and implementing Scrum methodologies to ensure efficient, iterative development and continuous project delivery.",
    isCurrent: true,
  },
  {
    title: "Laboratory Assistant",
    organization: "Lambung Mangkurat University",
    period: "Sep 2025 - Nov 2025",
    desc: "Teaching Assistant for the Numerical Analysis Course.",
    isCurrent: false,
  },
  {
    title: "Laboratory Assistant",
    organization: "Lambung Mangkurat University",
    period: "Sep 2024 - Dec 2024",
    desc: "Teaching Assistant for the Basic Programming Course.",
    isCurrent: false,
  },
  {
    title: "Student Intern",
    organization: "PLN Icon Plus",
    period: "Jan 2022 - Jun 2022",
    desc: "Student Intern at PT Indonesia Comnets Plus, a company operating as an Internet Service Provider (ISP).",
    isCurrent: false,
  }
];

export const organizations: OrganizationItem[] = [
  {
    title: "Member of Appreciation and Student Education Division",
    organization: "BEM FMIPA ULM",
    period: "Feb 2026 - Present",
    desc: "Associated with Lambung Mangkurat University.",
    isCurrent: true,
  },
  {
    title: "Head of Education and Technology Department",
    organization: "HIMAKOM FMIPA ULM 2025",
    period: "Mar 2025 - Present",
    desc: "Associated with Lambung Mangkurat University.",
    isCurrent: true,
  },
  {
    title: "Full Member",
    organization: "Science Goes to Opera FMIPA ULM 2025",
    period: "Mar 2025 - Present",
    desc: "Associated with Lambung Mangkurat University.",
    isCurrent: true,
  },
  {
    title: "Member of Entrepreneurship Division",
    organization: "HIMAKOM FMIPA ULM 2024",
    period: "Feb 2024 - Dec 2024",
    desc: "Associated with Lambung Mangkurat University.",
    isCurrent: false,
  }
];

export const personalInfo = {
  name: "Bima Arya Sena",
  headlineFirst: "Software Engineer.",
  headlineSecond: "Data Science Enthusiast.",
  intro: "Hello, I'm Bima Arya Sena, a passionate software engineer with a strong interest in data science and computer vision.",
  about: "Computer Science undergraduate at Universitas Lambung Mangkurat with a strong interest in Machine Learning and Software Engineering. I enjoy building software solutions while exploring how machine learning can be applied to solve real-world problems. Committed to continuous learning and bridging the gap between software engineering and data-driven approaches.",
  avatar: "/profile.png",
  socials: {
    email: "mailto:bimaaryasena7@gmail.com",
    github: "https://github.com/bimaarya10",
    linkedin: "https://www.linkedin.com/in/bima-arya-sena-756219278/"
  }
};
