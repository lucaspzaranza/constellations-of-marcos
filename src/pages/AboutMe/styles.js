import { styled } from "styled-components";
import { tabletMaxWidth } from "../../styles/global";

export default styled.article`
    img {
        width: 25em;

        @media ${tabletMaxWidth} {
            width: 50vw;
        }
    }
`;