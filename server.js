'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

var express = require("express")
var request = require("request")
var app = express()
var port = 80

app.use(express.json())

app.post("/ProxyGet", function (Request, Res) {
    if (!Request.body.url) {
        Res.send("No url provided")
        return
    }

    var URL = Request.body.url
    request(URL).pipe(Res)

})

app.listen(port)