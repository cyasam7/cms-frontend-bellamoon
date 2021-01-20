import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import FormUsuario from "../Componentes/FormUsuario";
import Axios from "axios";
function EditarUsuario() {
  const history = useHistory();
  const params = useParams();
  const [Usuario, setUsuario] = useState(undefined);

  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/usuarios/${params.idUsuario}`);
      return data;
    }
    initial().then((user) => {
      setUsuario(user);
    });
  }, [params]);

  const handleActualizar = async (data) => {
    await Axios.patch(`/usuarios/${params.idUsuario}`, data);
    history.push("/usuarios");
  };

  return (
    <div>
      <FormUsuario
        titulo="Actualizar usuario"
        usuario={Usuario}
        handle={handleActualizar}
      />
    </div>
  );
}

export default EditarUsuario;
