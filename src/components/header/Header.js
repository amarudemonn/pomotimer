import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="ui secondary menu">
      <Link to="/" className="item">
        Pomotimer
      </Link>
    </header>
  );
}

export default Header;
