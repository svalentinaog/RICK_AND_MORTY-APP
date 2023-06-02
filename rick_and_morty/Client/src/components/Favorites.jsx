import Card from "./Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useEffect, useState } from "react";
import "../Styles/cards.css";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  useEffect(() => {
    console.log(myFavorites);
  }, [myFavorites]);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      <div className="cards-conteiner">
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
