import axios from "axios";

import { useState } from "react";
import "../Styles/nav.css"; //  estilos de la barra de busquedad.

//  ICONOS
import "material-icons/iconfont/material-icons.css";
import SearchIcon from "@mui/icons-material/Search";
import AutoModeIcon from "@mui/icons-material/AutoMode";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  // const addRandomCharacter = () => {
  //   const randomId = Math.floor(Math.random() * 826) + 1;
  //   onSearch(randomId);
  // };

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
    /* Cuando el usuario ingresa un ID de personaje y hace clic en el botón "Agregar", la función onSearch hace una solicitud a la API de Rick and Morty para obtener los detalles del personaje correspondiente y lo agrega a la lista de personajes que se están mostrando en pantalla. */
    <nav className="buttonContainer">
      <input
        className="inputAdd-btn"
        type="search"
        placeholder="Search Character by Id"
        onChange={handleChange}
        value={id}
      />

      {/* SEACRH CHARACTERS */}
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
            onSearch(Number(id)); // onSearch(id);
            setId("");
          }
        }}
      >
        <SearchIcon />
      </button>

      <button className="addRandom-btn" onClick={addRandomCharacter}>
        <AutoModeIcon />
        {/* Add Random */}
      </button>
    </nav>
  );
}

// El componente SearchBar es una barra de búsqueda que permite al usuario ingresar un ID de personaje y agregarlo a la lista de personajes que se están mostrando en pantalla. También hay un botón "Add Random" que agrega un personaje aleatorio a la lista.

// .trim() es un método de JavaScript que elimina los espacios en blanco al inicio y al final de una cadena de texto.
