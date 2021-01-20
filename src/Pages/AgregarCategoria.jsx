import Axios from "axios";
import React from "react";
import FormCategoria from "../Componentes/FormCategoria";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
function AgregarCategoria() {
  const history = useHistory();

  const handleAgregarCategoria = async (data) => {
    await Axios.post("/categorias", data);
    await Swal.fire("Se ha agregado correctamente")
    history.push("/categorias");
  };
  return (
    <>
      <FormCategoria
        titulo="Agregar categoria"
        handle={handleAgregarCategoria}
      />
    </>
  );
}

export default AgregarCategoria;
