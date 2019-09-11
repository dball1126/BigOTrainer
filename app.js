const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const quizzes = require('./routes/api/quizzes');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/quizzes", quizzes);

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connectged to MongoDB successfully"))
    .catch(err => console.log(err));
app.listen(port, () => console.log(`Server is running on port ${port}`));