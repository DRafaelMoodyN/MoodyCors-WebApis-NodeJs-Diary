# MoodyCors-WebApis-NodeJs-Diary

# NVM install

# Link https://medium.com/@diego.coder/instalar-nvm-node-version-manager-en-windows-80d6768fa183

nvm install 18.17.1
nvm use 18.17.1
nvm list
nvm current

# Clonar repositorio

git clone
git flow init

# Hacer un commit

git add .
git commit -m"nombre"
git pull
git push

# NodeJs

19.9.0
18.20.4

# Libros

https://books.goalkicker.com/

# neo console

https://console.neon.tech

# express

https://expressjs.com/en/starter/installing.html

# Commandos de script

Este comando levanta el proyecto
npm run dev

# installar los paquetes de packaje.jsons

npm install

# Configuracion 
npm init
npm init -y
npm install express
npm instal nodemon


# Postman
Agente


// // Importamos

const express = require("express");

// Creamos una instancia
const app = express();

// Puerto
const port = 5010;

// Midleware: es una funcion que se ejecuta antes o depues de una peticion https
app.use(express.json());

// Verbos Http Https: get, post, put, delete, patch
// CRUD: Creacion, Lectura, Actualizacion, Eliminado

// req resquest
// res response

// Enpoint Get Listar

// http://localhost:5010/persona/list
app.get("/persona/:id", (req, res) => {
  console.log(" Paramas", req.params);

  const id = req.params.id;

  const personList = [
    { nombre: "David 1", id: 18 },
    { nombre: "David 1", id: 25 },
    { nombre: "David 1", id: 50 },
  ];

  const listResult = personList.filter((x) => x.id == id);

  const result = {
    message: "Person encontrada",
    modelo: listResult,
  };

  res.status(200).send(result);
});

// http://localhost:5010/persona/list
app.get("/persona/list", (req, res) => {
  console.log("Query Paramas", req.query);

  const edad = req.query.edad;
  console.log("edad", edad);

  const personList = [
    { nombre: "David 1", edad: 18 },
    { nombre: "David 1", edad: 25 },
    { nombre: "David 1", edad: 50 },
  ];

  const listResult = personList.filter((x) => x.edad > edad);

  const result = {
    message: "Filtrando las personas",
    modelo: listResult,
  };

  res.send(result);
});

// Enpoint Post Guardar
// http://localhost:5010/persona/guardar

app.post("/persona/guardar", (req, res) => {
  const person = req.body;

  const result = {
    message: "Person Creada Post",
    model: person,
  };

  res.status(201).send(result);
});

// Enpoint Put Actualizar
// http://localhost:5010/persona/guardar

app.put("/persona/actualizar", (req, res) => {
  res.status(201).send("Persona modificada put");
});

// Enpoint Delete Eliminar
// http://localhost:5010/persona/guardar

app.delete("/persona/eliminar", (req, res) => {
  res.status(200).send("Persona eliminada");
});

app.listen(port, () => {
  // Ruta Base
  console.log("http://localhost:5010/");
});
