import styled from "styled-components";
import { mobileMaxWidth } from "../../../styles/global";

export const LongitudeFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 26vh;
    width: 100vw;

    div:first-child { // content div
        width: max-content;

        @media ${mobileMaxWidth} {
            width: 80%;
        }

        div { // input field div
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;

export const LongitudeDropdown = styled.select`
    width: 100%;
    height: 35px;
    font-size: larger;
    background-color: ${ props => props.theme.background};
    color: ${ props => props.theme.textColor};
    margin-bottom: 10px;
    margin-right: 5px;
    border-radius: ${ props => props.theme.borderRadius};
`;