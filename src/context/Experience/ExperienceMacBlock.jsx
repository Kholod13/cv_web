import React, { useState } from "react";
import "../../styles/App.css";

const EXPERIENCE_DATA = [
    {
        id: 0,
        fileName: "it-step.js",
        variableName: "academy",
        title: "Software Development",
        company: "IT-Step Academy",
        from: "11/06/22",
        to: "29/03/25",
        location: "Rivne, UA"
    },
    {
        id: 1,
        fileName: "qri-tech.js",
        variableName: "currentJob",
        title: "Frontend Developer / React Developer",
        company: "QRI Tech",
        from: "14/01/25",
        to: "Present",
        location: "Remote"
    },
];

export default function ExperienceMacBlock() {
    const [activeTab, setActiveTab] = useState(0);
    const data = EXPERIENCE_DATA[activeTab];

    return (
        <div className="resume_mac experienceMac">
            <div className="mac_header">
                <div className="mac_buttons">
                    <div className="mac_button red"></div>
                    <div className="mac_button yellow"></div>
                    <div className="mac_button green"></div>
                </div>
                <div className="mac_tabs">
                    {EXPERIENCE_DATA.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`mac_tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span>{item.fileName}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mac_body code_editor">
                <div className="line_numbers">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => <span key={n}>{n}</span>)}
                </div>
                
                <div className="code_content">
                    <div>
                        <span className="keyword">const</span> <span className="variable">{data.variableName}</span> = {'{'}
                    </div>
                    <div className="indent">
                        <span className="key">title:</span> <span className="string">"{data.title}"</span>,
                    </div>
                    <div className="indent">
                        <span className="key">company:</span> <span className="string">"{data.company}"</span>,
                    </div>
                    <div className="indent">
                        <span className="key">from:</span> <span className="string">"{data.from}"</span>,
                    </div>
                    <div className="indent">
                        <span className="key">to:</span> <span className="string">"{data.to}"</span>,
                    </div>
                    <div className="indent">
                        <span className="key">location:</span> <span className="string">"{data.location}"</span>
                    </div>
                    <div>{'}'}</div>
                    <div><span className="comment">// Exploring new technologies...</span></div>
                </div>
            </div>
        </div>
    );
}