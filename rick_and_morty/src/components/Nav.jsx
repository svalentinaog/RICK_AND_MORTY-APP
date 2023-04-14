import "../Styles/nav.css"
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, setAccess }) {
  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <nav>
      <div>
        <Link to="/about" className="about-btn"> ABOUT </Link>
        <Link to="/home" className="home-btn"> HOME </Link>
        <Link to="/favorites"> Favorites </Link>
        <button className="log-out" onClick={handleLogOut}>LOG OUT</button>

      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
