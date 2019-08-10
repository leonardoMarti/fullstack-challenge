const urlController = require("../controllers/urlController");
const userController = require("../controllers/userController");

module.exports = function(app) {
  app.get("/:shortUrl", async (req, res) => {
    const serverUrl = req.protocol + "://" + req.get("host");
    const shortUrl = req.params.shortUrl;
    const url = await urlController.getUrlByShortUrl(
      serverUrl + "/" + shortUrl
    );

    if (!url) {
      res.status(404).send();
      return;
    }

    await urlController.hitUrl(url._id);

    res.redirect(url.url);
  });

  app.get("/urls/:id", async (req, res) => {
    const id = req.params.id;
    const url = await urlController.getUrlById(id);

    if (!url) {
      res.status(404).send();
      return;
    }

    await urlController.hitUrl(url._id);

    res.redirect(url.url);
  });

  app.delete("/urls/:id", async (req, res) => {
    const id = req.params.id;
    await urlController.deleteUrl(id);

    res.status(200).send();
  });

  app.post("/users", async (req, res) => {
    const user = await userController.createUser(req.body);

    if (!user) {
      res.status(409).send();
      return;
    }

    res.status(201).send(user);
  });

  app.post("/user/:userid/urls", async (req, res) => {
    const params = req.body;
    const userId = req.params.userid;
    const serverUrl = req.protocol + "://" + req.get("host");

    const url = await urlController.createUrl(params, userId, serverUrl);

    if (!url) {
      res.status(404).send();
      return;
    }

    res.status(201).send(url);
  });

  app.get("/users/:userId/stats", (req, res) => {
    res.send("/users/:userId/stats");
  });

  app.delete("/user/:userid", async (req, res) => {
    const id = req.params.userid;
    await userController.deleteUser(id);

    res.status(200).send();
  });

  app.get("/stats", (req, res) => {
    res.send("/stats");
  });

  app.get("/stats/:id", (req, res) => {
    res.send("/stats/:id");
  });
};
