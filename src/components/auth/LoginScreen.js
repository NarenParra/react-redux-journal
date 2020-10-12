import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForms";
import { removeError, setError } from "../../actions/ui";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {
  //de react redux
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "prueba@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      //de las acciones
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("email is required"));
      return false;
    } else if (password.length < 3) {
      dispatch(setError("Password should be at least 4 charaacterts"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      {msgError && <div className="auth__alert-error">{msgError}</div>}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        {!loading ? (
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        ) : (
          <div
            style={{ width: 20, height: 20, margin: "auto" }}
            className="preloader"
          ></div>
        )}

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
