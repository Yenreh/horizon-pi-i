import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Item footer</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
