import React from "react";
import "../../styles/App.css";
import Creators from "../Creators";
import MacBlock from "./ExperienceMacBlock";

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
            <div className="container">
                {/*<p className="pageTitle">Experience</p>*/}

                <div className="experience_container">
                    <MacBlock />
                </div>

                <div className="marquee">
                    <div className="marquee_track">
                        {TECH_ICONS.map((icon, index) => (
                            <div className="marquee_item" key={`icon-1-${index}`}>
                                <img src={icon} alt="tech" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}