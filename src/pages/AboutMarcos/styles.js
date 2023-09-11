import { styled } from "styled-components";
import { mobileMaxWidth, tabletMaxWidth, fullHDMinWidth } from "../../styles/global";

export default styled.article`
    margin-bottom: 10px;

    img {
        width: 15em;

        @media ${tabletMaxWidth} {
            width: 40vw;
        }
    }

    p {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: justify;
        text-indent: 5vw;
    }
`;