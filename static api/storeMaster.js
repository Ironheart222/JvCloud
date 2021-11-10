const { dbCon } = require('../dbservices')
const storeMaster = (req, res) => {



    let databaseName = req.body.databaseName;
    let sql = "USE " + databaseName;
    dbCon().query(sql, async (err) => {
        if (err) {
            return res.json({ "status": false, "error": 'Please Provide Valid Database Name' });
        }

        else {
            let json_data = req.body.tableData;
            var json_string = JSON.stringify(json_data);
            var obj = JSON.parse(json_string);
            var length = Object.keys(obj).length;
            console.log(length);
            userControlArr = [];
            // console.log(req.body);

            for (var i in json_data) {
                userControlArr.push([
                    json_data[i]['storeId'],
                    json_data[i]['storeName'],
                    json_data[i]['addressLine1'],
                    json_data[i]['addressLine2'],
                    json_data[i]['addressLine3'],
                    json_data[i]['addressLine4'],
                    json_data[i]['city'],
                    json_data[i]['pincode'],
                    json_data[i]['state'],
                    json_data[i]['phoneNumber'],
                    json_data[i]['emailId'],
                    json_data[i]['mobileNumber'],
                    json_data[i]['companyName'],
                    json_data[i]['gstin'],
                    json_data[i]['gstinAccType']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (storeId,\
                storeName,\
                addressLine1,\
                addressLine2,\
                addressLine3,\
                addressLine4,\
                city,\
                pincode,\
                state,\
                phoneNumber,\
                emailId,\
                mobileNumber,\
                companyName,\
                gstin,\
                gstinAccType)\
                VALUES ('" + json_data[i]['storeId'] +
                    "','" + json_data[i]['storeName'] +
                    "','" + json_data[i]['addressLine1'] +
                    "','" + json_data[i]['addressLine2'] +
                    "','" + json_data[i]['addressLine3'] +
                    "','" + json_data[i]['addressLine4'] +
                    "','" + json_data[i]['city'] +
                    "','" + json_data[i]['pincode'] +
                    "','" + json_data[i]['state'] +
                    "','" + json_data[i]['phoneNumber'] +
                    "','" + json_data[i]['emailId'] +
                    "','" + json_data[i]['mobileNumber'] +
                    "','" + json_data[i]['companyName'] +
                    "','" + json_data[i]['gstin'] +
                    "','" + json_data[i]['gstinAccType'] + "')";
                dbCon().query(sql2, function (err) {
                    if (err) throw err;

                })
            } if ((length - 1) == i) {
                res.status(200).json({ "message": "successfull", "status": true, "data": req.body })
            } else {
                console.error();
            }
        }
    });
}

// get all getstoreMaster
const getstoreMaster = (req, res) => {
    let databaseName = req.body.databaseName;
    let sql = "USE " + databaseName;
    dbCon().query(sql, async (err) => {
        if (err) {
            return res.json({ "status": false, "error": 'Please Provide Valid Database Name' });
        }else{
            var sql1 = "USE " + databaseName;
            dbCon().query(sql1, function (err) {
                if (err) throw err;
            })

            var tableName = req.body.tableName;
            dbCon().query('SELECT * FROM ' + tableName ,(err, rows, fields) =>{
                if (!err){
                    res.status(200).json({ "message": "successfull", "status": true, "data": rows })
                }
                else{
                    console.log(err);
                    res.status(401).json({ "error": "Data not Found", "status": false })
                }
            });
        }
    });
}

module.exports = {
    storeMaster,
    getstoreMaster
}