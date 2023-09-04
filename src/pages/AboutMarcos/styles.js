import { styled } from "styled-components";
import { tabletMaxWidth } from "../../styles/global";

export default styled.article`
    margin-bottom: 10px;

    img {
        width: 15em;

        @media ${tabletMaxWidth} {
            width: 40vw;
        }
    }
`;