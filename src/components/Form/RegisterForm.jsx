import { Form, Formik } from "formik";
import { initialRegisterValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./FormSchema";
import Input from "../ui/Input";
import Button from "../Button/button";

const onSubmit = (values, actions) => {
  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(values),
  }).then((response) => {
    console.log(response.status);;
    if (response.status === 400) {
      alert("Error al recibir el body");
    } else if (response.status === 200) {
      alert(`Usuario ${values.name} registrado correctamente`);
      console.log(values)
    } else if (response.status === 409) {
      alert("Usuario ya registrado");
    }
  });
  actions.resetForm();
};

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={RegisterFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="formRegister">
            <h5>Create Account</h5>
          <div className="inputContainer">
            <h6>First Name</h6>
            <Input
              name="name"
              type="text"
              className={"registerInput"}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Last Name</h6>
            <Input
              name="surname"
              type="text"
              className={"registerInput"}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Email</h6>
            <Input
              name="email"
              type="email"
              className={"registerInput"}
            ></Input>
          </div>
          <div className="inputContainer">
            <h6>Password</h6>
            <Input
              name="password"
              type="password"
              className={"registerInput"}
            ></Input>
          </div>

          <Button value={"Create"} disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}
