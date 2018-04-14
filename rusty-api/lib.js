//var http = require('http');

module.exports = {
    http: require('http'),
    file: require('fs'),

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
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let _write = "";
        for (i = 1; i < arguments.length; i++) {
            _write = _write + arguments[i];
        }
        
        res.write(_write);
        res.end();
    },

    //file
    writetextfile: function (res, file) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(require('fs').readFileSync(file));
        res.end();
    },
    writehtmlfile: function (res, file) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(require('fs').readFileSync(file));
        res.end();
    },

    //misc html
    style: function (res, style) {
        let _write = "";
        for (i = 2; i < arguments.length; i++) {
            _write = _write + arguments[i];
        }

        return `<span style="` + style + `">` + _write + "</span>";
    }
}