const { Router } = require("express");
const { personRoute } = require("./personRoute");

const appRouter = () => {
  const app = Router();

  // Rutas bases

  app.use("/person", personRoute());

  return app;
};

module.exports = {
  appRouter,
};
