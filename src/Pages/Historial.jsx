import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
import { SuccessButton } from "../Componentes/Buttons";
import { Link } from "react-router-dom";
import CardHistorial from "../Componentes/CardHistorial";
import axios from "axios";
function Historial() {
  const [Pedidos, setPedidos] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/pedidos");
      setPedidos(data);
    })();
  },[]);
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Pedidos Actuales
          </Typography>
          <Grid style={{ marginTop: 10 }} container spacing={3}>
            {Pedidos.map((item, index) => (
              <Grid item xs={3} key={index}>
                <CardHistorial pedido={item} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Historial;
