import { Link } from "react-router-dom"

function Register() {
  return (
    <>
      <h1 className="text-white">Register</h1>

      <nav>
        <Link to="/auth/login">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}

export default Register