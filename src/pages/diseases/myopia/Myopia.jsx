import { useState, lazy, Suspense } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './Myopia.css';

const DefinitionTab = lazy(() => import('./tabs/DefinitionTab.jsx'));
const SymptomsTab = lazy(() => import('./tabs/SymptomsTab.jsx'));
const TreatmentTab = lazy(() => import('./tabs/TreatmentTab.jsx'));
const PreventionTab = lazy(() => import('./tabs/PreventionTab.jsx'));

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
            variant="underline"
            fill
          >
            <Tab eventKey="definition" title="¿Qué es?">
              <Suspense fallback={<div>Loading...</div>}>
                <DefinitionTab />
              </Suspense>
            </Tab>
            <Tab eventKey="symptoms" title="Síntomas">
              <Suspense fallback={<div>Loading...</div>}>
                <SymptomsTab />
              </Suspense>
            </Tab>
            <Tab eventKey="treatment" title="Tratamiento">
              <Suspense fallback={<div>Loading...</div>}>
                <TreatmentTab />
              </Suspense>
            </Tab>
            <Tab eventKey="prevention" title="Prevención y Autocuidado" tabClassName="rounded-pill">
              <Suspense fallback={<div>Loading...</div>}>
                <PreventionTab />
              </Suspense>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
