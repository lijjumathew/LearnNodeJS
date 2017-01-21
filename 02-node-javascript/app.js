var http = require('http');
var module1 = require('./module1');
//var module2 = require('./module2');
function onRequest(request,response){
    response.writeHead(200,{'Context-Type': 'text/plain'});
    response.write(module1.myString);
    //response.write(module2.myString);
    module1.myFunction();
    //console.log('2');
    //module2.myFunction();
    //console.log('3');
    response.end()
}
//console.log('1');
http.createServer(onRequest).listen(8000);
