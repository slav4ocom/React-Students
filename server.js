
const express = require("express");
const app = express();
//const cors = require("cors");

const port = 8080;
//app.use(cors());
app.use(express.json());
var routes = require('./record');
app.use(routes.recordRoutes);
//app.use(require("./src/record/"));

var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/*/*', function (req, res) {
    var fileName = req.url;
    var fileExt = fileName.split(".")[1];

    //console.log(fileExt);

    fs.readFile("./" + req.url, function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(req.url + "  not found on this server<br/><br/>");
            res.write("------------------------------------------- <br/>");
            res.write("<i>slav4o.com web server at port " + port);
            res.end();
        }
        else {
            var contentType = "";
            switch (fileExt) {
                case "htm":
                case "html":
                    contentType = "text/html";
                    break;

                case "css":
                    contentType = "text/css";
                    break;

                default:
                    contentType = "text/plain";
            }

            var contentTypeString = { "Content-Type": contentType };
            res.writeHead(200, contentTypeString);
            res.write(data);
            res.end();
        }
    });


});


app.get('/*', function (req, res) {
    var fileName = req.url;
    var fileExt = fileName.split(".")[1];

    //console.log(fileExt);

    fs.readFile("./src/" + req.url, function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(req.url + "  not found on this server<br/><br/>");
            res.write("------------------------------------------- <br/>");
            res.write("<i>slav4o.com web server at port " + port);
            res.end();
        }
        else {
            var contentType = "";
            switch (fileExt) {
                case "htm":
                case "html":
                    contentType = "text/html";
                    break;

                case "css":
                    contentType = "text/css";
                    break;

                default:
                    contentType = "text/plain";
            }

            var contentTypeString = { "Content-Type": contentType };
            res.writeHead(200, contentTypeString);
            res.write(data);
            res.end();
        }
    });


});



var server = app.listen(8080, function () {
    console.log('Server is running..');
});


