import { styled } from 'styled-components';
import { mobileMaxWidth } from '../../../styles/global';

const Dropdown = styled.select`
    width: 55%;
    width: 35%;

    @media ${mobileMaxWidth} {
        width: 80%;
    }

    height: 35px;
    font-size: larger;
    background-color: ${ props => props.theme.background};
    color: ${ props => props.theme.textColor};
    margin-bottom: 20px;
    border-radius: ${ props => props.theme.borderRadius};
`;

export default Dropdown;