function getWeekDay(state) {
    var state = state || 'KR';

    var weekDays = {
        KR : ['일', '월', '화', '수', '목', '금', '토'],
        EN : ['Sun', 'Mon', 'Tue']
    }

    try {
        var result = weekDays[state][new Date().getDay()];
    } catch(error) {
        console.error('지원하지 않는 국가 코드입니다. 에러는 다음과 같습니다' +
            error + '지원하는 국가는 ' + Object.Keys(a) + ' 입니다';
    }

    return result;
}
getWeekDay('호출');
// 숫자를 찾는 up & down 랜덤게임을 만들어라
// 조건 1. 랜덤 숫자의 범위는 1~100 이다 Math.floor(Math.random() * 100 + 1)
// 조건 2. 6번 이상 틀리면 게임이 종료된다.
// 조건 3. 게임이 종료되면 say를 외쳐도 게임이 종료되었다는 메시지만 나온다.
// randomGame.start();   // 게임을 시작합니다.
// randomGame.say(40);  //업!
// randomGame.say(80); //다운!
// randomGame.say(47); //정답!


function randomGame(num){
    var num = Math.floor(Math.random() * 100 + 1);
    var start = function(){
        console.log('게임을 시작합니다.')
    }
    console.log('게임을 시작합니다.')
}


var randomGame2 = {
    num : Math.floor(Math.random() * 100 + 1),
    time : 0,
    start : function(){
      console.log(this.num);
    },
    say : function(val){
        if(this.num <= val){
            console.log('다운!');
        }else if(this.num >= val){
            console.log('업!');
        }else{
            console.log('정답!');
        }
        if(this.time >= 6){
            console.log('게임이 종료되었습니다.')
        }
        this.time +=1;
    }
};

randomGame.start();
randomGame.say(40);
randomGame.say(80);
randomGame.say(47);