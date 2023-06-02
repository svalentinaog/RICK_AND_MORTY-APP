import "../Styles/about.css";

export default function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutBox">
          <h1 className="aboutTitle"> RICK AND MORTY</h1>
          <h2 className="aboutSub">Acerca de la aplicación</h2>
          <p className="aboutParagraph">
            Lorem ipsum...
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="aboutSub">
            Así se desarrolló la APP de Rick and Morty
          </h2>
          <p className="aboutParagraph">
            Lorem ipsum...
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="aboutSub">Acerca de mí</h2>
          <p className="aboutParagraph">
            Lorem ipsum...
          </p>
        </div>
      </div>
    </div>
  );
}
