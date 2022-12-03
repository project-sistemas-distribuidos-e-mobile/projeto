const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const routes_1 = require("./routes");

const app = express();
app.use(cors);
app.use(routes_1.routes);

exports.app = functions.https.onRequest(app);