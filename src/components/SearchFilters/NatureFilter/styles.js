import styled from "styled-components";
import { mobileMaxWidth } from "../../../styles/global";

const NatureFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;

    button {
        width: 25%;
        margin: 0;

        @media ${mobileMaxWidth} {
            width: 90%;
        }
    }
`;

export const CheckBoxesColumns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
`;

export const CheckBoxesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    div {
        margin-bottom: 10px;
        
        input {
            width: 15px;
            height: 15px;
        }

        label {
            font-size: 20px;
        }
    }

    & + & {
        margin-left: 20px;
    }
`;

export default NatureFilterContainer;