import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import CardCategoria from "../Componentes/CardCategoria";
import { SuccessButton } from "../Componentes/Buttons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";

function Categorias() {
  const [Categorias, setCategorias] = useState([]);
  const [Buscar, setBuscar] = useState("");
  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get("/categorias");
      return data;
    }
    initial().then((categorias) => {
      console.log(categorias);
      setCategorias(categorias);
    });
  }, []);

  function filterCategoria(word) {
    return function (x) {
      if (x.nombre.includes(word)) {
        return x;
      }
    };
  }
  const handleDelete = async (id) => {
    Swal.fire({
      title: "¿Seguro?",
      text: "¿Desea eliminar la categoria?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Axios.delete(`/categorias/${id}`);
        const newCategorias = Categorias.filter((cat) => cat._id != id);
        setCategorias(newCategorias);
        Swal.fire("Borrado", "Se ha borrado correctamente", "Cerrar");
      }
    });
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Lista de categorias
          </Typography>
          <Box textAlign="end" style={{ marginBottom: 10 }}>
            <Link to="/categorias/agregar">
              <SuccessButton color="primary" style={{ alignSelf: "end" }}>
                Agregar
              </SuccessButton>
            </Link>
          </Box>
        </CardContent>
      </Card>
      <br />
      <Card>
        <CardContent>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Categorias Actuales
          </Typography>
          <Grid style={{ marginTop: 10 }} container spacing={3}>
            {Categorias.filter(filterCategoria).map((catego, index) => (
              <Grid item xs={3} key={index}>
                <CardCategoria Delete={handleDelete} categoria={catego} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Categorias;
