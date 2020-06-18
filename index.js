const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

const passport = require('passport');

require('./models/User');
require('./services/passport');


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKeys]
    })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);

/*  1.cookieParser
    2.session
    3.passport.initialize
    4.passport.session
    5.app.router */
const PORT = process.env.PORT || 5000;

app.listen(PORT);

// https://powerful-ravine-29792.herokuapp.com/ 
// https://git.heroku.com/powerful-ravine-29792.git