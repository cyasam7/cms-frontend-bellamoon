import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
import { SuccessButton, ErrorButton } from "./Buttons";
function FormCategoria({ titulo, handle, categoria }) {
  const [Nombre, setNombre] = useState("");
  const handleAlgo = () => {
    if (Nombre === "") {
      alert("Llenar los datos correctamente");
      return;
    }
    handle({
      nombre: Nombre,
    });
  };
  useEffect(() => {
    if (categoria) {
      setNombre(categoria.nombre);
    }
  }, [categoria]);
  return (
    <Card>
      <CardContent>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {titulo}
        </Typography>
        <TextField
          fullWidth
          placeholder="Nombre"
          label="Agrega una categoria"
          variant="outlined"
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Box textAlign="end">
          <ErrorButton>Cancelar</ErrorButton>
          <SuccessButton onClick={handleAlgo}>Aceptar</SuccessButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FormCategoria;
