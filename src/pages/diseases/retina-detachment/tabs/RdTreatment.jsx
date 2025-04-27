import { Col, Row } from "react-bootstrap";


export default function RdTreatment() {

    return (
        <section className="desease-content py-4 px-md-3">
        <Row className="align-items-center gy-4">
          <Col md={6}>
            <div className="desease-canvas-wrapper">
                <h1>Tratamientos</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="desease-text-definition p-4">
              <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
                Tratamientos
              </h2>
              <p>Descubriras en esta sección cuales son los tratamientos que debes seguir para poder recuparte de un desprendimiento de retina</p>
            </div>
          </Col>
        </Row>
      </section>
    );
}
