// Importación de módulos y estilos necesarios para el componente Card.
import "../Styles/card.css";
import { Link } from "react-router-dom"; // react-router-dom se utiliza para manejar las rutas y los enlaces.
import { addFav, removeFav } from "../redux/actions"; // addFav y removeFav son funciones de acción Redux para agregar y eliminar personajes de la lista de favoritos.
import { connect } from "react-redux"; // connect() es una función de Redux que se utiliza para conectar componentes de React con el store(tienda) de Redux.
import { useState, useEffect } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";

// La función Card recibe recibe por props, información del personaje
function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false); // Estado local del componente

  // La función handleFavorite exclusiva de Card, maneja la adición/eliminación de personajes favoritos. Al hacer clic en ❤️ o 🤍, se cambia el estado de isFav. Si isFav es true, se llama a removeFav para eliminar el personaje de la lista de favoritos. De lo contrario, se llama a addFav para agregarlo. Esta función se declara en Card ya que es dónde se renderiza cada personaje.
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false); // setIsFav, actualiza el estado (isFav) y se vuelve a renderizar el componente.
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose }); 
    }
  };

  // useEffect se usa para cambia el estado de isFav a true cuando el ID del personaje está en la lista de favoritos, y para actualizar el estado cada vez que myFavorites cambie. handleFavorite se ejecuta cuando el usuario hace clic en el botón de agregar o eliminar de favoritos.
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  // Se renderiza la información del personaje, incluyendo también un botón para agregar o quitar el personaje de la lista de favoritos, así como un botón para cerrar la tarjeta del personaje.
  return (
    <div className="card">
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <div>
          <Link to={`/detail/${id}`}>
            <h2
              className={
                gender === "Male" ? "color-primary" : "color-secundary"
              }
            >
              {name}
            </h2>
          </Link>
        </div>

        <div>
          <h2>{species}</h2>
        </div>

        <div>
          <h2>{gender}</h2>
        </div>

        <div className="close-button-container">
          <button className="close-button" onClick={() => onClose(id)}>
            X
          </button>
        </div>

        <div>
          {/* <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button> */}
          <button
            onClick={handleFavorite}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            {isFav ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteIcon style={{ color: "white" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// mapStateToProps: mapea la propiedad myFavorites del estado global a la propiedad myFavorites del componente.
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// mapDispatchToProps: mapea las acciones de Redux a las propiedades del componente. En este caso, se está mapeando las acciones addFav y removeFav a las propiedades addFav y removeFav del componente.
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

// Finalmente, exportamos el componente Card conectado al estado global de la aplicación mediante el método connect de Redux.
export default connect(mapStateToProps, mapDispatchToProps)(Card);

// * CONTEXTO:
// Cuando el componente se conecta con el store, se le proporciona acceso a las acciones y al estado global de la aplicación, lo que permite que el componente se actualice automáticamente en respuesta a los cambios en el store. connect() toma dos argumentos: mapStateToProps, que mapea el estado del store a las props del componente, y mapDispatchToProps, que mapea las acciones a las props del componente. El resultado es un nuevo componente que puede acceder al estado y a las acciones de Redux como props y, por lo tanto, puede renderizar el estado y enviar acciones al store (tienda).
