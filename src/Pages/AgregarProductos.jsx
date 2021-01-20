import React from "react";
import { Typography } from "@material-ui/core";
import FormProducto from "../Componentes/FromProducto";
import Axios from "axios";
import { useHistory } from "react-router-dom";
function AgregarProductos() {
  const history = useHistory();
  
  
  const handleAgregarProducto = async (producto) => {
    await Axios.post("/productos", producto);
    history.push("/productos")
  };

  return (
    <div>
      <Typography variant="subtitle2" align="center" gutterBottom>
        Agrega producto
      </Typography>
      <FormProducto handle={handleAgregarProducto}/>
    </div>
  );
}

export default AgregarProductos;
