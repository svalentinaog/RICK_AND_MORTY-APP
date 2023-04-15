import "../Styles/validation.css";

// La función Validation recibe por props un objeto que contiene información de usuario, como su dirección de correo electrónico y contraseña.
export default function Validation(userData) {
  const errors = {};

  // Si el campo email es distinto/no cumple con el formato de una dirección de correo electrónico válida...
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = (
      <span className="error">Please enter a valid e-mail address</span>
    );
  }
  // Si el campo email está vacío...
  if (!userData.email) {
    errors.email = (
      <span className="error">Your e-mail address is required</span>
    );
  }
  // Si el campo email tiene una longitud mayor a 35 caracteres...
  if (userData.email.length > 35) {
    errors.email = (
      <span className="error">The e-mail must not exceed 35 characters</span>
    );
  }
  // Si el campo password NO tiene al menos un número...
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = (
      <span className="error">
        la contraseña debe contener al menos un número
      </span>
    );
  }
  // Si el campo password tiene una longitud menor a 6 o mayor a 10 caracteres...
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = (
      <span className="error">
        la contraseña debe tener un tamaño entre 6 y 10 caracteres
      </span>
    );
  }
  // Si el campo password está vacío...
  if (!userData.password) {
    errors.password = (
      <span className="error">You cannot access without your password</span>
    ); // su password es requerido
  }

  return errors; // la función devuelve el objeto "errors" con los mensajes de error apropiados, para informar al usuario sobre los errores en los datos ingresados.
}


 // El propósito de esta función es validar los datos ingresados por el usuario y devolver un objeto con mensajes de error si es necesario.