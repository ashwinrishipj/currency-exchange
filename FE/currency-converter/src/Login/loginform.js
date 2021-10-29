import React, { useState } from "react";
import RegisterUser from "./registerForm";
import NegativeAlert from "../Alerts/NegativeAlert";
import { OverlayTrigger, Card, Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageRoute, formRoute, userId } from "../redux/actions";
import ForgetPassword from "./ForgotPassword";
import "./LandingPage.css";
import { emailToolTip, passwordToolTip } from "../Alerts/emailToolTip";

function LoginForm() {
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [spinner, setspinner] = useState(false);
  const [alert, setalert] = useState("");
  const [emailStyle, setemailStyle] = useState({});
  const [passwordStyle, setpasswordStyle] = useState({});

  const dispatch = useDispatch();
  const route = useSelector((state) => state.formRoute);

  const validateField = (e) => {
    e.preventDefault();
    let validation = e.target.value;
    let fieldName = e.target.type;

    switch (fieldName) {
      case "email":
        if (
          validation.match(
            new RegExp(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i)
          )
        ) {
          {
            !passwordError && password !== ""
              ? setbuttonDisabled(false)
              : setbuttonDisabled(true);
          }
          setemailError(false);
          setemailId(validation);
          setemailStyle({ border: "1px solid green" });
        } else {
          setemailError(true);
          setbuttonDisabled(true);
          setemailStyle({ border: "1px solid red" });
        }
        break;

      case "password":
        if (
          validation.match(
            new RegExp(
              "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
            )
          )
        ) {
          {
            !emailError && emailId !== ""
              ? setbuttonDisabled(false)
              : setbuttonDisabled(true);
          }

          setpasswordError(false);
          setpassword(validation);
          setpasswordStyle({ border: "1px solid green" });
        } else {
          setpasswordError(true);
          setbuttonDisabled(true);
          setpasswordStyle({ border: "1px solid red" });
        }
        break;
      default:
        break;
    }
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    localStorage.setItem("emailId", emailId);

    let requestBody = JSON.stringify({
      emailId: `${emailId}`,
      password: `${password}`,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    };

    setspinner(true);
    fetch("http://localhost:8080/validate", requestOptions)
      .then((response) => {
        setspinner(false);
        setbuttonDisabled(true);
        return response.json();
      })
      .then((data) => {
        console.log("data:" + data);

        if (data > 0) {
          dispatch(pageRoute("dashBoard"));
          dispatch(userId(data));
        }
        else if (data === -1) {
          setalert("Invalid email Id. Please enter your valid Id");
        }
        else if (data === 0) {
          setalert("Invalid password. Please re check your password");
        } else {
          setalert("Server Error!. So sorry for inconvenience");
        }
      })
      .catch((error) => {
        setalert(error);
      });
  };

  return (
    <div>
      <aside className="col mt-4 card-transparent" className="login-card">
        {route === "signUp" ? (
          <RegisterUser />
        ) : (
          <div>
            {route === "resetpassword" ? (
              <ForgetPassword />
            ) : (
              <div className="card">
                <article className="card-body">
                  <h5 className="card-title text-dark text-center">Sign in</h5>
                  <hr />
                  <section className="col negativeAlert px-0">
                    {alert.length > 0 ? <NegativeAlert content={alert} /> : ""}
                  </section>
                  <form>
                    <div className="form-group mt-4">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text  mb-0 mt-0"
                            style={{ height: "36px" }}
                          >
                            {" "}
                            <i className="fa fa-envelope"></i>{" "}
                          </span>
                        </div>
                        <input
                          style={emailStyle}
                          className="form-control shadow-none"
                          placeholder="EmailId"
                          type="email"
                          onChange={(event) => validateField(event)}
                        />
                        {emailError ? (
                          <OverlayTrigger
                            placement="right"
                            overlay={emailToolTip}
                          >
                            <i
                              style={{ color: "red" }}
                              className="fa fa-info-circle fa-1x"
                              variant="success"
                            />
                          </OverlayTrigger>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ height: "36px" }}
                          >
                            {" "}
                            <i className="fa fa-key fa-xs"></i>{" "}
                          </span>
                        </div>
                        <input
                          style={passwordStyle}
                          className="form-control shadow-none"
                          placeholder="******"
                          type="password"
                          onChange={(event) => validateField(event)}
                        />
                        {passwordError ? (
                          <OverlayTrigger
                            placement="right"
                            overlay={passwordToolTip}
                          >
                            <i
                              style={{ color: "red" }}
                              className="fa fa-info-circle "
                              variant="success"
                            />
                          </OverlayTrigger>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="mt-4 btn btn-block btn-success"
                        onClick={(event) => onSubmitSignIn(event)}
                        disabled={buttonDisabled}
                      >
                        {spinner ? (
                          <>
                            Loging In...
                            <Spinner
                              animation="border"
                              size="sm"
                              role="status"
                              variant="dark"
                            />
                          </>
                        ) : (
                          <>Login</>
                        )}
                      </button>
                    </div>
                    <button
                      className="mt-4 btn btn-info"
                      onClick={() => dispatch(formRoute("resetpassword"))}
                    >
                      Forgot password?
                    </button>

                    <button
                      className="mt-4 btn btn-info "
                      onClick={() => dispatch(formRoute("signUp"))}
                    >
                      Sign Up
                    </button>
                  </form>
                </article>
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
export default withRouter(LoginForm);
