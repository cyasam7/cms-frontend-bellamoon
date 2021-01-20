import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import foto from "../static/foto2.jpg";
function EditarProductos() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" align="center">
          Edita tu producto
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={3}>
                    <img src={foto} alt="" style={{ width: "100%" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Segueta</Typography>
                    <Typography>$150</Typography>
                    <Typography>18 piezas</Typography>
                    <Typography>Descripion</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default EditarProductos;
