import "../Styles/about.css";

export default function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutBox">
          <h1 className="aboutTitle"> RICK AND MORTY</h1>
          <h2 className="aboutSub">Acerca de la aplicación</h2>
          <p className="aboutParagraph">
            Esta aplicación fue desarrollada con el objetivo de poner en
            práctica los conocimientos adquiridos en clase y de demostrar las
            habilidades en el desarrollo de aplicaciones web. La aplicación
            busca ofrecer una experiencia interactiva y amigable para el
            usuario, al mismo tiempo que proporciona información relevante y
            útil. Con su diseño intuitivo y funcionalidad destacada, la
            aplicación representa un proyecto significativo en la trayectoria de
            desarrollo del programador.
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="aboutSub">
            Así se desarrolló la APP de Rick and Morty
          </h2>
          <p className="aboutParagraph">
            Para la elaboración de esta aplicación, se hicieron uso de dos
            populares bibliotecas de JavaScript: React y Redux. React es una
            biblioteca de JavaScript que se utiliza para construir interfaces de
            usuario interactivas y dinámicas, mientras que Redux es una
            biblioteca que permite el manejo centralizado y escalable del estado
            de la aplicación. La combinación de ambas bibliotecas permite una
            estructura clara y eficiente para el desarrollo de aplicaciones web
            modernas. Además, se utilizó la biblioteca "react-router-dom" para
            la gestión de la navegación entre las diferentes páginas de la
            aplicación. Esta biblioteca permite definir las rutas de la
            aplicación y el componente que se debe renderizar en cada una de
            ellas. Por último, para hacer solicitudes a una API externa se
            empleó "axios", una biblioteca que permite realizar operaciones de
            lectura y escritura de datos. Esta biblioteca es especialmente útil
            para obtener información de una base de datos. En conclusión, la
            combinación de estas bibliotecas permitió el desarrollo de una
            aplicación robusta, escalable y con una experiencia de usuario
            amigable para la visualización de información de Rick and Morty.
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="aboutSub">Acerca de mí</h2>
          <p className="aboutParagraph">
            Mi nombre es Valentina y tengo 20 años. Me siento muy afortunada de
            formar parte de la comunidad de SoyHenry, donde puedo seguir
            aprendiendo y mejorando mis habilidades como programadora. Me
            apasiona el mundo de la tecnología y la informática, y me emociona
            la idea de poder contribuir a crear soluciones innovadoras y útiles
            para la sociedad. Estoy comprometida a seguir creciendo como
            profesional y aportando mi granito de arena al campo de la
            programación.
          </p>
        </div>
      </div>
    </div>
  );
}
