import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

// composeEnhancer nos permite utilizar la herramienta de desarrollo Redux DevTools en nuestro navegador. Lo que quiere decir que el propósito de esta línea es proporcionar una función "enhancer" para mejorar la capacidad de la tienda de Redux, utilizando la extensión Redux DevTools del navegador si está disponible, de lo contrario, utiliza la función "compose" predeterminada de Redux para combinar los "middlewares".

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore es una función de Redux que crea un nuevo store y toma dos argumentos, reducer y una función enhancer.
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
// El store de Redux toma el reducer como argumento para que pueda mantener y actualizar el estado global de la aplicación.

// applyMiddleware es una función de Redux que envuelve la función thunkMiddleware para permitir el manejo de acciones asíncronas. Lo que quiere decir que thunkMiddleware es un middleware específico de Redux que nos permite despachar acciones asíncronas. Para poder utilizarlo, se debe envolver en la función applyMiddleware y luego pasarla como argumento a la función composeEnhancer.

// El Store de Redux toma la fn composeEnhancer para habilitar la extensión Redux DevTools en el navegador, la cual permite realizar un seguimiento y depuración de las acciones y el estado de la aplicación.

export default store;

// Este código es un archivo que exporta una instancia de la Store de Redux, que es una estructura de datos en la que se almacena todo el estado de una aplicación. 