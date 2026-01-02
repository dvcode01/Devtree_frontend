import { Link } from "react-router-dom"

function Register() {
  return (
    <>
      <h1 className="text-white text-4xl font-bold">Crear Cuenta</h1>

      <nav className="mt-10">
        <Link to="/auth/login" className="text-center text-white text-lg block">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}

export default Register