import React from "react";
import "../../styles/App.css";
import Creators from "../Creators";

import git from "../../assets/socialMedia/github.svg";
import inst from "../../assets/socialMedia/instagram.svg";
import linkedin from "../../assets/socialMedia/linkedin.svg";
import mail from "../../assets/socialMedia/mail.svg";
import tg from "../../assets/socialMedia/telegram.svg";

const CONTACTS_DATA = [
    { id: 1, name: "GitHub", icon: git, link: "https://github.com/Kholod13", label: "@Kholod13" },
    { id: 2, name: "LinkedIn", icon: linkedin, link: "https://www.linkedin.com/in/vladyslav-kholod-86647120a/", label: "Vladyslav Kholod" },
    { id: 3, name: "Telegram", icon: tg, link: "https://t.me/kah13x", label: "@kah13x" },
    { id: 4, name: "Email", icon: mail, link: "mailto:vlad13holod@gmail.com", label: "vlad13holod@gmail.com" },
    { id: 5, name: "Instagram", icon: inst, link: "https://instagram.com/xxolod_", label: "@xxolod_" },
];

export default function Contacts() {
    return (
        <div className="wrapper min-h-screen">
            <div className="container contacts_page">
                <p className="pageTitle">Contacts</p>
                
                <div className="contacts_intro">
                    <p className="description">
                        I'm always open to new opportunities, collaborations, or just a friendly chat. 
                        Feel free to reach out to me on any of these platforms!
                    </p>
                </div>

                <div className="contactsGrid">
                    {CONTACTS_DATA.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contactCard"
                        >
                            <div className="contactIcon_wrapper">
                                <img src={item.icon} alt={item.name} className="contactIcon" />
                            </div>
                            <div className="contactInfo">
                                <span className="contactName">{item.name}</span>
                                <span className="contactLabel">{item.label}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <Creators />
            </div>
        </div>
    );
}