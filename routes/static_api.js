const express = require('express');
const router = express.Router();
const static_token = require('../controllers/static_token')
var VerifyToken = require('../controllers/VerifyToken');

const static_api = require('../static api/userControl')
router.post('/static_api/userControl', static_token,static_api.userControl);
router.post('/static_api/accountGroup', static_token,static_api.accountGroup);
router.post('/static_api/accountMaster',static_token, static_api.accountMaster);
router.post('/static_api/productGroup', static_token,static_api.productGroup);
router.post('/static_api/productMaster', static_token,static_api.productMaster);
router.post('/static_api/brokerMaster', static_token,static_api.brokerMaster);
router.post('/static_api/salesmanMaster', static_token,static_api.salesmanMaster);
router.post('/static_api/salesData', static_token,static_api.salesData);
router.post('/static_api/purchaseData', static_token,static_api.purchaseData);
router.post('/static_api/stockData', static_token,static_api.stockData);
router.post('/static_api/storeMaster', static_token,static_api.storeMaster);
router.post('/static_api/osDataMain', static_token,static_api.osDataMain);
router.post('/static_api/osDataAdj', static_token,static_api.osDataAdj);
router.post('/static_api/EWAYBILLMain', static_token,static_api.EWAYBILLMain);
router.post('/static_api/EWAYBILLItems', static_token,static_api.EWAYBILLItems);
router.post('/static_api/EWAYBILLPartB', static_token,static_api.EWAYBILLPartB);
router.post('/static_api/EinvoiceMain', static_token,static_api.EinvoiceMain);
router.post('/static_api/EinvoiceItems', static_token,static_api.EinvoiceItems);
router.post('/static_api/EInvoicePayment',static_token, static_api.EInvoicePayment);
router.post('/static_api/EInvoiceExport', static_token,static_api.EInvoiceExport);

//get
router.post('/static_api/getAccountMaster', VerifyToken,static_api.getAccountMaster);
router.post('/static_api/getbrokerMaster', VerifyToken,static_api.getbrokerMaster);
router.post('/static_api/getproductMaster', VerifyToken,static_api.getproductMaster);
router.post('/static_api/getsalesmanMaster', VerifyToken,static_api.getsalesmanMaster);
router.post('/static_api/getstoreMaster', VerifyToken,static_api.getstoreMaster);


module.exports = router


