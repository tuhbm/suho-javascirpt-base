// 값으로써의 함수
//변수할당
var abc2 = function(){}
function aa(func){
    func('이벤트');
}
//인자
aa(function(e){
    console.log('콜백함수가 실행되었습니다.');
    console.log(e);
});
//인자로 받아지는 익명함수




//반환
function cc(){
    return function(){
        console.log('반환되는 함수가 실행되었다.');
        return function(){
            console.log('반환반환');
        }
    };
}
cc()();
//함수가 반환되는 함수 == 콜백함수
//일급객체 함수는 일급객체


// var arr = [1,3,2,4,6,8];
// arr.sort();//정렬

var arr = [11,3,21,4,6,8];
arr.sort(function(a,b){
    return a - b;
});//정렬

function sort(func){
    //var result += func(11,3);

}
sort(function(a,b){
    return a - b;
});


function sum(arr){
    var result = 0;
    for(var i = 0; i < arr.length;i++){
        result += arr[i];
    }
    return result;
}

function multiple(arr){
    var result = 0;
    for(var i = 0; i < arr.length;i++){
        result *= arr[i];
    }
    return result;
}


var arr2 = [11,3,21,4,6,8];
arr2.map(function(v) {
   return v + 20;
});

function map(arr, func){
   var result = [];
   for (var i = 0; i < arr.length; i++){
       result.push( func( arr[i] ) );
   }
   return result;
}

map(arr2, function(v) {
   return v + 20;
});

function $ (){
    return {
        on:function(eventName, handler){
            //이벤트가 일어나면
            setTimeout(function(){
                handler({
                    name:'event'
                });
            },2000);

        }
    }
}
$().on('click',function (e){
    console.log(e.name);
});
//콜백함수 -  함수를 인자로 받아 실행하는 제어권을 다른 함수로 넘긴 함수.

//고차함수 - 함수가 인자로 사용되는 특성  == 인자로 들어오는 값이 함수로 선언되어야 한다.


//filter  트루 인놈만 뱉어준다
//map  배열을 인자로 받아 새로운 배열로 정렬
//sort 배열을 인자로 받아서 정렬