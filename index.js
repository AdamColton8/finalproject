let http = require('http'),
    fs = require('fs'),
    express = require('express'),
    path = require('path'),
    app = express();



app.use(express.static(path.join(__dirname + '/dist')));
app.use(express.static('dist'));
console.log(path.join(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});





app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});

/*


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});
*/
