import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from "./Pages/Login/Login";
import Editar_perfil from "./Pages/Editar_perfil/Editar_perfil";
import App from "./App";
import useAuthStore from "./stores/auth";

function RotasPrivadas(){
  const token = useAuthStore ((state) => state.token);

  if (token) return <Outlet />;  
  return <Navigate to= "/login" replace />
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App /> }>
        <Route element = {<RotasPrivadas />}>
        <Route path="editar-perfil" element={<Editar_perfil />} />
        

        </Route>
        <Route index element = {<Home/>} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
