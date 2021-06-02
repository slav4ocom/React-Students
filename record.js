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


async function GetHomeworks() {
    var sql = require('mssql');
    var config = {
        user: 'testlogin',
        password: 'testpass',
        server: '192.168.0.107',
        database: 'WebStudent',
        options: {
            encrypt: false, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
        }

    };

    try {
        //await sql.connect('Server=localhost;Database=WebStudent;User Id=testlogin;Password=testpass;');
        await sql.connect(config);
        const result = await sql.query("select [Id] from Homeworks");
        console.dir(result);
        return result;
    } catch (err) {
        console.dir("opala greshcica...");
        console.dir(err);
    }
}
recordRoutes.route("/homeworks").get(async function (req, res) {
    res.send(await GetHomeworks());
});

recordRoutes.route("/students.json").get(function (req, res) {
    res.send(
        {
            "student1": "prlamen"
        }
    );
});

module.exports = { recordRoutes, GetHomeworks };