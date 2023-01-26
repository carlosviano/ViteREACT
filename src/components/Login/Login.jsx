import "./Login.css";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";

export default function Login() {
  return (
    <div className="mainContainer">
      <div className="login">
        <LoginForm />
      </div>
      <div className="register">
        <RegisterForm />
      </div>
    </div>
  );
}
