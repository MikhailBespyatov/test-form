import { ReactComponent as ArrowImg } from "assets/arrow_down.svg";
import { ErrorMessage, Field } from "formik";
import { useCloseClick } from "hooks/CloseClick";
import React, { useRef, useState } from "react";
import {
  ArrowWrapper,
  Label,
  OptionItem,
  OptionsWrapper,
  Placeholder,
  StyledSelect,
  TextError,
  Wrapper,
} from "./styles";

export const Select = ({
  name,
  label,
  options,
  placeholder,
  defaultValue = "",
  isRequired,
  errorMessage,
  touched,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [modalOpen, setModalOpen] = useState(false);
  const optionRef = useRef(null);

  const onChange = (value) => {
    setValue(value);
    setModalOpen(false);
  };

  const onSelectClick = () => {
    setModalOpen(!modalOpen);
  };

  useCloseClick(optionRef, () => setModalOpen(false));

  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label} {isRequired && <TextError>*</TextError>}
      </Label>

      <Field name={name}>
        {({ form }) => {
          const { setFieldValue } = form;
          return (
            <StyledSelect
              name={name}
              opened={modalOpen}
              onClick={onSelectClick}
              ref={optionRef}
              notValid={errorMessage && touched}
            >
              {!value ? (
                <Placeholder>{placeholder}</Placeholder>
              ) : (
                <span>{value}</span>
              )}
              <ArrowWrapper type="button" rotate={modalOpen ? 180 : 0}>
                <ArrowImg />
              </ArrowWrapper>
              {modalOpen && (
                <OptionsWrapper>
                  {options.map((option) => (
                    <OptionItem
                      key={option.value}
                      value={option.key}
                      onClick={(e) => {
                        const value = e.target.getAttribute("value");
                        onChange(value);
                        setFieldValue(name, value);
                      }}
                    >
                      {option.key}
                    </OptionItem>
                  ))}
                </OptionsWrapper>
              )}
            </StyledSelect>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </Wrapper>
  );
};
