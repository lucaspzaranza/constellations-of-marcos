import { styled } from 'styled-components';
import { mobileMaxWidth, fullHDMinWidth } from '../../styles/global';

const FilterContainer = styled.div`
    background-color: ${ props => props.theme.backgroundDarker};
    margin-top: 20px;
    border-radius: ${ props => props.theme.borderRadius};
    border: solid 2px;
    border-color: ${ props => props.theme.buttonBorder};
    width: 100%;

    h3 {
        padding-top: 10px;
        margin-bottom: 10px;
        color: #fff
    }

    form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        button:nth-child(1) {
            border-top-left-radius: ${ props => props.theme.borderRadius};
        }

        button:nth-child(3), button:nth-child(6) {
            border-top-right-radius: ${ props => props.theme.borderRadius};
            border-right-style: none;
        }
    }

    button {
        flex-basis: 33.33%;
        font-weight: bold;
        font-size: large;
        border-style: none solid solid none;
        border-radius: 0;
        border-width: 2px;
    }

    .clear-filters{
        width: 100%;
        border-style: solid none none none;
        border-width: 2px;
        font-weight: bold;
        margin-bottom: 0px;
        border-bottom-left-radius: ${ props => props.theme.borderRadius};
        border-bottom-right-radius: ${ props => props.theme.borderRadius};
    }
`


export const ToggleFilterMenuButton = styled.button`
    margin-top: 20px;
`

export default FilterContainer;