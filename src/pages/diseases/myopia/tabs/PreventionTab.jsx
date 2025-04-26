import { Row, Col } from 'react-bootstrap';

export default function PreventionTab() {
  return (
    <section className="myopia-content py-4 px-md-3">
      <Row>
        <Col>
          <h2>Prevención y Cuidados</h2>
          <p>Consejos sobre hábitos saludables para la vista...</p>
          <ul>
            <li>Realizar exámenes oculares regulares.</li>
            <li>Limitar el tiempo frente a pantallas.</li>
            <li>Pasar tiempo al aire libre.</li>
            <li>Usar iluminación adecuada al leer o trabajar.</li>
          </ul>
        </Col>
      </Row>
    </section>
  );
}
