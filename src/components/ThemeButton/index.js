import { ThemeButtonContainer } from "./styles";
import sunIcon from '../../assets/svg/sun.svg'
import moonIcon from '../../assets/svg/moon.svg'

export default function ThemeButton({ onToggleTheme, selectedTheme }) {
    return (
        <ThemeButtonContainer onClick={onToggleTheme}>
            <img src={selectedTheme === 'light'? moonIcon : sunIcon} alt="toggle-theme"/>
        </ThemeButtonContainer>
    )
}