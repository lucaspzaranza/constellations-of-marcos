import { createGlobalStyle } from "styled-components";

export const narrowScreen = '300px';
export const tabletScreen = '600px';
export const tabletMinWidth = `(min-width: ${tabletScreen})`;
export const tabletMaxWidth = `(max-width: ${tabletScreen})`;

export default createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.textColor};
        text-align: center;
        font-family: sans-serif;
        font-size: medium;

        h1{
            width: auto;
            font-size: 6.25vw;

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
            height: 15vh;
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
        }

        a:hover {
            background-color: ${props => props.theme.buttonBorder};
            transition: background-color 0.5s;
        }
    }
`;