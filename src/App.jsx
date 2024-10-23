import './App.css'
import Login from "./pages/Login"
import Logout from './pages/Logout'
import Home from "./pages/Home"
import Register from './pages/Register'
Error
import RootLayout from "./layouts/RootLayout"
import ProtectedRoutes from './components/ProtectedRoutes'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom"

import { useAuthContext } from './hooks/useAuthContext'
import NotFound from './pages/NotFound'


function App() {
  const { loggedIn } = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="login" element={!loggedIn ? <Login /> : <Navigate to="/"/>} />
        <Route path="register" element={!loggedIn ? <Register /> : <Navigate to="/"/>}  />
        <Route path="logout" element={<ProtectedRoutes><Logout /></ProtectedRoutes>} />
        <Route path="*" element={<NotFound />} />
      </Route>

    )
  )




  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
