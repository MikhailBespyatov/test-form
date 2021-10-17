import { Select } from "components/Select";
import { TextInput } from "components/TextInput";
import React from "react";

export const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <TextInput {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return <TextInput {...rest} />;
  }
};
