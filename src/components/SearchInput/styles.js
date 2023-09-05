import { styled } from "styled-components";
import { titleBreakLineBreakPoint, mobileMaxWidth, fullHDMinWidth } from "../../styles/global";

export default styled.input`
    width: 50vw;
    height: 6vh;
    font-size: 2rem;
    border-radius: ${props => props.theme.borderRadius};
    border: 2px solid ${props => props.theme.buttonBorder};

    &:focus {
        outline: 1px solid ${props => props.theme.inputFocus};
    }

    @media ${titleBreakLineBreakPoint} {
        font-size: 4vw;
    }

    @media ${mobileMaxWidth} {
        font-size: 1rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
        border: 1px solid ${props => props.theme.backgroundDarker};
        background-color: ${props => props.theme.searchIconBackground};
        margin-left: 5px;
        border-radius: ${props => props.theme.borderRadius};
        width: 3em;

        @media ${fullHDMinWidth} {
            width: 3.85em;
        }
    }
`;