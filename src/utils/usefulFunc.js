import * as yup from "yup";
export const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const getValue = (name, i) => {
  return `${name}${i}`;
};

export const getValues = (i) => {
  const obj = {};
  const name = getValue(`name`, i);
  const lastName = getValue(`lastName`, i);
  const middleName = getValue(`middleName`, i);
  const gender = getValue(`gender`, i);
  const mobile = getValue(`mobile`, i);
  const email = getValue(`email`, i);
  obj[name] = "";
  obj[lastName] = "";
  obj[middleName] = "";
  obj[gender] = "";
  obj[mobile] = "";
  obj[email] = "";
  return obj;
};

export const getShema = (i) => {
  const obj = {};
  const name = getValue(`name`, i);
  const lastName = getValue(`lastName`, i);
  const middleName = getValue(`middleName`, i);
  const gender = getValue(`gender`, i);
  const mobile = getValue(`mobile`, i);
  const email = getValue(`email`, i);
  obj[name] = yup.string().required("Поле обязательно");
  obj[lastName] = yup.string().required("Поле обязательно");
  obj[middleName] = yup.string().required("Поле обязательно");
  obj[gender] = yup.string().required("Поле обязательно");
  obj[mobile] = yup
    .string()
    .matches(rePhoneNumber, {
      message: "Пожалуйста, введите действительный номер.",
      excludeEmptyString: false,
    })
    .nullable();
  obj[email] = yup.string().email("Неправильный email").nullable();
  return obj;
};

export const deleteValues = (state, i) => {
  const newState = { ...state };
  delete newState[getValue(`name`, i)];
  delete newState[getValue(`lastName`, i)];
  delete newState[getValue(`middleName`, i)];
  delete newState[getValue(`gender`, i)];
  delete newState[getValue(`mobile`, i)];
  delete newState[getValue(`email`, i)];
  return newState;
};
