import { BooleanCheckbox } from "components/BooleanCheckbox";
import { MarginWrapper } from "components/common/wrappers/MarginWrapper";
import { FormikControl } from "components/FormikControl";
import React, { useState } from "react";
import { formEvents } from "stores/form";
import { getValue } from "utils/usefulFunc";
import { genderOptions } from "./constants";
import { AddRemoveButton, CenterWrapper, FormControlsWrapper } from "./styles";

export const FormItem = ({ errors, touched, values, i, saveForm }) => {
  const [mobileAndEmailShow, setMobileAndEmailShow] = useState(false);
  React.useEffect(() => {
    saveForm(values);
  }, [values, saveForm]);

  return (
    <>
      <MarginWrapper marginBottom="50px">
        <CenterWrapper>
          <AddRemoveButton
            type="button"
            onClick={() => {
              formEvents.removeForm(i);
            }}
            isRemove
          >
            Удалить пассажира
          </AddRemoveButton>
        </CenterWrapper>
      </MarginWrapper>
      <FormControlsWrapper>
        <FormikControl
          control="input"
          name={getValue(`name`, i)}
          label="Имя"
          isValid
          isRequired
          errorMessage={errors[getValue(`name`, i)]}
          touched={touched[getValue(`name`, i)]}
          values={values}
        />

        <FormikControl
          control="input"
          name={getValue(`lastName`, i)}
          label="Фамилия"
          isValid
          isRequired
          errorMessage={errors[getValue(`lastName`, i)]}
          touched={touched[getValue(`lastName`, i)]}
          values={values}
        />

        <FormikControl
          control="input"
          name={getValue(`middleName`, i)}
          label="Отчество"
          isValid
          isRequired
          errorMessage={errors[getValue(`middleName`, i)]}
          touched={touched[getValue(`middleName`, i)]}
          values={values}
        />

        <FormikControl
          control="select"
          name={getValue(`gender`, i)}
          options={genderOptions}
          label="Пол"
          placeholder={"не выбрано"}
          isValid
          isRequired
          defaultValue={values[getValue(`gender`, i)]}
          errorMessage={errors[getValue(`gender`, i)]}
          touched={touched[getValue(`gender`, i)]}
          values={values}
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
            name={getValue(`mobile`, i)}
            label="Телефон"
            isValid
            errorMessage={errors[getValue(`mobile`, i)]}
            touched={touched[getValue(`mobile`, i)]}
            values={values}
          />
          <FormikControl
            control="input"
            name={getValue(`email`, i)}
            label="Почта"
            isValid
            errorMessage={errors[getValue(`email`, i)]}
            touched={touched[getValue(`email`, i)]}
            values={values}
          />
        </FormControlsWrapper>
      )}
    </>
  );
};
