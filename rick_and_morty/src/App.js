import "./App.css";
import About from "./components/About";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import Form from "./components/Form";
import Nav from "./components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// "URL_BASE" y "API_KEY" solicitudes a la API externa.
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "54a723701c95.c970f983b34a0bc36b17";

// Credenciales que se utilizarán para la autenticación del usuario.
const email = "valentina@gmail.com";
const password = "jericho07";

// La función App es el componente principal que contiene el estado de la aplicación.
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false); // Inicialmente, el estado de acceso está establecido en falso.

  // La función login comprueba si las credenciales que el usuario ha ingresado son válidas y establece el estado de acceso en true si son correctas, y lleva al usuario a la página de inicio (/home) utilizando la función navigate.
  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // La función useEffect (hook) comprueba el estado de acceso y utiliza la función navigate para redirigir al usuario a la página de inicio si el estado de acceso es falso. (efectos secundarios)
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // La función onSearch utiliza la biblioteca axios para enviar una solicitud GET a la API externa con un id de personaje proporcionado por el usuario. Si la solicitud es exitosa, el personaje devuelto se agrega a la lista de personajes del estado de la aplicación. Si el personaje ya está en la lista, se muestra una alerta para notificar al usuario. Si no se encuentra ningún personaje con ese id, también se muestra una alerta. onSearch se definió en el componente App en lugar de en el componente SearchBar porque la acción que se realiza en la función onSearch afecta al estado de characters en App.
  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          // La función foundCharacter comprueba si el personaje que se está agregando ya está en la lista de personajes y evita que se agregue nuevamente.
          const foundCharacter = characters.find(
            // El método .find() se utiliza para buscar un elemento específico en un arreglo. Esta fn de devolución de llamada se ejecuta una vez para cada elemento en characters y compara el id de cada elemento con el id de data.
            (character) => character.id === data.id
          );
          // Si se encuentra un personaje con el mismo id que el personaje devuelto por la API...
          if (foundCharacter) {
            window.alert("¡Este personaje ya se encuentra en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  // La función onClose filtra la lista de personajes del estado de la aplicación para eliminar el personaje seleccionado.
  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => Number(character.id) !== Number(id)
    );
    // Number(character.id) se utiliza para convertir el valor del id del personaje en un número antes de hacer la comparación con Number(id), que también se convierte en número. De esta manera, se asegura que se están comparando valores numéricos y no cadenas de texto, es una buena práctica asegurarse de que los tipos de datos sean los mismos antes de realizar comparaciones, para evitar errores inesperados

    setCharacters(filteredCharacters);
  };

  return (
    <div className="App">
      {
        // Nav se renderiza si la ruta actual no es la ruta raíz (/).
        location.pathname !== "/" && (
          <Nav onSearch={onSearch} setAccess={setAccess} />
        )
      }

      {/* Routes envuelve las rutas de la aplicación, para que se renderice el componente correspondiente 
      a la ruta que se está visitando */}
      <Routes>
        {/* Route representa una ruta de la aplicación. Su propiedad "path" define la ruta en la URL y "element" define el componente que se renderizará cuando la ruta especificada en "path" sea visitada. */}
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
          // El componente card recibe 2 props, characters que contiene información sobre los personajes que se van a mostrar en la página, y onClose es una función que se encarga de eliminar un personaje de la lista.
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

// Finalmente, la función App devuelve la estructura principal de la aplicación que incluye un componente de navegación que se muestra en todas las páginas excepto en la página de inicio. Las rutas están definidas en la función "Routes" de "react-router-dom" que carga el componente adecuado según la ruta actual.

// Recordar que:
// Los hooks son funciones especiales que te permiten "enganchar" o conectar la lógica de tu componente a ciertos comportamientos específicos.

// En el caso de useEffect, te permite realizar efectos secundarios en tu componente en respuesta a ciertos cambios de estado. En este caso, el efecto secundario se activará cuando access cambie, y si access es falso, el componente navegará a la página principal.