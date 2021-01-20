import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { WarningButton, ErrorButton } from "../Componentes/Buttons";
function CardCategoria({ categoria, Delete }) {
  const handleDelete = () => {
    Delete(categoria._id);
  };
  return (
    <Card>
      <CardContent>
        <Typography>
          Nombre: {` `}
          {categoria.nombre}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Link to={`/categorias/editar/${categoria._id}`}>
              <WarningButton fullWidth>Editar</WarningButton>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <ErrorButton onClick={handleDelete} fullWidth>Eliminar</ErrorButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default CardCategoria;
