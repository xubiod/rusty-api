'use strict';
var rusty = require('./lib');
var port = 1337;

//http

var server = rusty.http.createServer(function (req, res) {
    rusty.defaultpage(req, function () {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("test");
    });

    rusty.page(req, "/hello", function () {
        rusty.writetext(res,
            "this is write text\n\n",
            "hello!"
        );
    });

    rusty.page(req, "/raw", function () {
        rusty.writehtml(res,
            "this is write text<br><br>",
            "hello!<br><br>",
            "<h1>I LOVE YOU DOG</h1><br><br>",
            rusty.style(res, "color: red",
                "this is rwed"
            )
        );
    });

    rusty.page(req, "/texttest", function () {
        rusty.writetextfile(res, "example.test.txt");
    });

    rusty.errorpage(req, function () {
        rusty.writestring(res, "error :<");
    });
}).listen(port);