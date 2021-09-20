import styled, { css } from "styled-components";
import { IconButton } from "@material-ui/core";

import { WrapperProps, ModalProps } from "./DataGridUsers.types";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    max-width: ${theme.gridLayout.container};
    margin-left: auto;
    margin-right: auto;

    background: rgb(252, 252, 252);
    background: linear-gradient(
      180deg,
      rgba(252, 252, 252, 1) 0%,
      rgba(246, 246, 246, 1) 30%,
      rgba(240, 240, 240, 1) 100%
    );
    padding: ${theme.spacings.large} 0;

    ${theme.media.greaterThan("small")`
  padding: ${theme.spacings.large} 0 calc(${theme.spacings.large} + 5rem);

`}
  `}
`;


export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: calc(${theme.typography.fontSizes.xlarge} + 4px);
    padding-left: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};

    ${theme.media.greaterThan("xxsmall")`
      padding-left: ${theme.spacings.xsmall};
    
    `}

    ${theme.media.greaterThan("small")`
       padding-left: ${theme.spacings.medium};
       font-size: ${theme.typography.fontSizes.xxlarge};
    
    `}
  `}
`;

export const Loading = styled.img.attrs(
  ({ src = "/dots.svg", alt = "loading..." }) => ({ src, alt })
)`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    padding: calc(${theme.spacings.large} + 20rem) 0;
    transform: scale(0.6);
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;

    ${theme.media.greaterThan("small")`
      padding: 0 ${theme.spacings.medium}
    
    `}
  `}
`;

export const THead = styled.thead`
  ${({ theme }) => css`
    display: none;

    ${theme.media.greaterThan("small")`
      display: table-header-group;
      text-align: left;
    `}
  `}
`;

export const Columns = styled.th<WrapperProps>`
  ${({ theme, classIcon }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    font-weight: ${theme.typography.fontWeightMedium};

    .${classIcon} {
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
    }

    .descending {
      transform: rotate(180deg);
    }
    .ascending {
      transform: rotate(0);
    }

    &:hover {
      .${classIcon} {
        opacity: 1;
      }
    }
  `}
`;

export const Row = styled.tr`
  ${({ theme }) => css`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xxsmall};

    &:nth-child(2n) {
      background-color: rgba(185, 209, 241, 1);
    }

    ${theme.media.greaterThan("xxsmall")`
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    
    `}

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${theme.media.greaterThan("small")`
      display: table-row;
    
    `}
  `}
`;

export const TD = styled.td`
  ${({ theme }) => css`
    display: block;
    text-align: right;
    position: relative;
    padding: ${theme.spacings.xxsmall} 0;
    font-weight: ${theme.typography.fontWeightLight};

    &::before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      display: block;
      font-weight: ${theme.typography.fontWeightMedium};
    }

    ${theme.media.greaterThan("small")`
      display: table-cell;
      text-align: left;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};

      &:last-child {
        text-align: center;
        padding: ${theme.spacings.xxsmall} 0;
      }

        &::before {
          display: none;
        }
    `}

    ${theme.media.greaterThan("medium")`
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    `}  


    ${theme.media.greaterThan("large")`
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

       &:nth-child(1) {
        width: 50%;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 10%;
      }
     
    `}
  `}
`;

export const ButtonArrow = styled(IconButton)``;

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity 0.2s ease-in-out;
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    z-index: ${theme.zIndex.overlay};
  `}
`;

export const ContentModal = styled.div`
  ${({ theme }) => css`
    background-color: #fff;
    border-radius: ${theme.border.radius};
    width: 70rem;
    height: 20rem;
    position: relative;
    z-index: ${theme.zIndex.modal};
    padding: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.large};
  `}
`;

export const WrapperButtons = styled.div`
  ${({ theme }) => css`
    width: 27rem;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;

    button {
      font-size: ${theme.typography.fontSizes.medium};
    }

    div button {
      margin-left: 2rem;
    }
  `}
`;
