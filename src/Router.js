import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Constellations from "./pages/Constellations";
import FixedStars from "./pages/FixedStars";
import AboutMarcos from "./pages/AboutMarcos";
import AboutMe from "./pages/AboutMe";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/constellations" element={<Constellations/>}/>
            <Route path="/fixedStars" element={<FixedStars/>}/>
            <Route path="/about-marcos" element={<AboutMarcos/>}/>
            <Route path="/about-me" element={<AboutMe/>}/>
        </Routes>
    );
}