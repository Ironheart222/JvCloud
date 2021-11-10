const { dbCon } = require('../dbservices')
const osDataMain = (req, res) => {



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
                    json_data[i]['invNo'],
                    json_data[i]['invDate'],
                    json_data[i]['docSrNo'],
                    json_data[i]['accountId'],
                    json_data[i]['invAmount'],
                    json_data[i]['balanceAmount'],
                    json_data[i]['adgAmount'],
                    json_data[i]['tdsAmount'],
                    json_data[i]['tcsAmount'],
                    json_data[i]['flag']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                invNo,\
                invDate,\
                docSrNo,\
                accountId,\
                invAmount,\
                balanceAmount,\
                adgAmount,\
                tdsAmount,\
                tcsAmount,\
                flag)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" + json_data[i]['invNo'] +
                    "','" + json_data[i]['invDate'] +
                    "','" + json_data[i]['docSrNo'] +
                    "','" + json_data[i]['accountId'] +
                    "','" + json_data[i]['invAmount'] +
                    "','" + json_data[i]['balanceAmount'] +
                    "','" + json_data[i]['adgAmount'] +
                    "','" + json_data[i]['tdsAmount'] +
                    "','" + json_data[i]['tcsAmount'] +
                    "','" + json_data[i]['flag'] + "')";
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
    osDataMain
}