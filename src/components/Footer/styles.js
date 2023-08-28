import { styled } from 'styled-components';
import { tabletMaxWidth } from '../../styles/global';

const FooterContainer = styled.div`
    height: 10vw;
    background-color: ${props => props.theme.backgroundDarker};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: solid 1px ${props => props.theme.buttonBorder};

    @media ${tabletMaxWidth} {
        height: 10vh;
    }
`;

export default FooterContainer;