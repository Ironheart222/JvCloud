const { dbCon } = require('../dbservices')
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get config file
const nodemailer = require('nodemailer');
const { exist } = require('joi');



// Register
const  usersRegister = (req, res) => {

    let userId = req.body.userId;
    let partnerId = req.body.partnerId;
    let userType = req.body.userType;
    let emailId = req.body.emailId;
    let mobileNumber = req.body.mobileNumber;
    let userStatus = req.body.userStatus;
    var password = req.body.password;
    let userName = req.body.userName;


     var sql = "USE gstmain";
     dbCon().query(sql, function (err) { if (err) throw err; });
     var tokenId = jwt.sign({ id: emailId.id }, config.secret, {
         expiresIn: 2592000
     });
    var sql1 = "INSERT INTO users (userId,partnerId,userType,emailId,mobileNumber,userStatus,tokenId,password,userName)VALUES('" + userId + "','" + partnerId + "','" + userType + "','" + emailId + "','" + mobileNumber + "','" + userStatus + "','" + tokenId + "','" + password + "','" + userName + "')"; dbCon().query(sql1, (err) => { if (err) throw err; });

     return res.json({
         "message": "Registration Successfull",
         "status": true,
         "data": [{ "userId": req.body.userId, "partnerId": req.body.partnerId, "userType": req.body.userType, "emailId": req.body.emailId, "mobileNumber": req.body.mobileNumber, "userStatus": req.body.userStatus, "tokenId": tokenId, "password": password, "userName": req.body.userName }]
     });
     
}


//users login
const usersLogin = (req, res) => {
    var userId = req.body.userId;
    var password = req.body.password;
    var sql = "USE gstmain";
    dbCon().query(sql, function (err, usersArr) {
        if (err) throw err;
  
    });
  
    let sql1 = "SELECT * FROM users WHERE userId='" + userId + "'";
    dbCon().query(sql1, async (err, results) => {
        if (err) throw err;
        if (results.length == 0) {
            res.json({ "status": false, "error": 'not User with that userId', "tokenId": null });
            return;
        }
        var valid = password != results[0].password;
        if (valid) {
            res.json({ "status": false, "error": 'Incorrect Password', "tokenId": null });
            return;
        }else{
          var tokenId = jwt.sign({ id: userId }, config.secret, {
            expiresIn: 2592000
        });
         var sql = "UPDATE users SET tokenId = '" + tokenId + "' WHERE userId = '" + userId+"'";
            dbCon().query(sql,function (err) {if (err) throw err; });
            // res.json({ "status": true, "message": "login successfull", "data": [{ "userId": req.body.userId, "password": hash, "tokenId": tokenId }], "result": results[0] });

            let sql1 = "SELECT*FROM users WHERE userId='" + userId + "'";
            dbCon().query(sql1, async (err, results) => {
                res.json({ "status": true, "message": "login successfull", "data": results[0] });
            });
        }
       
    })
  };
  
//   user logout
  const userlogout = (req, res) => {
    var accesstoken = req.body.accesstoken;

    var sql = "USE gstmain";
    dbCon().query(sql, function (err) {
        if (err) throw err;

    });

    var sql1 = "INSERT INTO token_logs (accesstoken) VALUES ('" + accesstoken + "')";
    dbCon().query(sql1, function (err) {
        if (err) throw err;

    }); res.json({ "message": "logout Successfull", "status": true })

};


// Forgot Password
const user_forgot_password = (req, res) => {

    var emailId = req.body.emailId;
    var sql = "USE gstmain";
    dbCon().query(sql, function (err) { if (err) throw err; });

    var sql1 = "SELECT * FROM users WHERE emailId='" + emailId + "'";

    dbCon().query(sql1, function (err, result) {

        if (result.length != 0){
           
        const tokenId = jwt.sign({ id: emailId.id }, config.secret, { expiresIn: 2592000 });
        const data = {}
        data.tokenId = tokenId;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ovesh.widlestudio@gmail.com',
                pass: 'lofty@123'
            }
        });

        var mailOptions = {
            from: 'ovesh.widlestudio@gmail.com',
            to: emailId,
            subject: 'Password Reset',
            text: 'here',
            html: `<p>Reset Password</p><a href="http://localhost:4200/reset-password?emailId=${emailId}">click here</a>`,
            link: `http://localhost:4200/reset-password?emailId=${emailId}`,
            // link: 'http://localhost:4200/reset-password/"'+emailId"'
            // link: '`${process.env.FRONT_END_URL}/reset_password?emailID=${emailId}`,'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else { 
                console.log('Email sent: ' + info.response);
            }
        });
        res.json({ "message": "Email send successfully ", "status": true });
      }
      else {
            return res.json({ "message": "user not found", "status": false })
      }
        
        
    })
    
    
}

