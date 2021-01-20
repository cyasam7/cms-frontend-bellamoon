import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";

function PasswordUsuario() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Actualiza contraseña
          </Typography>
          <TextField
            label="Contraseña anterior"
            placeholder="Contraseña"
            variant="outlined"
            style={{ marginBottom: 10 }}
            fullWidth
          />
          <Typography variant="subtitle2" gutterBottom>
            Nueva contraseña
          </Typography>
          <TextField
            label="Nueva contraseña"
            placeholder="Contraseña"
            variant="outlined"
            style={{ marginBottom: 10 }}
            fullWidth
          />
          <TextField
            label="Confirmar Contraseña"
            placeholder="Contraseña"
            variant="outlined"
            style={{ marginBottom: 10 }}
            fullWidth
          />
          <Box textAlign="end">
            <Button>Cancelar</Button>
            <Button>Agregar</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default PasswordUsuario;
