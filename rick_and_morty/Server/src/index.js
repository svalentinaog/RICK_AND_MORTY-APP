const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Permite al front-end hacer peticiones desde cualquier origen.
    if (req.url.includes("/rickandmorty/character")) {
      // Si la URL contiene "/rickandmorty/character"
      const id = req.url.split("/").at(-1); // Obtiene el ID del personaje de la URL
      const characterFound = data.find((character) => character.id === +id); // Busca el personaje correspondiente en los datos
      return res
        .writeHead(200, { "Content-type": "application/json" }) // Establece el encabezado de respuesta con tipo JSON
        .end(JSON.stringify(characterFound)); // Envía la respuesta con el personaje encontrado en formato JSON
    }
  })
  .listen(3001); // El servidor escucha en el puerto 3001
// at(-1): Usamos el método at con el índice -1 para acceder al último elemento del array resultante. En otras palabras, estamos obteniendo el último segmento de la URL, que debería ser el ID del personaje.
