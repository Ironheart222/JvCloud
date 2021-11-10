const { dbCon } = require('../dbservices')

const accountGroup = (req, res) => {


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
                userControlArr.push([json_data[i]['accGroupId'], json_data[i]['accMainId'],
                json_data[i]['groupName'], json_data[i]['reverseGroupId'],
                json_data[i]['groupFlag'], json_data[i]['groupType'],
                json_data[i]['scheduleNumer']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (accGroupId,accMainId,groupName,reverseGroupId,groupFlag,groupType,scheduleNumer)\
                            VALUES ('" + json_data[i]['accGroupId'] + "','" + json_data[i]['accMainId'] + "','" 
                    + json_data[i]['groupName'] + "','" + json_data[i]['reverseGroupId'] + "','"
                    + json_data[i]['groupFlag'] + "','" + json_data[i]['groupType'] + "','"
                    + json_data[i]['scheduleNumer'] + "')";
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

module.exports = {
    accountGroup
}