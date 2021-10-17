import { css } from "styled-components";

export const disableDefaultButtonStyleMixin = css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
