import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/Login"
import { Cadastro } from "./pages/Cadastro"
import { Welcome } from "./pages/Welcome"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
