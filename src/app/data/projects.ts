import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        slug: "limbika",
        image: "/images/limbika.png",
        imageAlt: "Limbika digital rehabilitation platform preview",
        previewMode: "desktop",
        title: "Limbika",
        subtitle: "AI-powered digital upper-limb rehabilitation platform.",
        summary:
            "An AI-powered rehabilitation platform that combines computer vision, pose estimation, and gamified therapy to support upper-limb rehabilitation and patient recovery.",
        problem:
            "Traditional rehabilitation often requires frequent in-person sessions, making it difficult for patients to maintain consistent therapy while clinicians have limited visibility into home-based progress.",
        solution:
            "Engineered a rehabilitation platform that uses MediaPipe-based pose estimation, AI-assisted movement analysis, and gamified therapy sessions to guide patients while recording rehabilitation metrics for clinicians.",
        outcome:
            "Delivered a digital rehabilitation system capable of guiding patients through therapy exercises while providing clinicians with rehabilitation progress and performance data.",
        role: "Full-stack & AI Engineer",
        year: "2026",
        category: "AI",
        tags: [
            "AI",
            "Computer Vision",
            "Healthcare",
            "Angular",
            "FastAPI",
        ],
        technologies: [
            "Angular",
            "TypeScript",
            "Python",
            "FastAPI",
            "MediaPipe",
            "Three.js",
            "PostgreSQL",
            "Supabase",
            "Firebase",
        ],
        highlights: [
            "Developed real-time body pose tracking using MediaPipe.",
            "Implemented joint-angle calculations and repetition detection.",
            "Built gamified rehabilitation exercises for improved patient engagement.",
            "Designed clinician dashboards for rehabilitation monitoring.",
            "Architected a scalable Angular, FastAPI, and PostgreSQL solution.",
        ],
        githubUrl: undefined,
        liveUrl: undefined,
        featured: true,
    },

    {
        slug: "jobminder",
        image: "/images/jobminder.png",
        imageAlt: "JobMinder AI recruitment platform preview",
        previewMode: "desktop",
        title: "JobMinder",
        subtitle: "AI-powered recruitment and job matching platform.",
        summary:
            "An intelligent recruitment platform that leverages machine learning, semantic resume analysis, and AI-driven recommendations to connect job seekers with relevant opportunities.",
        problem:
            "Conventional job portals depend heavily on keyword searches, resulting in poor candidate-job matching and time-consuming recruitment processes.",
        solution:
            "Engineered an AI-powered recruitment platform that parses resumes, extracts candidate skills, analyzes job descriptions, and recommends opportunities using machine learning and natural language processing.",
        outcome:
            "Built a scalable recruitment platform capable of processing over 27,000 job listings while providing intelligent recommendations, application tracking, and recruiter tools.",
        role: "Full-stack & AI Engineer",
        year: "2026",
        category: "AI",
        tags: [
            "Machine Learning",
            "AI",
            "NLP",
            "Django",
            "Angular",
        ],
        technologies: [
            "Angular",
            "TypeScript",
            "Python",
            "Django",
            "PostgreSQL",
            "Scikit-learn",
            "Sentence Transformers",
            "NLTK",
            "Firebase",
            "Docker",
        ],
        highlights: [
            "Processed and indexed over 27,000 job listings.",
            "Built an AI-powered recommendation engine using machine learning.",
            "Implemented resume parsing and automated skill extraction.",
            "Developed recruiter and applicant dashboards with application tracking.",
            "Designed REST APIs integrating Angular, Django, PostgreSQL, and ML services.",
        ],
        githubUrl: undefined,
        liveUrl: undefined,
        featured: true,
    },

    {
        slug: "mbc-live",
        image: "/images/mbc-live.png",
        imageAlt: "MBC Live streaming application preview",
        previewMode: "mobile",
        title: "MBC Live",
        subtitle: "Cross-platform digital streaming platform.",
        summary:
            "A Flutter application providing live television, radio streaming, news, programme schedules, and on-demand media in a unified mobile experience.",
        problem:
            "Broadcast audiences require seamless access to live media, news, and programme schedules from mobile devices.",
        solution:
            "Developed a Flutter application integrating HLS streaming, Firebase notifications, programme scheduling, and digital content management.",
        outcome:
            "Delivered a modern mobile media platform that centralizes television, radio, news, and streaming services.",
        role: "Flutter Developer",
        year: "2025",
        category: "Mobile",
        tags: [
            "Flutter",
            "Streaming",
            "Firebase",
            "HLS",
        ],
        technologies: [
            "Flutter",
            "Dart",
            "Firebase",
            "Firebase Cloud Messaging",
            "HLS",
            "CDN",
        ],
        highlights: [
            "Implemented live TV and radio streaming.",
            "Integrated HLS media playback.",
            "Added push notifications and programme reminders.",
            "Developed news, schedules, and catch-up content features.",
            "Designed for multilingual support.",
        ],
        githubUrl: undefined,
        liveUrl: undefined,
        featured: true,
    },

    {
        slug: "alertway",
        image: "/images/alertway.png",
        imageAlt: "AlertWay emergency alert system preview",
        previewMode: "mobile",
        title: "AlertWay",
        subtitle: "IoT emergency response and location tracking system.",
        summary:
            "An IoT-based emergency communication platform combining embedded hardware, GPS tracking, and cloud connectivity to improve personal safety.",
        problem:
            "Emergency situations require immediate alert transmission and accurate location sharing, which traditional communication methods cannot always provide.",
        solution:
            "Developed an ESP32-based IoT prototype integrating GPS, wireless communication, Firebase, and cloud services to automatically transmit emergency alerts with location data.",
        outcome:
            "Demonstrated a real-time emergency alert workflow capable of transmitting distress notifications and GPS coordinates.",
        role: "IoT & Embedded Systems Developer",
        year: "2024",
        category: "IoT",
        tags: [
            "IoT",
            "ESP32",
            "Arduino",
            "GPS",
            "Firebase",
        ],
        technologies: [
            "ESP32",
            "Arduino",
            "C/C++",
            "Firebase",
            "NEO-6M GPS",
            "SIM800L",
        ],
        highlights: [
            "Integrated GPS-based location tracking.",
            "Implemented cloud communication using Firebase.",
            "Developed embedded firmware for emergency detection.",
            "Connected ESP32 and Arduino hardware for sensor integration.",
            "Built real-time IoT communication workflows.",
        ],
        githubUrl: undefined,
        liveUrl: undefined,
        featured: true,
    },

    {
        slug: "fuel-finder",
        image: "/images/fuelfinder.png",
        imageAlt: "Fuel Finder mobile application preview",
        previewMode: "mobile",
        title: "Fuel Finder",
        subtitle: "Location-based fuel availability application.",
        summary:
            "A Flutter application designed to help motorists locate nearby fuel stations and monitor fuel availability during shortages.",
        problem:
            "Drivers often spend significant time searching for stations with available fuel during supply shortages.",
        solution:
            "Designed a location-aware mobile application integrating Google Maps and Firebase to simplify fuel station discovery.",
        outcome:
            "Produced a mobile application concept focused on reducing uncertainty and travel time when searching for fuel.",
        role: "Mobile Developer",
        year: "2025",
        category: "Mobile",
        tags: [
            "Flutter",
            "Google Maps",
            "Firebase",
            "Location",
        ],
        technologies: [
            "Flutter",
            "Dart",
            "Google Maps",
            "Firebase",
        ],
        highlights: [
            "Built location-aware fuel station discovery.",
            "Integrated interactive mapping capabilities.",
            "Designed a clean mobile-first user experience.",
            "Explored real-time fuel availability reporting.",
        ],
        githubUrl: undefined,
        liveUrl: undefined,
        featured: false,
    },
];

export const featuredProjects = projects.filter(
    (project) => project.featured
);

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}