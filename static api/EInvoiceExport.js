const { dbCon } = require('../dbservices')
const EInvoiceExport = (req, res) => {



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
                    json_data[i]['ShippingBillNumber'],
                    json_data[i]['ShippingBillDate'],
                    json_data[i]['PortCode'],
                    json_data[i]['RefundClaim'],
                    json_data[i]['ForeignCurrencyCode'],
                    json_data[i]['CountryCode'],
                    json_data[i]['ExportDuty']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                ShippingBillNumber,\
                ShippingBillDate,\
                PortCode,\
                RefundClaim,\
                ForeignCurrencyCode,\
                CountryCode,\
                ExportDuty)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" +  json_data[i]['ShippingBillNumber'] +
                    "','" +  json_data[i]['ShippingBillDate'] +
                    "','" +  json_data[i]['PortCode'] +
                    "','" +  json_data[i]['RefundClaim'] +
                    "','" +  json_data[i]['ForeignCurrencyCode'] +
                    "','" +  json_data[i]['CountryCode'] +
                    "','" +  json_data[i]['ExportDuty'] + "')";
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
    EInvoiceExport
}