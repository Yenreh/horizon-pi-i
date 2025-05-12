import { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [hasInteracted, setHasInteracted] = useState(false);
    const navigate = useNavigate();
    const deseases = [
        { name: "cataratas", verbose: "Cataratas", image: "/images/home/catarata-carousel.webp" },
        { name: "miopia", verbose: "Miopía", image: "/images/home/miopia-carousel.webp" },
        { name: "conjuntivitis", verbose: "Conjuntivitis", image: "/images/home/conjuntivitis-carousel.webp"  },
        { name: "desprendimiento_retina", verbose: "Desprendimiento de retina", image: "/images/home/desprendimiento-de-retina-carousel.webp" },
    ];

    const loopedDiseases = [
        deseases[deseases.length - 1],
        ...deseases,
        deseases[0],
    ];

    const handleLearnMoreClick = () => {
        navigate("/aprende-mas");
      };
    

    const navigateCarousel = (direction) => {
        setHasInteracted(true); // Mark as interacted when user navigates
        const totalItems = deseases.length;
        let newIndex;

        if (direction === 'right') {
            newIndex = activeIndex + 1;
        } else {
            newIndex = activeIndex - 1;
        }

        if (newIndex === 0) {
            setActiveIndex(totalItems);
        } else if (newIndex === totalItems + 1) {
            setActiveIndex(1);
        } else {
            setActiveIndex(newIndex);
        }
    };

    useEffect(() => {
        if (!hasInteracted) return; // Prevent scrolling on initial load

        const updateCarouselPosition = () => {
            const carousel = carouselRef.current;
            if (carousel) {
                const activeCard = carousel.querySelector('.carousel-card.active');
                if (activeCard) {
                    activeCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                    });
                }
            }
        };

        updateCarouselPosition();
    }, [activeIndex, hasInteracted]);

    const getCardVisibility = (index) => {
        const diff = Math.abs(index - activeIndex);

        if (diff === 0) return 'active';
        if (diff === 1) return 'adjacent';
        return 'hidden';
    };


    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center justify-content-end position-relative">
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-end p-4 p-md-5">
                    <h1 className="hero-title display-4 fw-bold">Horizon</h1>
                    <p className="lead">Cuidamos tu vista, ampliamos tu horizonte</p>
                    <Button variant="outline-light" className="mt-3 px-4 rounded-pill">Descubrir</Button>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-5 bg-gradient-light">
                <Container>
                    <h2 className="home-section-title text-center mb-4">
                        Expande tus fronteras sobre las enfermedades que afectan tu salud ocular
                    </h2>
                    <Row className="g-4 align-items-center">
                        <Col md={6}>
                            <div className="pe-md-4">
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
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="intro-image-container">
                                <img
                                    src="/images/eye-color.webp"
                                    alt="Salud ocular"
                                    className="img-fluid img-fluid rounded-bottom-pill rounded-end-pill shadow"
                                />
                            </div>
                        </Col>
                        <Col xs={12} className="mt-4">
                            <p className="text-center">
                                ¿Quieres saber más sobre cómo cuidar de tus ojos? ¡No te preocupes! En Horizon, tenemos
                                recursos y herramientas para ayudarte a mantener una buena salud ocular.
                            </p>
                            <div className="text-center mt-4">
                                <Button variant="primary" size="lg" className="rounded-pill px-4" onClick={handleLearnMoreClick}>Aprende más</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="home-container">
                {/* Diseases Carousel Section */}
                <section className="py-5 bg-white">
                    <Container>
                        <h3 className="home-section-title text-center mb-5">
                            Comienza a explorar las enfermedades
                        </h3>
                        <div className="carousel-wrapper position-relative">
                            <Button
                                variant="light"
                                className="carousel-control prev shadow-sm"
                                onClick={() => navigateCarousel('left')}
                                aria-label="Previous Disease"
                            >
                                &#8249;
                            </Button>

                            <div className="carousel-container">
                                <div className="carousel-inner" ref={carouselRef}>
                                    {loopedDiseases.map((disease, index) => (
                                        <Card
                                            key={`${disease.name}-${index}`}
                                            className={`carousel-card ${getCardVisibility(index)}`}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={disease.image}
                                                alt={disease.verbose}
                                            />
                                            <Card.Body className="text-center d-flex flex-column">
                                                <Card.Title className="fw-bold">{disease.verbose}</Card.Title>
                                                <Card.Text>
                                                    Explora lo relacionado a {disease.verbose.toLowerCase()}: síntomas, estadísticas y prevención
                                                </Card.Text>
                                                <Button
                                                    variant="outline-primary"
                                                    className="mt-auto align-self-center rounded-pill"
                                                    href={`/${disease.name}`}
                                                >
                                                    Comenzar
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            <Button
                                variant="light"
                                className="carousel-control next shadow-sm"
                                onClick={() => navigateCarousel('right')}
                                aria-label="Next Disease"
                            >
                                &#8250;
                            </Button>
                        </div>
                    </Container>
                </section>
            </div>

            {/* Experience Section */}
            <section className="py-5 bg-gradient-light">
                <Container>
                    <h2 className="home-section-title text-center mb-5">
                        Vive la experiencia Horizon
                    </h2>
                    <Row className="g-4 justify-content-center">
                        <Col lg={5} md={6} className="d-flex">
                            <Card className="experience-card h-100 shadow border-0">
                                <div className="experience-card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="/images/home/banner-3d-experience.webp"
                                        alt="Experiencia 3D"
                                    />
                                    <div className="experience-card-overlay">
                                        <h3 className="experience-card-title mb-0 fw-bold">Experiencia 3D</h3>
                                    </div>
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Text className="flex-grow-1">
                                        Un viaje a la profundidad de tus ojos mediante nuestra maravillosa experiencia 3D
                                    </Card.Text>
                                    <Button variant="secondary" className="mt-3 rounded-pill w-100" disabled>
                                        Proximamente
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={5} md={6} className="d-flex">
                            <Card className="experience-card h-100 shadow border-0">
                                <div className="experience-card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="/images/home/banner-quiz.webp"
                                        alt="Quiz interactivo"
                                    />
                                    <div className="experience-card-overlay">
                                        <h3 className="experience-card-title mb-0 fw-bold">Quiz Interactivo</h3>
                                    </div>
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Text className="flex-grow-1">
                                        Prueba tus conocimientos aprendidos mediante nuestro quiz interactivo
                                    </Card.Text>
                                    <Button variant="secondary" className="mt-3 rounded-pill w-100" disabled>
                                        Proximamente
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