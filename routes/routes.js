const urlController = require("../controllers/urlController");

module.exports = function(app) {
  app.get("/urls/:id", async (req, res) => {
    const id = req.params.id;
    const url = await urlController.getUrlById(id);

    if (!url) {
      res.status(404);
    }

    res.redirect(url.url);
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
