import SignInForm from "../../components/SignIn/SignInForm";
import SignUpForm from "../../components/SignUp/SignUpForm";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
