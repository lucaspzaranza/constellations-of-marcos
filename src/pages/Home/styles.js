import { styled } from "styled-components";
import { fullHDMinWidth, mobileMaxWidth } from "../../styles/global";

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 4cm);

    h2, a {
        margin-bottom: 10px;
    }

    @media ${mobileMaxWidth} {
        height: calc(100vh - 5.7cm);
    }

    @media ${fullHDMinWidth} {
        height: calc(100vh - 5.1cm);
    }
`

export default LinksContainer;