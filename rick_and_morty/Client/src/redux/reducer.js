import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

// Se define el estado inicial del reducer con dos arrays vacíos: "myFavorites" y "allCharactersFav".
const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

// La función reducer se encarga de actualizar el estado de la aplicación en respuesta a acciones, como agregar o eliminar personajes de favoritos, filtrar personajes por género y ordenar personajes por id ascendente o descendente.

// reducer toma el estado actual y la acción a realizar (type y payload).
const reducer = (state = initialState, { type, payload }) => {
  // Se utiliza un switch statement para determinar qué acción se está ejecutando y cómo actualizar el estado en consecuencia.
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, payload],
        allCharactersFav: [...state.allCharactersFav, payload],
      };

    // Elimina un personaje de la lista de favoritos.
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload), // Si el id del personaje es distinto al valor del payload que se ha pasado como argumento en la acción, se filtran los personajes y se excluye ese.
      };

    // Filtra los personajes por género.
    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        // Si el género del personaje coincide con el valor del payload, se incluirá en el nuevo array filtrado.
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters" // Si el payload es "allCharacters", devuelve todos; de lo contrario, solo los personajes del género especificado en el payload.
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };

    // Ordena los personajes por ID.
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A" // Si el payload es "A", se ordenan en orden ascendente; de lo contrario, se ordenan en orden descendente.
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state }; // El default case devuelve el estado actual sin realizar ninguna acción.
  }
};

export default reducer;

// * El Reducer toma el estado actual de la aplicación y una acción, y devuelve un nuevo estado actualizado. El nuevo estado se crea a partir del estado anterior, pero con las modificaciones necesarias según la acción recibida. El Reducer es una función pura, lo que significa que no realiza ninguna modificación directa en el estado actual de la aplicación. En cambio, crea un nuevo objeto de estado basado en la acción recibida y lo devuelve. De esta manera, el estado anterior permanece inmutable y se mantiene un registro de todas las acciones que se han realizado en la aplicación

// el método .filter() crea un nuevo arreglo con todos los elementos que cumplan con la condición especificada en una función.
// el operador ternario es una estructura de control de flujo que permite simplificar la sintaxis de una sentencia if-else.