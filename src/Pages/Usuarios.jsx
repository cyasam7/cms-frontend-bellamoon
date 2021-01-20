import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import TablaUsuarios from "../Componentes/TablaUsuarios";
import { SuccessButton } from "../Componentes/Buttons";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
function Usuarios() {
  const [Usuarios, setUsuarios] = useState([]);
  const [Filter, setFilter] = useState("");
  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get("/usuarios");
      return data;
    }
    initial().then((data) => {
      console.log(data);
      setUsuarios(data);
    });
  }, []);
  const handleFilter = () => {
    if (Filter === "") {
      return Filter;
    }
    return Usuarios.filter((user) => user.rol == Filter);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: "success",
      title: "Borrado correctamente",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      Axios.delete(`/usuarios/${id}`).then(() => {
        const newArray = Usuarios.filter((user) => user._id != id);
        setUsuarios(newArray);
      });
    });
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Typography align="center" gutterBottom>
            Lista de usuarios
          </Typography>
          <Box textAlign="end">
            <Link to="/usuarios/agregar">
              <SuccessButton>Agregar</SuccessButton>
            </Link>
          </Box>
        </CardContent>
      </Card>
      <br />
      <Card>
        <CardContent>
          <TablaUsuarios data={Usuarios} Delete={handleDelete} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Usuarios;
