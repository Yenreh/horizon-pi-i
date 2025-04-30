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
          <div className="desease-text-definition p-4">
            <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>
              ¿Qué es la miopía?
            </h2>
            <h4 className="mb-4" style={{ color: 'var(--color-5)' }}>
              Un enfoque que “se queda corto”
            </h4>
            <p>
              La miopía es un error refractivo del ojo que provoca que los rayos de luz
              converjan por delante de la retina. Como resultado, los objetos lejanos se ven
              borrosos, mientras que los cercanos permanecen nítidos.
            </p>
            <ul>
              <li><strong>Clasificación:</strong> Miopía leve (≤ −3,00 D), moderada (−3,00 a −6,00 D) y alta (&gt; −6,00 D).</li>
              <li><strong>Prevalencia:</strong> Afecta aproximadamente al 30 % de la población mundial.</li>
              <li><strong>Factores de riesgo:</strong> Historia familiar, uso excesivo de dispositivos digitales, poca exposición a luz natural.</li>
              <li><strong>Complicaciones:</strong> Riesgo aumentado de desprendimiento de retina, glaucoma y cataratas prematuras.</li>
              <li><strong>Diagnóstico:</strong> Medición de agudeza visual y refracción por parte de un profesional de la visión.</li>
            </ul>
            <p>
              Suele detectarse en la infancia y puede progresar hasta la adultez. Se corrige
              habitualmente con gafas cóncavas, lentes de contacto o, en ciertos casos,
              cirugía refractiva.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
