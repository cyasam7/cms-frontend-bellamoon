import * as yup from "yup";

export const schemaUsuario = yup.object().shape({
  nombreCompleto: yup
    .string()
    .max(50, "Limite de caracteres")
    .required("Campo requerido"),
  direccion: yup
    .string()
    .max(70, "Limite de caracteres")
    .required("Campo requerido"),
  pais: yup
    .string()
    .max(20, "Limite de caracteres")
    .required("Campo requerido"),
  estado: yup
    .string()
    .max(20, "Limite de caracteres")
    .required("Campo requerido"),
  numero: yup
    .number()
    .max(10000000000000000000, "Limite de caracteres")
    .required("Campo requerido"),
  email: yup.string().email().required("Campo requerido"),
  password: yup
    .string()
    .max(20, "Limite de caracteres")
    .required("Campo requerido"),
  Confpassword: yup
    .string()
    .max(20, "Limite de caracteres")
    .required("Campo requerido"),
  rol: yup.string().max(50, "Limite de caracteres").required("Campo requerido"),
});

export const schemaProducto = yup.object().shape({
  descripcion: yup
    .string()
    .max(100, "Limite de caracteres")
    .required("Campo requerido"),
  cantidad: yup
    .number("Tiene que ser numero")
    .max(100000, "Limite de caracteres")
    .required("Campo requerido"),
  precio: yup
    .number("Tiene que ser numero")
    .max(1000000, "Limite de caracteres")
    .required("Campo requerido"),
  imagen: yup.string().required("Campo requerido"),
  categoria: yup.string().required("Campo requerido"),
});
