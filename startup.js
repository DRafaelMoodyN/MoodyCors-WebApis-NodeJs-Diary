const { Programa } = require("./src/webApis/program");
const { appRouter } = require("./src/webApis/routes/appRouter");

// Funcion main
const startup = () => {
  const app = new Programa(5011, appRouter());
};

startup();
