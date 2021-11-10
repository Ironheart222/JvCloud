const { dbCon } = require('../dbservices')
 
const addcompany = (req, res) => {

    let json_data = req.body;
    var json_string = JSON.stringify(json_data);
    var obj = JSON.parse(json_string);
    var length = Object.keys(obj).length;
    console.log(length);
    addCompanyArr = [];
   

    for (var i in json_data) {
        addCompanyArr.push([json_data[i]['userId'],
        json_data[i]['partnerId'],  
        json_data[i]['companyId'],
        json_data[i]['companyDBName'],
        json_data[i]['companyDBUser'],
        json_data[i]['companyDBPassword'],
        json_data[i]['companyName'],
        json_data[i]['contactName'],
        json_data[i]['addressLine1'],
        json_data[i]['addressLine2'],
        json_data[i]['addressLine3'],
        json_data[i]['addressLine4'],
        json_data[i]['city'],
        json_data[i]['pincode'],
        json_data[i]['state'],
        json_data[i]['gstin'],
        json_data[i]['panNumber'],
        json_data[i]['uidaiNumber'],
        json_data[i]['phoneNumber'],
        json_data[i]['faxNumber'],
        json_data[i]['emailId'],
        json_data[i]['mobileNumber'],
        json_data[i]['creditPeriod'],
        json_data[i]['cutTDS'],
        json_data[i]['tdsId'],
        json_data[i]['tdsRate'],
        json_data[i]['tdsLimit'],
        json_data[i]['cutTCS'],
        json_data[i]['tcsId'],
        json_data[i]['tcsRate'],
        json_data[i]['tcsLimit'],
        json_data[i]['gstAccType'],
        json_data[i]['tanNumber'],
        json_data[i]['tdsCircle'],
        json_data[i]['fassiNumber'],
        json_data[i]['fassiDate'],
        json_data[i]['drugLic20Number'],
        json_data[i]['drugLic20MfgDate'],
        json_data[i]['drugLic20ExpDate'],
        json_data[i]['drugLic21Number'],
        json_data[i]['drugLic21MfgDate'],
        json_data[i]['drugLic21ExpDate'],
        json_data[i]['drugLic20CNumber'],
        json_data[i]['drugLic20CMfgDate'],
        json_data[i]['drugLic20CExpDate'],
        json_data[i]['drugLic21ANumber'],
        json_data[i]['drugLic21AMfgDate'],
        json_data[i]['drugLic21AExpDate'],
        json_data[i]['bankName'],
        json_data[i]['bankBranch'],
        json_data[i]['bankAccountNumber'],
        json_data[i]['bankIFSCCode'],
        json_data[i]['bankMICRCode'],
        json_data[i]['companyType'],
        json_data[i]['companyNatureType'],
        json_data[i]['capitalLimit']]);
        
        var sql = "USE " + process.env.database;
        dbCon().query(sql, function (err) {
            if (err) throw err;

        });

        var sql1 = "INSERT INTO company (userId,\
                                            partnerId,\
                                            companyId,\
                                            companyDBName,\
                                            companyDBUser,\
                                            companyDBPassword,\
                                            companyName,\
                                            contactName,\
                                            addressLine1,\
                                            addressLine2,\
                                            addressLine3,\
                                            addressLine4,\
                                            city,\
                                            pincode,\
                                            state,\
                                            gstin,\
                                            panNumber,\
                                            uidaiNumber,\
                                            phoneNumber,\
                                            faxNumber,\
                                            emailId,\
                                            mobileNumber,\
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
                                            companyType,\
                                            companyNatureType,\
                                            capitalLimit) \
                    VALUES ('" + json_data[i]['userId'] + "','" +
            json_data[i]['partnerId'] + "','" +
            json_data[i]['companyId'] + "','" +
            json_data[i]['companyDBName'] + "','" +
            json_data[i]['companyDBUser'] + "','" +
            json_data[i]['companyDBPassword'] + "','" +
            json_data[i]['companyName'] + "','" +
            json_data[i]['contactName'] + "','" +
            json_data[i]['addressLine1'] + "','" +
            json_data[i]['addressLine2'] + "','" +
            json_data[i]['addressLine3'] + "','" +
            json_data[i]['addressLine4'] + "','" +
            json_data[i]['city'] + "','" +
            json_data[i]['pincode'] + "','" +
            json_data[i]['state'] + "','" +
            json_data[i]['gstin'] + "','" +
            json_data[i]['panNumber'] + "','" +
            json_data[i]['uidaiNumber'] + "','" +
            json_data[i]['phoneNumber'] + "','" +
            json_data[i]['faxNumber'] + "','" +
            json_data[i]['emailId'] + "','" +
            json_data[i]['mobileNumber'] + "','" +
            json_data[i]['creditPeriod'] + "','" +
            json_data[i]['cutTDS'] + "','" +
            json_data[i]['tdsId'] + "','" +
            json_data[i]['tdsRate'] + "','" +
            json_data[i]['tdsLimit'] + "','" +
            json_data[i]['cutTCS'] + "','" +
            json_data[i]['tcsId'] + "','" +
            json_data[i]['tcsRate'] + "','" +
            json_data[i]['tcsLimit'] + "','" +
            json_data[i]['gstAccType'] + "','" +
            json_data[i]['tanNumber'] + "','" +
            json_data[i]['tdsCircle'] + "','" +
            json_data[i]['fassiNumber'] + "','" +
            json_data[i]['fassiDate'] + "','" +
            json_data[i]['drugLic20Number'] + "','" +
            json_data[i]['drugLic20MfgDate'] + "','" +
            json_data[i]['drugLic20ExpDate'] + "','" +
            json_data[i]['drugLic21Number'] + "','" +
            json_data[i]['drugLic21MfgDate'] + "','" +
            json_data[i]['drugLic21ExpDate'] + "','" +
            json_data[i]['drugLic20CNumber'] + "','" +
            json_data[i]['drugLic20CMfgDate'] + "','" +
            json_data[i]['drugLic20CExpDate'] + "','" +
            json_data[i]['drugLic21ANumber'] + "','" +
            json_data[i]['drugLic21AMfgDate'] + "','" +
            json_data[i]['drugLic21AExpDate'] + "','" +
            json_data[i]['bankName'] + "','" +
            json_data[i]['bankBranch'] + "','" +
            json_data[i]['bankAccountNumber'] + "','" +
            json_data[i]['bankIFSCCode'] + "','" +
            json_data[i]['bankMICRCode'] + "','" +
            json_data[i]['companyType'] + "','" +
            json_data[i]['companyNatureType'] + "','" +
            json_data[i]['capitalLimit'] + "')";

        dbCon().query(sql1, (err, rows) => {
            if (err) throw err;
            // console.log(addCompanyArr);

        });
        
        let database = json_data[i]['companyDBName'];
        var sql = "CREATE DATABASE " + database;
        dbCon().query(sql, function (err) {
            if (err) throw err;
            console.log("Database " + database + " Created");
        });

        var sql1 = "USE " + database;
        dbCon().query(sql1, function (err) {
            if (err) throw err;
        });

        var sql2 = "CREATE TABLE userControl (userId VARCHAR(255), accountId VARCHAR(255))";
        dbCon().query(sql2, function (err) {
            if (err) throw err;
            console.log("Table 'userControl' " + " Created in " + database + " Database");
        });


        var sql3 = "CREATE TABLE accountGroup (accGroupId VARCHAR(255), accMainId VARCHAR(255), groupName VARCHAR(255), reverseGroupId VARCHAR(255), groupFlag VARCHAR(255), groupType VARCHAR(255), scheduleNumer VARCHAR(255))";
        dbCon().query(sql3, function (err) {
            if (err) throw err;
            console.log("Table 'accountGroup' " + " Created in " + database + " Database");
        });



        var sql4 = "CREATE TABLE accountMaster (accountId VARCHAR(255), accGroupId VARCHAR(255), accountName VARCHAR(255),printName VARCHAR(255),addressLine1 VARCHAR(255),\
         addressLine2 VARCHAR(255),\
         addressLine3 VARCHAR(255),\
        addressLine4 VARCHAR(255),\
         city VARCHAR(255),\
         pincode VARCHAR(255),\
         state VARCHAR(255),\
         phoneNumber VARCHAR(255),\
         faxNumber VARCHAR(255),\
        emailId VARCHAR(255),\
         mobileNumber VARCHAR(255),\
         contactPerson VARCHAR(255),\
         creditPeriod VARCHAR(255),\
         cutTDS VARCHAR(255),\
         tdsId VARCHAR(255),\
        tdsRate Double,\
        tdsLimit Double,\
         cutTCS VARCHAR(255),\
         tcsId VARCHAR(255),\
        tcsRate Double,\
        tcsLimit Double,\
         gstAccType VARCHAR(255),\
        tanNumber VARCHAR(255),\
         tdsCircle VARCHAR(255),\
         fassiNumber VARCHAR(255),\
         fassiDate VARCHAR(255),\
         drugLic20Number VARCHAR(255),\
         drugLic20MfgDate VARCHAR(255),\
         drugLic20ExpDate VARCHAR(255),\
         drugLic21Number VARCHAR(255),\
         drugLic21MfgDate VARCHAR(255),\
         drugLic21ExpDate VARCHAR(255),\
         drugLic20CNumber VARCHAR(255),\
         drugLic20CMfgDate VARCHAR(255),\
         drugLic20CExpDate VARCHAR(255),\
         drugLic21ANumber VARCHAR(255),\
         drugLic21AMfgDate VARCHAR(255),\
         drugLic21AExpDate VARCHAR(255),\
         bankName VARCHAR(255),\
         bankBranch VARCHAR(255),\
         bankAccountNumber VARCHAR(255),\
         bankIFSCCode VARCHAR(255),\
         bankMICRCode VARCHAR(255),\
         gstin VARCHAR(255),\
        commanDiscount VARCHAR(255),\
         ewbTransporter VARCHAR(255),\
         ewbDistance VARCHAR(255),\
         ewbTransportGstin VARCHAR(255),\
         ewbCompulsory VARCHAR(255),\
        openingBalance Double,\
        principalBalance Double,\
        interestBalance Double,\
        tdsBalance Double,\
         tcsBalance Double,\
         gstTaxBalance Double,\
         gstRcmBalance Double,\
         gstInterestBalance Double,\
         gstFeesBalance Double,\
        gstOtherBalance Double,\
         lastYearBalance Double)";
        dbCon().query(sql4, function (err) {
            if (err) throw err;
            console.log("Table 'accountMaster' " + " Created in " + database + " Database");
        });

        var sql5 = "CREATE TABLE productGroup (itGroupId VARCHAR(255),itMainId VARCHAR(255),itGroupName VARCHAR(255),unit VARCHAR(255),uqc VARCHAR(255),hsnCode VARCHAR(255),gstRate Double)";
        dbCon().query(sql5, function (err) {
            if (err) throw err;
            console.log("Table 'productGroup' " + " Created in " + database + " Database");
        });

        var sql6 = "CREATE TABLE productMaster (productId VARCHAR(255),\
    itGroupId VARCHAR(255),\
    productName VARCHAR(255),\
    productDesc VARCHAR(255),\
    unit VARCHAR(255),\
    uqc VARCHAR(255),\
    hsnCode VARCHAR(255),\
    gstRate Double,\
    mrpRate Double,\
    lpRate Double,\
    salesRate Double,\
    salesPer Double,\
    purchaseRate Double,\
    purchasePer Double,\
    salesDiscount Double,\
    purchaseDiscount Double,\
    batchQty Double,\
    reorderQty Double,\
    minQty Double,\
    maxQty Double,\
    leadTime VARCHAR(255),\
    sizeList VARCHAR(255),\
    colorList VARCHAR(255),\
    category VARCHAR(255));"

        dbCon().query(sql6, function (err) {
            if (err) throw err;
            console.log("Table 'productMaster' " + " Created in " + database + " Database");
        });

        var sql7 = "CREATE TABLE brokerMaster (brokerId VARCHAR(255),\
    brokerName VARCHAR(255),\
    addressLine1 VARCHAR(255),\
    addressLine2 VARCHAR(255),\
    addressLine3 VARCHAR(255),\
    addressLine4 VARCHAR(255),\
    city VARCHAR(255),\
    pincode VARCHAR(255),\
    state VARCHAR(255),\
    phoneNumber VARCHAR(255),\
    emailId VARCHAR(255),\
    mobileNumber VARCHAR(255),\
    companyName VARCHAR(255),\
    gstin VARCHAR(255),\
    gstinAccType VARCHAR(255));"
        dbCon().query(sql7, function (err) {
            if (err) throw err;
            console.log("Table 'brokerMaster' " + " Created in " + database + " Database");
        });

        var sql8 = "CREATE TABLE salesmanMaster ( salesmanId VARCHAR(255),\
    salesmanName VARCHAR(255),\
    addressLine1 VARCHAR(255),\
    addressLine2 VARCHAR(255),\
    addressLine3 VARCHAR(255),\
    addressLine4 VARCHAR(255),\
    city VARCHAR(255),\
    pincode VARCHAR(255),\
    state VARCHAR(255),\
    phoneNumber VARCHAR(255),\
    emailId VARCHAR(255),\
    mobileNumber VARCHAR(255),\
    companyName VARCHAR(255),\
    gstin VARCHAR(255),\
    gstinAccType VARCHAR(255));"

        dbCon().query(sql8, function (err) {
            if (err) throw err;
            console.log("Table 'salesmanMaster' " + " Created in " + database + " Database");
        });

        var sql9 = "CREATE TABLE salesData (docNo VARCHAR(255),\
    docDate DATETIME,\
    invNo VARCHAR(255),\
    invDate DATETIME,\
    accountId VARCHAR(255),\
    invAmount DOUBLE,\
    taxableAmount DOUBLE,\
    sgstRate DOUBLE,\
    sgstAmount DOUBLE,\
    cgstRate DOUBLE,\
    cgstAmount DOUBLE,\
    igstRate DOUBLE,\
    igstAmount DOUBLE,\
    roundOf DOUBLE,\
    creditPriode DOUBLE,\
    gstOption VARCHAR(255),\
    shipTo VARCHAR(255),\
    shipToId VARCHAR(255),\
    altAddId VARCHAR(255),\
    altShipId VARCHAR(255),\
    ewbNo VARCHAR(255),\
    ewbDate DATETIME,\
    ewbTime DATETIME,\
    ewbMode VARCHAR(255),\
    ewbMainType VARCHAR(255),\
    ewbSubType VARCHAR(255),\
    ewbDocType VARCHAR(255),\
    ewbTransport VARCHAR(255),\
    ewbTransportGstin VARCHAR(255),\
    ewbVehicleNumber VARCHAR(255),\
    irnNo VARCHAR(255),\
    irnDate DATETIME,\
    ackNo VARCHAR(255),\
    ackDate DATETIME,\
    cutTds TINYINT,\
    tdsId VARCHAR(255),\
    tdsRate DOUBLE,\
    tdsAmount DOUBLE,\
    cutTcs TINYINT,\
    tcsId VARCHAR(255),\
    tcsRate DOUBLE,\
    tcsAmount DOUBLE)";

        dbCon().query(sql9, function (err) {
            if (err) throw err;
            console.log("Table 'salesData' " + " Created in " + database + " Database");
        });

        var sql10 = "CREATE TABLE purchaseData (docNo VARCHAR(255),\
    docDate DATETIME,\
    invNo VARCHAR(255),\
    invDate DATETIME,\
    accountId VARCHAR(255),\
    invAmount Double,\
    taxableAmount Double,\
    sgstRate Double,\
    sgstAmount Double,\
    cgstRate Double,\
    cgstAmount Double,\
    igstRate Double,\
    igstAmount Double,\
    roundOf Double,\
    creditPriode Double,\
    gstOption VARCHAR(255),\
    shipTo VARCHAR(255),\
    shipToId VARCHAR(255),\
    altAddId VARCHAR(255),\
    altShipId VARCHAR(255),\
    ewbNo VARCHAR(255),\
    ewbDate DATETIME,\
    ewbTime VARCHAR(255),\
    ewbMode VARCHAR(255),\
    ewbMainType VARCHAR(255),\
    ewbSubType VARCHAR(255),\
    ewbDocType VARCHAR(255),\
    ewbTransport VARCHAR(255),\
    ewbTransportGstin VARCHAR(255),\
    ewbVehicleNumber VARCHAR(255),\
    irnNo VARCHAR(255),\
    irnDate DATETIME,\
    ackNo VARCHAR(255),\
    ackDate DATETIME,\
    cutTds TINYINT,\
    tdsId VARCHAR(255),\
    tdsRate Double,\
    tdsAmount Double,\
    cutTcs VARCHAR(255),\
    tcsId VARCHAR(255),\
    tcsRate Double,\
    tcsAmount Double)";
        dbCon().query(sql10, function (err) {
            if (err) throw err;
            console.log("Table 'purchaseData' " + " Created in " + database + " Database");
        });

        var sql11 = "CREATE TABLE stockData (docNo VARCHAR(255),\
    docDate DATETIME,\
    invNo VARCHAR(255),\
    invDate DATETIME,\
    itemSno VARCHAR(255),\
    productId VARCHAR(255),\
    qty Double,\
    rate Double,\
    disc Double,\
    hsnCode VARCHAR(255),\
    gstRate Double,\
    taxableAmount Double,\
    sgstRate Double,\
    sgstAmount Double,\
    cgstRate Double,\
    cgstAmount Double,\
    igstRate Double,\
    igstAmountDouble Double,\
    batchNo VARCHAR(255),\
    expireDate DATETIME,\
    storeId VARCHAR(255))";
        dbCon().query(sql11, function (err) {
            if (err) throw err;
            console.log("Table 'stockData' " + " Created in " + database + " Database");
        });

        var sql12 = "CREATE TABLE storeMaster (storeId VARCHAR(255),\
    storeName VARCHAR(255),\
    addressLine1 VARCHAR(255),\
    addressLine2 VARCHAR(255),\
    addressLine3 VARCHAR(255),\
    addressLine4 VARCHAR(255),\
    city VARCHAR(255),\
    pincode VARCHAR(255),\
    state VARCHAR(255),\
    phoneNumber VARCHAR(255),\
    emailId VARCHAR(255),\
    mobileNumber VARCHAR(255),\
    companyName VARCHAR(255),\
    gstin VARCHAR(255),\
    gstinAccType VARCHAR(255))";

        dbCon().query(sql12, function (err) {
            if (err) throw err;
            console.log("Table 'storeMaster' " + " Created in " + database + " Database");
        });

        var sql13 = "CREATE TABLE osDataMain (docNo VARCHAR(255),\
    docDate DATETIME,\
    invNo VARCHAR(255),\
    invDate DATETIME,\
    docSrNo VARCHAR(255),\
    accountId VARCHAR(255),\
    invAmount Double,\
    balanceAmount Double,\
    adgAmount Double,\
    tdsAmount Double,\
    tcsAmount Double,\
    flag VARCHAR(255))";
        dbCon().query(sql13, function (err) {
            if (err) throw err;
            console.log("Table 'osDataMain' " + " Created in " + database + " Database");
        });

        var sql14 = "CREATE TABLE osDataAdj (docNo VARCHAR(255),\
    docDate DATETIME,\
    docSrNo VARCHAR(255),\
    accountId VARCHAR(255),\
    refDocNo VARCHAR(255),\
    refDocDate DATETIME,\
    refDocSrNo VARCHAR(255),\
    refAmount Double,\
    chequeNo VARCHAR(255),\
    chequeDate Double)";
        dbCon().query(sql14, function (err) {
            if (err) throw err;
            console.log("Table 'osDataAdj' " + " Created in " + database + " Database");
        });


        var sql15 = "CREATE TABLE EWAYBILLMain (docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    BillNumber VARCHAR(255),\
    BillDate VARCHAR(255),\
    invNo VARCHAR(255),\
    InvDate VARCHAR(255),\
    TransactionType VARCHAR(255),\
    SubTransactionType VARCHAR(255),\
    DocumentType VARCHAR(255),\
    EntryType VARCHAR(255),\
    DeliveryType VARCHAR(255),\
    TotalTaxableAmount VARCHAR(255),\
    TotalSGSTAmount VARCHAR(255),\
    TotalCGSTAmount VARCHAR(255),\
    TotalIGSTAmount VARCHAR(255),\
    TotalCessAmount VARCHAR(255),\
    TotalCess2Amount VARCHAR(255),\
    TotalOtherAmount VARCHAR(255),\
    TotalInvoiceAmount VARCHAR(255),\
    TransporterName VARCHAR(255),\
    TransporterGSTIN VARCHAR(255),\
    LRType VARCHAR(255),\
    LRNumber VARCHAR(255),\
    LRDate VARCHAR(255),\
    EwbDistance VARCHAR(255),\
    VehicleType VARCHAR(255),\
    VehicleNumber VARCHAR(255),\
    EwbValidity VARCHAR(255),\
    BillFromName VARCHAR(255),\
    BillFromaddressLine1 VARCHAR(255),\
    BillFromaddressLine2 VARCHAR(255),\
    BillFromaddressLine3 VARCHAR(255),\
    BillFromaddressLine4 VARCHAR(255),\
    BillFromCity VARCHAR(255),\
    BillFromPincode VARCHAR(255),\
    BillFromState VARCHAR(255),\
    BillFromGSTIN VARCHAR(255),\
    BillFromEmail VARCHAR(255),\
    BillFromMobile VARCHAR(255),\
    BillFromPhone VARCHAR(255),\
    BillFromPOS VARCHAR(255),\
    DespatchFromName VARCHAR(255),\
    DespatchFromaddressLine1 VARCHAR(255),\
    DespatchFromaddressLine2 VARCHAR(255),\
    DespatchFromaddressLine3 VARCHAR(255),\
    DespatchFromaddressLine4 VARCHAR(255),\
    DespatchFromCity VARCHAR(255),\
    DespatchFromPincode VARCHAR(255),\
    DespatchFromState VARCHAR(255),\
    DespatchFromGSTIN VARCHAR(255),\
    DespatchFromEmail VARCHAR(255),\
    DespatchFromMobile VARCHAR(255),\
    DespatchFromPhone VARCHAR(255),\
    DespatchFromPOS VARCHAR(255),\
    BilltoName VARCHAR(255),\
    BilltoaddressLine1 VARCHAR(255),\
    BilltoaddressLine2 VARCHAR(255),\
    BilltoaddressLine3 VARCHAR(255),\
    BilltoaddressLine4 VARCHAR(255),\
    BilltoCity VARCHAR(255),\
    BilltoPincode VARCHAR(255),\
    BilltoState VARCHAR(255),\
    BilltoGSTIN VARCHAR(255),\
    BilltoEmail VARCHAR(255),\
    BilltoMobile VARCHAR(255),\
    BilltoPhone VARCHAR(255),\
    BilltoPOS VARCHAR(255),\
    ShiptoName VARCHAR(255),\
    ShiptoaddressLine1 VARCHAR(255),\
    ShiptoaddressLine2 VARCHAR(255),\
    ShiptoaddressLine3 VARCHAR(255),\
    ShiptoaddressLine4 VARCHAR(255),\
    ShiptoCity VARCHAR(255),\
    ShiptoPincode VARCHAR(255),\
    ShiptoState VARCHAR(255),\
    ShiptoGSTIN VARCHAR(255),\
    ShiptoEmail VARCHAR(255),\
    ShiptoMobile VARCHAR(255),\
    ShiptoPhone VARCHAR(255),\
    ShiptoPOS VARCHAR(255),\
    EwbNo VARCHAR(255),\
    EwbDate VARCHAR(255),\
    EwbTime VARCHAR(255),\
    EwayUpto VARCHAR(255),\
    EwayAlert VARCHAR(255),\
    IRNNumber VARCHAR(255),\
    IRNDate VARCHAR(255),\
    AckNumber VARCHAR(255),\
    AckDate VARCHAR(255),\
    CEwbNumber VARCHAR(255),\
    CEwbDate VARCHAR(255))ENGINE = InnoDB CHARACTER SET latin1";

        dbCon().query(sql15, function (err) {
            if (err) throw err;
            console.log("Table 'EWAYBILLMain' " + " Created in " + database + " Database");
        });

        var sql16 = "CREATE TABLE EWAYBILLItems (docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    ProductID VARCHAR(255),\
    ProductName VARCHAR(255),\
    ProductDesc VARCHAR(255),\
    HSNCode VARCHAR(255),\
    Qty VARCHAR(255),\
    Unit VARCHAR(255),\
    UQC VARCHAR(255),\
    Rate VARCHAR(255),\
    Disc VARCHAR(255),\
    OtherAmount VARCHAR(255),\
    ProductAmount VARCHAR(255),\
    TaxableAmount VARCHAR(255),\
    SGSTRate VARCHAR(255),\
    SGSTAmount VARCHAR(255),\
    CGSTRate VARCHAR(255),\
    CGSTAmount VARCHAR(255),\
    IGSTRate VARCHAR(255),\
    IGSTAmount VARCHAR(255),\
    CessRate VARCHAR(255),\
    CessAmount VARCHAR(255),\
    Cess2Rate VARCHAR(255),\
    Cess2Amount VARCHAR(255))";

        dbCon().query(sql16, function (err) {
            if (err) throw err;
            console.log("Table 'EWAYBILLItems' " + " Created in " + database + " Database");
        });

        var sql17 = "CREATE TABLE EWAYBILLPartB (docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    DeliveryType VARCHAR(255),\
    TransporterName VARCHAR(255),\
    TransporterGSTIN VARCHAR(255),\
    LRType VARCHAR(255),\
    LRNumber VARCHAR(255),\
    LRDate VARCHAR(255),\
    VehicleType VARCHAR(255),\
    VehicleNumber VARCHAR(255),\
    CEwbNumber VARCHAR(255),\
    CEwbDate VARCHAR(255))";

        dbCon().query(sql17, function (err) {
            if (err) throw err;
            console.log("Table 'EWAYBILLPartB' " + " Created in " + database + " Database");
        });



        var sql18 = "CREATE TABLE EinvoiceMain (TaxScheme VARCHAR(255),\
    CategoryType VARCHAR(255),\
    RCMType VARCHAR(255),\
    eCommerceGSTIN VARCHAR(255),\
    IGSTonIntraType VARCHAR(255),\
    DocumentType VARCHAR(255),\
    docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    BillNumber VARCHAR(255),\
    BillDate VARCHAR(255),\
    invNo VARCHAR(255),\
    InvDate VARCHAR(255),\
    orderNumber VARCHAR(255),\
    orderDate VARCHAR(255),\
    challanNumber VARCHAR(255),\
    challanDate VARCHAR(255),\
    BillFromName VARCHAR(255),\
    BillFromLegalName VARCHAR(255),\
    BillFromaddressLine1 VARCHAR(255),\
    BillFromaddressLine2 VARCHAR(255),\
    BillFromaddressLine3 VARCHAR(255),\
    BillFromaddressLine4 VARCHAR(255),\
    BillFromCity VARCHAR(255),\
    BillFromPincode VARCHAR(255),\
    BillFromState VARCHAR(255),\
    BillFromGSTIN VARCHAR(255),\
    BillFromEmail VARCHAR(255),\
    BillFromMobile VARCHAR(255),\
    BillFromPhone VARCHAR(255),\
    BillFromPOS VARCHAR(255),\
    DespatchFromName VARCHAR(255),\
    DespatchFromLegalName VARCHAR(255),\
    DespatchFromaddressLine1 VARCHAR(255),\
    DespatchFromaddressLine2 VARCHAR(255),\
    DespatchFromaddressLine3 VARCHAR(255),\
    DespatchFromaddressLine4 VARCHAR(255),\
    DespatchFromCity VARCHAR(255),\
    DespatchFromPincode VARCHAR(255),\
    DespatchFromState VARCHAR(255),\
    DespatchFromGSTIN VARCHAR(255),\
    DespatchFromEmail VARCHAR(255),\
    DespatchFromMobile VARCHAR(255),\
    DespatchFromPhone VARCHAR(255),\
    DespatchFromPOS VARCHAR(255),\
    BilltoName VARCHAR(255),\
    BilltoLegalName VARCHAR(255),\
    BilltoaddressLine1 VARCHAR(255),\
    BilltoaddressLine2 VARCHAR(255),\
    BilltoaddressLine3 VARCHAR(255),\
    BilltoaddressLine4 VARCHAR(255),\
    BilltoCity VARCHAR(255),\
    BilltoPincode VARCHAR(255),\
    BilltoState VARCHAR(255),\
    BilltoGSTIN VARCHAR(255),\
    BilltoEmail VARCHAR(255),\
    BilltoMobile VARCHAR(255),\
    BilltoPhone VARCHAR(255),\
    BilltoPOS VARCHAR(255),\
    ShiptoName VARCHAR(255),\
    ShiptoLegalName VARCHAR(255),\
    ShiptoaddressLine1 VARCHAR(255),\
    ShiptoaddressLine2 VARCHAR(255),\
    ShiptoaddressLine3 VARCHAR(255),\
    ShiptoaddressLine4 VARCHAR(255),\
    ShiptoCity VARCHAR(255),\
    ShiptoPincode VARCHAR(255),\
    ShiptoState VARCHAR(255),\
    ShiptoGSTIN VARCHAR(255),\
    ShiptoEmail VARCHAR(255),\
    ShiptoMobile VARCHAR(255),\
    ShiptoPhone VARCHAR(255),\
    ShiptoPOS VARCHAR(255),\
    TotalTaxableAmount VARCHAR(255),\
    TotalSGSTAmount VARCHAR(255),\
    TotalCGSTAmount VARCHAR(255),\
    TotalIGSTAmount VARCHAR(255),\
    TotalCessAmount VARCHAR(255),\
    TotalCess2Amount VARCHAR(255),\
    TotalOtherAmount VARCHAR(255),\
    TotalStateCessAmount VARCHAR(255),\
    TotalDiscountAmount VARCHAR(255),\
    TotalRoundoff VARCHAR(255),\
    TotalInvoiceAmount VARCHAR(255),\
    TransporterName VARCHAR(255),\
    TransporterGSTIN VARCHAR(255),\
    DeliveryType VARCHAR(255),\
    EwbDistance VARCHAR(255),\
    LRType VARCHAR(255),\
    LRNumber VARCHAR(255),\
    LRDate VARCHAR(255),\
    VehicleType VARCHAR(255),\
    VehicleNumber VARCHAR(255),\
    EwbNo VARCHAR(255),\
    EwbDate VARCHAR(255),\
    EwbTime VARCHAR(255),\
    EwayUpto VARCHAR(255),\
    EwayAlert VARCHAR(255),\
    IRNNumber VARCHAR(255),\
    IRNDate VARCHAR(255),\
    AckNumber VARCHAR(255),\
    AckDate VARCHAR(255),\
    CEwbNumber VARCHAR(255),\
    CEwbDate VARCHAR(255),\
    SignedQRData VARCHAR(255))ENGINE = InnoDB CHARACTER SET latin1";

        dbCon().query(sql18, function (err) {
            if (err) throw err;
            console.log("Table 'EinvoiceMain' " + " Created in " + database + " Database");
        });


        var sql19 = "CREATE TABLE EinvoiceItems (docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    ProductSerial VARCHAR(255),\
    ProductID VARCHAR(255),\
    ProductName VARCHAR(255),\
    ProductDesc VARCHAR(255),\
    HSNCode VARCHAR(255),\
    IsServiceCode VARCHAR(255),\
    Qty VARCHAR(255),\
    FreeQty VARCHAR(255),\
    Unit VARCHAR(255),\
    UQC VARCHAR(255),\
    Rate VARCHAR(255),\
    ProductAmount VARCHAR(255),\
    DiscountAmount VARCHAR(255),\
    TaxableAmount VARCHAR(255),\
    SGSTRate VARCHAR(255),\
    SGSTAmount VARCHAR(255),\
    CGSTRate VARCHAR(255),\
    CGSTAmount VARCHAR(255),\
    IGSTRate VARCHAR(255),\
    IGSTAmountCessRate VARCHAR(255),\
    CessAmount VARCHAR(255),\
    Cess2Rate VARCHAR(255),\
    Cess2Amount VARCHAR(255),\
    StateCess VARCHAR(255),\
    StateCessAmount VARCHAR(255),\
    StateCess2Amount VARCHAR(255),\
    OtherAmount VARCHAR(255),\
    TotalProductAmount VARCHAR(255),\
    BatchNumber VARCHAR(255),\
    ExpiryDate VARCHAR(255),\
    WarrantyDate VARCHAR(255),\
    ProductBarCode VARCHAR(255),\
    OrderNumber VARCHAR(255),\
    OrderDate VARCHAR(255),\
    OriginCountry VARCHAR(255),\
    AttributeName VARCHAR(255),\
    AttributeValue VARCHAR(255))";

        dbCon().query(sql19, function (err) {
            if (err) throw err;
            console.log("Table 'EinvoiceItems' " + " Created in " + database + " Database");
        });


        var sql20 = "CREATE TABLE EInvoicePayment (docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    PayeeName VARCHAR(255),\
    ModeofPayment VARCHAR(255),\
    IFSCCode VARCHAR(255),\
    PaymentTerm VARCHAR(255),\
    PaymentChequeNumber VARCHAR(255),\
    CreditTransfer VARCHAR(255),\
    DirectDebit VARCHAR(255),\
    CreditDays VARCHAR(255),\
    PaymentDue VARCHAR(255),\
    AccountDetails VARCHAR(255))";

        dbCon().query(sql20, function (err) {
            if (err) throw err;
            console.log("Table 'EInvoicePayment' " + " Created in " + database + " Database");
        });


        var sql21 = "CREATE TABLE EInvoiceExport (docNo VARCHAR(255),\
    docDate VARCHAR(255),\
    ShippingBillNumber VARCHAR(255),\
    ShippingBillDate VARCHAR(255),\
    PortCode VARCHAR(255),\
    RefundClaim VARCHAR(255),\
    ForeignCurrencyCode VARCHAR(255),\
    CountryCode VARCHAR(255),\
    ExportDuty VARCHAR(255))";
        dbCon().query(sql21, function (err) {
            if (err) throw err;
            console.log("Table 'EInvoiceExport' " + " Created in " + database + " Database");
        });


    
    }
    console.log();
    if ((length - 1) == i) {
        res.status(200).json({ "message": "successfull", "status": true , "data": req.body })
    }
    
};
// get all company
const getcompany = (req, res) => {
    dbCon().query('SELECT * FROM ' + process.env.database +'.company;', (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true, "data": rows })
        else
            console.log(err);
    })
};

