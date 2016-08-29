var express = require('express');
var app = express();
var http = require('http');

app.get('/map/api/:p1/:p2/:p3/:p4', function (req, res) {
    http.get({
        host: 'pokemoa.com',
        path: '/map/pokemap/get/' + req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4
    }, function (response) {
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            res.send(body);
        });
    });
});

app.listen(3100, function () {
    console.log('pokemoa map listening on port 3100!');
});

