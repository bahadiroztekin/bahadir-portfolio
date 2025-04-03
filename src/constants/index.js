import project1 from "../assets/portfolio-logo.png";
import project2 from "../assets/portfolio-logo.png";
import project3 from "../assets/portfolio-logo.png";
import project4 from "../assets/portfolio-logo.png";
//dummy

export const HERO_CONTENT = `I am an ambitious full-stack developer with a solid background in both front-end and back-end technologies. I specialize in React.js, Java Vaadin, 
HTML/CSS, and Tailwind for crafting engaging user interfaces, while my back-end expertise includes Java Spring, PHP Laravel, PL/SQL, and PostgreSQL. Additionally, 
I am proficient in C#, Python, Java Swing, Github, Unity, Blender, and Aseprite. My goal is to leverage my expertise to create innovative solutions that drive business growth and 
deliver exceptional user experiences, all while continuously developing my skills as a professional computer engineer.`;

export const ABOUT_TEXT = `I graduated from TED University with a degree in Computer Engineering, maintaining honor student status throughout all consecutive semesters with a GPA of 3.02/4. 
In addition to my engineering background, I also hold a secondary field diploma in Business and Administration, which broadens my perspective on technology’s role in business. 
I have achieved a TOEFL score of 83 and a YÖKDİL score of 82.5, further demonstrating my proficiency in English.

As a dedicated and versatile full-stack developer, I am passionate about building efficient and scalable applications. I thrive in collaborative environments and enjoy solving complex problems 
to deliver high-quality solutions. My deep curiosity about how things work has shaped my career, driving me to continuously learn and adapt to new challenges.`;

export const EXPERIENCES = [
    {
        year: "February 2024 - June",
        role: "Full-stack Developer",
        company: "Bilgi Teknolojileri ve İletişim Kurumu",
        description: `I have worked as an ERP software developer. I made use of the Spring Boot framework and Java Vaadin.`,
        technologies: ["Java", "Spring", "Vaadin", "Oracle", "Github"],
    },
    {
        year: "June 2022 - July",
        role: "Software Intern",
        company: "Simsoft Computer Technologies",
        description: `I worked with Java Socket Programming & Java Swing. I participated in a project that offers monitoring system with TCP UDP communication.`,
        technologies: ["Java", "Swing", "Socket Programming"],
    },
    {
        year: "July 2021 - August",
        role: "Software Intern",
        company: "TR Eğitim ve Teknoloji A.Ş.",
        description: `I worked as a software intern in TET as back-end developer. I used Laravel, PHP, and mySQL for implementing job/internship application systems.`,
        technologies: ["PHP", "Laravel", "mySQL", "Github", "Redmine"],
    },
];

export const PROJECTS = [

    {
        title: "Warehouse Digital Twin",
        image: project2,
        description:
            "Developed a warehouse solution that creates a personalized digital twin of the user's warehouse using augmented " +
            "reality. The system maps and transfers information to a mobile device, allowing users to run operations such as AR navigation within the digital twin. ",
        technologies: ["C#", "Unity", "Blender",],
    },
    {
        title: "Heart Attack Prediction",
        image: project3,
        description:
            "Developed a Python-based machine learning classification program that predicts the likelihood of a heart attack based on " +
            "blood test data. The system processes input values, classifies them using trained models, and provides predictions. The " +
            "program runs via the console, offering an efficient and data-driven approach to cardiovascular risk assessment.",
        technologies: ["Python", "MachineLearning"],
    },
    {
        title: "Portfolio Website",
        image: project3,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React.js", "Tailwind", "FramerMotion"],
    },
    {
        title: "E-Commerce Website",
        image: project4,
        description:
            "A fully functional e-commerce website with features like product listing, shopping cart.",
        technologies: ["HTML", "CSS", "JavaScript", "mySQL"],
    },
];

export const CONTACT = {
    emailPart1: "bahadir.",
    emailPart2: "oztekin9",
    emailPart3: "gmail",
    emailPart4: "com",
    address: "Ankara, Türkiye",
};