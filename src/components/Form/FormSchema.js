import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
    name: yup
    .string()
    .min(3,"Name field must be at least 3 characters long")
    .required("Name field is required"),
    surname: yup
    .string()
    .required("Surname field is required"),
    email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
    password: yup
    .string()
    .min(5,"Password must be at least 5 characters long")
    .required("Password field is required"),
})

export const LoginFormSchema= yup.object().shape({
    email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
    password: yup
    .string()
    .min(5,"Password must be at least 5 characters long")
    .required("Password field is required"),
})