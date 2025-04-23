import {useRef, useEffect, useCallback} from "react";
import "./Home.css";

const Home = () => {
    const carouselRef = useRef(null);
    const gap = 16;

    // Actualiza clases según la tarjeta visible en el centro
    const updateClasses = useCallback(() => {
        const container = carouselRef.current;
        if (!container) return;
        const wrapper = container.parentElement;
        const cards = Array.from(container.children);
        if (!cards.length) return;

        const cardWidth = cards[0].offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;
        const visibleCount = Math.round((wrapperWidth + gap) / (cardWidth + gap));
        const midIndex = Math.floor(visibleCount / 2);

        cards.forEach((card, idx) => {
            card.classList.toggle("highlighted", idx === midIndex);
            card.classList.toggle("disabled", idx !== midIndex);
        });
    }, [gap]);

    // Rota el carrusel infinitamente
    const scrollCarousel = useCallback((direction) => {
        const container = carouselRef.current;
        if (!container) return;
        const cards = container.children;
        if (!cards.length) return;

        const first = cards[0];
        const last = cards[cards.length - 1];
        const cardWidth = first.offsetWidth;
        const scrollAmount = cardWidth + gap;

        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = direction === "right" ? `translateX(-${scrollAmount}px)` : `translateX(${scrollAmount}px)`;

        const handleTransitionEnd = () => {
            container.style.transition = "none";
            container.style.transform = "none";

            if (direction === "right") {
                container.appendChild(first);
            } else {
                container.insertBefore(last, first);
            }

            updateClasses();
            container.removeEventListener("transitionend", handleTransitionEnd);
        };

        container.addEventListener("transitionend", handleTransitionEnd);
    }, [gap, updateClasses]);

    // Inicializa clases en montaje
    useEffect(() => {
        updateClasses();
    }, [updateClasses]);

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
                <h2>
                    Expande tus fronteras sobre las enfermedades que afectan tu salud ocular
                </h2>
                <p className="align-right">
                    En Horizon, nos dedicamos a brindarte información precisa y actualizada sobre las enfermedades oculares. Nuestro objetivo es ayudarte a comprender mejor tu salud ocular y empoderarte para tomar decisiones informadas.
                </p>
                <p className="align-left">
                    Ya sea que estés buscando información sobre síntomas, tratamientos o prevención, estamos aquí para guiarte en cada paso del camino. Nuestro equipo de expertos trabaja arduamente para ofrecerte contenido de calidad y recursos útiles.
                </p>
                <button className="learn-more-btn">Aprende más</button>
            </section>

            {/* Enfermedades Carousel */}
            <section className="explore-section">
                <h3>Comienza a explorar las enfermedades</h3>
                <div className="carousel-wrapper">
                    <button className="carousel-btn left" onClick={() => scrollCarousel("left")}>‹</button>
                    <div className="carousel-container" ref={carouselRef}>
                        <div className="card">
                            <img src="/images/home/card-eye-desease.webp" alt="Desprendimiento de retina" />
                            <div className="card-content">
                                <h4>Desprendimiento de retina</h4>
                                <p>Explora lo relacionado al desprendimiento de retina: síntomas, estadísticas y prevención</p>
                                <button><a href="">Comenzar</a></button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/home/card-eye-desease.webp" alt="Cataratas" />
                            <div className="card-content">
                                <h4>Cataratas</h4>
                                <p>Explora lo relacionado a las cataratas: síntomas, estadísticas y prevención</p>
                                <button><a href="/cataratas">Comenzar</a></button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/home/card-eye-desease.webp" alt="Miopía" />
                            <div className="card-content">
                                <h4>Miopía</h4>
                                <p>Explora lo relacionado a la miopía: síntomas, estadísticas y prevención</p>
                                <button><a href="/miopia">Comenzar</a></button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/home/card-eye-desease.webp" alt="Conjuntivitis" />
                            <div className="card-content">
                                <h4>Conjuntivitis</h4>
                                <p>Explora lo relacionado a la conjuntivitis: síntomas, estadísticas y prevención</p>
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
