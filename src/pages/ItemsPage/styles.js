import { styled } from "styled-components";
import { mobileMaxWidth } from "../../styles/global";

export const ItemsPageContainer = styled.div`
    min-height: calc(100vh - 3.5cm);

    @media ${mobileMaxWidth} {
        min-height: calc(100vh - 5.7cm);
    }
`;

export const BackLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;

    a {
        height: 6vh;
        width: ${props => props.theme.buttonWidth};
    }
`;