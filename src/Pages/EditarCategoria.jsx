import axios from "axios";
import React, { useEffect, useState } from "react";
import FormCategoria from "../Componentes/FormCategoria";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function EditarCategoria() {
  const [Categoria, setCategoria] = useState();
  const history = useHistory();
  const { idCategoria } = useParams();
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/categorias/${idCategoria}`);
      setCategoria(data);
    })();
  }, []);
  const handleActualizar = async (data) => {
    await axios.patch(`/categorias/${idCategoria}`, data);
    Swal.fire({
      icon: "success",
      title: "Actualizado correctamente",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      history.goBack();
    });
  };
  return (
    <div>
      <FormCategoria
        categoria={Categoria}
        titulo="Actualizar categoria"
        handle={handleActualizar}
      />
    </div>
  );
}

export default EditarCategoria;
