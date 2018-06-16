var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

const crypto = require('crypto');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.post('/api/data/hash', function(req, res) {
    var data = req.body.blockNo + ":" + req.body.nonce + ":" + req.body.data;
    
    // perform hash data
    const hash = crypto.createHash('sha256');
    hash.update(data);

    res.send(hash.digest('base64'));
});

/*
app.get('/root', function(req, res) {
    res.send('Hello!');
});
*/

/*
app.get('/root', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
*/

/*
app.delete('/api/root/:id', function(req, res) {
    // string parameter : [ /api/root/24 ]
    console.log("delete log: " + req.params.id);
})
*/

/*
// RESTful uri style

app.route('/api/root')
    .get(function(req, res) {
        res.send('Hi Root!');
    })
    .post(function(req, res) {
        console.log("hiiii post method");
        res.send("Hi Root! (Post)");
    })
    .delete(function(req, res) {
        // string query : [ ?id=xxx&name=yyyy ]
        console.log("Log Delete: " + req.query.id)
    });
*/

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});