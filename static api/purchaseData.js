const { dbCon } = require('../dbservices')
const purchaseData = (req, res) => {
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
                userControlArr.push([json_data[i]['docNo'],
                json_data[i]['docDate'],
                json_data[i]['invNo'],
                json_data[i]['invDate'],
                json_data[i]['accountId'],
                json_data[i]['invAmount'],
                json_data[i]['taxableAmount'],
                json_data[i]['sgstRate'],
                json_data[i]['sgstAmount'],
                json_data[i]['cgstRate'],
                json_data[i]['cgstAmount'],
                json_data[i]['igstRate'],
                json_data[i]['igstAmount'],
                json_data[i]['roundOf'],
                json_data[i]['creditPriode'],
                json_data[i]['gstOption'],
                json_data[i]['shipTo'],
                json_data[i]['shipToId'],
                json_data[i]['altAddId'],
                json_data[i]['altShipId'],
                json_data[i]['ewbNo'],
                json_data[i]['ewbDate'],
                json_data[i]['ewbTime'],
                json_data[i]['ewbMode'],
                json_data[i]['ewbMainType'],
                json_data[i]['ewbSubType'],
                json_data[i]['ewbDocType'],
                json_data[i]['ewbTransport'],
                json_data[i]['ewbTransportGstin'],
                json_data[i]['ewbVehicleNumber'],
                json_data[i]['irnNo'],
                json_data[i]['irnDate'],
                json_data[i]['ackNo'],
                json_data[i]['ackDate'],
                json_data[i]['cutTds'],
                json_data[i]['tdsId'],
                json_data[i]['tdsRate'],
                json_data[i]['tdsAmount'],
                json_data[i]['cutTcs'],
                json_data[i]['tcsId'],
                json_data[i]['tcsRate'],
                json_data[i]['tcsAmount']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                invNo,\
                invDate,\
                accountId,\
                invAmount,\
                taxableAmount,\
                sgstRate,\
                sgstAmount,\
                cgstRate,\
                cgstAmount,\
                igstRate,\
                igstAmount,\
                roundOf,\
                creditPriode,\
                gstOption,\
                shipTo,\
                shipToId,\
                altAddId,\
                altShipId,\
                ewbNo,\
                ewbDate,\
                ewbTime,\
                ewbMode,\
                ewbMainType,\
                ewbSubType,\
                ewbDocType,\
                ewbTransport,\
                ewbTransportGstin,\
                ewbVehicleNumber,\
                irnNo,\
                irnDate,\
                ackNo,\
                ackDate,\
                cutTds,\
                tdsId,\
                tdsRate,\
                tdsAmount,\
                cutTcs,\
                tcsId,\
                tcsRate,\
                tcsAmount)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" + json_data[i]['invNo'] +
                    "','" + json_data[i]['invDate'] +
                    "','" + json_data[i]['accountId'] +
                    "','" + json_data[i]['invAmount'] +
                    "','" + json_data[i]['taxableAmount'] +
                    "','" + json_data[i]['sgstRate'] +
                    "','" + json_data[i]['sgstAmount'] +
                    "','" + json_data[i]['cgstRate'] +
                    "','" + json_data[i]['cgstAmount'] +
                    "','" + json_data[i]['igstRate'] +
                    "','" + json_data[i]['igstAmount'] +
                    "','" + json_data[i]['roundOf'] +
                    "','" + json_data[i]['creditPriode'] +
                    "','" + json_data[i]['gstOption'] +
                    "','" + json_data[i]['shipTo'] +
                    "','" + json_data[i]['shipToId'] +
                    "','" + json_data[i]['altAddId'] +
                    "','" + json_data[i]['altShipId'] +
                    "','" + json_data[i]['ewbNo'] +
                    "','" + json_data[i]['ewbDate'] +
                    "','" + json_data[i]['ewbTime'] +
                    "','" + json_data[i]['ewbMode'] +
                    "','" + json_data[i]['ewbMainType'] +
                    "','" + json_data[i]['ewbSubType'] +
                    "','" + json_data[i]['ewbDocType'] +
                    "','" + json_data[i]['ewbTransport'] +
                    "','" + json_data[i]['ewbTransportGstin'] +
                    "','" + json_data[i]['ewbVehicleNumber'] +
                    "','" + json_data[i]['irnNo'] +
                    "','" + json_data[i]['irnDate'] +
                    "','" + json_data[i]['ackNo'] +
                    "','" + json_data[i]['ackDate'] +
                    "','" + json_data[i]['cutTds'] +
                    "','" + json_data[i]['tdsId'] +
                    "','" + json_data[i]['tdsRate'] +
                    "','" + json_data[i]['tdsAmount'] +
                    "','" + json_data[i]['cutTcs'] +
                    "','" + json_data[i]['tcsId'] +
                    "','" + json_data[i]['tcsRate'] +
                    "','" + json_data[i]['tcsAmount'] + "')";
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
    purchaseData
}