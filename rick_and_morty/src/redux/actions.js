// Importación de ADD_FAV, REMOVE_FAV, FILTER y ORDER desde el archivo actions-types.js,
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

// addFav: recibe un objeto character como argumento y devuelve un objeto con dos propiedades: type establecida en la const ADD_FAV y payload establecida en el objeto character recibido como argumento. Esta función se utiliza para agregar un personaje a la lista de personajes favoritos.
export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};

// removeFav: recibe un id como argumento y devuelve un objeto con dos propiedades: type establecida en la const REMOVE_FAV y payload establecida en el id recibido como argumento. Esta función se utiliza para eliminar un personaje de la lista de personajes favoritos.
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

// filterCards: recibe un gender como argumento y devuelve un objeto con dos propiedades: type establecida en la const FILTER y payload establecida en el gender recibido como argumento. Esta función se utiliza para filtrar los personajes por género.
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

// orderCards: recibe un order como argumento y devuelve un objeto con dos propiedades: type establecida en la const ORDER y payload establecida en el order recibido como argumento. Esta función se utiliza para ordenar los personajes.
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

//👆 Este archivo exporta cuatro funciones que se utilizan para crear las acciones que se envían a los reducers en una aplicación Redux.
