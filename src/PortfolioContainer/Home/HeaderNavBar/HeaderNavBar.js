import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HeaderNavBar.css";
import { HashLink as Link } from "react-router-hash-link";

function HeaderNavBar() {
  const menuData = [
    { name: "Home", id: "#home" },
    { name: "About Us", id: "#about" },
    { name: "Resume", id: "#resume" },
    { name: "Contact Me", id: "#contact" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Kajol Singh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            {menuData.map((item) => {
              return (
                <Nav.Link key={item.name}>
                  <Link className="list-item" to={item.id} smooth>
                    {item.name}
                  </Link>
                </Nav.Link>
              );
            })}
            <a
              className="list-item anchor"
              href="https://career.io/r/P2XEbBlk2"
              target="blank"
            >
              Resume Link
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;
