import React from "react";
import styles from "./NavBar.module.scss";
import { Navbar, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/images/logo-ales.svg";

const NavBar = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    variant="light"
    bg="light"
    className="fixed-top"
  >
    <Navbar.Brand href="/#home">
      <img
        alt="logo"
        src={Logo}
        width="160"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className={styles.navContainer}>
        <Nav.Link href="#" className={styles.navLink}>
          Como Chegar
        </Nav.Link>
        <Nav.Link href="#" className={styles.navLink}>
          Contato
        </Nav.Link>
        <Nav.Link href="#" className={styles.navLink}>
          Matérias
        </Nav.Link>
        <div className={styles.buttonsContainer}>
          <Button size="lg" variant="success">
            Entrar
          </Button>
          <Button size="lg" variant="primary">
            Minha Área
          </Button>
          <Button size="md" variant="outline-danger">
            Sair
          </Button>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
