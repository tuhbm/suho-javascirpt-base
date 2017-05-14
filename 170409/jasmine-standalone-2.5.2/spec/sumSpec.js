//기본형식
// describe('대제목', function(){
//     it('소제목', function(){
//         expect(실행될함수).toEqual(기대할 결과);
//     });
// });
// describe('뎃셈을 테스트 한다.', function(){
//     // it('sum 함수는 총합을 반환한다.', function(){
//     //     expect(sum(1,2,3,4)).toEqual(10);
//     // });
//     it('sum 함수는 총합을 반환한다.', function(){
//         var result = sum (1,2,3,4);
//         //expect(result).toEqual(10);
//         expect(sum(-1,4,5,'5')).toEqual(13);
//     });
//
// });
//
// describe('남자 여자의 카운트를 센다',function(){
//     var arr = ['남','남','남','남','남','','여','여','여','남','남','여'];
//     it('남자를 카운트한다', function(){
//        expect(countif(arr,'남')).toEqual(7);
//     });
//     it('여자를 카운트한다', function(){
//        expect(countif(arr,'여')).toEqual(4);
//     });
// });
//
// describe('태그와 텍스트를 호출한다.', function(){
//    it('div안에 이름을 넣는다', function(){
//        expect(createElement('div','김태균')).toEqual('<div>김태균</div>');
//    });
// });

describe('170409 과제', function(){
    it('1. 썸 함수',function(){
        expect( sum( [1,2,3,4,5,6,7,8,9,10]) ).toEqual(55);
        expect( sum( [10,20,77,3,12,8]) ).toEqual(130);
    });
    it('2. 맥스 함수',function(){
        expect( max([1,2,4,10,3,7]) ).toEqual(10);
        expect( max([2,10,-5,19,-4,20,12]) ).toEqual(20);
    });
    it('3. 썸 이프',function(){
        expect( sumIf([4,5,2,1,5,6,4,7], 6) ).toEqual(13);
        expect( sumIf([3,-4,1,9,10,20], 10) ).toEqual(30);
    });

});