// Importamos el componente Card, connect y useDispatch de sus respectivos módulos, y también la acción filterCards y orderCards desde el módulo de acciones.

import Card from "./Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

// La función Favorites recibe por props un array de personajes favoritos.
function Favorites ({ myFavorites }) {

  const dispatch = useDispatch(); // hook useDispatch para acceder a la función dispatch de Redux.

  const [aux, setAux] = useState(false); // hook useState para crear un estado auxiliar y actualizamos su valor mediante la función setAux.

  // la función handleOrder se encarga de llamar a la acción orderCards para ordenar los personajes favoritos según 
  // la opción seleccionada en el select.
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  // la función handleFilter se encarga de llamar a la acción filterCards para filtrar los personajes favoritos según la opción 
  // seleccionada en el select.
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };


  // En el retorno del componente, creamos dos selectores, uno para ordenar los personajes y otro para filtrarlos.
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      {/* map para iterar sobre el array de personajes favoritos, y por cada uno de ellos se renderiza un componente Card con sus propiedades correspondientes. */}
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={fav.onClose}
          />
        );
      })}
    </div>
  );
};

// la función mapStateToProps, conecta el componente con el estado global de la aplicación para que pueda acceder a la lista de personajes favoritos almacenados en Redux.
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


// Finalmente, exportamos el componente Favorites conectado al estado global de la aplicación mediante el método connect de Redux.
export default connect(mapStateToProps, null)(Favorites);
