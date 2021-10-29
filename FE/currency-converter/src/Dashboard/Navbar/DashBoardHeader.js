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
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Dashboard</Nav.Link>
              <Nav.Link href="#action2">Currency</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link name="lockScreen" className="text-color fa fa-lock fa-1x ml-2">LockScreen</Nav.Link>
              <Nav.Link name="logout" onClick={() => dispatch(pageRoute("logout"))} className="text-color fa fa-sign-out fa-1x ml-2">Logout </Nav.Link>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default DashBoardHeader;
