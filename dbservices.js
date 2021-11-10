const mysql = require('mysql');
let dbConnection = null;



async function dbInitializtion() {

    try {
        dbConnection = mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.gstmain
        });

        await dbConnection.connect()
    } catch (error) {
        console.log("ERROR: ", error)
    }
}

function dbCon() {
    return dbConnection
}



module.exports = { dbInitializtion,dbConnection, dbCon }
