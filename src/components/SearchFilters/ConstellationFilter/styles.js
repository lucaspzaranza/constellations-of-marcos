import { styled } from 'styled-components';

const Dropdown = styled.select`
    width: 55%;
    height: 35px;
    font-size: larger;
    background-color: ${ props => props.theme.background};
    color: ${ props => props.theme.textColor};
    margin-bottom: 20px;
    border-radius: ${ props => props.theme.borderRadius};
`;

export default Dropdown;