import React from "react"
import { Navbar, Nav } from "react-bootstrap";
import LoginForm from "./loginform";

function Login() {
    return (
        <div className="container-fluid p-0 bg-dark">
            <div className="container-fluid">
                <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Currency Converter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Login</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div id="home" className="container-fluid text-center">
                <div className="row h-100 w-100 mr-0">
                    <div className="col-sm-4 my-auto mx-auto">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;