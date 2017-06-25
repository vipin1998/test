    /*
    * @author : Vipin Kumar
    * @date : june 25, 2017
    * @brief This route check that the user is admin or not
    * @return Null.
    */

exports.checkAdmin = function (req, res, next)
    {
        var auth_header = req.headers.authorization;
        if (null == auth_header)
        {
            res.status(401)
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
            if (user_name == 'vipin' && pass == 'gravity')
            {
                next();
            }
            else
            {
                res.status(401)
                res.json({
                    "data": {
                        "error": "Wrong username or password"
                    }
                })
            }
        }
    };


    /*
    * @author : Vipin Kumar
    * @date : june 25, 2017
    * @brief This route check that the user is manager or not
    * @return Null.
    */
exports.checkManager = function (req, res, next)
    {
        var auth_header = req.headers.authorization;
        if (null == auth_header)
        {
            res.status(401)
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
            if (user_name == 'vipin' && pass == '12345')
            {
                next();
            }
            else
            {
                res.status(401)
                res.json({
                    "data": {
                        "error": "Wrong username or password"
                    }
                })
            }
        }
    };