import "../Styles/cards.css"; // Estilos del componente Cards.
import Card from "./Card";

// Cards es un componente de nivel superior que se encarga de renderizar una lista de personajes
export default function Cards({ characters, onClose }) {
  // Array de objetos, fn onClose
  return (
    <div className="cards-conteiner">
      {
        // iteración sobre el array y por cada objeto de personaje, se renderiza un componente Card.
        characters.map(
          ({ id, name, status, species, gender, origin, image }) => {
            // Destructuración de cada objeto(personaje) de characters, para extraer las propiedades especificas.
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                origin={origin.name}
                onClose={onClose}
              />
            );
          }
        )
      }
    </div>
  );
}
