import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

import Input from "./Input.jsx";

export default function Login() {

  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if(emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue + " " + passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
