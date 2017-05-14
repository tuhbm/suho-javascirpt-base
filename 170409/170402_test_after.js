function min(a,b,c,d){
    var m = a;
    if(m > b) m = b;
    if(m > c) m = c;
    if(m > d) m = d;
    return m;
}
// 함수를 확장 가능하게 고려해서 기능을 만들어야 한다.
// 이프문에는 값(true or false)을 비교할수있는 조건식 or  값이 들어가야한다.
// 인간의 사고를 잘생각해보아라. 왼쪽에서 오른쪽으로 사고한다.

function max(num){
    return num * num;
}
function circle(num){
    return max(num) * 3.14;
}

circle(max(a,b));
// 이러한 방식으로 작성하여도 작동이 되지만!!! 기능단위로 작성해야 한다.
// 단 그리고 사용해야한다. 단 큰단위의 기능은 함수안에 다른함수를 사용하는것이 좋지만, 그렇지 않다면 그냥 단순 위의 맥스와 같은경우는 단순코드이므로 그냥 작성하는것이 좋다(?)
// 매개변수 인자 값으로 는 의존을 하는 것은 아니므로, 가능하다.


function creatElement(tag, text){
    // if(text === undefined) text = '';
    // return '<'+tag+'>'+(text  === undefined ? '' : text)+'</'+tag+'>';
    //논리연산자를 이용하면
    return '<'+tag+'>'+(text || '')+'</'+tag+'>';
}

// 삼항식은 if문으로 변환시 if + else 두개가 필요하다.


/**
 * 1. a && b   a가 참이면 b
 * 2. a || b   a가 참이면 a 아니면 b
 * 3. !a       a의 반대
*/