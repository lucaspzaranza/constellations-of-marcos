import styled from "styled-components";
import { mobileMaxWidth } from "../../../styles/global";

const MagnitudeFilterContainer = styled.div`
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
            flex-direction: column;
            align-items: center;

            select {
                width: 100%;
                margin-right: 0;
            }

            input {
                width: 100%;
                flex-basis: 35px;
                margin-bottom: 20px;

                @media ${mobileMaxWidth} {
                    width: 97.5%;
                }
            }
        }

        button {
            margin: 0;
        }
    }
`;

export default MagnitudeFilterContainer;