var os =   require('os');
var fs =   require('fs');
var math = require('./math');

var request = require('request');//url의 반환하는 내용을 가지고오는 모듈

// fs.writeFile('naver.html',content,{},function(err,data){
//    var data = data
//     request.get('http://www.naver.com',function(err, response, content){
//         console.log(content);
//
//
//     });
// });
var naver = request.get('http://www.naver.com',function(err, response, body){

    var file = 'naver.html';

    fs.writeFile(file,body,{},function(err,data){
        console.log(err);
        console.log(data);

    });
});


// fs.writeFile('text.txt','abcdefghijklmnop',{},function(err,data){
//     console.log(err);
//     console.log(data);
// });
//console.log(os.cpus());
//console.log(fs);

// fs.readFile('text.txt','utf-8',function(err,data){
//    console.log(data);
// });