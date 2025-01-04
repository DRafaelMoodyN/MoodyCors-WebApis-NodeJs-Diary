const express = require("express");

class Programa {
  constructor(port = 5010, router) {
    this.port = port;
    this.app = express();
    this.router = router;

    this.middleware();
    this.listen();
  }

  middleware = () => {
    this.app.use(express.json());
    this.app.use(this.router);
  };

  listen = () => {
    this.app.listen(this.port, () => {
      console.log("http://localhost:5010/");
    });
  };
}

module.exports = {
  Programa,
};
