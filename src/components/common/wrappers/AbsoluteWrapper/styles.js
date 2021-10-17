import styled from "styled-components";

export const AbsoluteWrapper = styled.div`
  position: absolute;
  ${({ top, bottom }) =>
    top ? `top: ${top}` : bottom ? `bottom: ${bottom}` : `top: 0`};
  ${({ left, right }) =>
    left ? `left: ${left}` : right ? `right: ${right}` : `left: 0`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  display: ${({ isClosed }) => (isClosed ? "none" : "block")};
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};
`;
