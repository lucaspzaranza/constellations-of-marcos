import { styled } from "styled-components";
import { fullHDMinWidth } from "../../styles/global";

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 17vw);

    h2 {
        font-size: 1.5rem;

        @media (max-width: 740px) {
            margin-top: 5vw;
        }

        @media (max-width: 440px) {
            margin-top: 2vw;
        }
    }

    h2, a {
        margin-bottom: 10px;
    }

    @media ${fullHDMinWidth} {
        height: calc(100vh - 10vw);
    }
`

export default LinksContainer;