// users Reset-password
const user_reset_password = (req,res) => {
    var password = req.body.password;
    var emailId = req.body.emailId;
    
    var sql = "USE gstmain";
        dbCon().query(sql, function (err) { if (err) throw err; });
    let sql1 = "SELECT * FROM users WHERE emailId='" + emailId + "'";
    dbCon().query(sql1, (err, results) => {
        if (err) throw err;
        if (results.length == 0) {
            res.json({ "status": false, "error": 'not User with that emailid' });
            return;
        }
        else {
            var sql2 = "UPDATE users SET password = '" + password + "' WHERE emailId = '" + emailId+"'";
            dbCon().query(sql2,function (err) {if (err) throw err; });

            res.status(200).json({"message": "Password Reset Successfully","status": true})
        }   
    })
 } 
    


// POST
const addusers = (req, res) => {

        let json_data = req.body;
        var json_string = JSON.stringify(json_data);
        var obj = JSON.parse(json_string);
        var length = Object.keys(obj).length;
        // console.log(length);
        usersArr = [];
        // console.log(req.body);
        
        for (var i in json_data) {
            usersArr.push([json_data[i]['userId'], json_data[i]['partnerId'], json_data[i]['userType'],
            json_data[i]['emailId'], json_data[i]['mobileNumber'], json_data[i]['userStatus'],
            json_data[i]['tokenId'], json_data[i]['password'], json_data[i]['userName']]);

            var sql = "USE " + process.env.database;
            dbCon().query(sql, function (err, usersArr) {
                if (err) throw err;

            });


            var sql1 = "INSERT INTO users (userId,partnerId,\
                                        userType,emailId,\
                                        mobileNumber,userStatus,\
                                        tokenId,password,userName)\
                    VALUES ('" + json_data[i]['userId'] + "','" + json_data[i]['partnerId'] + "','" + json_data[i]['userType'] +
                "','" + json_data[i]['emailId'] + "','" + json_data[i]['mobileNumber'] +
                "','" + json_data[i]['userStatus'] + "','" + json_data[i]['tokenId'] +
                "','" + json_data[i]['password'] + "','" + json_data[i]['userName'] + "')";

            dbCon().query(sql1, (err, rows) => {
                if (err) throw err;
                 console.log(usersArr);
                

            }); 
        }
        console.log();
        if ((length - 1) == i) {
            res.status(200).json({ "message": "successfull", "status": true, "data":req.body})
        }else{
            console.error();
        }
    
};

//GET

//Get all 
const getusers = (req, res) => {
    dbCon().query('SELECT * FROM '+process.env.database +'.users;', (err, rows) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": "true", "data": rows })
        else
            console.log(err);
    })
};

// Get by ID
const getusersbyid = (req, res) => {
    dbCon().query('SELECT * FROM ' + process.env.database +'.users WHERE userId = ?', [req.params.userId], (err, rows) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": "true", "data": rows });
        else
            console.log(err);
    })
};

// Update an user
const updateusers = async(req, res) => {
    let users = req.body;
    var sql = "USE " + process.env.database ;
    dbCon().query(sql, function (err, result) {
        if (err) throw err;
    });
    var sql1 = "UPDATE users SET partnerId=?,userType=?,emailId=?,mobileNumber=?,userStatus=?,tokenId=?,password=?,userName=? WHERE userId= "+'users.userId'+";";
    dbCon().query(sql1, [users.partnerId,users.userType,users.emailId,users.mobileNumber,users.userStatus,users.tokenId,users.password,users.userName,users.userId,] , (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": users});
        else
            console.log(err);
    })
};

// delete an user
const deleteusers = (req, res) => {

    var sql = "USE " + process.env.database ;
    dbCon().query(sql, function (err) {

    });
    dbCon().query("DELETE FROM users WHERE userId =" + [req.params.userId], (err, result) => {
        if (result.affectedRows == 0)
            return res.json({ "message": "user not found", "status": false });

        else (!err)
        res.json({ "message": "Delete successfull", "status": true, "data": [] });

    })



};



module.exports = {
    usersRegister,
    usersLogin,
    userlogout,
    user_forgot_password,
    user_reset_password,
    addusers,
    getusers,
    getusersbyid,
    updateusers,
    deleteusers
}