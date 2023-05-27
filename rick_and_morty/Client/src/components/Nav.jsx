import "../Styles/nav.css"; //  estilos de la barra de navegación.
import SearchBar from "./SearchBar"; // importación del componente SearchBar para buscar información en la aplicación.
import { Link } from "react-router-dom"; // componente Link de la biblioteca react-router-dom. Sirve para crear enlaces entre diferentes secciones de la aplicación.
import logo from "../images/Rick_and_Morty.png";

//  ICONOS
import "material-icons/iconfont/material-icons.css";
import LogoutIcon from '@mui/icons-material/Logout';

// La función Nav recibe dos props, onSearch que es la función que se ejecuta cuando el usuario realiza una búsqueda, y la función setAccess para cerrar la sesión del usuario.
export default function Nav({ onSearch, setAccess }) {
  // la función handleLogOut se ejecuta cuando el usuario hace clic en el botón "Log Out". Esta función llama a la función setAccess para cerrar la sesión del usuario.
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav>
      <div>
        <Link to="/home" className="logoHome-btn">
          <img
            src={logo}
            alt="Logo de mi aplicación"
            style={{ width: "155px", height: "auto", margin: "5px 5px 5px 15px" }}
          />
        </Link>
      </div>
      <div>
        <Link to="/about" className="about-btn">
          About
        </Link>

        <Link to="/home" className="home-btn">
          Home
        </Link>

        <Link to="/favorites" className="favorites-btn">
          Favorites
        </Link>

        <SearchBar onSearch={onSearch} />

        <button className="log-out" onClick={handleLogOut}>
          <LogoutIcon />
          {/* Log Out */}
        </button>

      </div>
    </nav>
  );
}

// Nav es un componente es una barra de navegación que se utiliza para navegar entre las diferentes secciones de una aplicación web.
