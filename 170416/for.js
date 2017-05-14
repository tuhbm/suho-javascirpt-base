function sumFor(arr){
    // var i =0;
    var result = 0;
    var length = arr.length;
    // for(;i < length;){
    //     result += arr[i];
    //     i += 1;
    // }
    // function plus(){
    //     i++;
    // }
    // for(var i = 0(1번순서);i < length(2번순서); plus()(4번순서)){
    //     result += arr[i];(3번순서)
    // }
    for(var i = 0;i < length; i++){
        result += arr[i];
    }
    return result;
}