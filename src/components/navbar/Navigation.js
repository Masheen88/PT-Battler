import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#instructions">Instructions</Nav.Link>
            <Nav.Link id="ptBattleLink" href="#battle">
              Battle!
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
