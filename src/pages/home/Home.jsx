import "./Home.css";

const Home = () => {
    const scrollCarousel = (direction) => {
        const container = document.getElementById("carousel");
        const cards = container.children;
        const cardWidth = cards[0].offsetWidth;
        const gap = 16; // 1rem en pixeles
        const scrollAmount = cardWidth + gap;

        // Deshabilitar transición temporalmente para reposicionamiento
        container.style.transition = 'none';

        if (direction === "right") {
            // Mover primer elemento al final
            container.appendChild(cards[0]);
            container.style.transform = `translateX(-${scrollAmount}px)`;
            // Forzar reflow
            void container.offsetWidth;
            // Aplicar transición suave
            container.style.transition = 'transform 0.5s ease-in-out';
            container.style.transform = 'translateX(0)';
        } else {
            // Mover último elemento al principio
            container.insertBefore(cards[cards.length - 1], cards[0]);
            container.style.transform = `translateX(-${scrollAmount}px)`;
            // Forzar reflow
            void container.offsetWidth;
            // Aplicar transición suave
            container.style.transition = 'transform 0.5s ease-in-out';
            container.style.transform = 'translateX(0)';
        }

        // Actualizar clases después de la transición
        setTimeout(() => {
            const middleIndex = 1; // El segundo elemento siempre será el central
            Array.from(cards).forEach((card, index) => {
                card.classList.toggle('highlighted', index === middleIndex);
                card.classList.toggle('disabled', index !== middleIndex);
            });
        }, 50);
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
                            <img src="/images/home/card-eye-desease.webp" alt="Enfermedad 3" />
                            <div className="card-content">
                                <h4>Desprendimiento de retina</h4>
                                <p>Explora las relacionadas a al desprendimiento de retina: síntomas, estadísticas y prevención</p>
                                <button><a href="">Comenzar</a></button>
                            </div>
                        </div>
                        <div className="card highlighted">
                            <img src="/images/home/card-eye-desease.webp" alt="Enfermedad 2" />
                            <div className="card-content">
                                <h4>Cataratas</h4>
                                <p>Explora las relacionadas a la Enfermedad 2: síntomas, estadísticas y prevención</p>
                                <button><a href="/cataratas">Comenzar</a></button>
                            </div>
                        </div>
                        <div className="card disabled">
                            <img src="/images/home/card-eye-desease.webp" alt="Enfermedad 1" />
                            <div className="card-content">
                                <h4>Miopía</h4>
                                <p>Explora las relacionadas a la miopía: síntomas, estadísticas y prevención</p>
                                <button><a href="/miopia">Comenzar</a></button>
                            </div>
                        </div>
                        <div className="card disabled">
                            <img src="/images/home/card-eye-desease.webp" alt="Conjuntivitis" />
                            <div className="card-content">
                                <h4>Conjuntivitis</h4>
                                <p>Explora las relacionadas a la conjuntivitis: síntomas, estadísticas y prevención</p>
                                <button><a href="/conjuntivitis">Comenzar</a></button>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-btn right" onClick={() => scrollCarousel("right")}>›</button>
                </div>
            </section>

            {/* Experiencia Section */}
            <section className="experience-section gradient-bg">
                <h2>Vive la experiencia Horizon</h2>
                <div className="experience-cards">
                    <div className="card">
                        <img src="/images/home/banner-3d-experience.webp" alt="Experiencia 3D" />
                        <div className="card-content">
                            <p>Un viaje a la profundidad de tus ojos mediante nuestra maravillosa experiencia 3D</p>
                            <button>Ver</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/home/banner-quiz.webp" alt="Quiz" />
                        <div className="card-content">
                            <p>Prueba tus conocimientos aprendidos mediante nuestro quiz interactivo</p>
                            <button>Empezar</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
