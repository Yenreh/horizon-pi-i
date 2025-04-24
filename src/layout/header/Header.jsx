import { useState } from "react";
import { NavLink } from "react-router";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header>
            <Navbar expand="lg" expanded={menuOpen}>
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <img
                            src="/favicon.png"
                            alt="Logo"
                            className="me-2"
                            style={{ height: "30px" }}
                        />
                        <span>Horizon</span>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="navbarNav"
                        onClick={toggleMenu}
                    />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/" end onClick={() => setMenuOpen(false)}>
                                    Inicio
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/cataratas" onClick={() => setMenuOpen(false)}>
                                    Cataratas
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/miopia" onClick={() => setMenuOpen(false)}>
                                    Miopía
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/conjuntivitis" onClick={() => setMenuOpen(false)}>
                                    Conjuntivitis
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/desprendimiento_retina" onClick={() => setMenuOpen(false)}>
                                    Desprendimiento de retina
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="h-100"
                                    onClick={() => alert("Login clicked!")}
                                >
                                    Iniciar sesión
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;