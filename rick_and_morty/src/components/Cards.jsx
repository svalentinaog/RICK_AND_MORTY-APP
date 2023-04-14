import "../Styles/cards.css"; // Estilos del componente Cards.
import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards-conteiner">
      {
        characters.map(({ id, name, status, species, gender, origin, image }) => {
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
