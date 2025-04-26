import { Row, Col } from 'react-bootstrap';

export default function SymptomsTab() {
  return (
    <section className="myopia-content py-4 px-md-3">
      <Row>
        <Col>
          <h2>Síntomas Comunes de la Miopía</h2>
          <p>Aquí se describirán los síntomas más frecuentes...</p>
          <ul>
            <li>Visión borrosa de objetos lejanos.</li>
            <li>Necesidad de entrecerrar los ojos para ver claro.</li>
            <li>Dolores de cabeza por esfuerzo visual.</li>
            <li>Fatiga visual al conducir o practicar deportes.</li>
          </ul>
        </Col>
      </Row>
    </section>
  );
}
