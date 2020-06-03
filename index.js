const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 'mememememe',
    clientSecret: 'ewewewewewe',
    callbackURL: 'auth/google/callback'
},  (accessToken) => {
        console.log(accessToken);
}
));

app.get('/', (req,res) => {
    res.send({course: 'practice'});
    
});

app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

