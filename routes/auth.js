const express = require('express'),
    router = express.Router({mergeParams: true}),
    AuthController = require('../controllers/auth');
    authMiddleware = require('../middleware/authentication');

router.post('/', authMiddleware(), AuthController.isVerified(), (req, res) => {
        
    });

module.exports = router;