import { Link } from "react-router-dom"
import LinksContainer from "./styles"

export default function Home() {

    return (
        <LinksContainer>
            <h2>Escolha a opção</h2>
            <Link to="/constellations">Constelações</Link>
            <Link to="/fixedstars">Estrelas Fixas</Link>
            <Link to="/about-marcos">Quem é Marcos?</Link>
            <Link to="/about-me">Quem sou eu?</Link>
        </LinksContainer>
    )
}