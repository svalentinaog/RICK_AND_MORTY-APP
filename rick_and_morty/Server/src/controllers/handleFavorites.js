// ARRAY DE FAVORITOS
let myFavorites = [];

// POSTFAV
const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character);

    return res.status(200).json(myFavorites);
};

// DELETEFAV
const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== id);

    return res.status(200).json(myFavorites);
};

// EXPORTACIÓN
module.exports = {
    postFav,
    deleteFav,
};
