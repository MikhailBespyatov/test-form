import { disableDefaultButtonStyleMixin, flexCenter } from "mixins";
import styled from "styled-components";

export const ClickableWrapper = styled.button`
  ${disableDefaultButtonStyleMixin};
  ${flexCenter};
  ${({ round }) => round && "border-radius: 50%;"};
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  ${({ disabled }) => disabled && "cursor: default;"};
  z-index: 3;
  background: transparent;
  color: white;
`;
