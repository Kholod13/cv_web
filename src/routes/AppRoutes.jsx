import { Routes, Route } from "react-router-dom";
import Home from "../context/Home";
import "../styles/App.css"

export default function AppRoutes() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
