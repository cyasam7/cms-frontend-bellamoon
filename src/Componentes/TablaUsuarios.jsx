import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { WarningButton, ErrorButton } from "../Componentes/Buttons";
function TablaUsuarios({ data, Delete }) {
  const handleDelete = (id) => {
    Delete(id);
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Pais</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Numero</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.nombreCompleto}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.pais}</TableCell>
              <TableCell>{user.estado}</TableCell>
              <TableCell>{user.direccion}</TableCell>
              <TableCell>{user.numero}</TableCell>
              <TableCell>
                <Box textAlign="center">
                  <br />
                  <ErrorButton
                    onClick={() => handleDelete(user._id)}
                    style={{ marginBottom: 5 }}
                    color="error"
                  >
                    Eliminar
                  </ErrorButton>
                  <br />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablaUsuarios;
