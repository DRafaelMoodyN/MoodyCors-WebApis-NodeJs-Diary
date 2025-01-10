const { Router } = require("express");
const { getPersonList } = require("../controller/personController");

const personRoute = () => {
  const router = Router();

  // Enpoints
  router.get("/person/list", getPersonList);
  return router;
};

module.exports = {
  personRoute,
};
