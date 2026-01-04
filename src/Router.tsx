import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import AuthLayout from "./layouts/AuthLayout"
import AppLayout from "./layouts/AppLayout"
import LinktreeView from "./views/pages/LinktreeView"
import ProfileView from "./views/pages/ProfileView"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AppLayout />}>
          <Route index={true} element={<LinktreeView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router