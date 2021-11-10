const { dbCon } = require('../dbservices')


const addusersInfo = (req, res) => {
    let json_data = req.body;
    var json_string = JSON.stringify(json_data);
    var obj = JSON.parse(json_string);
    var length = Object.keys(obj).length;
    console.log(length);
    usersInfoArr = [];
    console.log(req.body);

    for (var i in json_data) {
        usersInfoArr.push([json_data[i]['userId'], json_data[i]['department'], json_data[i]['category'],
        json_data[i]['dscName'], json_data[i]['panNumber'], json_data[i]['uidaiNumber'],
        json_data[i]['dscPassword'], json_data[i]['dscType'], json_data[i]['dscSignPath'],
        json_data[i]['dscEmailId'], json_data[i]['dscFromEmailId'], json_data[i]['dscFromPassword'], json_data[i]['dscSMTPServer'], json_data[i]['dscSMTPPort'], json_data[i]['dscSMTPSSL']]);

        var sql = "USE " + process.env.database ;
        dbCon().query(sql, function (err, result) {
            if (err) throw err;

        });

        var sql1 = "INSERT INTO usersInfo (userId,department,\
                                        category,dscName,\
                                        panNumber,uidaiNumber,\
                                        dscPassword,dscType,dscSignPath,\
                                        dscEmailId,dscFromEmailId,\
                                        dscFromPassword,dscSMTPServer,\
                                        dscSMTPPort,dscSMTPSSL) \
                    VALUES ('" + json_data[i]['userId'] + "','" + json_data[i]['department'] + "','" + json_data[i]['category'] +
            "','" + json_data[i]['dscName'] + "','" + json_data[i]['panNumber'] +
            "','" + json_data[i]['uidaiNumber'] + "','" + json_data[i]['dscPassword'] +
            "','" + json_data[i]['dscType'] + "','" + json_data[i]['dscSignPath'] +
            "','" + json_data[i]['dscEmailId'] + "','" + json_data[i]['dscFromEmailId'] +
            "','" + json_data[i]['dscFromPassword'] + "','" + json_data[i]['dscSMTPServer'] +
            "','" + json_data[i]['dscSMTPPort'] + "','" + json_data[i]['dscSMTPSSL'] + "')";

        dbCon().query(sql1, (err, rows) => {
            if (err) throw err;
            console.log(usersInfoArr);

        });
    }
    console.log();
    if ((length - 1) == i) {
        
        res.status(200).json({ "message": "successfull", "status": true , "data": req.body })
    } else {
        console.error();
    }

};


//Get all 
const getusersInfo = (req, res) => {
    dbCon().query('SELECT * FROM '+ process.env.database +'.usersInfo;', (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": rows })
        else
            console.log(err);
    })
};

// / Get by ID
const getuserInfobyid = (req, res) => {
    dbCon().query('SELECT * FROM '+ process.env.database +'.usersInfo WHERE userId = ?', [req.params.userId], (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": rows });
        else
            console.log(err);
    })
};

// Update an userInfo
const updateusersInfo = async (req, res) => {
    let usersInfo = req.body;
    var sql = "USE "+ process.env.database ;
    dbCon().query(sql, function (err, result) {
        if (err) throw err;
    });

    var sql1 = "UPDATE usersInfo SET department=?,category=?,dscName=?,panNumber=?,uidaiNumber=?,dscPassword=?,dscType=?,dscSignPath=?,dscEmailId=?,dscFromPassword=?,dscSMTPServer=?,dscSMTPPort=?,dscSMTPSSL=? WHERE userId= " + 'usersInfo.userId' + ";";
    dbCon().query(sql1, [usersInfo.department,
    usersInfo.category,
    usersInfo.dscName,
        usersInfo.panNumber,
        usersInfo.uidaiNumber,
        usersInfo.dscPassword,
        usersInfo.dscType, 
        usersInfo.dscSignPath,
        usersInfo.dscEmailId,
        usersInfo.dscFromEmailId,
        usersInfo.dscFromPassword,
        usersInfo.dscSMTPServer,
        usersInfo.dscSMTPPort,
        usersInfo.dscSMTPSSL,
    usersInfo.userId], (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": usersInfo });
        else
            console.log(err);
    });
}
// delete an usersInfo
const deleteusersInfo = (req, res) => {

    var sql = "USE " + process.env.database;
    dbCon().query(sql, function (err) {

    });
    dbCon().query("DELETE FROM usersInfo WHERE userId =" + [req.params.userId], (err, result) => {
        if (result.affectedRows == 0)
            return res.json({ "message": "user not found", "status": false});

        else (!err)
        res.json({ "message": "Delete successfull", "status": true, "data": [] });

    })

};

module.exports = {
    addusersInfo,
    getusersInfo,
    getuserInfobyid,
    updateusersInfo,
    deleteusersInfo

}