const AuthController = {};

AuthController.isVerified = ()=> {
    return (req, res, next)=> {
        res.json(req.body);
        next();
    }
}

module.exports = AuthController;