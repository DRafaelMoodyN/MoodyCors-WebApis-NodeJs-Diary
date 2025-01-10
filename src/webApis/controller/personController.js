const { request, response } = require("express");

const postCreatePerson = (req = request, res = response) => {
  const persona = {
    nombre: "David",
  };

  const result = {
    modelo: persona,
    message: "La persona fue creada",
    status: 201,
  };

  res.status(201).json(result);
};

const getPersonList = (req = request, res = response) => {
  const persona = {
    nombre: "David",
  };

  res.status(201).json(persona);
};

module.exports = {
  postCreatePerson,
  getPersonList,
};
