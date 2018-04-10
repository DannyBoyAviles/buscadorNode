var http = require('http'), 
    express = require('express');
var port = 8080,
    app = express();
var Server = http.createServer(app);

app.use(express.static('public'))

Server.listen(port, function(){
    console.log("Server running on port: "+ port);   
})