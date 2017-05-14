function sum(arr){
    var i = 0;
    var result = 0;
    // while(false){
    //    //반복시킬코드
    // }
    while(i < arr.length){
        result += arr[i];

        i += 1;
    }
    return result;
}
// 조건문은 조건식 비교후 동작 이후 또 조건식을 비교 이후 또 동작 이런식으로 조건식에 값에 false가 나올때까지 반복하며, 조건식을 비교하여, 동작한다.

sum([1,3,4,21,5,4,6,24,0,67,2]);

function evenSum(arr){
    var i = 0;
    var result = 0;
    while(i < arr.length){
        if(arr[i]%2 === 0) {
            result += arr[i];
            console.log('짝수 :' , arr[i]);
        }

        i += 1;
    }
    return result;
}

evenSum([5,45,43,876,24,36,8,2,41,1,3,4,21,5,4,6,24,0,67,2]);




function countif(arr,str){
    var i = 0;
    var result = 0;
    while(i < arr.length){
        if(arr[i] === str) result += 1;
        i += 1;
    }
    return result;
}
var arr = ['남','남','남','남','남','남','여','여','여','남','여'];
countif(arr,'남');
countif(arr,'여');

//함수를 만들때
//1. 원하는 결과 결과값을 먼저 넣어보고, 문을 선택, 식을 넣고 값을 배출
//2. 원하는 결과값이 변할 수 있으니, 결과값을 변수화 한다.
//3. 때에 따라 매개변수로 추가한다.