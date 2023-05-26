// Importación de ADD_FAV, REMOVE_FAV, FILTER y ORDER desde el archivo actions-types.js,
// import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

// addFav: recibe un objeto character como argumento y devuelve un objeto con dos propiedades: type establecida en la const ADD_FAV y payload establecida en el objeto character recibido como argumento. Esta función se utiliza para agregar un personaje a la lista de personajes favoritos.
// export const addFav = (character) => {
//   return { type: ADD_FAV, payload: character };
// };

// removeFav: recibe un id como argumento y devuelve un objeto con dos propiedades: type establecida en la const REMOVE_FAV y payload establecida en el id recibido como argumento. Esta función se utiliza para eliminar un personaje de la lista de personajes favoritos.
// export const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id };
// };

// filterCards: recibe un gender como argumento y devuelve un objeto con dos propiedades: type establecida en la const FILTER y payload establecida en el gender recibido como argumento. Esta función se utiliza para filtrar los personajes por género.
// export const filterCards = (gender) => {
//   return { type: FILTER, payload: gender };
// };

// orderCards: recibe un order como argumento y devuelve un objeto con dos propiedades: type establecida en la const ORDER y payload establecida en el order recibido como argumento. Esta función se utiliza para ordenar los personajes.
// export const orderCards = (order) => {
//   return { type: ORDER, payload: order };
// };

//👆 Este archivo exporta cuatro funciones que se utilizan para crear las acciones que se envían a los reducers en una aplicación Redux.

//
// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️

// HOMEWORK - EXPRESS

// import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';
// import axios from 'axios';

// export const addFav = (character) => {
//     // return { type: ADD_FAV, payload: character }
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character)
//        .then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAV,
//                 payload: data,
//           });
//        });
//     };
// };

// export const removeFav = (id) => {
//     // return { type: REMOVE_FAV, payload: id }
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint)
//         .then(({ data }) => {
//             return dispatch({
//                 type: REMOVE_FAV,
//                 payload: data,
//             });
//         });
//     };
// }

// // filterCards: recibe un gender como argumento y devuelve un objeto con dos propiedades: type establecida en la const FILTER y payload establecida en el gender recibido como argumento. Esta función se utiliza para filtrar los personajes por género.
// export const filterCards = (gender) => {
//   return { type: FILTER, payload: gender };
// };

// // orderCards: recibe un order como argumento y devuelve un objeto con dos propiedades: type establecida en la const ORDER y payload establecida en el order recibido como argumento. Esta función se utiliza para ordenar los personajes.
// export const orderCards = (order) => {
//   return { type: ORDER, payload: order };
// };

//
// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️

// HOMEWORK - ASYNC-AWAIT

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);

            if(!data.length) throw Error('No hay favoritos');

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        } 
    };
};

export const removeFav = (id) => {
    console.log("HOLISSS")
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        };
    };
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
}