const express = require('express');
const bodyParser = require('body-parser');
const api_services = require('./routes/api_services');
const dotenv = require('dotenv');
const dbservices = require('./dbservices');
dotenv.config();
const app = express();

app.use(function (req, res, next) {
     // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, HEAD,PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

async function appinitialization() {

    await dbservices.dbInitializtion()
    app.use(bodyParser.json());
    app.use('/', api_services);
    app.listen(3000, () => console.log('Listining on 3000'));
}

appinitialization();
