import { styled } from 'styled-components';

export default styled.footer`
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: end;

    span {
        background-color: ${props => props.theme.backgroundDarker};
        border-radius: ${props => props.theme.borderRadius};
        border: solid 1px ${props => props.theme.buttonBorder};
        height: 7vh;
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
`;