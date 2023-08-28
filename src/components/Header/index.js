import { HeaderContainer } from "./styles";
import ThemeButton from "../ThemeButton";

export default function Header({ onToggleTheme, selectedTheme}) {
    return (
        <HeaderContainer>
            <h1>Constellations Of Marcos</h1>
            <ThemeButton onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
        </HeaderContainer>
    );
}