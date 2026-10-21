import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/blobs">Proyecto Blob</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/acerca-de">Acerca de</Link>
      </nav>
    </header>
  );
}

export default Header;
