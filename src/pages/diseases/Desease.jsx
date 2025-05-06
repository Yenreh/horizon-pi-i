import { useState, Suspense } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './Desease.css';

export default function Desease({ desease, tabs, Definitions }) {
    const [key, setKey] = useState('definition');

    const preloadTab = (tab) => {
        const component = Definitions[tab];
        if (component) component.preload?.();

    };

    return (
        <Container fluid className="desease-container px-0">
            <Row className="g-0">
                <Col>
                    <section className="desease-header">
                        <img
                            src={desease.banner_src}
                            alt={`Banner de ${desease.name}`}
                            className="desease-header-bg"
                        />
                        <div className="desease-title-overlay">
                            <span>{desease.title}</span>
                        </div>
                    </section>
                </Col>
            </Row>
            <Row className="justify-content-center g-0">
                <Col xs={12} md={10} lg={8}>
                    <Tabs
                        id={`${desease.name}-info-tabs`}
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        onMouseEnter={(e) => preloadTab(e.target.getAttribute("eventKey"))}
                        className={`desease-tabs mb-4 mt-4`}
                        variant="underline"
                        fill
                    >
                        {tabs.map(({ eventKey, title }) => {
                            // pull out the dynamically‐named component
                            const SelectedDefinition = Definitions[eventKey];
                            return (
                                <Tab eventKey={eventKey} title={title} key={eventKey}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        {SelectedDefinition ? <SelectedDefinition /> : null}
                                    </Suspense>
                                </Tab>
                            );
                        })}
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}
