const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT ||8080;
var path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'app')));