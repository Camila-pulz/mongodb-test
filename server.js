var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
monoose = require('mongoose');

var app = express();
var port = 3000;
app.use(require('./routes'));

app.use(logger('dev'));
app.use(bodyParser.json());




app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
})