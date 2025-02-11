import React, { useState } from 'react';
import { Container, Card, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { pageRoute, userId } from "../redux/actions";

function LockScreen() {
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [disabled, setdisabled] = useState(true);
    const [alert, setalert] = useState('');

    const dispatch = useDispatch();

    const validatePassword = (e) => {
        var password = e.target.value;
        if (
            password.match(
                new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')
            )
        ) {
            setpassword(password);
            seterror('');
            setdisabled(false);
        } else {
            seterror('Please enter Alpha Numerical Password');
            setdisabled(true);
        }
    };

    const unlockUser = (e) => {
        e.preventDefault();

        let emailId = JSON.parse(localStorage.getItem('emailId'));
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

                setdisabled(true);
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
        <>
            <Container fluid className=" background-Image align-self-center">
                <Row className=" justify-content-md-center  text-white text-center">
                    <Col lg="4" className="mt-4">
                        <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: '28%' }}>
                            <h2 style={{ color: 'teal' }}>
                                <i className="fa fa-lock fa-2x" aria-hidden="true"></i>{' '}
                            </h2>
                            <Card.Header>Lock Screen </Card.Header>
                            <section style={{ backgroundColor: "red" }}>
                                {alert.length !== 0 ? (
                                    <>
                                        <p className="text-white">{alert}</p>
                                    </>
                                ) : (
                                    ''
                                )}
                            </section>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <InputGroup className="col-md-10 ml-4">
                                            <InputGroup.Prepend className="lock-screen-form">
                                                <InputGroup.Text
                                                    id="basic-addon1"
                                                    className="fa fa-key fa-2x"
                                                ></InputGroup.Text>
                                            </InputGroup.Prepend>

                                            <Form.Control
                                                onChange={(e) => validatePassword(e)}
                                                type="password"
                                                placeholder=" password"
                                            />
                                            <Form.Label className="text-danger">{error}</Form.Label>
                                        </InputGroup>
                                    </Form.Group>
                                    <Button
                                        variant="info shadow-none"
                                        disabled={disabled}
                                        onClick={(e) => unlockUser(e)}
                                        className="lock-button btn-md"
                                    >
                                        unlock
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default withRouter(LockScreen);