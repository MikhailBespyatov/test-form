import { MarginWrapper } from "components/common/wrappers/MarginWrapper";
import { FormItem } from "components/FormItem";
import { useStore } from "effector-react";
import { Form, Formik } from "formik";
import { useLocalStorageState } from "hooks/useLocalStorageState";
import React, { useEffect, useState } from "react";
import { formEvents, formStores } from "stores/form";
import * as yup from "yup";
import { onSubmit } from "./constants";
import {
  AddRemoveButton,
  CenterWrapper,
  FormWrapper,
  SubmitButton,
} from "./styles";

export const DefaultForm = () => {
  const [counter, setCounter] = useState(0);
  const [values, setInitialValues] = useState({});
  const [validationSchema, setValidationSchema] = useState();
  const { items } = useStore(formStores.values);
  const formIndexs = useStore(formStores.formIndexs);
  const { shema } = useStore(formStores.shema);

  const [initialValues, handleUpdateForm] = useLocalStorageState({
    key: "formValues",
    value: values,
  });

  useEffect(() => {
    if (items) {
      setInitialValues(items);
    }
    setValidationSchema(yup.object().shape(null));
    setValidationSchema(yup.object().shape(shema));
    console.log(shema, validationSchema);
  }, [items, shema]);

  return (
    <FormWrapper>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {({ isValid, isSubmitting, values, touched, errors }) => {
          return (
            <Form>
              <MarginWrapper marginBottom="50px">
                <CenterWrapper>
                  <AddRemoveButton
                    type="button"
                    onClick={() => {
                      setCounter(counter + 1);
                      formEvents.addForm(counter);
                    }}
                  >
                    Добавить пассажира
                  </AddRemoveButton>
                </CenterWrapper>
              </MarginWrapper>
              {formIndexs && formIndexs.length !== 0
                ? formIndexs.map((it) => {
                    return (
                      <FormItem
                        key={it}
                        errors={errors}
                        touched={touched}
                        values={values}
                        i={it}
                        saveForm={handleUpdateForm}
                      />
                    );
                  })
                : null}

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
    </FormWrapper>
  );
};
