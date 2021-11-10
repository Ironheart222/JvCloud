
var jwt = require('jsonwebtoken');
var config = require('../config');

function VerifyToken(req, res, next) {

    // var token = req.headers.authorization.split(' ')[1]; //req.headers['authorization'];
    var token = req.query.token;
    if(!token){
        token = req.body.token;
    }
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err)
        {
            if(err['name'] === "TokenExpiredError")
            {
                return res.status(403).send({ auth: false, message: 'Token expired.' });
            }
            else
            {
                return res.status(403).send({ auth: false, message: 'Failed to authenticate token.' });
            }
        }
        req.email = decoded.email;
        next();
    });

}

module.exports = VerifyToken;