import { Typography } from "@material-ui/core";
import React from "react";
import FormUsuario from "../Componentes/FormUsuario";
import Axios from "axios";
import { useHistory } from "react-router-dom";
function AgregarUsuarios() {
  const history = useHistory();
  const handleCrearUsuario = async (data) => {
    await Axios.post("/usuarios/", data);
    history.push("/usuarios");
  };
  return (
    <>
      <Typography align="center" variant="subtitle2" gutterBottom>
        Actualizar el usuario
      </Typography>
      <FormUsuario titulo="Llenar datos" handle={handleCrearUsuario} />
    </>
  );
}

export default AgregarUsuarios;
