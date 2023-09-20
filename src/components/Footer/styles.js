import { styled } from 'styled-components';

export default styled.footer`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: end;

    span {
        background-color: ${props => props.theme.backgroundDarker};
        border-bottom-left-radius: ${props => props.theme.borderRadius};
        border-bottom-right-radius: ${props => props.theme.borderRadius};
        border: solid 1px ${props => props.theme.buttonBorder};
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
`;