import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SuccessButton, ErrorButton } from "../Componentes/Buttons";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ producto, Delete }) {
  const classes = useStyles();
  const handleDelete = () => {
    Delete(producto._id);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={producto.imagen}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="subtitle2">
            Nombre:{" "}
            <Typography variant="overline">{producto.descripcion}</Typography>
          </Typography>
          <Typography variant="subtitle2">
            Cantidad:{" "}
            <Typography variant="overline">
              {producto.cantidad} piezas
            </Typography>
          </Typography>
          <Typography variant="subtitle2">
            Precio:
            <Typography variant="overline">${producto.precio}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Link to={`/productos/configuraciones/${producto._id}`}>
          <Button variant="contained" size="small" color="primary">
            Opciones
          </Button>
        </Link> */}
        <ErrorButton onClick={handleDelete} size="small" color="primary">
          Eliminar
        </ErrorButton>
      </CardActions>
    </Card>
  );
}
