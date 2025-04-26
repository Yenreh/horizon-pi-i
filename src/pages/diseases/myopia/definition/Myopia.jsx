/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import  { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { Eye } from './model-3d/Eye';
import Lights from './Lights/Lights';
import './Myopia.css';

export default function Myopia() {
  const [key, setKey] = useState('definition');

  return (
      <Container fluid className="myopia-container px-0">
        <Row className="g-0">
          <Col>
            <section className="myopia-header">
              <img
                  src="/images/eye-myopia.webp"
                  alt="MIOPÍA"
                  className="myopia-header-bg"
              />
              <div className="myopia-title-overlay">
                <span>MIOPÍA</span>
              </div>
            </section>
          </Col>
        </Row>
        <Row className="justify-content-center g-0">
          <Col xs={12} md={10} lg={8}>
            <Tabs
                id="myopia-info-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="myopia-tabs mb-4 mt-4"
                variant="pills"
                fill
            >
              <Tab eventKey="definition" title="¿Qué es?" tabClassName="rounded-pill">
                <section className="myopia-content py-4 px-md-3">
                  <Row className="align-items-center gy-4">
                    <Col md={6}>
                      <div className="myopia-canvas-wrapper">
                        <Canvas camera={{ position: [0, 0.5, 2.5] }} shadows>
                          <Suspense fallback={null}>
                            <Lights />
                            <Eye position={[0, 0, 0]} />
                            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
                              <planeGeometry args={[10, 10]} />
                              <shadowMaterial transparent opacity={0.3} />
                            </mesh>
                          </Suspense>
                          <OrbitControls enableZoom={false} />
                        </Canvas>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="myopia-text-definition p-4">
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
              </Tab>
              <Tab eventKey="symptoms" title="Síntomas" tabClassName="rounded-pill">
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
              </Tab>

              <Tab eventKey="treatment" title="Tratamiento" tabClassName="rounded-pill">
                <section className="myopia-content py-4 px-md-3">
                  <Row>
                    <Col>
                      <h2>Opciones de Tratamiento</h2>
                      <p>Información sobre gafas, lentes de contacto y cirugía...</p>
                      <p>El tratamiento adecuado depende de la edad, estilo de vida y grado de miopía.</p>
                    </Col>
                  </Row>
                </section>
              </Tab>

              <Tab eventKey="prevention" title="Prevención y Autocuidado" tabClassName="rounded-pill">
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
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
  );
}