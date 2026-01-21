import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import AuthLayout from "./layouts/AuthLayout"
import AppLayout from "./layouts/AppLayout"
import LinktreeView from "./views/pages/LinktreeView"
import ProfileView from "./views/pages/ProfileView"
import HandleView from "./views/pages/HandleView"
import NotFoundView from "./views/pages/NotFoundView"

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

        <Route path="/:handle" element={<AuthLayout />} >
          <Route index={true} element={<HandleView />} />
        </Route>

        <Route path="/404" element={<AuthLayout />} >
          <Route index={true} element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router