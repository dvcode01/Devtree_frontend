import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <h1 className="text-white text-4xl font-bold">Iniciar Sesión</h1>

      <nav className="mt-10">

        <Link to="/auth/register" className="text-center text-white text-lg block">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}

export default Login