import { styled } from "styled-components";
import { mobileMaxWidth, tabletMaxWidth, fullHDMinWidth } from "../../styles/global";

export default styled.article`
    margin-bottom: 10px;
    height: calc(100vh - 7.3cm);

    @media ${mobileMaxWidth} {
        height: calc(100vh - 9.15cm);
    }

    @media ${fullHDMinWidth} {
        height: calc(100vh - 8.7cm);
    }

    img {
        width: 15em;

        @media ${tabletMaxWidth} {
            width: 40vw;
        }
    }
`;