//1.
function square(num){ 
    return num*num;
}

//2.
function max(a,b){
    return a > b ? a : b;
}

//3.
function min(a,b,c,d){
    var result = a;
    if(result > b) result =b;
    if(result > c) result =c;
    if(result > d) result =d;
    return result;
}

//4.
function exact(a,b){ 
    return a === b;
}

//5.
function abs(num){
    return num > 0 ? num : num * -1;
}

//6.
function makeURL(url){
    return 'http://www.' + url;
}

//7.
function circle(num){
    return num * num * 3.14;
}

//8.
circle(max(a,b));

///9.
function createElement(tag,str){
    if(str === undefined) str = '';
    return '<'+tag+'>'+str+'</'+tag+'>'
}

//10.
createElement(tag,createElement(tag,str));