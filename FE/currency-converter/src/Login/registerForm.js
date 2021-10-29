import React, { useState } from 'react';
import NegativeAlert from '../Alerts/NegativeAlert';
import { LoginFetchData } from '../Helpers/Fetch';
import { OverlayTrigger, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formRoute, pageRoute } from "../redux/actions";
import { emailToolTip, passwordToolTip, retypePassword } from "../Alerts/emailToolTip";

function RegisterUser() {
	const [emailError, setemailError] = useState(false);
	const [passwordError, setpasswordError] = useState(false);
	const [buttonDisabled, setbuttonDisabled] = useState(true);
	const [emailId, setemailId] = useState('');
	const [password, setpassword] = useState('');
	const [spinner, setspinner] = useState(false);
	const [alert, setalert] = useState('');
	const [emailStyle, setemailStyle] = useState({});
	const [passwordStyle, setpasswordStyle] = useState({});
	const [reTypePasswordError, setreTypePasswordError] = useState(false);
	const [reTypePasswordStyle, setreTypePasswordStyle] = useState({});

	const dispatch = useDispatch();

	const submitSignup = (e) => {
		e.preventDefault();

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

		fetch("http://localhost:8080/validate", requestOptions)
			.then((response) => {
				setspinner(false);
				setbuttonDisabled(true);
				return response.json();
			})
			.then((data) => {
				console.log("data:" + data);

				if (data === 0) {
					setalert("user is already registered. Please login or try using different email");
				} else if (data >= 1) {
					dispatch(pageRoute("dashBoard"));
				} else {
					setalert("Server Error!. So sorry for inconvenience");
				}
			})
			.catch((error) => {
				setalert(error);
			});
	};

	const validateField = (e) => {
		e.preventDefault();
		let validation = e.target.value;
		let fieldName = e.target.name;

		switch (fieldName) {
			case 'email':
				if (validation.match(new RegExp(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i))) {
					{
						!passwordError && password !== '' ? setbuttonDisabled(false) : setbuttonDisabled(true);
					}
					setemailError(false);
					setemailId(validation);
					setemailStyle({ border: '1px solid green' });
				} else {
					setemailError(true);
					setbuttonDisabled(true);
					setemailStyle({ border: '1px solid red' });
				}
				break;

			case 'password':
				if (
					validation.match(
						new RegExp(
							'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
						)
					)
				) {

					setpasswordError(false);
					setpassword(validation);
					setpasswordStyle({ border: '1px solid green' });
				} else {
					setpasswordError(true);
					setbuttonDisabled(true);
					setpasswordStyle({ border: '1px solid red' });
				}
				break;
			case 'retypePassword':
				if (
					validation.match(
						new RegExp(
							'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
						)
					)
					&& validation == password) {
					{
						!emailError && emailId !== '' && password != '' ? setbuttonDisabled(false) : setbuttonDisabled(true);
					}
					setreTypePasswordError(false);
					setpassword(validation);
					setreTypePasswordStyle({ border: '1px solid green' });
				} else {
					setreTypePasswordError(true);
					setbuttonDisabled(true);
					setreTypePasswordStyle({ border: '1px solid red' });
				}
			default:
				break;
		}
	};

	return (
		<div className="card">
			<article className="card-body">
				<h5 className="card-title text-dark text-center">Sign up</h5>
				<hr />
				<section className="col negativeAlert px-0">
					{alert.length > 0 ? <NegativeAlert content={alert} /> : ''}
				</section>
				<form>
					<div className="form-group mt-4">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" style={{ height: "36px" }}>
									{' '}
									<i className="fa fa-envelope fa-xs"></i>{' '}
								</span>
							</div>
							<input
								style={emailStyle}
								className="form-control shadow-none"
								placeholder="EmailId"
								type="email"
								name="email"
								onChange={(event) => validateField(event)}
							/>
							{emailError ? (
								<OverlayTrigger
									placement="right"
									overlay={emailToolTip}
								>
									<i
										style={{ color: 'red' }}
										className="fa fa-info-circle fa-1x"
										variant="success"
									/>
								</OverlayTrigger>
							) : (
								' '
							)}
						</div>
					</div>
					<div className="form-group mt-4">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" style={{ height: "36px" }}>
									{' '}
									<i className="fa fa-key fa-xs"></i>{' '}
								</span>
							</div>
							<input
								style={passwordStyle}
								className="form-control shadow-none"
								placeholder="******"
								type="password"
								name="password"
								onChange={(event) => validateField(event)}
							/>
							{passwordError ? (
								<OverlayTrigger
									placement="right"

									overlay={passwordToolTip}
								>
									<i
										style={{ color: 'red' }}
										className="fa fa-info-circle "
										variant="success"
									/>
								</OverlayTrigger>
							) : (
								' '
							)}
						</div>
					</div>
					<div className="form-group mt-4">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" style={{ height: "36px" }}>
									{' '}
									<i className="fa fa-key fa-xs"></i>{' '}
								</span>
							</div>
							<input
								style={reTypePasswordStyle}
								className="form-control shadow-none"
								placeholder="re-type Password"
								type="password"
								name="retypePassword"
								onChange={(event) => validateField(event)}
							/>
							{reTypePasswordError ? (
								<OverlayTrigger
									placement="right"

									overlay={retypePassword}
								>
									<i
										style={{ color: 'red' }}
										className="fa fa-info-circle "
										variant="success"
									/>
								</OverlayTrigger>
							) : (
								' '
							)}
						</div>
					</div>

					<div className="form-group mt-4">
						<button
							type="submit"
							className="btn btn-success btn-block"
							onClick={(event) => submitSignup(event)}
							disabled={buttonDisabled}
						>
							{spinner ? (
								<>
									Registering...
									<Spinner animation="border" size="sm" role="status" variant="dark" />
								</>
							) : (
								<>Register</>
							)}
						</button>
					</div>
					<button
						className="mt-4 btn btn-info btn-sm float-left"
						onClick={() => dispatch(formRoute('resetpassword'))}
					>
						Forgot password?
					</button>

					<button
						className="mt-4 btn btn-info btn-sm float-right"
						onClick={() => dispatch(formRoute('login'))}
					>
						Login
					</button>
				</form>
			</article>
		</div>
	);
}
export default RegisterUser;
