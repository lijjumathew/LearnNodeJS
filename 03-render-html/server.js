var http = require('http');
var fs = require('fs');
var url = require('url');

function onRequest(request,response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('./03-render-html/index.html',null,function(error,data) {
            if(error) {
                response.writeHead(404);
                response.write('File not found');
            } else {
                response.write(data);
            }
            response.end();
        }
    );
}

http.createServer(onRequest).listen(8000);

