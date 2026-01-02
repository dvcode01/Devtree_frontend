import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <h1 className="text-white">Login</h1>

      <nav>

        <Link to="/auth/register">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}

export default Login