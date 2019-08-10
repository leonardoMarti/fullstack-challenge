const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("./database/config");
require("./routes/routes")(app);

app.listen(3000);
