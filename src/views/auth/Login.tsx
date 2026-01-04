import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import ErrorMessage from "../../components/ErrorMessage"

function Login() {
  const initialValues = {
      email: '',
      password: '',
  };

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues});

  const handleLogin = () => {

  };

  return (

    <>
      <h1 className="text-white text-4xl font-bold">Iniciar Sesión</h1>

      <form 
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        
        <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
            <input
                id="email"
                type="email"
                placeholder="Ej: correo@correo.com"
                className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                {...register('email', {
                  required: 'El email es obligatorio', 
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  }
                })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
    
        <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Ej: 1234567"
                className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                {...register('password', {
                  required: 'El password es obligatorio', 
                  minLength: {
                    value: 8,
                    message: 'El password debe ser mínimo de 8 caracteres'
                  }
                })}
            />

            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </div>

        <input
            type="submit"
            className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
            value='Iniciar Sesión'
        />  
      </form>

      <nav className="mt-10">
        <Link to="/auth/register" className="text-center text-white text-lg block">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}

export default Login