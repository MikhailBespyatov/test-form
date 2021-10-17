import { Field } from "formik";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const StyledField = styled(Field)`
  width: 200px;
  height: 25px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid lightgrey;

  ${({ notvalid }) =>
    notvalid &&
    css`
      border: 1px solid red;
      background-color: rgba(255, 0, 0, 0.1);
    `}
`;

export const TextError = styled.span`
  color: red;
`;
