const express = require("express"); //Express is for building the Rest apis
const cors = require("cors"); //provides Express middleware to enable CORS with various options
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

require("./routes/products.routes.js")(app);
require("./routes/category.routes.js")(app);
require("./routes/sub_category.routes.js")(app);

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => console.log("re-sync done!"));
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to endris application." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080; //listen on port 8080 for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
