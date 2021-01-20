const passportLocal = require('passport-local'),
    passport = require('passport');


const LocalStrategy = passportLocal.Strategy;
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    if (email === "admin@gmail.com" && password === "admin") {
        const user = { email: email, password: password, isAdmin: true };
        return done(null, user);
    }
    else if (email === 'user@gmail.com' && password === "user") {
        const user = { email: email, password: password, isAdmin: false };
        return done(null, user);
    }
    else {
        return done(null, false, { message: 'Incorrect credentials' });
    }
}));

passport.serializeUser((user, done) => {
    if (user)
        done(null, user);
});
passport.deserializeUser((id, done) => {
    done(null, { id: id, name: 'test' });
});

// Passport Middleware 
const auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (user) {
                if (req.body.adminRoute === user.isAdmin) {
                    req.body = user; // Changing here to include isAdmin inside req.body object
                    next();
                }
                else {
                    res.json(info);
                }
            }
            else {
                res.json(info);
            }
            if (err)
                next(err);
        })(req, res, next);
    };
};

module.exports = auth;