var express = require('express');
var app = express();
var PORT = process.envPORT || 3000;


var middleware = require('./middleware.js')

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req, res) {
    res.send('About US!');
});
// express.static is used to get the entire folder.in my case it is public
/*console.log(__dirname);*/ 
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log("Express server started on port " + PORT + '!');
});