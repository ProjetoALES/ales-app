import React from "react";
import { logout } from "services/auth";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import Logo from "assets/images/logo-ales.svg";
import styles from "./NavBar.module.scss";

const NavBar = ({ history }) => {
  const logoutUser = () => {
    logout();
    history.push("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      variant="light"
      bg="light"
      className="fixed-top"
    >
      <Navbar.Brand href="/">
        <img
          alt="logo"
          src={Logo}
          width="160"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={styles.navContainer}>
          <Nav.Link href="/get-there" className={styles.navLink}>
            Como Chegar
          </Nav.Link>
          <Nav.Link href="/#contact" className={styles.navLink}>
            Contato
          </Nav.Link>
          <Nav.Link href="#" className={styles.navLink}>
            Matérias
          </Nav.Link>
          <div className={styles.buttonsContainer}>
            <Nav.Link href="/login">
              <Button size="lg" variant="success">
                Entrar
              </Button>
            </Nav.Link>
            <Nav.Link href="/dashboard">
              <Button size="lg" variant="primary">
                Minha Área
              </Button>
            </Nav.Link>
            <Nav.Link href="/">
              <Button size="md" variant="outline-danger" onClick={logoutUser}>
                Sair
              </Button>
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
