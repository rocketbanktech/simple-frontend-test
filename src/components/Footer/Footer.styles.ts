import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    margin-top: calc(${theme.spacings.large} + 5rem); 
    margin-bottom: ${theme.spacings.large};
  
    

    ${theme.media.greaterThan("medium")`
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    `}
  `}
`;
