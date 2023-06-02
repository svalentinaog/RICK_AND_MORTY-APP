import "../Styles/nav.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import logo from "../images/Rick_and_Morty.png";
import "material-icons/iconfont/material-icons.css";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Nav({ onSearch, setAccess }) {
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
            style={{
              width: "155px",
              height: "auto",
              margin: "5px 5px 5px 15px",
            }}
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
        </button>
      </div>
    </nav>
  );
}
