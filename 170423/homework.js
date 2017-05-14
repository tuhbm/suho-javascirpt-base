var arr = [ { name: '사과', quantity: 30, price: 500 },
            { name: '바나나', quantity: 40, price: 1500 },
            { name: '감', quantity: 250, price: 2300 },
            { name: '포도', quantity: 55, price: 1800 },
            { name: '수박', quantity: 15, price: 9800 },
            { name: '딸기', quantity: 25, price: 2000 },
            { name: '키위', quantity: 100, price: 4200 }
]

// 1. 위 배열에서 quantity 또는 price 를 기준으로 오름, 내림 차순 정렬(sort 사용)
var filterArr = arr.sort(sortArray)
function sortArray(arr, target){
    var result = [];
    for(var i = 0; )
}
// 2. quantity 에는 '개'를 붙이고 price에는 '원'을 붙여라(map 사용)
// 3. price가 2000 이상인 객체만 찾아보라(filter 사용)
// 4. 모든 과일의 재고가 ?개 이상인가(모든 엘레먼트가 조건을 만족하는가) (every 사용)