const { array } = require('joi');
const { dbCon } = require('../dbservices')

const adduserCompany = (req, res) => {
    let json_data = req.body;
    var json_string = JSON.stringify(json_data);
    var obj = JSON.parse(json_string);
    var length = Object.keys(obj).length;
    console.log(length);
    userCompanyArr = [];
    console.log(req.body);

    for (var i in json_data) {
        userCompanyArr.push([json_data[i]['userId'], json_data[i]['companyId'], json_data[i]['companyStatus']]);

        var sql = "USE "+ process.env.database;
        dbCon().query(sql, function (err, result) {
            if (err) throw err;

        });

        var sql1 = "INSERT INTO userCompany (userId,companyId,companyStatus) \
                    VALUES ('" + json_data[i]['userId'] + "','" + json_data[i]['companyId'] + "','" + json_data[i]['companyStatus'] + "')";

        dbCon().query(sql1, (err, rows) => {
            if (err) throw err;
            console.log(userCompanyArr);

        });
    }
    console.log();
    if ((length - 1) == i) {
        res.status(200).json({ "message": "successfull", "status": true, "data": req.body })
    } else {
        console.error();
    }
};
//Get all 
const getuserCompany = (req, res) => {
    dbCon().query('SELECT * FROM ' + process.env.database +'.userCompany;', (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": "true", "data": rows })
        else
            console.log(err);
    })
};

// Get by ID
const getuserCompanybyid = (req, res) => {
    dbCon().query('SELECT * FROM '+ process.env.database +'.userCompany WHERE userId = ?', [req.params.userId], (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true, "data": rows });
        else
            console.log(err);
    })
};

// Update an userCompany
const updateuserCompany = async (req, res) => {
    let userCompany = req.body;
    var sql = "USE " + process.env.database;
    dbCon().query(sql, function (err, result) {
        if (err) throw err;
    });
    
    var sql1 = "UPDATE userCompany SET companyId=?,companyStatus=? WHERE userId= "+ 'userCompany.userId'+" AND companyId = "+ userCompany.companyId +";";
    dbCon().query(sql1, [userCompany.companyId, userCompany.companyStatus, userCompany.userId], (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": userCompany });
        else
            console.log(err);
    })
};

// delete an userCompany
const deleteuserCompany = (req, res) => {

    var sql = "USE " + process.env.database;
    dbCon().query(sql, function (err) {

    });
    dbCon().query("DELETE FROM userCompany WHERE userId =" + [req.params.userId], (err, result) => {
        if (result.affectedRows == 0)
            return res.json({ "message": "user not found", "status": false });

        else (!err)
        res.json({ "message": "Delete successfull", "status": true, "data": [] });

    })

};


// Get getCompanyByuserBy ID
const getuserCompanybyuserId = (req, res) => {

    dbCon().query("SELECT userCompany.userId, Company.* FROM "+ process.env.database +".userCompany JOIN "+ process.env.database +".Company on userCompany.companyId = Company.companyId WHERE companyStatus='a' AND Company.userId = ?;", [req.params.userId], (err, result, fields) => {
        if (result.length != 0){
            if (!err){
                res.status(200).json({ "message": "Company Data Found Successfull", "status": true, "data": result }); 
            }
            else{
                console.log(err);
                res.status(400).json({ "message": "Company Data Not Found", "status": false });
            }
        }else{
            console.log(err);
            res.status(400).json({ "message": "Not User with that UserId", "status": false });
        }
    })
};


module.exports = {
   
    adduserCompany,
    getuserCompany,
    getuserCompanybyid,
    updateuserCompany,
    deleteuserCompany,
    getuserCompanybyuserId
    
}