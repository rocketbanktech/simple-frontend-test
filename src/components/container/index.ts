import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 70vh;
    flex-direction: column;
    align-items: center;
    max-width: 55rem;
    padding: 0 ${theme.spacings.xsmall};
    margin: 0 auto;

    h2 {
      margin-bottom: ${theme.spacings.medium};
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    div {
      margin-bottom: ${theme.spacings.xsmall};
    }
    div:first-child {
      grid-column: 1 / -1;
    }

    button {
      align-self: flex-end;
      width: 100%;
      ${theme.media.greaterThan("xsmall")`
        width: initial;
    `}

      font-size: ${theme.typography.fontSizes.small};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    
    ${theme.media.greaterThan("xsmall")`
        grid-template-columns: 1fr  1fr  1fr;
    `}

    column-gap: 1rem;
    width: 100%;


    .inputLoading {
    padding: 0 10px; 
    transform: scale(0.4);
    width: 100%;
    }
  `}
`;
