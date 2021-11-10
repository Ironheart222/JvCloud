const { dbCon } = require('../dbservices')
const EWAYBILLPartB = (req, res) => {



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
                    json_data[i]['docNo'],
                    json_data[i]['docDate'],
                    json_data[i]['DeliveryType'],
                    json_data[i]['TransporterName'],
                    json_data[i]['TransporterGSTIN'],
                    json_data[i]['LRType'],
                    json_data[i]['LRNumber'],
                    json_data[i]['LRDate'],
                    json_data[i]['VehicleType'],
                    json_data[i]['VehicleNumber'],
                    json_data[i]['CEwbNumber'],
                    json_data[i]['CEwbDate']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                DeliveryType,\
                TransporterName,\
                TransporterGSTIN,\
                LRType,\
                LRNumber,\
                LRDate,\
                VehicleType,\
                VehicleNumber,\
                CEwbNumber,\
                CEwbDate)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" + json_data[i]['DeliveryType'] +
                    "','" + json_data[i]['TransporterName'] +
                    "','" + json_data[i]['TransporterGSTIN'] +
                    "','" + json_data[i]['LRType'] +
                    "','" + json_data[i]['LRNumber'] +
                    "','" + json_data[i]['LRDate'] +
                    "','" + json_data[i]['VehicleType'] +
                    "','" + json_data[i]['VehicleNumber'] +
                    "','" + json_data[i]['CEwbNumber'] +
                    "','" + json_data[i]['CEwbDate'] + "')";
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
    EWAYBILLPartB
}