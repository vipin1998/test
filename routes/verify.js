var config = require('../config/main'); // Main configuration file.
var appGlobal = require('../app_global'); 

/*
    * @author : Vipin Kumar
    * @date : April 06, 2017
    * @brief This route check that the user is admin or not
    * @todo Error handling.
    * @return Null.
    */

exports.checkAdmin = function (req, res, next)
    {
        var auth_header = req.headers.authorization;
        if (null == auth_header)
        {
            res.status(appGlobal.USER_NOT_AUTHORIZED)
            res.json({
                "data": {
                    "error": "user not authenticated"
                }
            })
        }
        else
        {
            var auth = new Buffer(auth_header.split(' ')[1], 'base64').toString().split(':');
            var user_name = auth[0];
            var pass = auth[1];
            if (user_name == config.admin.username && pass == config.admin.password)
            {
                next();
            }
            else
            {
                res.status(appGlobal.USER_NOT_AUTHORIZED)
                res.json({
                    "data": {
                        "error": "Wrong username or password"
                    }
                })
            }
        }
    };