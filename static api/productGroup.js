const { dbCon } = require('../dbservices')
const productGroup = (req, res) => {


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

                userControlArr.push([json_data[i]['itGroupId'], json_data[i]['itMainId'],
                json_data[i]['itGroupName'], json_data[i]['unit'], , json_data[i]['uqc'],
                json_data[i]['hsnCode'], json_data[i]['gstRate']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (itGroupId,\
                itMainId,\
                itGroupName,\
                unit,\
                uqc,\
                hsnCode,\
                gstRate)\
                            VALUES ('" + json_data[i]['itGroupId'] +
                    "','" + json_data[i]['itMainId'] + "','"
                    + json_data[i]['itGroupName'] + "','"
                    + json_data[i]['unit'] + "','"
                    + json_data[i]['uqc'] + "','"
                    + json_data[i]['hsnCode'] + "','"
                    + json_data[i]['gstRate'] +  "')";
                dbCon().query(sql2, function (err) {
                    if (err) throw err;

                })
            } if ((length - 1) == i) {
                res.status(200).json({ "message": "successfull", "status": true, "data": req.body })
            } else {
                console.error();
            }
        }
    })
}

module.exports = {
    productGroup
}