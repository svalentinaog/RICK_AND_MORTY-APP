import "../Styles/login.css";
import { useState } from "react";
import validation from "./Validation";


// Este componente renderiza un formulario para iniciar sesión. 
export default function Form({ login }) {

  // Form utiliza dos estados de React para almacenar los datos de usuario y los errores de validación. Los estados se inicializan con los campos "email" y "password" en blanco.
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // La función "handleChange" se llama cada vez que el usuario ingresa texto en los campos "email" y "password". Esta función actualiza el estado "userData" con los nuevos valores ingresados y llama a la función "validation" con los nuevos valores ingresados para actualizar el estado "errors".
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };


  // La función "handleSubmit" se llama cuando el usuario hace clic en el botón "Submit". Llama a la función "login" que se le pasa como props al componente Form y le pasa como parámetro el estado "userData".
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="login">
        <h1 className="titleSignIn">Sign In</h1>
        <div>
          <label
            htmlFor="email"
            style={{ color: "white" }}
            className="login_label"
          />

          <div className="login_grupo-input">
            {/* -- Icono USER 👤 -- */}
            <i className="login_icons_user-y-password fa-solid fa-user"></i>
            <input
              className="login_input"
              id="email"
              placeholder="E-mail"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <div>
          <label
            htmlFor="password"
            style={{ color: "white" }}
            className="login_label"
          />

          <div className="login_grupo-input" id="grupo_password">
            {/* -- Icono PASSWORD 🔐 -- */}
            <i className="login_icons_user-y-password fa-solid fa-lock"></i>
            <input
              className="login_input"
              id="password"
              placeholder="Password"
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button className="submit_btn">Submit</button>
      </form>
    </main>
  );
}

// En conclusión, el componente Form renderiza un formulario con dos campos de entrada para "email" y "password", respectivamente. El componente también muestra mensajes de error en caso de que haya errores de validación para los campos de entrada.



