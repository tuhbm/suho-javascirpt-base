// var randomGame = {
//     num : Math.floor(Math.random() * 100 + 1),
//     time : 1,
//     start : function(){
//         return '게임을 시작합니다.';
//     },
//     division : function(val){
//         if(this.time > 6 ) return '게임이 종료되었습니다.';
//         if(this.time !== val) return this.num < val ? '다운' : '업';
//         return '정답!';
//     },
//     say : function(val){
//         this.time+=1;
//         return this.division(val);
//     }
// };

// var randomGame = {
//     MESSAGE:{  //대문자는 상수라는 뜻이다.
//         START:'게임을 시작합니디.',
//         UP:'업!',
//         DOWN:'다운!',
//         END:'게임 종료',
//         CORRECT:'정답!!'
//     },
//     randomNumber : null,  //값은 있지만, 아직 넣지않은 상황
//     limit : 0,
//     start : function(){
            //변수는 초기화해서 시작시 입력되는게 좋다.
//         this.limit = 6;
//         this.randomNumber = Math.floor(Math.random() * 100) + 1;
//         this.display(this.MESSAGE.START);
//     },
//     say : function(number){
//         //게임이 끝났으면(시작되지 않았으면) 종료,
//         if(!this.limit) return this.end();  //방어코드(안전하게 검사하는 측면에서 방어코드 작성)
//         //숫자를 비교하고
//         //정답이면 정답! & 종료!
//         if(number === this.randomNumber){
//             this.display(this.MESSAGE.CORRECT);
//             this.end();
//             return;
//         }
//         this.limit--; // 먼저 감소시키고
//         //정답이 아니면 리미트를 내린다.
//         if(number > this.randomNumber){
//             this.display(this.MESSAGE.DOWN);
//         }else{
//             this.display(this.MESSAGE.UP);
//         }
//         if(!this.limit) this.end(); //종료시켜야함
//
//     },
//     display : function(msg){
//         console.log(msg);
//     },
//     end: function(){
//         this.display(this.MESSAGE.END);
//         this.limit = 0;
//     }
// };
//함수 하나에는 하나의 기능만을 넣는것이 후에 리팩토링 및 유지보수 할 때 좋다.

