import { Link } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";

export const narrowScreen = '400px';
export const tabletScreen = '600px';
export const titleBreakLine = '740px';
export const desktopScreen = '800px';
export const fullHDScreenWidth = '1800px';
export const fullHDScreenHeight = '900px';

export const mobileMaxWidth = `(max-width: ${narrowScreen})`;
export const tabletMinWidth = `(min-width: ${tabletScreen})`;
export const tabletMaxWidth = `(max-width: ${tabletScreen})`;
export const desktopMinWidth = `(min-width: ${desktopScreen})`;
export const fullHDMinWidth = `(min-width: ${fullHDScreenWidth})`;
export const fullHDMinHeight = `(min-height: ${fullHDScreenHeight})`;
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
            margin-top: -20px;

            @media ${tabletMinWidth} {
                font-size: 2rem;
            }

            @media ${titleBreakLineBreakPoint} {
                font-size: 1.5rem;
                margin-top: 40px;
            }

            @media ${mobileMaxWidth} {
                margin-top: 0px;
            }
        }

        h3 {
            margin-top: -10px;
        }

        a {
            border: solid 1px ${props => props.theme.buttonBorder};
            border-style: solid none solid none;
            background-color: ${props => props.theme.backgroundDarker};
            width: 100vw;
            height: 20vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 2rem;
            font-weight: bolder;
            border-radius: ${props => props.theme.borderRadiuss};
            color: white;

            @media ${titleBreakLineBreakPoint} {
                height: 14.5vh;
            }

            @media ${tabletMaxWidth} {
                font-size: 1.3rem;
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

export const MenuItemNameContainer = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;

    @media (max-width: 465px) {
        font-size: 5vw;
    }
`;

export const MenuItemButton = styled.button`
    border: solid 1px ${props => props.theme.buttonBorder};
    border-radius: 0;
    background-color: ${props => props.theme.backgroundDarker};
    color: white;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: bolder;

    @media ${tabletMaxWidth} {
        height: 7vh;
        font-size: 1.5rem;
    }

    @media ${desktopMinWidth} {
        font-size: 2rem;
    }

    &:first-child{
        border-top-left-radius: ${props => props.theme.borderRadius};
        border-top-right-radius: ${props => props.theme.borderRadius};
    }

    &:last-child{
        border-bottom-left-radius: ${props => props.theme.borderRadius};
        border-bottom-right-radius: ${props => props.theme.borderRadius};
    }

    &:hover{
        background-color: ${props => props.theme.buttonBorder};
        transition: background-color 0.5s;
    }

    &:active {
        background-color: ${props => props.theme.clickColor};
        transition: background-color 0.25s;
    }

    img {
        width: 1.1em;
    }

    &:first-child {
        margin-top: 3vh;
    }

    &:last-child {
        margin-bottom: 3vh;
    }
`;

export const ConstellationContentContainer = styled.div`
    min-height: calc(100vh - 5cm);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${mobileMaxWidth} {
        min-height: calc(100vh - 7cm);
    }
`;

export const ArticleContainer = styled.article`
    text-align: justify;
    text-indent: 5vw;
    margin-left: 30px;
    margin-right: 30px;
    width: 98%;

    span {
        display: flex;
        margin-bottom: 10px;
    }
`;

export const ArticleButton = styled.button`
    margin-bottom: 20px;
    width: ${props => props.theme.buttonWidth};
`;

export const ItemMenuLink = styled(Link)`
    border: none;
    background-color: transparent;
    width: max-content;
    height: min-content;
    font-weight: normal;
    text-decoration: underline;
    font-size: inherit;
    color: ${props => props.theme.textColor};
    border-radius: 0px;
    margin-top: -10px;
    padding: 5px 5vw 5px 0vw;
    margin-bottom: 10px;

    & + span {
        margin-top: -10px;
    }

    &:hover {
        transition: background-color 0.5s;
    }

    &:active {
        transition: background-color 0.25s;
    }
`

export const ConstellationMenuStarLink = styled(Link)`
    border-color: ${props => props.theme.buttonBorder};
    border-style: none solid solid solid;
    width: 95%;
    height: 30px;
    font-weight: normal;
    text-decoration: underline;
    color: white;
    font-size: inherit;
    border-radius: 0px;
    margin-top: -10px;
    padding: 5px 5vw 5px 0vw;
    margin-bottom: 10px;

    &:nth-child(2) {
        border-style: solid;
        border-top-right-radius: ${props => props.theme.borderRadius};
        border-top-left-radius: ${props => props.theme.borderRadius};
    }

    &:last-child {
        border-bottom-right-radius: ${props => props.theme.borderRadius};
        border-bottom-left-radius: ${props => props.theme.borderRadius};
    }

    & + span {
        margin-top: -10px;
    }

    &:hover {
        transition: background-color 0.5s;
    }

    &:active {
        transition: background-color 0.25s;
    }
`;

export const IconLinkDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const IconLinkContainer = styled(Link)`
    background-color: transparent;
    border: none;
    width: fit-content;
    height: fit-content;

    img {
        width: 100px !important;

        @media ${tabletMaxWidth} {
            width: 80px !important;
        }

        @media ${mobileMaxWidth} {
            width: 60px !important;
        }
    }

    &:hover {
        background-color: white;
        transition: background-color 0.5s;
    }
`;

export const DetailsPageHeader2Container = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 1.1em;
    }
`