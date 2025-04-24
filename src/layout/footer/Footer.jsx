import { Link } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="pt-5">
        <Row className="d-flex flex-row justify-content-center text-center">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h4>Enfermedades</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link className="text-decoration-none" to="/cataratas">
                  Cataratas
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/miopia">
                  Miopía
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/conjuntivitis">
                  Conjuntivitis
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/desprendimiento-retina">
                  Desprendimiento de Retina
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h4>Información</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/about">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h4>Pruebas</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link className="text-decoration-none" to="/quiz">
                  Quiz
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-4">
          <Col className="copyright">
            <p>© 2025 Horizon</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;