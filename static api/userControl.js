const { dbCon } = require('../dbservices')
const { accountGroup } = require('../static api/accountGroup')
const { accountMaster , getAccountMaster} = require('../static api/accountMaster')
const { productGroup } = require('../static api/productGroup')
const { productMaster, getproductMaster } = require('../static api/productMaster')
const { brokerMaster , getbrokerMaster } = require('../static api/brokerMaster')
const { salesmanMaster , getsalesmanMaster} = require('../static api/salesmanMaster')
const { salesData } = require('../static api/salesData')
const { purchaseData } = require('../static api/purchaseData')
const { stockData } = require('../static api/stockData')
const { storeMaster ,getstoreMaster } = require('../static api/storeMaster')
const { osDataMain } = require('../static api/osDataMain')
const { osDataAdj } = require('../static api/osDataAdj')
const { EWAYBILLMain } = require('../static api/EWAYBILLMain')
const { EWAYBILLItems } = require('../static api/EWAYBILLItems')
const { EWAYBILLPartB } = require('../static api/EWAYBILLPartB')
const { EinvoiceMain } = require('../static api/EinvoiceMain')
const { EinvoiceItems } = require('../static api/EinvoiceItems')
const { EInvoicePayment } = require('../static api/EInvoicePayment')
const { EInvoiceExport } = require('../static api/EInvoiceExport')
const userControl = (req, res) => {
        let databaseName = req.body.databaseName;
        let sql = "USE " + databaseName;
        dbCon().query(sql, async (err) => {
                        if (err){
                            return res.json({ "status": false, "error": 'Please Provide Valid Database Name' });
                        }
                            else {
                            let json_data = req.body.tableData;
                            var json_string = JSON.stringify(json_data);
                            var obj = JSON.parse(json_string);
                            var length = Object.keys(obj).length;
                            console.log(length);
                            userControlArr = [];
                            for (var i in json_data) {
                                userControlArr.push([json_data[i]['userId'], json_data[i]['accountId']])
                                var sql1 = "USE " + databaseName;
                                dbCon().query(sql1, function (err) {
                                    if (err) throw err;
                                })
                                var tableName = req.body.tableName;
                                var sql2 = "INSERT INTO "+tableName+" (userId,accountId)\
                                                VALUES ('" + json_data[i]['userId'] + "','" + json_data[i]['accountId'] + "')";
                                dbCon().query(sql2, function (err) {
                                    if (err) throw err;
                                })
                            } if ((length - 1) == i) {
                                return res.status(200).json({ "message": "successfull", "status": true, "data": req.body })
                            } else {
                                console.error();
                            }
                            }
                        });
                    }
module.exports = {
    userControl,
    accountGroup,
    accountMaster,
    productGroup,
    productMaster,
    brokerMaster,
    salesmanMaster,
    salesData,
    purchaseData,
    stockData,
    storeMaster,
    osDataMain,
    osDataAdj,
    EWAYBILLMain,
    EWAYBILLItems,
    EWAYBILLPartB,
    EinvoiceMain,
    EinvoiceItems,
    EInvoicePayment,
    EInvoiceExport,
    getAccountMaster,
    getbrokerMaster,
    getproductMaster,
    getsalesmanMaster,
    getstoreMaster
}