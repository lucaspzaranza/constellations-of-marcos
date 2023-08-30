import { styled } from "styled-components"

export const ItemsPageContainer = styled.div`
    min-height: 70vh;
`;

export const BackLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    a {
        height: 6vh;
        width: ${props => props.theme.buttonWidth};
    }
`;