import React from "react";
import "../../styles/App.css";
import Creators from "../Creators";

const PROJECTS_LIST = [
    {
        id: 1,
        title: "Leyla App",
        description: "AI-powered language learning assistant with personalized adaptive logic.",
        tech: ["React Native", "CSS", "REST API" ],
        link: "https://github.com/Kholod13/leyla"
    },
    {
        id: 2,
        title: "Systematica GPT",
        description: " Internal corporate AI ecosystem with specialized personas for industry-specific tasks.",
        tech: ["React", "CSS", "Vite", "REST API"],
        link: "https://github.com/Kholod13/systematica"
    },
    {
        id: 3,
        title: "MZK",
        description: "Software suite for furniture production management. Unified digital environment.",
        tech: ["React", "TypeScript", "CSS", "Vite", "REST API"],
        link: "https://github.com/Kholod13/portfolio"
    },
    {
        id: 4,
        title: "Portfolio Web",
        description: "My personal portfolio website built with React and Framer Motion.",
        tech: ["React", "CSS", "Vite"],
        link: "https://github.com/Kholod13/cv_web"
    },
    {
        id: 5,
        title: "To Do List",
        description: "To do list written in vanilla javascript (PET).",
        tech: ["JS", "CSS" ],
        link: "https://github.com/Kholod13/vanillaJavascript_ToDoList"
    },
];

export default function Projects() {
    return (
        <div className="wrapper min-h-screen">
            {/* 2. Добавляем фон через инлайн-стиль или CSS (лучше через CSS) */}
            <div className="container project-page-container">
                <p className="pageTitle">Projects</p>

                <div className="projects_grid">
                    {PROJECTS_LIST.map((project) => (
                        <div key={project.id} className="project_card">
                            <div className="project_card_content">
                                <h3 className="itemTitle">{project.title}</h3>
                                <p className="itemDescription">{project.description}</p>
                                <div className="project_tech_list">
                                    {project.tech.map(t => <span key={t} className="tech_tag">{t}</span>)}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project_link">
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <Creators />
            </div>
        </div>
    );
}