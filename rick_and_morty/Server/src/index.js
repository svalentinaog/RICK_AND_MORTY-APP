const http = require("http");
const { getCharById } = require("./controllers/getCharById");

// res => response
// req => request

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // permite al front-end hacer peticiones.

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);

      getCharById(res, +id);
    }
  })
  .listen(3001); // .listen(3001, 'localhost')
