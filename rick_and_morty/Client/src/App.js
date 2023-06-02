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

const URL = "http://localhost:3001/rickandmorty/login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  console.log("Login");
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  console.log("On search");
  const onSearch = async (id) => {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = response.data;

      if (data.name) {
        const foundCharacter = characters.find(
          (character) => character.id === data.id
        );

        if (foundCharacter) {
          window.alert("¡Este personaje ya se encuentra en la lista!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => Number(character.id) !== Number(id)
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
