import { styled } from "styled-components";
import { fullHDMinWidth, mobileMaxWidth } from "../../styles/global";

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: calc(100vh - 4cm);
    justify-content: center;

    h2 {
        margin-bottom: 30px;
    }

    @media ${mobileMaxWidth} {
        height: calc(100vh - 5.7cm);
    }

    @media ${fullHDMinWidth} {
        height: calc(100vh - 5.1cm);
    }

    a {
        border-style: solid none none none;
        height: 20%;
        border-radius: 0;
    }

    a:nth-child(2) {
        border-top-right-radius: ${props => props.theme.borderRadius};
        border-top-left-radius: ${props => props.theme.borderRadius};
    }

    a:last-child {
        border-style: solid none solid none;
    }

    footer {
        height: 20%;
    }
`

export default LinksContainer;