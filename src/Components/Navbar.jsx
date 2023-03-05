import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const NavbarC = () => {
  const nav = useNavigate();
  return (
    <div className="text-center">
      <Navbar dir="rtl" className="p-5" bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => nav("/")}>Japanika</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="nav-link btn bg-secondary text-white mt-2 "
                onClick={() => nav("/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-link btn bg-secondary text-white mt-2 "
                onClick={() => nav("/about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="nav-link btn bg-secondary text-white mt-2 "
                onClick={() => nav("/contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
