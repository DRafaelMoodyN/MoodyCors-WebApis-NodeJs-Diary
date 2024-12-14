// Importamos

const express = require("express");

// Creamos una instancia
const app = express();

// Puerto
const port = 5010;

// Verbos Http Https: get, post, put, delete, patch
// CRUD: Creacion, Lectura, Actualizacion, Eliminado

// req resquest
// res response

// Enpoint Get Listar

// http://localhost:5010/persona/list
app.get("/persona/list", (req, res) => {
  res.send("Lista de persona");
});

// Enpoint Post Guardar
// http://localhost:5010/persona/guardar

app.post("/persona/guardar", (req, res) => {
  res.send("Persona Creada post");
});

// Enpoint Put Actualizar
// http://localhost:5010/persona/guardar

app.put("/persona/actualizar", (req, res) => {
  res.send("Persona modificada put");
});

// Enpoint Delete Eliminar
// http://localhost:5010/persona/guardar

app.delete("/persona/eliminar", (req, res) => {
  res.send("Persona eliminada");
});

app.listen(port, () => {
  // Ruta Base
  console.log("http://localhost:5010/");
});