// 리팩토링 시작
//유저에게 노출이 되면 안되는 부분은 숨겨야 한다.
/*
var randomGame = {
    MESSAGE:{  //대문자는 상수라는 뜻이다.
        START:'게임을 시작합니디.',
        UP:'업!',
        DOWN:'다운!',
        END:'게임 종료',
        CORRECT:'정답!!'
    },
    randomNumber : null,  //값은 있지만, 아직 넣지않은 상황
    limit : 0,
    start : function(){
        this.limit = 6;
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.display(this.MESSAGE.START);
    },
    say : function(number){
        //게임이 끝났으면(시작되지 않았으면) 종료,
        if(!this.limit) return this.end();  //방어코드(안전하게 검사하는 측면에서 방어코드 작성)
        //숫자를 비교하고
        //정답이면 정답! & 종료!
        if(number === this.randomNumber){
            this.display(this.MESSAGE.CORRECT);
            this.end();
            return;
        }
        this.limit--; // 먼저 감소시키고
        //정답이 아니면 리미트를 내린다.
        if(number > this.randomNumber){
            this.display(this.MESSAGE.DOWN);
        }else{
            this.display(this.MESSAGE.UP);
        }

        //this.display(number > this.randomNumber ? this.MESSAGE.DOWN : this.MESSAGE.UP);

        //this.display(this.MESSAGE[number > this.randomNumber ? 'DOWN' : 'UP']);  // 값 = 식!!! 값대신 식이 들어갈때 []대괄호를 이용하여 식을 넣을 수 있다.

        //this[1 > 2 ? 'addClass' : 'removeClass'](); // 이런식으로도 가능!


        if(!this.limit) this.end(); //종료시켜야함

    },
    display : function(msg){
        console.log(msg);
    },
    end: function(){
        this.display(this.MESSAGE.END);
        this.limit = 0;
    }
};
*/
/*
var randomGame = (function randomGame(){
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    return{
        MESSAGE:{  //대문자는 상수라는 뜻이다.
            START:'게임을 시작합니디.',
            UP:'업!',
            DOWN:'다운!',
            END:'게임 종료',
            CORRECT:'정답!!'
        },
        randomNumber : null,  //값은 있지만, 아직 넣지않은 상황
        limit : 0,
        start : function(){
            this.limit = 6;
            this.display(this.MESSAGE.START);
        },
        say : function(number){
            //게임이 끝났으면(시작되지 않았으면) 종료,
            if(!this.limit) return this.end();  //방어코드(안전하게 검사하는 측면에서 방어코드 작성)
            //숫자를 비교하고
            //정답이면 정답! & 종료!
            if(number === randomNumber){
                this.display(this.MESSAGE.CORRECT);
                this.end();
                return;
            }
            this.limit--; // 먼저 감소시키고
            //정답이 아니면 리미트를 내린다.
            if(number > randomNumber){
                this.display(this.MESSAGE.DOWN);
            }else{
                this.display(this.MESSAGE.UP);
            }

            //this.display(number > this.randomNumber ? this.MESSAGE.DOWN : this.MESSAGE.UP);

            //this.display(this.MESSAGE[number > this.randomNumber ? 'DOWN' : 'UP']);  // 값 = 식!!! 값대신 식이 들어갈때 []대괄호를 이용하여 식을 넣을 수 있다.

            //this[1 > 2 ? 'addClass' : 'removeClass'](); // 이런식으로도 가능!


            if(!this.limit) this.end(); //종료시켜야함

        },
        display : function(msg){
            console.log(msg);
        },
        end: function(){
            this.display(this.MESSAGE.END);
            this.limit = 0;
        }
    }
}());
내가한것
*/
/*
var randomGame = (function randomGame(){
    var randomNumber = null;
    var limit = 0;
    function display(msg){
        console.log(msg);
    },
    function end(){
        this.display(MESSAGE.END);
        this.limit = 0;
    }
    return{
        MESSAGE:{  //대문자는 상수라는 뜻이다.
            START:'게임을 시작합니디.',
            UP:'업!',
            DOWN:'다운!',
            END:'게임 종료',
            CORRECT:'정답!!'
        },
        display : function(msg){
            console.log(msg);
        },
        end: function(){
            this.display(this.MESSAGE.END);
            this.limit = 0;
        }
    }

}());
*/


var randomGame = (function(){
    var MESSAGE = {
        START: '게임을 시작합니다.',
        UP: '업!',
        DOWN: '다운!!',
        END: '게임 종료',
        CORRECT: '정답!!!'
    };
    var randomNumber = null;
    var limit = 0;


    function display(msg) {
        console.log(msg);
    }
    function end() {
        display(MESSAGE.END);
        limit = 0;
    }
// 함수가 실행되었을때, this 와 arguments가 셋팅
// 실행 후 메모리제거를 위해 지역변수를 사라지게 해야한다.
// 함수가 선언되었을경우 바깥에 환경을 기억하고 있는 함수를 (클로져 함수)  라한다!!!! 그리고 바깥에 있는 변수를 자유변수라 한다.
// 라이브러리로 사용할 경우 즉시 실행함수를 통해 자유변수화 하여서, 작성해야 충돌을 대비할 수 있다.
    return {
        start: function(min,max) {
            limit = 6;
            randomNumber = Math.floor(Math.random() * (max || 1)) + (min || 1);
            display(MESSAGE.START);
        },
        say: function(number) {
            //게임이 끝났으면(시작되지 않았으면) 종료
            if(!limit) return end();

            //숫자를 비교하고 //정답이면 정답! 종료!
            if(number === randomNumber) {
                display(MESSAGE.CORRECT);
                end();
                return;
            }

            limit--;

            if(number > randomNumber) {
                display(MESSAGE.DOWN);
            } else {
                display(MESSAGE.UP);
            }

            //this.display(number > this.randomNumber ? this.MESSAGE.DOWN : this.MESSAGE.UP);
            //this.display(this.MESSAGE[number > this.randomNumber ? 'DOWN' : 'UP'])
            //this[1 > 2 ? 'addClass' : 'removeClass']();

            if(!limit) end();
        }
    }
}());
// 리팩토링 끝
randomGame.start();// 게임을 시작합니다.
randomGame.say(10);// 업
randomGame.say(98);// 다운
randomGame.say(57);// 업
randomGame.say(70);// 다운
randomGame.say(62);// 업
randomGame.say(68);// 정답