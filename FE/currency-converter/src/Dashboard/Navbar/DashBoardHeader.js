import React from "react";
import {
  NavDropdown, Form, FormControl, Nav, Button, Navbar, Container
} from "react-bootstrap";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { currentPage, pageRoute, toggle } from "../../redux/actions";

function DashBoardHeader() {
  const dispatch = useDispatch();
  const currentPageName = useSelector(state => state.currentPage);

  return (
    <React.Fragment>
      <Navbar bg="info" expand="lg" className="header-bg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


            </Nav>
            <Form className="d-flex">
              <Nav.Link name="lockScreen" className="text-danger fa fa-lock fa-1x ml-2">LockScreen</Nav.Link>
              <Nav.Link name="logout" onClick={() => dispatch(pageRoute("logout"))} className="text-danger fa fa-sign-out fa-1x ml-2">Logout </Nav.Link>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default DashBoardHeader;
