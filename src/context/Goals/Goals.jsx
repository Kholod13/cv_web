import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Creators from "../Creators";

const GOALS_LIST = [
    { id: "goal-1", title: "HTML5", description: "Semantic tags and web structure", isDone: true },
    { id: "goal-2", title: "CSS3", description: "Flexbox, Grid and Animations", isDone: true },
    { id: "goal-3", title: "JavaScript", description: "ES6+, DOM, and Async/Await", isDone: true },
    { id: "goal-4", title: "Git & GitHub", description: "Version control and collaboration", isDone: true },
    { id: "goal-5", title: "Tailwind & Bootstrap", description: "Utility-first styling for rapid UI", isDone: true },
    { id: "goal-6", title: "React", description: "Component-based UI development", isDone: true },
    { id: "goal-7", title: "REST API", description: "Fetching and handling server data", isDone: true },
    { id: "goal-8", title: "Redux / Toolkit", description: "Complex state management", isDone: false },
    { id: "goal-9", title: "TypeScript", description: "Type safety for scalable apps", isDone: false },
    { id: "goal-10", title: "React Native", description: "Mobile apps for iOS & Android", isDone: true },
    { id: "goal-11", title: "Next.js", description: "SSR, SSG and SEO optimization", isDone: false },
    { id: "goal-12", title: "Node.js", description: "Building scalable server-side apps", isDone: false },
    { id: "goal-13", title: "SQL & DBs", description: "Relational data and PostgreSQL", isDone: false },
    { id: "goal-14", title: "GraphQL", description: "Flexible data fetching with Apollo", isDone: false },
    { id: "goal-15", title: "Unit Testing", description: "Ensuring quality with Jest/Vitest", isDone: false },
    { id: "goal-16", title: "Web Performance", description: "Core Web Vitals and Optimization", isDone: false },
];

export default function Goals() {
    const updateXarrow = useXarrow();
    const constraintsRef = useRef(null);

    return (
        <div className="wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div className="container" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="pageTitle" style={{ margin: 0 }}>Goals</p>
                
                <Xwrapper>
                    <div className="goalsSpace" ref={constraintsRef} style={{ position: 'relative', minHeight: '650px', width: '100%' }}>
                        {GOALS_LIST.map((goal, index) => (
                            <motion.div
                                key={goal.id}
                                id={goal.id}
                                drag
                                dragConstraints={constraintsRef} 
                                dragMomentum={false}
                                onDrag={updateXarrow}
                                onDragEnd={updateXarrow}
                                animate={{ y: [0, -10, 0] }} // Анимация плавания
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.4, // Чтобы плавали несинхронно
                                    }}
                                className={`goalItem ${goal.isDone ? "done" : ""}`}
                                style={{
                                    /* 4 колонки: 0, 1, 2, 3 */
                                    left: `${(index % 4) * 22 + 8}%`, 
                                    /* 4 ряда: 0, 1, 2, 3 */
                                    top: `${Math.floor(index / 4) * 220 + 50}px`, 
                                    position: "absolute",
                                    zIndex: 1
                                }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                whileDrag={{ zIndex: 100 }}
                            >
                                {/* ВНУТРЕННИЙ БЛОК: и animate, и transition теперь здесь */}
                                <motion.div
                                    
                                >
                                    <p className="itemTitle">{goal.title}</p>
                                    <p className="itemDescription">{goal.description}</p>
                                    {goal.isDone && <span className="statusText">Done</span>}
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Стрелки */}
                        {GOALS_LIST.map((goal, index) => {
                            if (index < GOALS_LIST.length - 1) {
                                return (
                                    <Xarrow
                                        key={`arrow-${index}`}
                                        start={GOALS_LIST[index].id}
                                        end={GOALS_LIST[index + 1].id}
                                        color={GOALS_LIST[index].isDone ? "#4ade80" : "#3A86FF"}
                                        strokeWidth={2}
                                        path="smooth"
                                        dashness={!GOALS_LIST[index].isDone ? { strokeLen: 10, nonStrokeLen: 10, anim: true } : false}
                                        headSize={5}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </Xwrapper>

                <Creators />
            </div>
        </div>
    );
}