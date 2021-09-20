import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: linear-gradient(
      323deg,
      #0fb4e5 0.3184713375796178%,
      #143752 80.44585987261146%
    );

    margin-bottom: ${theme.spacings.xlarge};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};

    margin-left: auto;
    margin-right: auto;

    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    ${theme.media.greaterThan("xsmall")`
        padding: ${theme.spacings.xsmall};
    
    `}

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.palette.white.main};
    display: none;

    ${theme.media.greaterThan("xsmall")`
        display: initial;
    
    `}
  `}
`;
