import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacts from "../components/Contacts/Contacts";
import Goals from "../components/Goals/Goals";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
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
