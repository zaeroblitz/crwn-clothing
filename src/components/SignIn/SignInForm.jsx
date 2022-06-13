import { useState } from "react";
import {
  signInWithGooglePopup,
  signInWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";

const defaultFormFeilds = {
  email: "",
  password: "",
};

const SignInFornm = () => {
  const [formFields, setFormFeilds] = useState(defaultFormFeilds);
  const { email, password } = formFields;

  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    return user;
  };

  // const logInEmailPassword = async () => {
  //   const { user } = await signInWithEmailPassword(email, password);
  //   await createUserDocumentFromAuth(user);
  //   return user;
  // };

  const resetFormFields = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormFeilds({ ...formFields, [name]: value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInWithEmailPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        return alert("Wrong Password");
      }

      if (error.code === "auth/user-not-found") {
        return alert("User Not Found");
      }

      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
      <div>
        <Button
          onClick={logInGoogleUser}
          buttonType="google"
          style={{ marginTop: "12px" }}
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default SignInFornm;
