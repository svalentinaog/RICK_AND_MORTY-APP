import axios from "axios";
import { useState } from "react";
import "../Styles/nav.css";
import "material-icons/iconfont/material-icons.css";
import SearchIcon from "@mui/icons-material/Search";
import AutoModeIcon from "@mui/icons-material/AutoMode";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const addRandomCharacter = () => {
    const randomId = parseInt(Math.floor(Math.random() * 826) + 1);
    axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          return Promise.resolve(data);
        } else {
          return Promise.reject("No se encontró ningún personaje con ese ID");
        }
      })
      .then((data) => {
        onSearch(data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="buttonContainer">
      <input
        className="inputAdd-btn"
        type="search"
        placeholder="Search Character by Id"
        onChange={handleChange}
        value={id}
      />

      <button
        className="add-btn"
        onClick={() => {
          if (id.trim() === "") {
            alert("No puedes enviar una entrada vacía");
          } else if (isNaN(Number(id))) {
            alert("Por favor, ingrese un ID válido.");
          } else if (Number(id) > 826 || Number(id) <= 0) {
            alert("Por favor, ingrese un ID válido.");
          } else {
            onSearch(Number(id));
            setId("");
          }
        }}
      >
        <SearchIcon />
      </button>

      <button className="addRandom-btn" onClick={addRandomCharacter}>
        <AutoModeIcon />
      </button>
    </nav>
  );
}
