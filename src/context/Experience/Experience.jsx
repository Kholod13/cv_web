import React from "react";
import "../../styles/App.css";
import Creators from "../Creators";
import MacBlock from "./ExperienceMacBlock";

// Импортируем иконки (добавь свои пути)
import figma from "../../assets/icons/figma.svg";
import reactIcon from "../../assets/icons/react.svg"; // проверь названия
import jsIcon from "../../assets/icons/javascript.svg";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
//import tailwind from "../../assets/icons/tailwind.svg";
//import redux from "../../assets/icons/redux.svg";
//import node from "../../assets/icons/node.svg";
import git from "../../assets/icons/github.svg";
import ts from "../../assets/icons/typescript.svg";

const TECH_ICONS = [
    figma, reactIcon, jsIcon, htmlIcon, cssIcon, 
    git, ts
];

export default function Experience() {
    return (
        <div className="wrapper">
            <div className="container">
                <p className="pageTitle">Experience</p>

                <div className="experience_container">
                    <MacBlock />
                </div>

                {/* БЕСКОНЕЧНАЯ КАРУСЕЛЬ */}
                <div className="marquee">
                    <div className="marquee_track">
                        {/* Первый набор иконок */}
                        {TECH_ICONS.map((icon, index) => (
                            <div className="marquee_item" key={`icon-1-${index}`}>
                                <img src={icon} alt="tech" />
                            </div>
                        ))}
                        {/* ВТОРОЙ ТАКОЙ ЖЕ НАБОР (копия) */}
                        {TECH_ICONS.map((icon, index) => (
                            <div className="marquee_item" key={`icon-2-${index}`}>
                                <img src={icon} alt="tech" />
                            </div>
                        ))}
                    </div>
                </div>

                <Creators />
            </div>
        </div>
    );
}