var http = require('http');
var app = require('./app');
var fs = require('fs');


var server = http.createServer(function(request, response){
    response.end('<h1>'+request.url+'</h1>');
    // console.log(request);
    // fs.readFile('naver.html','utf-8',function(err,data){
    //     response.end(data);
    // });

});


server.listen('8080',function(){
   console.log('server on!!');
});