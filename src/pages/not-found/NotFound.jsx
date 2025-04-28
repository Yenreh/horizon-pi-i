import "./NotFound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">Página no encontrada</h1>
        <div className="not-found-image">
          <img src="/images/not-found.webp" alt="Página no encontrada" />
        </div>
        <p className="not-found-message">
          Lo sentimos, la página a la que tratas de acceder no existe.
        </p>
        <Link to="/">
          <Button variant="primary" className="not-found-button">
            Regresar a la página principal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;