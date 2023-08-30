import { createGlobalStyle, styled } from "styled-components";

export const narrowScreen = '400px';
export const tabletScreen = '600px';
export const titleBreakLine = '740px';
export const desktopScreen = '800px';
export const fullHDScreen = '1920px';

export const mobileMaxWidth = `(max-width: ${narrowScreen})`;
export const tabletMinWidth = `(min-width: ${tabletScreen})`;
export const tabletMaxWidth = `(max-width: ${tabletScreen})`;
export const desktopMinWidth = `(min-width: ${desktopScreen})`;
export const fullHDMinWidth = `(min-width: ${fullHDScreen})`;
export const titleBreakLineBreakPoint = `(max-width: ${titleBreakLine})`;

export default createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        height: 100%;
        color: ${props => props.theme.textColor};
        text-align: center;
        font-family: sans-serif;
        font-size: medium;

        h1{
            max-width: 80%;
            font-size: 8vw;
            margin-top: 0px;

            @media ${tabletMinWidth} {
                font-size: 3rem;
            }
        }

        h2 {
            width: auto;
            font-size: 5vw;
            margin-top: 0px;

            @media ${tabletMinWidth} {
                font-size: 2rem;
            }
        }

        a {
            border: solid 1px ${props => props.theme.buttonBorder};
            background-color: ${props => props.theme.backgroundDarker};
            width: 100%;
            height: 16.5vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 2rem;
            font-weight: bolder;
            border-radius: ${props => props.theme.borderRadius};
            color: white;

            @media ${tabletMinWidth} {
                margin-top: 0vh;
            }

            @media ${mobileMaxWidth} {
                height: 15vh;
            }
        }

        a:hover {
            background-color: ${props => props.theme.buttonBorder};
            transition: background-color 0.5s;
        }

        a:active {
            background-color: ${props => props.theme.clickColor};
            transition: background-color 0.25s;
        }

        button {
            border: solid 1px ${props => props.theme.buttonBorder};
            background-color: ${props => props.theme.backgroundDarker};
            color: white;
            border-radius: ${props => props.theme.borderRadius};
            min-width: ${props => props.theme.buttonWidth};
            height: 7vh;
            font-size: 1.25em;
            font-weight: bold;

            &:hover {
                background-color: ${props => props.theme.buttonBorder};
                transition: background-color 0.5s;
            }

            &:active {
                background-color: ${props => props.theme.clickColor};
                transition: background-color 0.25s;
            }
        }
    }
`;

export const MenuItemButton = styled.button`
    margin-top: 3vh;
    margin-bottom: 3vh;
    border: solid 1px ${props => props.theme.buttonBorder};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.backgroundDarker};
    color: white;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bolder;

    @media ${tabletMaxWidth} {
        height: 7dvh;
        font-size: 1.3rem;
    }

    &:hover{
        background-color: ${props => props.theme.buttonBorder};
        transition: background-color 0.5s;
    }

    &:active {
        background-color: ${props => props.theme.clickColor};
        transition: background-color 0.25s;
    }
`;

export const ArticleContainer = styled.article`
    text-align: justify;
    text-indent: 5vw;
`;