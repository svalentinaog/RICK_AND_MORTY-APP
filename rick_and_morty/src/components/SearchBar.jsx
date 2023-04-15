import { useState } from "react";
import "../Styles/nav.css";   //  estilos de la barra de busquedad.

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  return (
    /* Cuando el usuario ingresa un ID de personaje y hace clic en el botón "Agregar", la función onSearch hace una solicitud a la API de Rick and Morty para obtener los detalles del personaje correspondiente y lo agrega a la lista de personajes que se están mostrando en pantalla. */
    <nav className="buttonContainer">
      <input
        className="inputAdd-btn"
        type="search"
        placeholder="Id"
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
            onSearch(Number(id)); // onSearch(id);
            setId("");
          }
        }}
      >
        Add
      </button>

      <button
        className="addRandom-btn"
        style={{ backgroundColor: "black" }}
        onClick={addRandomCharacter}
      >
        Add Random
      </button>
    </nav>
  );
}

// El componente SearchBar es una barra de búsqueda que permite al usuario ingresar un ID de personaje y agregarlo a la lista de personajes que se están mostrando en pantalla. También hay un botón "Add Random" que agrega un personaje aleatorio a la lista.

// .trim() es un método de JavaScript que elimina los espacios en blanco al inicio y al final de una cadena de texto.
