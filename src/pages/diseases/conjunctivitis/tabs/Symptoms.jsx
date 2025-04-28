import { Col, Row } from "react-bootstrap";


export default function Symptoms() {

    return (
        <section className="desease-content py-4 px-md-3">
        <Row className="align-items-center gy-4">
          <Col md={6}>
            <div className="desease-canvas-wrapper">
            </div>
          </Col>
          <Col md={6}>
            <div className="desease-text-definition p-4">
              <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
                Sintomas
              </h2>
            </div>
          </Col>
        </Row>
      </section>
    );
}
