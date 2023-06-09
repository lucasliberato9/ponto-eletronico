import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from "./Pages/Login/Login";
import Editar_perfil from "./Pages/Editar_perfil/Editar_perfil";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path ="/" element = {<Home />} />,
      <Route path ="cadastro" element = {<Cadastro />} />,
      <Route path ="login" element = {<Login />} />,
      <Route path ="editar_perfil" element = {<Editar_perfil />} />
    </Route>
  )
)

export default function Routes(){
  return <RouterProvider router = {router} />
}