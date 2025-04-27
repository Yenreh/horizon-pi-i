/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Row, Col } from 'react-bootstrap';
import { Model as SymptomsModel } from '../model-3d/SymptomsModel.jsx';

export default function SymptomsTab() {
  return (
    <section className="desease-content py-4 px-md-3">
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div className="desease-canvas-wrapper">
            <Canvas camera={{ position: [0, 0.5, 2.5] }} shadows>
              <Suspense fallback={null}>
                <SymptomsModel position={[0, 0, 0]} />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className="desease-text-definition p-4">
            <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>
              Síntomas Comunes de la Miopía
            </h2>
            <p>Aquí se describirán los síntomas más frecuentes...</p>
            <ul>
              <li>Visión borrosa de objetos lejanos.</li>
              <li>Necesidad de entrecerrar los ojos para ver claro.</li>
              <li>Dolores de cabeza por esfuerzo visual.</li>
              <li>Fatiga visual al conducir o practicar deportes.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
}
