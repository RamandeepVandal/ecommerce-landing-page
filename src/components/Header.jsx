import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/product");
  const handleClickHome = () => navigate("/");

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" onClick={handleClickHome}>ShowFlex</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero-section " onClick={handleClickHome}>Home</Nav.Link>
            <Nav.Link href="#product-section">Products</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="#Login">Log In</Nav.Link>
            <Nav.Link>
              <button className="btn btn-info ms-3" onClick={handleClick}>Order Now</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
