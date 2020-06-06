const passport = require('passport');

module.exports = (app) => {

app.get('/', (req,res) => {
    res.send({course: 'practice'});
    
});

app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

}