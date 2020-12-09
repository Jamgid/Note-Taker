//DEPENDENCIES//
const express = require("express");

//CREATING A VAR FOR THE EXPRESS APP AND PORT//
var app = express();
var PORT = process.env.PORT || 3000

//PARSE THE DATA//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

//IMPORT THE ROUTES//
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

//START THE SERVER//
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
