const express = require("express");

(async () => {
  const app = express();

  app.get("/test", (_req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.sendFile("./Leo.svg", {root: __dirname});
  });

  app.listen(3000);
})();
