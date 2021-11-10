const { dbCon } = require('../dbservices')
const EinvoiceItems = (req, res) => {



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
                    json_data[i]['ProductSerial'],
                    json_data[i]['ProductID'],
                    json_data[i]['ProductName'],
                    json_data[i]['ProductDesc'],
                    json_data[i]['HSNCode'],
                    json_data[i]['IsServiceCode'],
                    json_data[i]['Qty'],
                    json_data[i]['FreeQty'],
                    json_data[i]['Unit'],
                    json_data[i]['UQC'],
                    json_data[i]['Rate'],
                    json_data[i]['ProductAmount'],
                    json_data[i]['DiscountAmount'],
                    json_data[i]['TaxableAmount'],
                    json_data[i]['SGSTRate'],
                    json_data[i]['SGSTAmount'],
                    json_data[i]['CGSTRate'],
                    json_data[i]['CGSTAmount'],
                    json_data[i]['IGSTRate'],
                    json_data[i]['IGSTAmount'],
                    json_data[i]['CessRate'],
                    json_data[i]['CessAmount'],
                    json_data[i]['Cess2Rate'],
                    json_data[i]['Cess2Amount'],
                    json_data[i]['StateCess'],
                    json_data[i]['StateCessAmount'],
                    json_data[i]['StateCess2Amount'],
                    json_data[i]['OtherAmount'],
                    json_data[i]['TotalProductAmount'],
                    json_data[i]['BatchNumber'],
                    json_data[i]['ExpiryDate'],
                    json_data[i]['WarrantyDate'],
                    json_data[i]['ProductBarCode'],
                    json_data[i]['OrderNumber'],
                    json_data[i]['OrderDate'],
                    json_data[i]['OriginCountry'],
                    json_data[i]['AttributeName'],
                    json_data[i]['AttributeValue']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                ProductSerial,\
                ProductID,\
                ProductName,\
                ProductDesc,\
                HSNCode,\
                IsServiceCode,\
                Qty,\
                FreeQty,\
                Unit,\
                UQC,\
                Rate,\
                ProductAmount,\
                DiscountAmount,\
                TaxableAmount,\
                SGSTRate,\
                SGSTAmount,\
                CGSTRate,\
                CGSTAmount,\
                IGSTRate,\
                IGSTAmount,\
                CessRate,\
                CessAmount,\
                Cess2Rate,\
                Cess2Amount,\
                StateCess,\
                StateCessAmount,\
                StateCess2Amount,\
                OtherAmount,\
                TotalProductAmount,\
                BatchNumber,\
                ExpiryDate,\
                WarrantyDate,\
                ProductBarCode,\
                OrderNumber,\
                OrderDate,\
                OriginCountry,\
                AttributeName,\
                AttributeValue)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" + json_data[i]['ProductSerial'] +
                    "','" + json_data[i]['ProductID'] +
                    "','" + json_data[i]['ProductName'] +
                    "','" + json_data[i]['ProductDesc'] +
                    "','" + json_data[i]['HSNCode'] +
                    "','" + json_data[i]['IsServiceCode'] +
                    "','" + json_data[i]['Qty'] +
                    "','" + json_data[i]['FreeQty'] +
                    "','" + json_data[i]['Unit'] +
                    "','" + json_data[i]['UQC'] +
                    "','" + json_data[i]['Rate'] +
                    "','" + json_data[i]['ProductAmount'] +
                    "','" + json_data[i]['DiscountAmount'] +
                    "','" + json_data[i]['TaxableAmount'] +
                    "','" + json_data[i]['SGSTRate'] +
                    "','" + json_data[i]['SGSTAmount'] +
                    "','" + json_data[i]['CGSTRate'] +
                    "','" + json_data[i]['CGSTAmount'] +
                    "','" + json_data[i]['IGSTRate'] +
                    "','" + json_data[i]['IGSTAmount'] +
                    "','" + json_data[i]['CessRate'] +
                    "','" + json_data[i]['CessAmount'] +
                    "','" + json_data[i]['Cess2Rate'] +
                    "','" + json_data[i]['Cess2Amount'] +
                    "','" + json_data[i]['StateCess'] +
                    "','" + json_data[i]['StateCessAmount'] +
                    "','" + json_data[i]['StateCess2Amount'] +
                    "','" + json_data[i]['OtherAmount'] +
                    "','" + json_data[i]['TotalProductAmount'] +
                    "','" + json_data[i]['BatchNumber'] +
                    "','" + json_data[i]['ExpiryDate'] +
                    "','" + json_data[i]['WarrantyDate'] +
                    "','" + json_data[i]['ProductBarCode'] +
                    "','" + json_data[i]['OrderNumber'] +
                    "','" + json_data[i]['OrderDate'] +
                    "','" + json_data[i]['OriginCountry'] +
                    "','" + json_data[i]['AttributeName'] +
                    "','" + json_data[i]['AttributeValue'] + "')";
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
    EinvoiceItems
}