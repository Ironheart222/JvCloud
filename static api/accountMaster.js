
const { dbCon } = require('../dbservices')

const accountMaster = (req, res) => {


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
                userControlArr.push([json_data[i]['accountId'], json_data[i]['accGroupId'],
                json_data[i]['accountName'], json_data[i]['printName'],
                json_data[i]['addressLine1'], json_data[i]['addressLine2'],
                json_data[i]['addressLine3'], json_data[i]['addressLine4'],
                json_data[i]['city'], json_data[i]['pincode']
                    , json_data[i]['state'], json_data[i]['phoneNumber']
                    , json_data[i]['faxNumber'], json_data[i]['emailId']
                    , json_data[i]['mobileNumber'], json_data[i]['contactPerson']
                    , json_data[i]['creditPeriod'], json_data[i]['cutTDS']
                    , json_data[i]['tdsId'], json_data[i]['tdsRate']
                    , json_data[i]['tcsLimit'], json_data[i]['gstAccType']
                    , json_data[i]['tanNumber'], json_data[i]['tdsCircle']
                    , json_data[i]['fassiNumber'], json_data[i]['fassiDate']
                    , json_data[i]['drugLic20Number'], json_data[i]['drugLic20MfgDate']
                    , json_data[i]['drugLic20ExpDate'], json_data[i]['drugLic21Number']
                    , json_data[i]['drugLic21MfgDate'], json_data[i]['drugLic21AExpDate']
                    , json_data[i]['bankName'], json_data[i]['bankBranch']
                    , json_data[i]['bankAccountNumber'], json_data[i]['bankIFSCCode']
                    , json_data[i]['bankMICRCode']
                    , json_data[i]['gstin']
                    , json_data[i]['commanDiscount']
                    , json_data[i]['ewbTransporter']
                    , json_data[i]['ewbDistance']
                    , json_data[i]['ewbTransportGstin']
                    , json_data[i]['ewbCompulsory']
                    , json_data[i]['openingBalance']
                    , json_data[i]['principalBalance']
                    , json_data[i]['interestBalance']
                    , json_data[i]['tdsBalance']
                    , json_data[i]['tcsBalance']
                    , json_data[i]['gstTaxBalance']
                    , json_data[i]['gstRcmBalance']
                    , json_data[i]['gstInterestBalance']
                    , json_data[i]['gstFeesBalance']
                    , json_data[i]['gstOtherBalance']
                    , json_data[i]['lastYearBalance']
                ])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (accountId,\
                                                        accGroupId,\
                                                        accountName,\
                                                        printName,\
                                                        addressLine1,\
                                                        addressLine2,\
                                                        addressLine3,\
                                                        addressLine4,\
                                                        city,\
                                                        pincode,\
                                                        state,\
                                                        phoneNumber,\
                                                        faxNumber,\
                                                        emailId,\
                                                        mobileNumber,\
                                                        contactPerson,\
                                                        creditPeriod,\
                                                        cutTDS,\
                                                        tdsId,\
                                                        tdsRate,\
                                                        tdsLimit,\
                                                        cutTCS,\
                                                        tcsId,\
                                                        tcsRate,\
                                                        tcsLimit,\
                                                        gstAccType,\
                                                        tanNumber,\
                                                        tdsCircle,\
                                                        fassiNumber,\
                                                        fassiDate,\
                                                        drugLic20Number,\
                                                        drugLic20MfgDate,\
                                                        drugLic20ExpDate,\
                                                        drugLic21Number,\
                                                        drugLic21MfgDate,\
                                                        drugLic21ExpDate,\
                                                        drugLic20CNumber,\
                                                        drugLic20CMfgDate,\
                                                        drugLic20CExpDate,\
                                                        drugLic21ANumber,\
                                                        drugLic21AMfgDate,\
                                                        drugLic21AExpDate,\
                                                        bankName,\
                                                        bankBranch,\
                                                        bankAccountNumber,\
                                                        bankIFSCCode,\
                                                        bankMICRCode,\
                                                        gstin,\
                                                        commanDiscount,\
                                                        ewbTransporter,\
                                                        ewbDistance,\
                                                        ewbTransportGstin,\
                                                        ewbCompulsory,\
                                                        openingBalance,\
                                                        principalBalance,\
                                                        interestBalance,\
                                                        tdsBalance,\
                                                        tcsBalance,\
                                                        gstTaxBalance,\
                                                        gstRcmBalance,\
                                                        gstInterestBalance,\
                                                        gstFeesBalance,\
                                                        gstOtherBalance,\
                                                        lastYearBalance)\
                            VALUES ('" + json_data[i]['accountId'] +
                    "','" + json_data[i]['accGroupId'] + "','"
                    + json_data[i]['accountName'] + "','"
                    + json_data[i]['printName'] + "','"
                    + json_data[i]['addressLine1'] + "','"
                    + json_data[i]['addressLine2'] + "','"
                    + json_data[i]['addressLine3'] + "','"
                    + json_data[i]['addressLine4'] + "','"
                    + json_data[i]['city'] + "','"
                    + json_data[i]['pincode'] + "','"
                    + json_data[i]['state'] + "','"
                    + json_data[i]['phoneNumber'] + "','"
                    + json_data[i]['faxNumber'] + "','"
                    + json_data[i]['emailId'] + "','"
                    + json_data[i]['mobileNumber'] + "','"
                    + json_data[i]['contactPerson'] + "','"
                    + json_data[i]['creditPeriod'] + "','"
                    + json_data[i]['cutTDS'] + "','"
                    + json_data[i]['tdsId'] + "','"
                    + json_data[i]['tdsRate'] + "','"
                    + json_data[i]['tdsLimit'] + "','"
                    + json_data[i]['cutTCS'] + "','"
                    + json_data[i]['tcsId'] + "','"
                    + json_data[i]['tcsRate'] + "','"
                    + json_data[i]['tcsLimit'] + "','"
                    + json_data[i]['gstAccType'] + "','"
                    + json_data[i]['tanNumber'] + "','"
                    + json_data[i]['tdsCircle'] + "','"
                    + json_data[i]['fassiNumber'] + "','"
                    + json_data[i]['fassiDate'] + "','"
                    + json_data[i]['drugLic20Number'] + "','"
                    + json_data[i]['drugLic20MfgDate'] + "','"
                    + json_data[i]['drugLic20ExpDate'] + "','"
                    + json_data[i]['drugLic21Number'] + "','"
                    + json_data[i]['drugLic21MfgDate'] + "','"
                    + json_data[i]['drugLic21ExpDate'] + "','"
                    + json_data[i]['drugLic20CNumber'] + "','"
                    + json_data[i]['drugLic20CMfgDate'] + "','"
                    + json_data[i]['drugLic20CExpDate'] + "','"
                    + json_data[i]['drugLic21ANumber'] + "','"
                    + json_data[i]['drugLic21AMfgDate'] + "','"
                    + json_data[i]['drugLic21AExpDate'] + "','"
                    + json_data[i]['bankName'] + "','"
                    + json_data[i]['bankBranch'] + "','"
                    + json_data[i]['bankAccountNumber'] + "','"
                    + json_data[i]['bankIFSCCode'] + "','"
                    + json_data[i]['bankMICRCode'] + "','"
                    + json_data[i]['gstin'] + "','"
                    + json_data[i]['commanDiscount'] + "','"
                    + json_data[i]['ewbTransporter'] + "','"
                    + json_data[i]['ewbDistance'] + "','"
                    + json_data[i]['ewbTransportGstin'] + "','"
                    + json_data[i]['ewbCompulsory'] + "','"
                    + json_data[i]['openingBalance'] + "','"
                    + json_data[i]['principalBalance'] + "','"
                    + json_data[i]['interestBalance'] + "','"
                    + json_data[i]['tdsBalance'] + "','"
                    + json_data[i]['tcsBalance'] + "','"
                    + json_data[i]['gstTaxBalance'] + "','"
                    + json_data[i]['gstRcmBalance'] + "','"
                    + json_data[i]['gstInterestBalance'] + "','"
                    + json_data[i]['gstFeesBalance'] + "','"
                    + json_data[i]['gstOtherBalance'] + "','"
                    + json_data[i]['lastYearBalance'] + "')";
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

// get all getAccountMaster
const getAccountMaster = (req, res) => {
    let databaseName = req.body.databaseName;
    let sql = "USE " + databaseName;
    dbCon().query(sql, async (err) => {
        if (err) {
            return res.json({ "status": false, "error": 'Please Provide Valid Database Name' });
        }else{
            var tableName = req.body.tableName;
            dbCon().query('SELECT * FROM ' + tableName,(err, rows, fields) =>{
                if (!err) {
                   return res.status(200).json({ "message": "successfull", "status": true, "data": rows })
                } else {
                    console.error();
                    res.status(401).json({ "error": "Data not Found", "status": false })
                }   
            });
        }
    });
}



module.exports = {
    accountMaster,
    getAccountMaster
}