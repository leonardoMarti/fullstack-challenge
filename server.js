const express = require("express");
const app = express();

require("./database/config");
require("./routes/routes")(app);

app.listen(3000);
