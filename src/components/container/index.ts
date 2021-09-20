import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  `}
`;
