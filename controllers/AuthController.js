var express = require('express');
const { dbCon } = require('../dbservices')
var router = express.Router();
var bodyParser = require('body-parser');
require('dotenv').config;
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
const saltRounds = 10;
var config = require('../config'); // get config file
const nodemailer = require('nodemailer');


//  login

const loginuser = (req, res) => {
    var userId = req.body.userId;
    var password = req.body.password;
    var sql = "USE gstmain";
    dbCon().query(sql, function (err, usersArr) {
        if (err) throw err;

    });

    let sql1 = "SELECT * FROM auth WHERE userId='" + userId + "'";
    dbCon().query(sql1, async (err, results) => {
        if (err) throw err;
        if (results.length == 0) {
            res.json({ "status": false, "error": 'not User with that userId', "tokenId": null });
            return;
        }
        var valid = await bcrypt.compare(password, results[0].password);
        if (!valid) {
            res.json({ "status": false, "error": 'Incorrect Password', "tokenId": null });
            return;
        }
        bcrypt.hash(password, saltRounds, function (err, hash) {
            var tokenId = jwt.sign({ id: userId }, config.secret, {
                expiresIn: '2592000'
            });

            var sql = "UPDATE auth SET tokenId = '" + tokenId + "' WHERE userId = '" + userId+"'";
            dbCon().query(sql,function (err) {if (err) throw err; });
            // res.json({ "status": true, "message": "login successfull", "data": [{ "userId": req.body.userId, "password": hash, "tokenId": tokenId }], "result": results[0] });

            let sql1 = "SELECT * FROM auth WHERE userId='" + userId + "'";
            dbCon().query(sql1, async (err, results) => {
                res.json({ "status": true, "message": "login successfull", "data": results[0] });
            });
        })
    })
};


const logoutuser = (req, res) => {
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


// Register
const  registeruser = (req, res) => {

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
    var sql1 = "INSERT INTO auth (userId,partnerId,userType,emailId,mobileNumber,userStatus,tokenId,password,userName)VALUES('" + userId + "','" + partnerId + "','" + userType + "','" + emailId + "','" + mobileNumber + "','" + userStatus + "','" + tokenId + "','" + password + "','" + userName + "')"; 
    
    dbCon().query(sql1, (err) => { if (err) throw err; });

     return res.json({
         "message": "Registration Successfull",
         "status": true,
         "data": [{ "userId": req.body.userId, "partnerId": req.body.partnerId, "userType": req.body.userType, "emailId": req.body.emailId, "mobileNumber": req.body.mobileNumber, "userStatus": req.body.userStatus, "tokenId": tokenId, "password": password, "userName": req.body.userName }]
     });
     
}



const forgot_password = (req, res) => {

    var emailId = req.body.emailId;
    var sql = "USE gstmain";
    dbCon().query(sql, function (err) { if (err) throw err; });

    var sql1 = "SELECT * FROM auth WHERE emailId='" + emailId + "'";

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

const reset_password = (req,res) => {
    var password1 = req.body.password;
    var emailId = req.body.emailId;

        var sql = "USE gstmain";
        dbCon().query(sql, function (err) { if (err) throw err; });
        
        let sql1 = "SELECT * FROM users WHERE emailId='" + emailId + "'";
        dbCon().query(sql1, (err, results) => {
            if (err) throw err;
            if (results.length == 0) {
                res.json({ "status": false, "error": 'not User with that emailid' });
                return;
            }else{
                bcrypt.hash(password1, saltRounds, function (err, hash) {   
                    var sql1 = "UPDATE auth SET password = '" + hash + "' WHERE emailId = '" + emailId+"'";
                    dbCon().query(sql1,function (err) {if (err) throw err; });
                    });
                res.status(200).json({"message": "Password Reset Successfully","status": true})
            }   
        })   
    } 
       
    
    // else {
    //     var sql2 = "UPDATE users SET password = '" + password + "' WHERE emailId = '" + emailId+"'";
    //     dbCon().query(sql2,function (err) {if (err) throw err; });

    //     res.status(200).json({"message": "Password Reset Successfully","status": true})
    // }  



module.exports = {
    loginuser,
    registeruser,
    logoutuser,
    forgot_password,
    reset_password
}