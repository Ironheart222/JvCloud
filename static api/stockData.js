const { dbCon } = require('../dbservices')
const stockData = (req, res) => {



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
                userControlArr.push([,
                json_data[i]['docNo'],
                json_data[i]['docDate'],
                json_data[i]['invNo'],
                json_data[i]['invDate'],
                json_data[i]['itemSno'],
                json_data[i]['productId'],
                json_data[i]['rate'],
                json_data[i]['disc'],
                json_data[i]['hsnCode'],
                json_data[i]['gstRate'],
                json_data[i]['taxableAmount'],
                json_data[i]['sgstRate'],
                json_data[i]['sgstAmount'],
                json_data[i]['cgstRate'],
                json_data[i]['cgstAmount'],
                json_data[i]['igstRate'],
                json_data[i]['igstAmount'],
                json_data[i]['batchNo'],
                json_data[i]['expireDate'],
                json_data[i]['storeId']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                invNo,\
                invDate,\
                itemSno,\
                productId,\
                qty,\
                rate,\
                disc,\
                hsnCode,\
                gstRate,\
                taxableAmount,\
                sgstRate,\
                sgstAmount,\
                cgstRate,\
                cgstAmount,\
                igstRate,\
                igstAmount,\
                batchNo,\
                expireDate,\
                storeId)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" + json_data[i]['invNo'] +
                    "','" + json_data[i]['invDate'] +
                    "','" + json_data[i]['itemSno'] +
                    "','" + json_data[i]['productId'] +
                    "','" + json_data[i]['qty'] +
                    "','" + json_data[i]['rate'] +
                    "','" + json_data[i]['disc'] +
                    "','" + json_data[i]['hsnCode'] +
                    "','" + json_data[i]['gstRate'] +
                    "','" + json_data[i]['taxableAmount'] +
                    "','" + json_data[i]['sgstRate'] +
                    "','" + json_data[i]['sgstAmount'] +
                    "','" + json_data[i]['cgstRate'] +
                    "','" + json_data[i]['cgstAmount'] +
                    "','" + json_data[i]['igstRate'] +
                    "','" + json_data[i]['igstAmount'] +
                    "','" + json_data[i]['batchNo'] +
                    "','" + json_data[i]['expireDate'] +
                    "','" + json_data[i]['storeId'] + "')";
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
    stockData
}