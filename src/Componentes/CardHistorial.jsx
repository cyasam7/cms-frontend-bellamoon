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

export default function CardHistorial({ pedido }) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="subtitle2">
            Folio: <Typography variant="overline">{pedido.noPedido}</Typography>
          </Typography>
          <Typography variant="subtitle2">
            Productos:{" "}
            <Typography variant="overline">
              {pedido.productos.map((obj) => obj.descripcion+", ")}
            </Typography>
          </Typography>
          <Typography variant="subtitle2">
            Venta:{" "}
            <Typography variant="overline">
              {pedido.productos.reduce(
                (acum, obj) => (acum = acum + obj.precio),
                0.0
              )}{" "}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
