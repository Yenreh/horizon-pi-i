import {NavLink} from "react-router";
import "./Header.css";

const Header = () => {
    return (<header>
            <nav>
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/cataratas">Cataratas</NavLink>
                <NavLink to="/miopia">Miopía</NavLink>
                <NavLink to="/enfermedar3">Enfermedad 3</NavLink>
                <NavLink to="/enfermedar3">Enfermedad 4</NavLink>
            </nav>
        </header>);
};

export default Header;
