const urlController = require("../controllers/urlController");

module.exports = function(app) {
  app.get("/urls", async (req, res) => {
    const urls = await urlController.getUrls();
    res.send(urls);
  });

  app.get("/urls/:id", (req, res) => {
    res.send("/urls/:id");
  });

  app.delete("/urls/:id", (req, res) => {
    res.send("/urls/:id");
  });

  app.post("/users", (req, res) => {
    res.send("/users");
  });

  app.get("/users/:userId/stats", (req, res) => {
    res.send("/users/:userId/stats");
  });

  app.delete("/user/:userid", (req, res) => {
    res.send("/urls/:id");
  });

  app.post("/user/:userid/urls", (req, res) => {
    res.send("/user/:userid/urls");
  });

  app.get("/stats", (req, res) => {
    res.send("/stats");
  });

  app.get("/stats/:id", (req, res) => {
    res.send("/stats/:id");
  });
};
