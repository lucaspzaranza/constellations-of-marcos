import styled from "styled-components";
import { mobileMaxWidth } from "../../../styles/global";

const LongitudeDropdown = styled.select`
    width: 20%;

    @media ${mobileMaxWidth} {
        width: 45%;
    }

    height: 35px;
    font-size: larger;
    background-color: ${ props => props.theme.background};
    color: ${ props => props.theme.textColor};
    margin-bottom: 20px;
    border-radius: ${ props => props.theme.borderRadius};
`;

export default LongitudeDropdown;