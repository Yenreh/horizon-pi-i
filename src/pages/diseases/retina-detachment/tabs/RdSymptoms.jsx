import { Canvas } from "@react-three/fiber";
import { Col, Row } from "react-bootstrap";
import GoldenGateHills from "../staging/GoldenGateHills";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import './RdSymptoms.css'; // Asegúrate de tener un CSS para el cursor

export default function RdSymptoms() {
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleCanvasClick = () => {
    navigate('/moscas-flotantes'); // Navega a la ruta deseada
  };

  return (
    <section className="desease-content py-4 px-md-3">
      <Row className="align-items-center gy-4">
        <Col md={6}>
          {/* Añade onClick y un estilo para el cursor */}
          <div
            className="desease-canvas-wrapper clickable-canvas" // Añade una clase para el cursor
            onClick={handleCanvasClick}
            title="Haz clic para explorar la simulación de moscas flotantes" // Tooltip opcional
          >
            <Canvas>
              {/* Puedes añadir props a GoldenGateHills si necesitas diferenciarlo */}
              {/* ej: <GoldenGateHills interactive={false} /> */}
              <GoldenGateHills />
            </Canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className="desease-text-definition p-4">
            <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
              Síntomas
            </h2>
            <p>
              Pronto descubrirás en esta sección como esta enfermedad puede
              afectar a tu salud ocular.
            </p>
            <p> {/* Añade un texto indicativo si quieres */}
              <small>Haz clic en la imagen de la izquierda para ver una simulación interactiva de las moscas volantes.</small>
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}