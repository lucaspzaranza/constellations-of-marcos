import { styled } from 'styled-components';
import { mobileMaxWidth, fullHDMinWidth } from '../../styles/global';

const FilterContainer = styled.div`
    background-color: ${ props => props.theme.backgroundDarker};
    margin-top: 20px;
    border-radius: ${ props => props.theme.borderRadius};
    border: solid 1px;
    border-color: ${ props => props.theme.buttonBorder};

    h3 {
        padding-top: 10px;
        margin-bottom: 10px;
        color: #fff
    }

    form {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;

        button:nth-child(1) {
            border-top-left-radius: ${ props => props.theme.borderRadius};
        }

        button:nth-child(3) {
            border-top-right-radius: ${ props => props.theme.borderRadius};
        }
    }

    button {
        flex-basis: 32.6%;

        @media ${mobileMaxWidth} {
            flex-basis: 31.75vw;
        }

        @media ${fullHDMinWidth} {
            flex-basis: 32.75vw;
        }

        font-weight: bold;
        font-size: large;
        border-style: none solid solid none;
        border-radius: 0;
        border-width: 1px;
    }

    .clear-filters{
        width: 100%;
        border-style: solid none none none;
        border-width: 1px;
        font-weight: bold;
        margin-bottom: 0px;
        border-bottom-left-radius: ${ props => props.theme.borderRadius};
        border-bottom-right-radius: ${ props => props.theme.borderRadius};
    }
`


export const FilterButton = styled.button`
    margin-top: 20px;
`

export default FilterContainer;