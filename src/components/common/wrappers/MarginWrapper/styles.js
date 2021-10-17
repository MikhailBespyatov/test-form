import styled from "styled-components";

export const MarginWrapper = styled.div`
  ${({ margin }) => margin && `margin: ${margin};`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};
  ${({ zIndex }) => (zIndex !== undefined ? `z-index: ${zIndex};` : ``)};
`;
