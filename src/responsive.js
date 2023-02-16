import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `;
};

// Make for each size

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 780px) {
            ${props}
        }
    `;
};