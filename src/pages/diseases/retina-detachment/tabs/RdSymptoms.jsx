import { Col, Row } from "react-bootstrap";


export default function RdSymptoms() {

    return (
        <section className="desease-content py-4 px-md-3">
        <Row className="align-items-center gy-4">
          <Col md={6}>
            <div className="desease-canvas-wrapper">
                <h1>Sintomas</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="desease-text-definition p-4">
              <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
                Sintomas
              </h2>
              <p>Pronto descubriras en esta sección como esta enfermedad puede afectar a tu salud ocular</p>
            </div>
          </Col>
        </Row>
      </section>
    );
}
