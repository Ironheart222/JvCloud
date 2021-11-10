const { dbCon } = require('../dbservices')
const EWAYBILLMain = (req, res) => {



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
                    json_data[i]['BillNumber'],
                    json_data[i]['BillDate'],
                    json_data[i]['invNo'],
                    json_data[i]['InvDate'],
                    json_data[i]['TransactionType'],
                    json_data[i]['SubTransactionType'],
                    json_data[i]['DocumentType'],
                    json_data[i]['EntryType'],
                    json_data[i]['DeliveryType'],
                    json_data[i]['TotalTaxableAmount'],
                    json_data[i]['TotalSGSTAmount'],
                    json_data[i]['TotalCGSTAmount'],
                    json_data[i]['TotalIGSTAmount'],
                    json_data[i]['TotalCessAmount'],
                    json_data[i]['TotalCess2Amount'],
                    json_data[i]['TotalOtherAmount'],
                    json_data[i]['TotalInvoiceAmount'],
                    json_data[i]['TransporterName'],
                    json_data[i]['TransporterGSTIN'],
                    json_data[i]['LRType'],
                    json_data[i]['LRNumber'],
                    json_data[i]['LRDate'],
                    json_data[i]['EwbDistance'],
                    json_data[i]['VehicleType'],
                    json_data[i]['VehicleNumber'],
                    json_data[i]['EwbValidity'],
                    json_data[i]['BillFromName'],
                    json_data[i]['BillFromaddressLine1'],
                    json_data[i]['BillFromaddressLine2'],
                    json_data[i]['BillFromaddressLine3'],
                    json_data[i]['BillFromaddressLine4'],
                    json_data[i]['BillFromCity'],
                    json_data[i]['BillFromPincode'],
                    json_data[i]['BillFromState'],
                    json_data[i]['BillFromGSTIN'],
                    json_data[i]['BillFromEmail'],
                    json_data[i]['BillFromMobile'],
                    json_data[i]['BillFromPhone'],
                    json_data[i]['BillFromPOS'],
                    json_data[i]['DespatchFromName'],
                    json_data[i]['DespatchFromaddressLine1'],
                    json_data[i]['DespatchFromaddressLine2'],
                    json_data[i]['DespatchFromaddressLine3'],
                    json_data[i]['DespatchFromaddressLine4'],
                    json_data[i]['DespatchFromCity'],
                    json_data[i]['DespatchFromPincode'],
                    json_data[i]['DespatchFromState'],
                    json_data[i]['DespatchFromGSTIN'],
                    json_data[i]['DespatchFromEmail'],
                    json_data[i]['DespatchFromMobile'],
                    json_data[i]['DespatchFromPhone'],
                    json_data[i]['DespatchFromPOS'],
                    json_data[i]['BilltoName'],
                    json_data[i]['BilltoaddressLine1'],
                    json_data[i]['BilltoaddressLine2'],
                    json_data[i]['BilltoaddressLine3'],
                    json_data[i]['BilltoaddressLine4'],
                    json_data[i]['BilltoCity'],
                    json_data[i]['BilltoPincode'],
                    json_data[i]['BilltoState'],
                    json_data[i]['BilltoGSTIN'],
                    json_data[i]['BilltoEmail'],
                    json_data[i]['BilltoMobile'],
                    json_data[i]['BilltoPhone'],
                    json_data[i]['BilltoPOS'],
                    json_data[i]['ShiptoName'],
                    json_data[i]['ShiptoaddressLine1'],
                    json_data[i]['ShiptoaddressLine2'],
                    json_data[i]['ShiptoaddressLine3'],
                    json_data[i]['ShiptoaddressLine4'],
                    json_data[i]['ShiptoCity'],
                    json_data[i]['ShiptoPincode'],
                    json_data[i]['ShiptoState'],
                    json_data[i]['ShiptoGSTIN'],
                    json_data[i]['ShiptoEmail'],
                    json_data[i]['ShiptoMobile'],
                    json_data[i]['ShiptoPhone'],
                    json_data[i]['ShiptoPOS'],
                    json_data[i]['EwbNo'],
                    json_data[i]['EwbDate'],
                    json_data[i]['EwbTime'],
                    json_data[i]['EwayUpto'],
                    json_data[i]['EwayAlert'],
                    json_data[i]['IRNNumber'],
                    json_data[i]['IRNDate'],
                    json_data[i]['AckNumber'],
                    json_data[i]['AckDate'],
                    json_data[i]['CEwbNumber'],
                    json_data[i]['CEwbDate']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (docNo,\
                docDate,\
                BillNumber,\
                BillDate,\
                invNo,\
                InvDate,\
                TransactionType,\
                SubTransactionType,\
                DocumentType,\
                EntryType,\
                DeliveryType,\
                TotalTaxableAmount,\
                TotalSGSTAmount,\
                TotalCGSTAmount,\
                TotalIGSTAmount,\
                TotalCessAmount,\
                TotalCess2Amount,\
                TotalOtherAmount,\
                TotalInvoiceAmount,\
                TransporterName,\
                TransporterGSTIN,\
                LRType,\
                LRNumber,\
                LRDate,\
                EwbDistance,\
                VehicleType,\
                VehicleNumber,\
                EwbValidity,\
                BillFromName,\
                BillFromaddressLine1,\
                BillFromaddressLine2,\
                BillFromaddressLine3,\
                BillFromaddressLine4,\
                BillFromCity,\
                BillFromPincode,\
                BillFromState,\
                BillFromGSTIN,\
                BillFromEmail,\
                BillFromMobile,\
                BillFromPhone,\
                BillFromPOS,\
                DespatchFromName,\
                DespatchFromaddressLine1,\
                DespatchFromaddressLine2,\
                DespatchFromaddressLine3,\
                DespatchFromaddressLine4,\
                DespatchFromCity,\
                DespatchFromPincode,\
                DespatchFromState,\
                DespatchFromGSTIN,\
                DespatchFromEmail,\
                DespatchFromMobile,\
                DespatchFromPhone,\
                DespatchFromPOS,\
                BilltoName,\
                BilltoaddressLine1,\
                BilltoaddressLine2,\
                BilltoaddressLine3,\
                BilltoaddressLine4,\
                BilltoCity,\
                BilltoPincode,\
                BilltoState,\
                BilltoGSTIN,\
                BilltoEmail,\
                BilltoMobile,\
                BilltoPhone,\
                BilltoPOS,\
                ShiptoName,\
                ShiptoaddressLine1,\
                ShiptoaddressLine2,\
                ShiptoaddressLine3,\
                ShiptoaddressLine4,\
                ShiptoCity,\
                ShiptoPincode,\
                ShiptoState,\
                ShiptoGSTIN,\
                ShiptoEmail,\
                ShiptoMobile,\
                ShiptoPhone,\
                ShiptoPOS,\
                EwbNo,\
                EwbDate,\
                EwbTime,\
                EwayUpto,\
                EwayAlert,\
                IRNNumber,\
                IRNDate,\
                AckNumber,\
                AckDate,\
                CEwbNumber,\
                CEwbDate)\
                VALUES ('" + json_data[i]['docNo'] +
                    "','" + json_data[i]['docDate'] +
                    "','" + json_data[i]['BillNumber'] +
                    "','" + json_data[i]['BillDate'] +
                    "','" + json_data[i]['invNo'] +
                    "','" + json_data[i]['InvDate'] +
                    "','" + json_data[i]['TransactionType'] +
                    "','" + json_data[i]['SubTransactionType'] +
                    "','" + json_data[i]['DocumentType'] +
                    "','" + json_data[i]['EntryType'] +
                    "','" + json_data[i]['DeliveryType'] +
                    "','" + json_data[i]['TotalTaxableAmount'] +
                    "','" + json_data[i]['TotalSGSTAmount'] +
                    "','" + json_data[i]['TotalCGSTAmount'] +
                    "','" + json_data[i]['TotalIGSTAmount'] +
                    "','" + json_data[i]['TotalCessAmount'] +
                    "','" + json_data[i]['TotalCess2Amount'] +
                    "','" + json_data[i]['TotalOtherAmount'] +
                    "','" + json_data[i]['TotalInvoiceAmount'] +
                    "','" + json_data[i]['TransporterName'] +
                    "','" + json_data[i]['TransporterGSTIN'] +
                    "','" + json_data[i]['LRType'] +
                    "','" + json_data[i]['LRNumber'] +
                    "','" + json_data[i]['LRDate'] +
                    "','" + json_data[i]['EwbDistance'] +
                    "','" + json_data[i]['VehicleType'] +
                    "','" + json_data[i]['VehicleNumber'] +
                    "','" + json_data[i]['EwbValidity'] +
                    "','" + json_data[i]['BillFromName'] +
                    "','" + json_data[i]['BillFromaddressLine1'] +
                    "','" + json_data[i]['BillFromaddressLine2'] +
                    "','" + json_data[i]['BillFromaddressLine3'] +
                    "','" + json_data[i]['BillFromaddressLine4'] +
                    "','" + json_data[i]['BillFromCity'] +
                    "','" + json_data[i]['BillFromPincode'] +
                    "','" + json_data[i]['BillFromState'] +
                    "','" + json_data[i]['BillFromGSTIN'] +
                    "','" + json_data[i]['BillFromEmail'] +
                    "','" + json_data[i]['BillFromMobile'] +
                    "','" + json_data[i]['BillFromPhone'] +
                    "','" + json_data[i]['BillFromPOS'] +
                    "','" + json_data[i]['DespatchFromName'] +
                    "','" + json_data[i]['DespatchFromaddressLine1'] +
                    "','" + json_data[i]['DespatchFromaddressLine2'] +
                    "','" + json_data[i]['DespatchFromaddressLine3'] +
                    "','" + json_data[i]['DespatchFromaddressLine4'] +
                    "','" + json_data[i]['DespatchFromCity'] +
                    "','" + json_data[i]['DespatchFromPincode'] +
                    "','" + json_data[i]['DespatchFromState'] +
                    "','" + json_data[i]['DespatchFromGSTIN'] +
                    "','" + json_data[i]['DespatchFromEmail'] +
                    "','" + json_data[i]['DespatchFromMobile'] +
                    "','" + json_data[i]['DespatchFromPhone'] +
                    "','" + json_data[i]['DespatchFromPOS'] +
                    "','" + json_data[i]['BilltoName'] +
                    "','" + json_data[i]['BilltoaddressLine1'] +
                    "','" + json_data[i]['BilltoaddressLine2'] +
                    "','" + json_data[i]['BilltoaddressLine3'] +
                    "','" + json_data[i]['BilltoaddressLine4'] +
                    "','" + json_data[i]['BilltoCity'] +
                    "','" + json_data[i]['BilltoPincode'] +
                    "','" + json_data[i]['BilltoState'] +
                    "','" + json_data[i]['BilltoGSTIN'] +
                    "','" + json_data[i]['BilltoEmail'] +
                    "','" + json_data[i]['BilltoMobile'] +
                    "','" + json_data[i]['BilltoPhone'] +
                    "','" + json_data[i]['BilltoPOS'] +
                    "','" + json_data[i]['ShiptoName'] +
                    "','" + json_data[i]['ShiptoaddressLine1'] +
                    "','" + json_data[i]['ShiptoaddressLine2'] +
                    "','" + json_data[i]['ShiptoaddressLine3'] +
                    "','" + json_data[i]['ShiptoaddressLine4'] +
                    "','" + json_data[i]['ShiptoCity'] +
                    "','" + json_data[i]['ShiptoPincode'] +
                    "','" + json_data[i]['ShiptoState'] +
                    "','" + json_data[i]['ShiptoGSTIN'] +
                    "','" + json_data[i]['ShiptoEmail'] +
                    "','" + json_data[i]['ShiptoMobile'] +
                    "','" + json_data[i]['ShiptoPhone'] +
                    "','" + json_data[i]['ShiptoPOS'] +
                    "','" + json_data[i]['EwbNo'] +
                    "','" + json_data[i]['EwbDate'] +
                    "','" + json_data[i]['EwbTime'] +
                    "','" + json_data[i]['EwayUpto'] +
                    "','" + json_data[i]['EwayAlert'] +
                    "','" + json_data[i]['IRNNumber'] +
                    "','" + json_data[i]['IRNDate'] +
                    "','" + json_data[i]['AckNumber'] +
                    "','" + json_data[i]['AckDate'] +
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
    EWAYBILLMain
}