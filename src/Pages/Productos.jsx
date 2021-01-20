import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  MenuItem,
  Card,
  CardContent,
  Button,
  Box,
} from "@material-ui/core";
import CardProducto from "../Componentes/CardProducto";
import { Link } from "react-router-dom";
import Axios from "axios";
import { SuccessButton } from "../Componentes/Buttons";

function Productos() {
  const [Productos, setProductos] = useState([]);
  const [Categorias, setCategorias] = useState([]);
  useEffect(() => {
    async function initial() {
      const res1 = Axios.get("/categorias");
      const res2 = Axios.get("/productos");
      const data = await Axios.all([res1, res2]).then(
        Axios.spread((...res) => {
          const resp1 = res[0].data;
          const resp2 = res[1].data;
          return {
            productos: resp2,
            categorias: resp1,
          };
        })
      );
      return data;
    }
    initial().then((data) => {
      console.log(data);
      setProductos(data.productos);
      setCategorias(data.categorias);
    });
  }, []);
  const handleDeleteProducto = async (id) => {
    await Axios.delete(`/productos/${id}`);
    const newProductos = Productos.filter((prod) => prod._id != id);
    setProductos(newProductos)
  };
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom>Lista de Productos</Typography>
          <Box textAlign="end">
            <Link to="/productos/agregar">
              <SuccessButton>Agregar</SuccessButton>
            </Link>
          </Box>
        </CardContent>
      </Card>
      <br />
      <Card>
        <CardContent>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Busca tu producto
          </Typography>
          <TextField
            variant="outlined"
            helperText="Busca algun producto"
            placeholder="Nombre"
            fullWidth
          />
          <hr />
          <Grid container spacing={1}>
            {Productos.length > -1
              ? Productos.map((prod, index) => (
                  <Grid item xs={4} key={index}>
                    <CardProducto Delete={handleDeleteProducto} producto={prod} />
                  </Grid>
                ))
              : null}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Productos;
