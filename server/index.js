var bodyParser = require('body-parser')// BODY-PARSER: el sevidor parsea los datos de fprmatos JSON para òpder ser leidos
var http = require('http'), 
    express = require('express');

var api = require('./api')

var port = 8080,
    app = express();
var Server = http.createServer(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', api)
app.use(express.static('public'))

Server.listen(port, function(){
    console.log("Server running on port: "+ port);   
})