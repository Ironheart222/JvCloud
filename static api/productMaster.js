const { dbCon } = require('../dbservices')
const productMaster = (req, res) => {


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
                userControlArr.push([json_data[i]['productId'],
                json_data[i]['itGroupId'],
                json_data[i]['productName'],
                json_data[i]['productDesc'],
                json_data[i]['unit'],
                json_data[i]['uqc'],
                json_data[i]['hsnCode'],
                json_data[i]['gstRate'],
                json_data[i]['mrpRate'],
                json_data[i]['lpRate'],
                json_data[i]['salesRate'],
                json_data[i]['salesPer'],
                json_data[i]['purchaseRate'],
                json_data[i]['purchasePer'],
                json_data[i]['salesDiscount'],
                json_data[i]['purchaseDiscount'],
                json_data[i]['batchQty'],
                json_data[i]['reorderQty'],
                json_data[i]['minQty'],
                json_data[i]['maxQty'],
                json_data[i]['leadTime'],
                json_data[i]['sizeList'],
                json_data[i]['colorList'],
                json_data[i]['category']])

                var sql1 = "USE " + databaseName;
                dbCon().query(sql1, function (err) {
                    if (err) throw err;

                })

                var tableName = req.body.tableName;
                var sql2 = "INSERT INTO " + tableName + " (productId,\
                itGroupId,\
                productName,\
                productDesc,\
                unit,\
                uqc,\
                hsnCode,\
                gstRate,\
                mrpRate,\
                lpRate,\
                salesRate,\
                salesPer,\
                purchaseRate,\
                purchasePer,\
                salesDiscount,\
                purchaseDiscount,\
                batchQty,\
                reorderQty,\
                minQty,\
                maxQty,\
                leadTime,\
                sizeList,\
                colorList,\
                category)\
                            VALUES ('" + json_data[i]['productId'] +
                    "','" + json_data[i]['itGroupId'] + "','"
                    + json_data[i]['productName'] + "','"
                    + json_data[i]['productDesc'] + "','"
                    + json_data[i]['unit'] + "','"
                    + json_data[i]['uqc'] + "','"
                    + json_data[i]['hsnCode'] + "','"
                    + json_data[i]['gstRate'] + "','"
                    + json_data[i]['mrpRate'] + "','"
                    + json_data[i]['lpRate'] + "','"
                    + json_data[i]['salesRate'] + "','"
                    + json_data[i]['salesPer'] + "','"
                    + json_data[i]['purchaseRate'] + "','"
                    + json_data[i]['purchasePer'] + "','"
                    + json_data[i]['salesDiscount'] + "','"
                    + json_data[i]['purchaseDiscount'] + "','"
                    + json_data[i]['batchQty'] + "','"
                    + json_data[i]['reorderQty'] + "','"
                    + json_data[i]['minQty'] + "','"
                    + json_data[i]['maxQty'] + "','"
                    + json_data[i]['leadTime'] + "','"
                    + json_data[i]['sizeList'] + "','"
                    + json_data[i]['colorList'] + "','"
                    + json_data[i]['category'] + "')";
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

// get all getproductMaster
const getproductMaster = (req, res) => {
    let databaseName = req.body.databaseName;
    let sql = "USE " + databaseName;
    dbCon().query(sql, async (err) => {
        if (err) {
            return res.json({ "status": false, "error": 'Please Provide Valid Database Name' });
        }else{
            var sql1 = "USE " + databaseName;
            dbCon().query(sql1, function (err) {
                if (err) throw err;
            })

            var tableName = req.body.tableName;
            dbCon().query('SELECT * FROM ' + tableName ,(err, rows, fields) =>{
                if (!err){
                    res.status(200).json({ "message": "successfull", "status": true, "data": rows })
                }
                else{
                    console.log(err);
                    res.status(401).json({ "error": "Data not Found", "status": false })
                }
            });
        }
    });
}

module.exports = {
    productMaster,
    getproductMaster
}