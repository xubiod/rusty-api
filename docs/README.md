# usage

basic example here adapted from [this file.](/rusty-api/example.js)

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
  * pages
    * `rusty.page(req, url, callback)`
    * `rusty.defaultpage(req, callback)`
    * `rusty.errorpage(req, callback)`
      * must be last in page declaration
  * writing content via inputs
    * `rusty.writestring(res, text)`
    * `rusty.writetext(res)`
      * this method uses the rest of the arguments for content
    * `rusty.writehtml(res)`
      * this method uses the rest of the arguments for content
  * writing content via files
    * `rusty.writetextfile(res)`
    * `rusty.writehtmlfile(res)`
  * miscellanous
    * `rusty.style(res, style)`
      * this method uses the rest of the arguments for content
