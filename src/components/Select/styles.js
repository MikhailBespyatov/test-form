import { AbsoluteWrapper } from "components/common/wrappers/AbsoluteWrapper";
import { ClickableWrapper } from "components/common/wrappers/ClickableWrapper";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const TextError = styled.span`
  color: red;
`;

export const StyledSelect = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 220px;
  height: 25px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  ${({ opened }) =>
    opened &&
    css`
      border-radius: 8px 8px 0 0;
      border-bottom: none;
    `}

  ${({ notValid }) =>
    notValid &&
    css`
      border: 1px solid red;
      background-color: rgba(255, 0, 0, 0.1);
    `}
`;

export const Placeholder = styled.span`
  color: grey;
`;

export const ArrowWrapper = styled(ClickableWrapper)`
  transform: ${({ rotate }) => rotate && `rotate(${rotate}deg)`};
`;

export const OptionsWrapper = styled(AbsoluteWrapper)`
  top: 25px;
  left: -1px;
  width: 220px;
  max-height: 150px;
  background-color: white;
  border: 1px solid lightgrey;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;

  z-index: 3;
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  padding: 0 10px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
    transition: background-color 0.3s;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
