const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const quizes = require('./routes/api/quizes');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

app.get("/", (req, res, next) => res.send("Hello Baby"));
app.use("/api/users", users);
app.use("/api/quizes", quizes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connectged to MongoDB successfully"))
    .catch(err => console.log(err));
app.listen(port, () => console.log(`Server is running on port ${port}`));