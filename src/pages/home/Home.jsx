import { useRef, useCallback } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import "./Home.css";

const Home = () => {
    const carouselRef = useRef(null);
    const deseases = [
        { name: "cataratas", verbose: "Cataratas" },
        { name: "miopia", verbose: "Miopía" },
        { name: "conjuntivitis", verbose: "Conjuntivitis" },
        { name: "desprendimiento_retina", verbose: "Desprendimiento de retina" },
    ];

    const scroll = useCallback((direction) => {
        const carousel = carouselRef.current;
        if (carousel) {
            const cardWidth = carousel.querySelector('.carousel-card')?.offsetWidth || 300; // Get width of first card or default
            const gap = 16;
            const scrollAmount = cardWidth + gap;

            carousel.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center justify-content-end position-relative p-5">
                <div className="text-white text-end">
                    <h1 className="hero-tittle">Horizon</h1>
                    <p className="lead">Cuidamos tu vista, ampliamos tu horizonte</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="gradient-bg py-5">
                <Container>
                    <h2 className="text-center mb-4">
                        Expande tus fronteras sobre las enfermedades que afectan tu salud ocular
                    </h2>
                    <Row className="g-4 align-items-center">
                        <Col md={6}>
                            <p className="mb-4">
                                En Horizon, nos dedicamos a brindarte información precisa y actualizada sobre las enfermedades
                                oculares. Nuestro objetivo es ayudarte a comprender mejor tu salud ocular y empoderarte para
                                tomar decisiones informadas.
                            </p>
                            <p>
                                Ya sea que estés buscando información sobre síntomas, tratamientos o prevención, estamos aquí
                                para guiarte en cada paso del camino. Nuestro equipo de expertos trabaja arduamente para ofrecerte
                                contenido de calidad y recursos útiles.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img
                                src="/images/eye-color.webp"
                                alt="Salud ocular"
                                className="img-fluid shadow-sm rounded-bottom-pill rounded-start-pill"
                            />
                        </Col>
                        <Col xs={12}>
                            <p className="text-center">
                                ¿Quieres saber más sobre cómo cuidar de tus ojos? ¡No te preocupes! En Horizon, tenemos
                                recursos y herramientas para ayudarte a mantener una buena salud ocular.
                            </p>
                            <div className="text-center mt-4">
                                <Button variant="primary" size="lg">Aprende más</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Diseases Carousel Section */}
            <section className="py-5 bg-white">
                <Container>
                    <h3 className="text-center mb-4">Comienza a explorar las enfermedades</h3>
                    <div className="position-relative carousel-outer-wrapper">
                        <Button
                            variant="light"
                            className="carousel-control prev"
                            onClick={() => scroll('left')}
                            aria-label="Previous Disease"
                        >&#8249;
                        </Button>
                        <div
                            className="d-flex flex-nowrap overflow-x-auto gap-3 carousel-inner-wrapper"
                            ref={carouselRef}
                        >
                            {deseases.map((disease) => (
                                <Card key={disease.name} className="carousel-card shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={`/images/home/card-eye-desease.webp`}
                                        alt={disease.verbose}
                                    />
                                    <Card.Body className="text-center d-flex flex-column">
                                        <Card.Title>{disease.verbose}</Card.Title>
                                        <Card.Text>
                                            Explora lo relacionado a {disease.verbose.toLowerCase()}: síntomas, estadísticas y prevención
                                        </Card.Text>
                                        <Button
                                            variant="outline-primary"
                                            className="mt-auto align-self-center"
                                            href={`/${disease.name}`}
                                        >
                                            Comenzar
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>

                        {/* Next Button */}
                        <Button
                            variant="light"
                            className="carousel-control next"
                            onClick={() => scroll('right')}
                            aria-label="Next Disease"
                        >
                            &#8250;
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Experience Section */}
            <section className="gradient-bg py-5">
                <Container>
                    <h2 className="text-center mb-4">Vive la experiencia Horizon</h2>
                    <Row className="g-4 justify-content-center">
                        <Col md={6} className="d-flex">
                            <Card className="shadow-sm w-100">
                                <Card.Img
                                    variant="top"
                                    src="/images/home/banner-3d-experience.webp"
                                    alt="Experiencia 3D"
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Text className="flex-grow-1">
                                        Un viaje a la profundidad de tus ojos mediante nuestra maravillosa experiencia 3D
                                    </Card.Text>
                                    <Button variant="primary" className="mt-3">
                                        Ver
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="d-flex">
                            <Card className="shadow-sm w-100">
                                <Card.Img
                                    variant="top"
                                    src="/images/home/banner-quiz.webp"
                                    alt="Quiz interactivo"
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Text className="flex-grow-1">
                                        Prueba tus conocimientos aprendidos mediante nuestro quiz interactivo
                                    </Card.Text>
                                    <Button variant="primary" className="mt-3">
                                        Empezar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;