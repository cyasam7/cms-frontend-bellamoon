import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { schemaUsuario } from "../utils/schemas";
import { SuccessButton, ErrorButton } from "../Componentes/Buttons";
function FormUsuario({ titulo, handle, usuario }) {
  const handleSubmite = (data) => {
    handle(data);
  };
  const [Usuario, setUsuario] = useState({
    nombreCompleto: "",
    direccion: "",
    pais: "",
    estado: "",
    numero: "",
    email: "",
    password: "",
    Confpassword: "",
    rol: "",
  });

  useEffect(() => {
    if (usuario !== undefined) {
      delete usuario.__v;
      setUsuario(usuario);
    }
    console.log(Usuario);
  }, [usuario, setUsuario, Usuario]);
  return (
    <Card>
      <CardContent>
        <Container>
          <Formik
            initialValues={Usuario}
            validationSchema={schemaUsuario}
            onSubmit={(values) => handleSubmite(values)}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <Typography align="center" gutterBottom variant="subtitle2">
                  {console.log(values)}
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Nombre del Usuario"
                  helperText={
                    errors.nombreCompleto && touched.nombreCompleto
                      ? errors.nombreCompleto
                      : null
                  }
                  placeholder="Nombre completo"
                  value={values.nombreCompleto}
                  onChange={handleChange("nombreCompleto")}
                  error={errors.nombreCompleto && touched.nombreCompleto}
                  style={{ marginBottom: 10 }}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  label="Direccion del Usuario"
                  helperText={
                    errors.direccion && touched.direccion
                      ? errors.direccion
                      : null
                  }
                  placeholder="Direccion"
                  value={values.direccion}
                  onChange={handleChange("direccion")}
                  error={errors.nombreCompleto && touched.nombreCompleto}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Pais del Usuario"
                  helperText={errors.pais && touched.pais ? errors.pais : null}
                  placeholder="Pais"
                  value={values.pais}
                  onChange={handleChange("pais")}
                  error={errors.pais && touched.pais}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Estado del Usuario"
                  helperText={
                    errors.estado && touched.estado ? errors.estado : null
                  }
                  placeholder="Estado"
                  value={values.estado}
                  onChange={handleChange("estado")}
                  error={errors.estado && touched.estado}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Numero del Usuario"
                  helperText={
                    errors.numero && touched.numero ? errors.numero : null
                  }
                  placeholder="Numero"
                  value={values.numero}
                  onChange={handleChange("numero")}
                  error={errors.numero && touched.numero}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Correo del Usuario"
                  helperText={
                    errors.email && touched.email ? errors.email : null
                  }
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                  error={errors.email && touched.email}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Contraseña del Usuario"
                  helperText={
                    errors.password && touched.password ? errors.password : null
                  }
                  placeholder="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  error={errors.password && touched.password}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Contraseña del Usuario"
                  helperText={
                    errors.Confpassword && touched.Confpassword
                      ? errors.Confpassword
                      : null
                  }
                  placeholder="Password"
                  type="password"
                  value={values.Confpassword}
                  onChange={handleChange("Confpassword")}
                  error={errors.Confpassword && touched.Confpassword}
                  style={{ marginBottom: 10 }}
                />
                <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Asignale un rol al usuario"
                  helperText={errors.rol && touched.rol ? errors.rol : null}
                  placeholder="Rol"
                  value={values.rol}
                  onChange={handleChange("rol")}
                  error={errors.rol && touched.rol}
                  style={{ marginBottom: 10 }}
                  select
                >
                  <MenuItem value="Administrador">Administrador</MenuItem>
                  <MenuItem value="Cliente">Cliente</MenuItem>
                </TextField>
                <Box textAlign="end">
                  <ErrorButton>Cancelar</ErrorButton>
                  <SuccessButton onClick={handleSubmit}>Agregar</SuccessButton>
                </Box>
              </>
            )}
          </Formik>
        </Container>
      </CardContent>
    </Card>
  );
}

export default FormUsuario;
