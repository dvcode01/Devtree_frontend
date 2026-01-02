import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import AuthLayout from "./layouts/AuthLayout"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router