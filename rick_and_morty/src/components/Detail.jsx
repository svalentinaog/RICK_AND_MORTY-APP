// Importación de los módulos necesarios de la librería React y de la librería Axios.
import "../Styles/detail.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"; // URL base de la API que se va a consultar
const API_KEY = "54a723701c95.c970f983b34a0bc36b17"; // clave de acceso a la API.

// La función Detail es un componente de React que renderiza la información de un personaje específico. Recibe el parámetro id de la URL mediante el hook useParams.
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  // Se usa el hook useEffect para hacer una petición GET a la API y obtener la información del personaje específico. La URL de la petición se construye concatenando la constante URL_BASE con el id del personaje y la constante API_KEY.
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data); // Si la respuesta es satisfactoria y contiene info del personaje, se actualiza el estado del componente character con la información del personaje utilizando la función setCharacter(data)
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({}); // función de limpieza estableciéndo un objeto vacío {} para que, cuando el componente se desmonte o se actualice, se borre la información anterior del personaje.
  }, [id]);

  return (
    <div className="detail-card">
      <div className="detailImage">
        <img src={character?.image} alt={character?.name} />
      </div>

      <div>
        <div>
          {/* <button>
            <Link to="/home">Home</Link>
          </button> */}
          <h1>{character?.name}</h1>
        </div>

        <label className="textLabel" htmlFor="status">
          Status:{" "}
        </label>
        {/* se renderiza un elemento p y muestra la propiedad species del objeto character. 
            "Si character es nulo o indefinido, no muestres nada." */}
        <p>{character?.status}</p>
        <label className="textLabel" htmlFor="specie">
          Specie:{" "}
        </label>
        <p>{character?.species}</p>
        <label className="textLabel" htmlFor="gender">
          Gender:{" "}
        </label>
        <p>{character?.gender}</p>
        <label className="textLabel" htmlFor="origin">
          Origin:{" "}
        </label>
        <p>{character?.origin?.name}</p>
      </div>
    </div>
  );
}

{
  /*El operador de encadenamiento opcional "?." es una forma de acceder a propiedades de objetos que pueden no estar definidas sin causar errores. Si la propiedad no está definida o es nula, el operador devuelve "undefined" en lugar de generar un error. */
}
