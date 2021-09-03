import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">USB Viewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={(selectedKey) => props.onChangeView(selectedKey)}>
            <Nav.Link eventKey="hub">Hub View</Nav.Link>
            <Nav.Link eventKey="type">Type View</Nav.Link>
            <Nav.Link eventKey="bus">Bus View</Nav.Link>
            <Nav.Link eventKey="flat">Flat View</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
