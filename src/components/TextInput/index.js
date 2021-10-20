import { AbsoluteWrapper } from "components/common/wrappers/AbsoluteWrapper";
import {
  Label,
  StyledField,
  TextError,
  Wrapper,
} from "components/TextInput/styles";
import { ErrorMessage } from "formik";
import React from "react";

export const TextInput = ({
  name,
  label,
  type,
  isRequired,
  errorMessage,
  touched,
  values,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label} {isRequired && <TextError>*</TextError>}
      </Label>
      <StyledField name={name} type={type} notvalid={errorMessage && touched} />
      <AbsoluteWrapper width="100%" top="55px">
        <ErrorMessage name={name} component={TextError} />
      </AbsoluteWrapper>
    </Wrapper>
  );
};
