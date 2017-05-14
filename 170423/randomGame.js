var randomGame = (function(){
    var randomNumber = null;
    var limit = 0;
    var MESSAGE = {
        START:'게임을 시작합니다.',
        UP:'업',
        DOWN:'다운',
        CORRECT:'정답',
        END:'게임 종료'
    };
    function display(msg){
        console.log(msg);
    }
    function end(){
        limit = 0;
        display(MESSAGE.END)
    }
    return {
        start : function(){
            limit = 6;
            randomNumber = Math.floor(Math.random() * 100) + 1;
            display(MESSAGE.START);
        },
        say : function(number){
            if(!limit) return end();

            if(number === randomNumber){
                display(MESSAGE.CORRECT);
                end();
                return;
            }

            limit --;
            display( MESSAGE[number > randomNumber ? 'DOWN' : 'UP']);

            if(!limit) end();
        }
    }
}());

randomGame.start();
randomGame.say(10);
randomGame.say(80);
randomGame.say(30);
randomGame.say(60);
randomGame.say(50);
randomGame.say(52);