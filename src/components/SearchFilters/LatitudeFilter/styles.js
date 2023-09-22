import styled from "styled-components";
import { mobileMaxWidth } from "../../../styles/global";

export const LatitudeFilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media ${mobileMaxWidth} {
            width: 97%;
        }

        h3 {
            margin-bottom: -20px;
        }

        div {
            display: flex;
            flex-direction: row;
            height: 100px;
        }

        select {
            margin: 0px 20px 0px 0px;
            width: 75%;
        }

        button {
            width: inherit;
            margin: 0;
        }
    }
`