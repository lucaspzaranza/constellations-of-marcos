import Router from "../../Router";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

import GlobalStyle from '../../styles/global'
import themes from '../../styles/themes/';
import { useMemo, useState } from "react";

function App() {
    const [theme, setTheme] = useState('dark');

    const currentTheme = useMemo(() => {
        return themes[theme] || themes.light;
    }, [theme]);

    function toggleTheme() {
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Header onToggleTheme={toggleTheme} selectedTheme={theme}/>
                <Router/>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
