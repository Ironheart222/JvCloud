const { dbCon } = require('../dbservices');

 function validateDto(schema){
    return async (req, res, next) => {
        try {
            await schema.validate(req.body);
            var userId = req.body.userId;
            var emailId = req.body.emailId;
            var sql = "USE " + process.env.database;
            dbCon().query(sql, function (err) { if (err) throw err; });

            if (userId == emailId) {
                
                    
                let sql1 = "SELECT*FROM auth WHERE userId='" + userId + "'";
                dbCon().query(sql1, async (err, results) => {

                    if (results.length == 0) {
                        next();
                    } else 
                    return res.json(({ "status": false, "message": "userId all ready exists" })).end();

                })
            
            } else
               return res.json(({ "status": false, "message": "userId and emailId must be same" })).end();
        }
        catch (ValidationError) {
            return res.json(({ "status": false, "message": ValidationError.toString() }));

        }
    }
}

function uservalidation (schema)  {
    return async (req, res, next) => {
        try {
            await schema.validate(req.body);
            var userId = req.body.userId;
            var emailId = req.body.emailId;
            var sql = "USE " + process.env.database;
            dbCon().query(sql, function (err) { if (err) throw err; });

            if (userId == emailId) {
                
                    
                let sql1 = "SELECT*FROM users WHERE userId='" + userId + "'";
                dbCon().query(sql1, async (err, results) => {

                    if (results.length == 0) {
                        next();
                    } else 
                    return res.json(({ "status": false, "message": "userId all ready exists" })).end();

                })
            
            } else
               return res.json(({ "status": false, "message": "userId and emailId must be same" })).end();
        }
        catch (ValidationError) {
            return res.json(({ "status": false, "message": ValidationError.toString() }));

        }
    }
}


module.exports = {
    validateDto,
    uservalidation
}