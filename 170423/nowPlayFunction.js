// function abc(){
//     console.log('실행');
// }
// abc();



// 둘다 사용 가능
(function abc(){
    console.log('실행');
})();

(function abc(){
    console.log('실행');
}());

//함수는 실행이 되면 셋팅을 한다.

var person = (function(){
    var stomach = [];  // 외부 노출을 피하기 위해 함수 스코프이용해 밖에 선언  //자유변수
    return {
        name : 'suho',
        eat : function (food){
            consle.log(food + '를 먹는다');
            stomach.push(food);
        }// 클로져 함수
    };
}());