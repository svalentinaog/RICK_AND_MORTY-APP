import "../Styles/login.css";
import { useState } from "react";
import validation from "./Validation";

export default function Form({ login }) {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    // 👇 Una etiqueta form que envolverá a todo el componente.
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="login">
        <div>
          {/* 👇 Una etiqueta label junto con un input para el email. */}
          <label
            htmlFor="email"
            style={{ color: "white" }}
            className="login_label"
          >
            {/* Email:{" "} */}
          </label>
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
          {/* -------------------------------------------------------- */}
        </div>

        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* <hr /> */}

        <div>
          {/* 👇 Una etiqueta label junto con un input para el password. */}
          <label
            htmlFor="password"
            style={{ color: "white" }}
            className="login_label"
          >
            {/* Password:{" "} */}
          </label>
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
          {/* -------------------------------------------------------- */}
        </div>

        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        {/* 👇 Un button con el texto "Submit". */}
        <button className="submit_btn">Submit</button>
      </form>
    </main>
  );
}
