const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('passport');

require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

// https://powerful-ravine-29792.herokuapp.com/ 
// https://git.heroku.com/powerful-ravine-29792.git