//var http = require('http');

module.exports = {
    http: require('http'),

    //pages
    page: function (req, url, callback) {
        if (req.url == url) { callback(); }
    },

    defaultpage: function (req, callback) {
        if (req.url == "/") { callback(); }
    },

    errorpage: function (req, callback) {
        callback();
    },

    //write
    writestring: function (res, text) {
        res.end(text);
    },

    writetext: function (res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        let _write = "";
        for (i = 1; i < arguments.length; i++) {
            _write = _write + arguments[i];
        }

        res.write(_write);
        res.end();
    },

    writehtml: function (res) {
        let _write = "";
        for (i = 1; i < arguments.length; i++) {
            _write = _write + arguments[i];
        }

        res.write("<html>")
        res.write(_write);
        res.write("</html>");
        res.end();
    }
}