import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">USB Viewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Link eventKey="Switch View">Swtich View</Nav.Link>
            <Nav.Link eventKey="Refresh Devices">Refresh Devices</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
