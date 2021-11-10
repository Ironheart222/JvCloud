const express = require('express');
const router = express.Router();

 var VerifyToken = require('../controllers/VerifyToken');
 

const api_user = require('../controllers/api_user');

const register_schema = require('../validation/register_schema');
const register_validation = require('../validation/register_velidation');


router.post('/gstmain/userregister', register_validation.uservalidation(register_schema), api_user.usersRegister);
router.post('/gstmain/userlogin',api_user.usersLogin);
router.delete('/gstmain/userlogout', api_user.userlogout);
router.post('/gstmain/forgot_password', api_user.user_forgot_password);
router.put('/gstmain/reset_password', api_user.user_reset_password);


router.post('/gstmain/addusers', VerifyToken,api_user.addusers);
router.get('/gastmain/getusers', VerifyToken,api_user.getusers);
router.get('/gastmain/getusersbyid/:userId', VerifyToken,api_user.getusersbyid);
router.put('/gstmain/updateusers', VerifyToken, api_user.updateusers);
router.delete('/gstmain/deleteusers/:userId', VerifyToken, api_user.deleteusers);

const api_usersInfo = require('../controllers/api_usersInfo')
router.post('/gstmain/addusersInfo', VerifyToken, api_usersInfo.addusersInfo);
router.get('/gstmain/getusersInfo', VerifyToken, api_usersInfo.getusersInfo);
router.get('/gstmain/getusersInfobyId/:userId', VerifyToken,api_usersInfo.getuserInfobyid);
router.put('/gstmain/updateusersInfo', VerifyToken, api_usersInfo.updateusersInfo);
router.delete('/gstmain/deleteusersInfo/:userId', VerifyToken, api_usersInfo.deleteusersInfo);

const api_userCompany = require('../controllers/api_userCompany')
router.post('/gstmain/adduserCompany', VerifyToken,api_userCompany.adduserCompany);
router.get('/gstmain/getuserCompany', VerifyToken, api_userCompany.getuserCompany);
router.get('/gstmain/getuserCompanybyid/:userId', VerifyToken, api_userCompany.getuserCompanybyid);
router.put('/gstmain/updateuserCompany', VerifyToken, api_userCompany.updateuserCompany);
router.delete('/gstmain/deleteuserCompany/:userId', VerifyToken,api_userCompany.deleteuserCompany);
router.get('/gstmain/getuserCompanybyuserId/:userId', VerifyToken,api_userCompany.getuserCompanybyuserId);



const api_company = require('../controllers/api_company')
router.post('/gstmain/addcompany', VerifyToken,api_company.addcompany);
router.get('/gstmain/getcompany', VerifyToken,api_company.getcompany);
router.get('/gstmain/getcompanybyid/:userId', VerifyToken,api_company.getcompanybyid);
router.get('/gstmain/getcompanybyUserid/:userId', VerifyToken,api_company.getcompanybyUserid);
router.put('/gstmain/updatecompany', VerifyToken,api_company.updatecompany);
router.delete('/gstmain/deletecompany/:userId', VerifyToken,api_company.deletecompany);


module.exports = router