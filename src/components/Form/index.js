import { BooleanCheckbox } from "components/BooleanCheckbox";
import { MarginWrapper } from "components/common/wrappers/MarginWrapper";
import { FormikControl } from "components/FormikControl";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  genderOptions,
  initialValues,
  onSubmit,
  validationSchema,
} from "./constants";
import {
  AddRemoveButton,
  CenterWrapper,
  FormControlsWrapper,
  FormWrapper,
  SubmitButton,
} from "./styles";

export const DefaultForm = () => {
  const [mobileAndEmailShow, setMobileAndEmailShow] = useState(false);
  const [addPassenger, setAddPassenger] = useState(true);
  return (
    <FormWrapper>
      <MarginWrapper marginBottom="50px">
        <CenterWrapper>
          <AddRemoveButton
            type="button"
            onClick={() => {
              setAddPassenger(!addPassenger);
              setMobileAndEmailShow(false);
            }}
            isRemove={!addPassenger}
          >
            {addPassenger ? "Добавить пассажира" : "Удалить пассажира"}
          </AddRemoveButton>
        </CenterWrapper>
      </MarginWrapper>

      {!addPassenger ? (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ isValid, isSubmitting, values, touched, errors }) => {
            return (
              <Form>
                <FormControlsWrapper>
                  <FormikControl
                    control="input"
                    name="name"
                    label="Имя"
                    isValid
                    isRequired
                    errorMessage={errors.name}
                    touched={touched.name}
                  />

                  <FormikControl
                    control="input"
                    name="lastName"
                    label="Фамилия"
                    isValid
                    isRequired
                    errorMessage={errors.lastName}
                    touched={touched.lastName}
                  />

                  <FormikControl
                    control="input"
                    name="middleName"
                    label="Отчество"
                    isValid
                    isRequired
                    errorMessage={errors.middleName}
                    touched={touched.middleName}
                  />

                  <FormikControl
                    control="select"
                    name="gender"
                    options={genderOptions}
                    label="Пол"
                    defaultValue={values.gender}
                    placeholder={"не выбрано"}
                    isValid
                    isRequired
                    errorMessage={errors.gender}
                    touched={touched.gender}
                  />
                </FormControlsWrapper>

                <MarginWrapper marginBottom="20px">
                  <BooleanCheckbox
                    name="checkbox"
                    label="Добавить номер телефона и почту"
                    onChange={setMobileAndEmailShow}
                  />
                </MarginWrapper>

                {mobileAndEmailShow && (
                  <FormControlsWrapper>
                    <FormikControl
                      control="input"
                      name="mobile"
                      label="Телефон"
                      isValid
                      errorMessage={errors.mobile}
                      touched={touched.mobile}
                    />
                    <FormikControl
                      control="input"
                      name="email"
                      label="Почта"
                      isValid
                      errorMessage={errors.email}
                      touched={touched.email}
                    />
                  </FormControlsWrapper>
                )}

                <MarginWrapper marginTop="50px">
                  <CenterWrapper>
                    <SubmitButton
                      type="submit"
                      disabled={!isValid || isSubmitting}
                    >
                      отправить
                    </SubmitButton>
                  </CenterWrapper>
                </MarginWrapper>
              </Form>
            );
          }}
        </Formik>
      ) : null}
    </FormWrapper>
  );
};
