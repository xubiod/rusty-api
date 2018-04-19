# usage

basic example here adapted from [this file.](https://github.com/xubiod/rusty-api/blob/master/rusty-api/example.js)

```js
var rusty = require('./lib');

var server = rusty.http.createServer(function (req, res) {
    rusty.defaultpage(req, function () {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("this is the url when the server ip is written w/o additions");
    });

    rusty.page(req, "/hello", function () {
        rusty.writetext(res,
            "this will appear when the ip has the url '/hello'\n\n",
            "hello!"
        );
    });

    rusty.errorpage(req, function () {
        rusty.writestring(res, "url invalid");
    });
}).listen(80);
```

# documentation

* **variables**
  * `rusty.http`
    * this is just `require('http')`
  * `rusty.file`
    * this is just `require('fs')`

* **methods**
  * **pages**
    * `rusty.page(req, url, callback)`
      * `req` - http server request
      * `url` - the url to base the content
      * `callback` - the function to execute when the url is correct
    * `rusty.defaultpage(req, callback)`
      * `req` - http server request
      * `callback` - the function to execute when the url is correct
    * `rusty.errorpage(req, callback)`
      * `req` - http server request
      * `callback` - the function to execute when the url is correct
      * must be last in page declaration
  * **writing content via inputs**
    * `rusty.writestring(res, text)`
      * `res` - https response
      * `text` - text to write to page, ends the response
    * `rusty.writetext(res)`
      * `res` - https response
      * this method uses the rest of the arguments for content
    * `rusty.writehtml(res)`
      * `res` - https response
      * this method uses the rest of the arguments for content
  * **writing content via files**
    * `rusty.writetextfile(res, file)`
      * `res` - https response
      * `file` - the local file to read
    * `rusty.writehtmlfile(res, file)`
      * `res` - https response
      * `file` - the local file to read
  * **miscellanous**
    * `rusty.style(res, style)`
      * `res` - http response
      * `style` - css styling
      * this method uses the rest of the arguments for content
