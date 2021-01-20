import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Componentes/Layout";
import PrivateRoute from "./Componentes/PrivateRoute";

import Login from "./Pages/Login";

import Usuarios from "./Pages/Usuarios";
import AgregarUsuarios from "./Pages/AgregarUsuarios";
import EditarUsuarios from "./Pages/EditarUsuario";
import PasswordUsuario from "./Pages/PasswordUsuario";

import Categorias from "./Pages/Categorias";
import AgregarCategoria from "./Pages/AgregarCategoria";
import EditarCategoria from "./Pages/EditarCategoria";

import Productos from "./Pages/Productos";
import AgregarProductos from "./Pages/AgregarProductos";
import EditarProductos from "./Pages/EditarProductos";

import { useAuth } from "./Context/AuthContext";
import Historial from "./Pages/Historial";

function App() {
  const { Loading } = useAuth();
  if (Loading) {
    return <h1>Cargando</h1>;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <PrivateRoute exact path="/usuarios">
            <Usuarios />
          </PrivateRoute>
          <PrivateRoute exact path="/usuarios/agregar">
            <AgregarUsuarios />
          </PrivateRoute>
          <PrivateRoute exact path="/usuarios/editar/:idUsuario">
            <EditarUsuarios />
          </PrivateRoute>
          <PrivateRoute exact path="/usuarios/editar/password/:idUsuario">
            <PasswordUsuario />
          </PrivateRoute>
          <PrivateRoute exact path="/categorias">
            <Categorias />
          </PrivateRoute>
          <PrivateRoute exact path="/categorias/agregar">
            <AgregarCategoria />
          </PrivateRoute>
          <PrivateRoute exact path="/categorias/editar/:idCategoria">
            <EditarCategoria />
          </PrivateRoute>
          <PrivateRoute exact path="/productos">
            <Productos />
          </PrivateRoute>
          <PrivateRoute exact path="/productos/agregar">
            <AgregarProductos />
          </PrivateRoute>
          <PrivateRoute exact path="/productos/configuraciones/:idProductos">
            <EditarProductos />
          </PrivateRoute>
          <PrivateRoute exact path="/historial">
            <Historial/>
          </PrivateRoute>
          <PrivateRoute>
            
          </PrivateRoute>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
