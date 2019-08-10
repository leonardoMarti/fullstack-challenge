const urlController = require("../controllers/urlController");
const userController = require("../controllers/userController");

module.exports = function(app) {
  app.get("/urls/:id", async (req, res) => {
    const id = req.params.id;
    const url = await urlController.getUrlById(id);

    if (!url) {
      res.status(404).send();
      return;
    }

    res.redirect(url.url);
  });

  app.delete("/urls/:id", (req, res) => {
    res.send("/urls/:id");
  });

  app.post("/users", async (req, res) => {
    const user = await userController.createUser(req.body);

    if (!user) {
      res.status(409).send();
      return;
    }

    res.status(201).send(user);
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
