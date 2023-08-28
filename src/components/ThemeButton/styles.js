import { styled } from "styled-components";
import { narrowScreen } from "../../styles/global";

const narrowMobile = `(max-width: ${narrowScreen})`;

export const ThemeButtonContainer = styled.button`
    position: absolute;
    right: 0px;
    margin-top: 0px;
    border: none;
    background: none;
    width: auto;

    img {
        width: 30px;

        @media ${narrowMobile} {
            width: 10vw;
        }
    }
`;