// Get company by ID
const getcompanybyid = (req, res) => {
    dbCon().query('SELECT * FROM ' + process.env.database +'.company WHERE userId = ?', [req.params.userId], (err, rows) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": rows });
        else
            console.log(err);
    })
};
 // Update company
const updatecompany = async (req, res) => {
    let updatecompany = req.body;
    var sql = "USE " + process.env.database;
    dbCon().query(sql, function (err, result) {
        if (err) throw err;
    });
    
    var sql1 = "UPDATE company SET partnerId=?,companyId=?,companyDBName=?,companyDBUser=?,companyDBPassword=?,companyName=?,contactName=?,addressLine1=?,addressLine2=?,addressLine3=?,addressLine4=?,city=?,pincode=?,state=?,gstin=?,panNumber=?,uidaiNumber=?,phoneNumber=?,faxNumber=?,emailId=?,mobileNumber=?,creditPeriod=?,cutTDS=?,tdsId=?,tdsRate=?,tdsLimit=?,cutTCS=?,tcsid=?,tcsRate=?,tcsLimit=?,gstAccType=?,tanNumber=?,tdsCircle=?,fassiNumber=?,fassiDate=?,drugLic20Number=?,drugLic20MfgDate=?,drugLic20ExpDate=?,drugLic21Number=?,drugLic21MfgDate=?,drugLic21ExpDate=?,drugLic20CNumber=?,drugLic20CMfgDate=?,drugLic20CExpDate=?,drugLic21ANumber=?,drugLic21AMfgDate=?,drugLic21AExpDate=?,bankName=?,bankBranch=?,bankAccountNumber=?,bankIFSCCode=?,bankMICRCode=?,companyType=?,companyNatureType=?,capitalLimit=? WHERE userId= "+updatecompany.userId+";";
    dbCon().query(sql1, [updatecompany.partnerId,
        updatecompany.companyId,
        updatecompany.companyDBName,
        updatecompany.companyDBUser,
        updatecompany.companyDBPassword,
        updatecompany.companyName,
        updatecompany.contactName,
        updatecompany.addressLine1,
        updatecompany.addressLine2,
        updatecompany.addressLine3,
        updatecompany.addressLine4,
        updatecompany.city,
        updatecompany.pincode,
        updatecompany.state,
        updatecompany.gstin,
        updatecompany.panNumber,
        updatecompany.uidaiNumber,
        updatecompany.phoneNumber,
        updatecompany.faxNumber,
        updatecompany.emailId,
        updatecompany.mobileNumber,
        updatecompany.creditPeriod,
        updatecompany.cutTDS,
        updatecompany.tdsId,
        updatecompany.tdsRate,
        updatecompany.tdsLimit,
        updatecompany.cutTCS,
        updatecompany.tcsId,
        updatecompany.tcsRate,
        updatecompany.tcsLimit,
        updatecompany.gstAccType,
        updatecompany.tanNumber,
        updatecompany.tdsCircle,
        updatecompany.fassiNumber,
        updatecompany.fassiDate,
        updatecompany.drugLic20Number,
        updatecompany.drugLic20MfgDate,
        updatecompany.drugLic20ExpDate,
        updatecompany.drugLic21Number,
        updatecompany.drugLic21MfgDate,
        updatecompany.drugLic21ExpDate,
        updatecompany.drugLic20CNumber,
        updatecompany.drugLic20CMfgDate,
        updatecompany.drugLic20CExpDate,
        updatecompany.drugLic21ANumber,
        updatecompany.drugLic21AMfgDate,
        updatecompany.drugLic21AExpDate,
        updatecompany.bankName,
        updatecompany.bankBranch,
        updatecompany.bankAccountNumber,
        updatecompany.bankIFSCCode,
        updatecompany.bankMICRCode,
        updatecompany.companyType,
        updatecompany.companyNatureType,
        updatecompany.capitalLimit,
        updatecompany.userId], (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true , "data": updatecompany });
        else
            console.log(err);
    })
};

 // delete company
const deletecompany = (req, res) => {

    var sql = "USE " + process.env.database;
    dbCon().query(sql, function (err) {

    });
    dbCon().query("DELETE FROM company WHERE userId =" + [req.params.userId], (err, result) => {
        if (result.affectedRows == 0)
            return res.json({ "message": "user not found", "status": false });

        else (!err)
        res.json({ "message": "Delete successfull", "status": true, "data": [] });

    })

};

// Get company by UserID
const getcompanybyUserid = (req, res) => {
    // let sql1 = 'SELECT * FROM users WHERE userId='" + userId + "'";
    // dbCon().query(sql1, async (err, results) => {}
    dbCon().query('SELECT * FROM ' + process.env.database +'.company WHERE userId = ?', [req.params.userId], (err, rows) => {
        if (!err){
            res.status(200).json({ "message": "Company Found Successfull", "status": true , "data": rows });
        }
        else{
            console.log(err);
            res.status(401).json({ "error": "Data Not Found", "status": false });
        }

    })
};


module.exports = {
    addcompany,
    getcompany,
    getcompanybyid,
    updatecompany,
    deletecompany,
    getcompanybyUserid 
}