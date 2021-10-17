import * as yup from "yup";

const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const validationSchema = yup.object().shape({
  name: yup.string().required("Поле обязательно"),
  lastName: yup.string().required("Поле обязательно"),
  middleName: yup.string().required("Поле обязательно"),
  gender: yup.string().required("Поле обязательно"),
  mobile: yup
    .string()
    .matches(rePhoneNumber, {
      message: "Пожалуйста, введите действительный номер.",
      excludeEmptyString: false,
    })
    .nullable(),
  email: yup.string().email("Неправильный email").nullable(),
});

export const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
};

export const initialValues = {
  name: "",
  lastName: "",
  middleName: "",
  gender: "",
  mobile: "",
  email: "",
};

export const genderOptions = [
  { key: "Мужской", value: "man" },
  { key: "Женский", value: "woman" },
];
