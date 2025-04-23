import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header>
            <nav ref={navRef}>
                <div className="logo-container">
                    <img src="/favicon.png" alt="Logo" className="logo" />
                    <span>Horizon</span>
                </div>

                <div className={menuOpen ? "nav-links open" : "nav-links"}>
                    <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                        Inicio
                    </NavLink>
                    <NavLink to="/cataratas" onClick={() => setMenuOpen(false)}>
                        Cataratas
                    </NavLink>
                    <NavLink to="/miopia" onClick={() => setMenuOpen(false)}>
                        Miopía
                    </NavLink>
                    <NavLink to="/conjuntivitis" onClick={() => setMenuOpen(false)}>
                        Conjuntivitis
                    </NavLink>
                    <NavLink to="/desprendimiento_retina" onClick={() => setMenuOpen(false)}>
                        Desprendimiento de retina
                    </NavLink>
                </div>

                <button className="burger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={menuOpen ? "burger open" : "burger"} />
                </button>
            </nav>
        </header>
    );
};

export default Header;