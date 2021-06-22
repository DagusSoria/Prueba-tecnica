const jwt = require('jsonwebToken')
const { ACCESSTOKENHASH } = require('../config/default');

module.exports = {

    validateToken:(req, res, next) => {
        const accessToken = req.headers['authorization'];
        if(!accessToken) res.send('Access Invalid');

        jwt.verify(accessToken, ACCESSTOKENHASH, (err, user) => {
            if(err){
                res.send("Access Denied Token Expired or invalid")
            } else {
                next();
            }
        })
    },

    generateAccessToken:(user) => {
        return jwt.sign(user, ACCESSTOKENHASH, {expiresIn: '5m'} )
    }
};