import "../Styles/validation.css"

export default function validation(userData) {
  const errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = <span className="error">Please enter a valid e-mail address</span>; // debe ingresar un dir valida
  }
  if (!userData.email) {
    errors.email = <span className="error">Your e-mail address is required</span>; // su email es requerido
  }
  if (userData.email.length > 35) {
    errors.email = <span className="error">The e-mail must not exceed 35 characters</span>; // limite de 35 caracteres
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = <span className="error">la contraseña debe contener al menos un número</span>;
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = <span className="error">la contraseña debe tener un tamaño entre 6 y 10 caracteres</span>;
  }
  if (!userData.password) {
    errors.password = <span className="error">You cannot access without your password</span>; // su password es requerido
  } 

  return errors;
  
}

// no puede ingresar sin su contraseña:   You cannot access without your password
