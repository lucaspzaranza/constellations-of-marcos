import { styled } from "styled-components";
import { mobileMaxWidth, fullHDMinWidth } from "../../styles/global";
import { Link } from "react-router-dom";

export const ItemsPageContainer = styled.div`
    min-height: calc(100vh - 3.5cm);

    @media ${mobileMaxWidth} {
        min-height: calc(100vh - 5.7cm);
    }

    @media ${fullHDMinWidth} {
        min-height: calc(100vh - 4.55cm);
    }
`;

export const BackLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;

    a {
        height: 6vh;
        width: ${props => props.theme.buttonWidth};

        @media ${mobileMaxWidth} {
            font-size: 5vw;
        }
    }
`;

export const MenuItemsContainer = styled.div`
    min-height: 54vh;

    @media ${mobileMaxWidth} {
        min-height: 44vh;
    }
`;

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackLinkIconContainer = styled(Link)`
    width: 5em;
    height: 6vh;
    font-size: 1rem;
    margin-right: 5px;

    @media ${mobileMaxWidth} {
        font-size: 3vw;
    }
`