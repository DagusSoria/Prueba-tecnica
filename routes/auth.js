var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth');

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const user = {username: username};

    const accessToken = auth.generateAccessToken(user);

    res.header('authorization', accessToken).json({
        message: 'User authenticated',
        token: accessToken
    })
});

module.exports = router;