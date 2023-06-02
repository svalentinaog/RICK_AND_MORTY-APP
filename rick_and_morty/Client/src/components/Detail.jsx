import "../Styles/detail.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="detail-card">
      <div className="detailImage">
        <img src={character?.image} alt={character?.name} />
      </div>

      <div>
        <div>
          <h1>{character?.name}</h1>
        </div>

        <label className="textLabel" htmlFor="status">
          Status:{" "}
        </label>
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
