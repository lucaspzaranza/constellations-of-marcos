import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutMarcos from "./pages/AboutMarcos";
import AboutMe from "./pages/AboutMe";
import ItemsPage from "./pages/ItemsPage";
import Constellation from "./components/Constellation";
import FixedStar from "./components/FixedStar";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/constellations" element={
                <ItemsPage isConstellation={true}
                    title="Constelações" subtitle="Selecione a Constelação desejada"
                    inputPlaceholder="Pesquisar Constelação..." ItemComponent={Constellation}
                />}
            />

            <Route path="/fixedStars" element={
                <ItemsPage isConstellation={false}
                    title="Estrelas Fixas" subtitle="Selecione a Estrela Fixa desejada"
                    inputPlaceholder="Pesquisar Estrela..." ItemComponent={FixedStar}
                />}
            />

            <Route path="/about-marcos" element={<AboutMarcos/>}/>
            <Route path="/about-me" element={<AboutMe/>}/>
        </Routes>
    );
}