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

// 👇 "URL_BASE" y "API_KEY" solicitudes a la API externa.
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "54a723701c95.c970f983b34a0bc36b17";

// 👇 Credenciales que se utilizarán para la autenticación del usuario.
const email = "valentina@gmail.com";
const password = "jericho07";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false); // estado de acceso

  // ------------------------  función de inicio de sesión  ------------------------- //
  const login = (userData) => {
    // si el email y el password dentro del objeto userData coinciden con los que el usuario a ingresado, se establece el estado de acceso en true y se navega a la página de inicio (/home). 
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // ----------------------------------------------------------- //

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          // Busca si el personaje ya está en la lista (eviar que un personaje se repita)
          const foundCharacter = characters.find(
            (character) => character.id === data.id
          );
          if (foundCharacter) {
            window.alert("¡Este personaje ya se encuentra en la lista!");
          }
          // ------------------------------------------------------------------------ //
          else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
