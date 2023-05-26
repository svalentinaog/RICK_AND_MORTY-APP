// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
//
// 😉👇 HOMEWORK - WEB SERVER
//
// const http = require("http");
// const data = require("./utils/data");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*"); // Permite al front-end hacer peticiones desde cualquier origen.

// Si la URL contiene "/rickandmorty/character"
// if (req.url.includes("/rickandmorty/character")) {

// Obtiene el ID del personaje de la URL
// const id = req.url.split("/").at(-1);

// Busca el personaje correspondiente en los datos
// const characterFound = data.find((character) => character.id === +id);

// return res
// Establece el encabezado de respuesta con tipo JSON
// .writeHead(200, { "Content-type": "application/json" })

// Envía la respuesta con el personaje encontrado en formato JSON
//       .end(JSON.stringify(characterFound));
//   }
// })
// .listen(3001); // El servidor escucha en el puerto 3001

//
// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
//
// 😉👇 HOMEWORK - PROMISES

// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {

    // Permite al front-end hacer peticiones desde cualquier origen.
    // res.setHeader("Access-Control-Allow-Origin", "*"); 

    // Verificar si la URL de la solicitud incluye '/rickandmorty/character'
    // if (req.url.includes("/rickandmorty/character")) {

      // Obtener el último segmento de la URL como el id del personaje
      // const id = req.url.split("/").at(-1);

      // Llamar a la función getCharById para obtener la información del personaje por su id
  //     getCharById(res, +id);
  //   }
  // })
  // .listen(3001, "localhost");

// at(-1): Usamos el método at con el índice -1 para acceder al último elemento del array resultante. En otras palabras, estamos obteniendo el último segmento de la URL, que debería ser el ID del personaje.

//
// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
//
// 😉👇 HOMEWORK - EXPRESS

const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require("morgan");
const PORT = 3001;

// Crea un middleware que ejecute a express.json().
server.use(express.json());
server.use(morgan("dev"));

// MIDDLEWARE
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Crea un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas.
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});
