var person = {
    name : '수호',
    age : 33,
    phoneNumber : '010-2733-2401',
    eat : function(food){
        console.log(this.name + '가 ' + food +'를 먹습니다.');
    }
};

person['eat']('사과');
person.eat('사과');

person = {
    name : '태균',
    age : 33,
    phoneNumber : '010-2733-2401',
    eat : function(food){
        console.log(this.name + '가 ' + food +'를 먹습니다.');
    }
};

person['eat']('사과');
person.eat('사과');

person.name = '현석';


person['eat']('사과');
person.eat('사과');

var myMath = {
    sum : function(){

    },
    max : function(){

    },
    min : function(){

    },
    run : function(){
        console.log(this);
    }
};

myMath.run(); //myMath


function P(){
    console.log(this);
}
new P(); // new 연산자를 사용했을때의 객체는 매번 다르다. 이름은 같지만 안에 리턴된 객체는 다르다. 그리고 new 연산자(생성자 함수) 는 첫글자를 대문자로 표기하는 것이 컨벤션이다.

var p = {
    run : function (){
        console.log(this);
    }
}
function abc(){
    console.log(this);
}
abc()//window
abc.call(p);// p객체


//this 예제
function abcd() {
    function ddd(){
        console.log(this);
    }
    var obj = {
        ddd: ddd
    };
    var person = {
        name: '수호'
    };
    ddd();
    obj.ddd();
    new obj.ddd();
    ddd.call(person);
}
abcd();

function $(){
    return {
        on: function (event, callback){
            //클릭이 일어나면
        }
    }
}
$('.btn').on('click', function(e){
    $(this).addClass('on');
});