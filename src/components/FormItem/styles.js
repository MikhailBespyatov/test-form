import { disableDefaultButtonStyleMixin, flexCenter } from "mixins";
import styled, { css } from "styled-components";

export const FormControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 20px;

  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  ${flexCenter}
  ${disableDefaultButtonStyleMixin}
  width: 300px;
  height: 50px;
  background-color: blue;
  border-radius: 15px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;

  ${({ disabled }) => disabled && "opacity: 0.5"}
`;

export const FormWrapper = styled.div`
  width: 70vh;
  height: 70vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddRemoveButton = styled.button`
  ${flexCenter}
  ${disableDefaultButtonStyleMixin}
  width: 300px;
  height: 50px;
  background-color: blue;
  border-radius: 15px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;

  ${({ isRemove }) =>
    isRemove &&
    css`
      color: red;
      background-color: white;
    `};

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
