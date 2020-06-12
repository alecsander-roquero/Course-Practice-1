const passport = require('passport');

module.exports = (app) => {

    app.get('/', (req,res) => {
        res.send({course: 'practice'});
        
    });

    app.get('/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'],
            //successRedirect: '/auth/google/callback'
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
    );
}