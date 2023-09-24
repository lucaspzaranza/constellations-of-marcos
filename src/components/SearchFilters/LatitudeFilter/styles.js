import styled from "styled-components";
import { mobileMaxWidth } from "../../../styles/global";

export const LatitudeFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 26vh;
    width: 100vw;

    div {
        width: max-content;

        @media ${mobileMaxWidth} {
            width: 80%;
        }

        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`