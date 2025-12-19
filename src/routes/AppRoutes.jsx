import { Routes, Route } from "react-router-dom";
import Home from "../context/Home";
import AboutMe from "../context/AboutMe";
import Contacts from "../context/Contacts";
import Goals from "../context/Goals";
import Experience from "../context/Experience";
import Projects from "../context/Projects";
import "../styles/App.css"

export default function AppRoutes() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
