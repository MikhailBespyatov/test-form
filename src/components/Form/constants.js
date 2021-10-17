import axios from "axios";
import * as yup from "yup";

const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const url = "https://webhook.site/eb8cd357-03af-4768-a4c7-ca404c974b15";
const headers = {
  "Content-Type": "application/json",
};

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

export const onSubmit = async (values, onSubmitProps) => {
  const data = JSON.stringify(values);

  await axios({
    method: "post",
    url,
    headers,
    data,
  });

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
