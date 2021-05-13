//const lib = require('../../client/src/components/reactApp');
const express = require("express");
const recordRoutes = express.Router();
const fs = require('fs');


recordRoutes.route("/testroute").get(function (req, res) {
    res.send("<h1>this is test route</h1>");
});

recordRoutes.route("/react").get(function (req, res) {
    fs.readFile("src/reactHtml.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if (err) {
            console.log(err);
        }
        res.write(data);
        res.end();
    });
    //res.send("React");
});

function ReadHomeworks() {
    var sql = require("mssql");
    var result = null;

    // config for your database
    var config = {
        user: 'testlogin',
        password: 'testpass',
        server: 'localhost',
        database: 'WebStudent',
        options: {
            encrypt: false, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
        }

    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err)
            console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Homeworks', function (err, recordset) {

            if (err)
                console.log(err);

            // send records as a response
            //res.send(recordset);
            return recordset;
            //result = recordset;
        });
    });

    //return result;
}

recordRoutes.route("/homeworks").get(function (req, res) {
    //res.send(ReadHomeworks());
    var sql = require("mssql");
    var result = null;

    // config for your database
    var config = {
        user: 'testlogin',
        password: 'testpass',
        server: 'localhost',
        database: 'WebStudent',
        options: {
            encrypt: false, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
        }

    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err)
            console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Homeworks', function (err, recordset) {

            if (err)
                console.log(err);

            // send records as a response
            res.send(recordset);
        });
    });

});

module.exports = recordRoutes;