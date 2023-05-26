// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
//
// 😉👇 HOMEWORK - PROMISES

// const axios = require("axios");

// const getCharById = (res, id) => {
    // Hacer una solicitud a la API de Rick and Morty para obtener información de un personaje por su id
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
        // .then((response) => response.data)  // Obtener los datos de la respuesta de la API
        // .then(({ name, gender, species, origin, image, status }) => {
            // Crear un objeto character con la información extraída de la respuesta
            // const character = {
            //     id,
            //     name,
            //     gender,
            //     species,
            //     origin,
            //     image,
            //     status,
            // };

            // Enviar una respuesta con el objeto character en formato JSON
        //     return res
        //         .writeHead(200, { "Content-type": "application/json" })
        //         .end(JSON.stringify(character));
        // })
        // .catch((error) => {
            // Manejar cualquier error ocurrido durante la solicitud a la API
            // Enviar una respuesta de error con el mensaje de error
//             return res
//                 .writeHead(500, { "Content-type": "text/plain" })
//                 .end(error.message);
//         });
// };

// Exportar la función getCharById para que pueda ser utilizada por otros módulos
// module.exports = {
//     getCharById,
// };

//
// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
//
// 😉👇 HOMEWORK - EXPRESS

// const URL = "https://rickandmortyapi.com/api/character";
// const axios = require("axios");

// const getCharById = (req, res) => {
//     const { id } = req.params;

//     axios(`${URL}/${id}`)
//         .then((response) => response.data)
//         .then(({ status, name, species, origin, image, gender }) => {
//         if (name) {
//             const character = {
//             id,
//             name,
//             species,
//             origin,
//             image,
//             gender,
//             status,
//             };
//             return res.status(200).json(character);
//         }

//         return res.status(404).send("Not found");
//         })
//         .catch((error) => res.status(500).send(error.message));
// };

// module.exports = {
//     getCharById,
// };


//
// ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
//
// 😉👇 HOMEWORK - ASYNC-AWAIT

const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)
        
        if(!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);

        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        }
        return res.status(200).json(character)
        
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
}

module.exports = {
    getCharById
};