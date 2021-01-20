import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { SuccessButton, ErrorButton } from "./Buttons";
import { Formik } from "formik";
import Axios from "axios";

function FormProducto({ handle }) {
  const [fileInputState, setfileInputState] = useState("");
  const [preview, setPreview] = useState("");
  const [categorias, setCategorias] = useState([]);
  const handleSubmite = (values) => {
    if (preview === "") {
      alert("Selecciona alguna imagen");
      return;
    }
    values.imagen = preview;
    handle(values);
  };

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };
  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get("/categorias");
      return data;
    }
    initial().then((cat) => {
      setCategorias(cat);
    });
  }, []);
  return (
    <>
      <Card>
        <CardContent>
          <Container>
            <Formik
              initialValues={{
                descripcion: "",
                cantidad: "",
                precio: "",
                categoria: "",
              }}
              onSubmit={(values) => {
                handleSubmite(values);
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                  <TextField
                    fullWidth
                    label="Agrega una descripcion"
                    placeholder="Descripcion"
                    variant="outlined"
                    style={{ marginBottom: 10 }}
                    value={values.descripcion}
                    onChange={handleChange("descripcion")}
                    helperText={
                      errors.descripcion && touched.descripcion
                        ? errors.descripcion
                        : null
                    }
                    error={errors.descripcion && touched.descripcion}
                  />
                  <TextField
                    fullWidth
                    label="Cantidad de productos"
                    placeholder="Cantidad"
                    variant="outlined"
                    style={{ marginBottom: 10 }}
                    value={values.cantidad}
                    onChange={handleChange("cantidad")}
                    helperText={
                      errors.cantidad && touched.cantidad
                        ? errors.cantidad
                        : null
                    }
                    error={errors.cantidad && touched.cantidad}
                  />
                  <TextField
                    fullWidth
                    label="Agrega un precio"
                    placeholder="Precio"
                    variant="outlined"
                    style={{ marginBottom: 10 }}
                    value={values.precio}
                    onChange={handleChange("precio")}
                    helperText={
                      errors.precio && touched.precio ? errors.precio : null
                    }
                    error={errors.precio && touched.precio}
                  />
                  <TextField
                    fullWidth
                    label="Selecciona la categoria a la que va pertenecer"
                    placeholder="Categoria"
                    variant="outlined"
                    select
                    style={{ marginBottom: 10 }}
                    value={values.categoria}
                    onChange={handleChange("categoria")}
                    helperText={
                      errors.categoria && touched.categoria
                        ? errors.categoria
                        : null
                    }
                    error={errors.categoria && touched.categoria}
                  >
                    {categorias.map((cat, index) => (
                      <MenuItem key={index} value={cat._id}>
                        {cat.nombre}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <input
                        type="file"
                        onChange={handleChangeImage}
                        className="form-input"
                        value={fileInputState}
                        style={{ marginBottom: 10 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {preview && (
                        <img
                          src={preview}
                          alt="algo"
                          style={{ width: 300, height: 300, marginBotton: 10 }}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Box textAlign="end">
                    <ErrorButton>Cancelar</ErrorButton>
                    <SuccessButton onClick={handleSubmit}>
                      Aceptar
                    </SuccessButton>
                  </Box>
                </>
              )}
            </Formik>
          </Container>
        </CardContent>
      </Card>
    </>
  );
}

export default FormProducto;
