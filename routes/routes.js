const urlController = require("../controllers/urlController");
const userController = require("../controllers/userController");
const statsController = require("../controllers/statsController");

module.exports = function(app) {
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

  app.get("/users/:userid/stats", async (req, res) => {
    const id = req.params.userid;
    const stats = await statsController.getUserStats(id);
    res.send(stats);
  });

  app.delete("/user/:userid", async (req, res) => {
    const id = req.params.userid;
    await userController.deleteUser(id);

    res.status(200).send();
  });

  app.get("/stats/:id", async (req, res) => {
    const id = req.params.id;
    const url = await urlController.getUrlById(id);

    res.send(url);
  });

  app.get("/stats", async (req, res) => {
    const stats = await statsController.getStats();
    res.send(stats);
  });

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
};
