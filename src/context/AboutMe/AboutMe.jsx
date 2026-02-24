import React from "react";
import palm from "../../assets/palm.png"
import "../../styles/App.css"
import { useNavigate } from 'react-router-dom';
import avatar from "../../assets/photo_2026-01-16_12-56-09.jpg"
import Creators from "../Creators";
const ABOUT_ME_PROJECTS = [
    {
        id: 1,
        title: "Leyla App",
        description: "AI-powered micro-learning app for foreign languages. I worked on frontend components, translation features, and layout improvements"
    },
    { 
        id: 2,
        title: "Other Project",
        description: "see more ..."
    }
]
export default function AboutMe() {
    const navigate = useNavigate();

    return (
            <div className="container">
                {/*<p className="pageTitle">About me</p>*/}
                <div className="aboutme_content">
                    <div className="aboutme_text">
                        {/*
                        <div onClick={() => navigate('/home')} className="undertitle logo"
                             style={{position: 'unset', marginBottom: '30px', width: 'fit-content', cursor: 'pointer'}}>
                            <p className="title">Hi, I'm Vladyslav</p>
                            <img src={palm} alt="palm icon" className="palm_icon"/>
                        </div>*/}
                        <p className="description aboutme_description">
                            Junior Frontend Developer based in Prague, originally from Rivne, Ukraine. I’m passionate
                            about building simple, intuitive, and user-friendly interfaces using React and React Native
                            <br/><br/>Currently, I work remotely at QRI Tech, contributing to both mobile applications
                            and web services. I enjoy improving app performance, ensuring design consistency, and
                            collaborating with my team through code reviews and technical discussions.
                        </p>
                    </div>
                    <div className="aboutme_image">
                        <img src={avatar} alt="avatar" className="avatar"/>
                    </div>
                </div>
                {/*
                <div className="aboutme_pojects">
                    <p className="title">Some of the projects I’ve worked on</p>
                    <div className="aboutMeProjects_list">
                        {ABOUT_ME_PROJECTS.map(projects => (
                            <div className="listItem" onClick={() => navigate('/Projects')}>
                                <p className="itemTitle">{projects.title}</p>
                                <p className="itemDescription">{projects.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                */}
                <div className="aboutme_skills description">
                    <p>
                        I hold a <span>Diploma in Software Development from STEP Computer Academy,</span> where I
                        studied React, React Native, JavaScript, HTML, CSS, C#, MySQL, and UI/UX fundamentals.
                    </p>
                    <p>
                        I’m always looking <span>to grow my skills</span>, especially in <span>TypeScript, backend basics, and app optimization.</span> When
                        I’m not coding, I enjoy exploring new technologies and collaborating on projects that make life
                        easier for users.
                    </p>
                    <p>
                        <span>Languages:</span> Ukrainian (native), Russian (native), English (B1), Czech (B2)
                    </p>
                </div>
            </div>
    );
}