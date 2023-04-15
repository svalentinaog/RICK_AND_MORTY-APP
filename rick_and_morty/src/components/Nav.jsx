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
        <Link to="/about" className="about-btn"> About </Link>
        <Link to="/home" className="home-btn"> Home </Link>
        <Link to="/favorites"> Favorites </Link>
        <button className="log-out" onClick={handleLogOut}>Log Out</button>

      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
