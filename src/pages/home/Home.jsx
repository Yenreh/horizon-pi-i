import "./Home.css";

const Home = () => {
    const scrollCarousel = (direction) => {
        const container = document.getElementById("carousel");
        const cards = Array.from(container.children);

        if (direction === "right") {
            const firstCard = cards[0];
            container.appendChild(firstCard);
        } else if (direction === "left") {
            const lastCard = cards[cards.length - 1];
            container.insertBefore(lastCard, cards[0]);
        }

        // Reasignar clase 'highlighted' a la nueva card central
        const updatedCards = container.querySelectorAll(".card");
        updatedCards.forEach((card) => card.classList.remove("highlighted"));
        updatedCards.forEach((card) => card.classList.add("disabled"));
        updatedCards[1].classList.add("highlighted");
        updatedCards[1].classList.remove("disabled");
    };


    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-text">
                        <h1>Horizon</h1>
                        <p>Cuidamos tu vista, ampliamos tu horizonte</p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section gradient-bg">
                <h2>Expande tus fronteras sobre las enfermedades que afectan tu salud ocular</h2>
                <p className="align-right">En Horizon, nos dedicamos a brindarte información precisa y actualizada sobre las enfermedades oculares. Nuestro objetivo es ayudarte a comprender mejor tu salud ocular y empoderarte para tomar decisiones informadas.</p>
                <p className="align-left">Ya sea que estés buscando información sobre síntomas, tratamientos o prevención, estamos aquí para guiarte en cada paso del camino. Nuestro equipo de expertos trabaja arduamente para ofrecerte contenido de calidad y recursos útiles.</p>
                <button className="learn-more-btn">Aprende más</button>
            </section>

            {/* Enfermedades Carousel */}
            <section className="explore-section">
                <h3>Comienza a explorar las enfermedades</h3>
                <div className="carousel-wrapper">
                    <button className="carousel-btn left" onClick={() => scrollCarousel("left")}>‹</button>
                    <div className="carousel-container" id="carousel">
                        <div className="card disabled">
                            <img src="/images/card-1-image.jpg" alt="Enfermedad 1" />
                            <h4>Enfermedad 1</h4>
                            <p>Explora las relacionadas a la Enfermedad 1: síntomas, estadísticas y prevención</p>
                            <button>Comenzar</button>
                        </div>
                        <div className="card highlighted">
                            <img src="/images/card-1-image.jpg" alt="Enfermedad 2" />
                            <h4>Enfermedad 2</h4>
                            <p>Explora las relacionadas a la Enfermedad 2: síntomas, estadísticas y prevención</p>
                            <button>Comenzar</button>
                        </div>
                        <div className="card disabled">
                            <img src="/images/card-1-image.jpg" alt="Enfermedad 3" />
                            <h4>Enfermedad 3</h4>
                            <p>Explora las relacionadas a la Enfermedad 3: síntomas, estadísticas y prevención</p>
                            <button>Comenzar</button>
                        </div>
                        <div className="card disabled">
                            <img src="/images/card-1-image.jpg" alt="Conjuntivitis" />
                            <h4>Conjuntivitis</h4>
                            <p>Explora las relacionadas a la conjuntivitis: síntomas, estadísticas y prevención</p>
                            <button>Comenzar</button>
                        </div>
                    </div>
                    <button className="carousel-btn right" onClick={() => scrollCarousel("right")}>›</button>
                </div>
            </section>

            {/* Experiencia Section */}
            <section className="experience-section gradient-bg">
                <h3>Vive la experiencia Horizon</h3>
                <div className="experience-cards">
                    <div className="experience-card">
                        <p>Un viaje a la profundidad de tus ojos mediante nuestra maravillosa experiencia 3D</p>
                        <button>Ver</button>
                    </div>
                    <div className="experience-card">
                        <p>Prueba tus conocimientos aprendidos mediante nuestro quiz interactivo</p>
                        <button>Empezar</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
