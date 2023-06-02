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
