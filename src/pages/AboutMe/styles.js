import styled from "styled-components";

export const ParagraphWithLink = styled.p`
    //display: flex !important;
    flex-wrap: wrap;

    span {
        width: max-content;
        display: flex;
        text-indent: 0;
        align-items: end;
    }

    a {
        flex-grow: 50%;
        border: none;
        text-decoration: underline;
        background-color: transparent;
        width: max-content;
        height: min-content;
        font-size: inherit;
        font-weight: inherit;
    }
`