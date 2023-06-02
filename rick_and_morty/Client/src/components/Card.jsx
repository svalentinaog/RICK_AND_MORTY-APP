import "../Styles/card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
  const [isFav, setIsFav] = useState(false); 

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

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

        {onClose && (
          <div className="close-button-container">
            <button className="close-button" onClick={() => onClose(id)}>
              X
            </button>
          </div>
        )}

        <div>
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
