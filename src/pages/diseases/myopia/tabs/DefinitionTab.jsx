/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Row, Col } from 'react-bootstrap';
import { DefinitionModel } from '../model-3d/DefinitionModel.jsx';
import DefinitionModelLights from '../Lights/DefinitionModelLights.jsx';

export default function DefinitionTab() {
  return (
    <section className="desease-content py-4 px-md-3">
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div className="desease-canvas-wrapper">
            <Canvas camera={{ position: [0, 0.5, 2.5] }} shadows>
              <Suspense fallback={null}>
                <DefinitionModelLights />
                <DefinitionModel position={[0, 0, 0]} />
                <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
                  <planeGeometry args={[15, 15]} />
                  <shadowMaterial transparent opacity={0.3} />
                </mesh>
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className="disease-text-definition p-4">
            <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>
              ¿Qué es la miopía?
            </h2>
            <h4 className="mb-4" style={{ color: 'var(--color-5)' }}>
              Cuando lo lejano se ve borroso
            </h4>
            <p>
              La miopía es un problema común de la vista que dificulta ver con claridad los objetos lejanos, mientras que los cercanos se ven bien. Ocurre porque el ojo no enfoca correctamente la luz, haciendo que las imágenes se formen antes de llegar a la retina.
            </p>
            <ul>
              <li><strong>Tipos:</strong> Se clasifica en leve (hasta -3.00), moderada (de -3.00 a -6.00) y alta (más de -6.00), números que indican la graduación necesaria para corregirla.</li>
              <li><strong>¿Es frecuente?</strong> La tienen 1 de cada 3 personas en el mundo.</li>
              <li><strong>Causas comunes:</strong> Genética, uso prolongado de pantallas y pasar poco tiempo al aire libre.</li>
              <li><strong>Posibles riesgos:</strong> En casos avanzados, podría aumentar el riesgo de otros problemas oculares graves.</li>
              <li><strong>¿Cómo se detecta?</strong> Con un sencillo examen de la vista realizado por un especialista.</li>
            </ul>
            <p>
              Suele aparecer en la niñez y puede aumentar con los años. Se corrige fácilmente con gafas, lentes de contacto o, en algunos casos, cirugía láser.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
