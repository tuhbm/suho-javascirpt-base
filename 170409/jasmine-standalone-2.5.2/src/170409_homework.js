function sum(arr){
    var i = 0;
    var result = 0;
    while(i < arr.length){
        result += arr[i];
        i+=1;
    }
    return result;
}
function sum2(arr){
    var i = arr.length;
    var result = 0;
    while(i--){
        result += arr[i];
    }
    return result;
}

function max(arr){
    var i = 0;
    var result = 0;
    while(i < arr.length){
        if(result <= arr[i]) result = arr[i];
        i+=1;
    }
    return result;
}
function max2(arr){
    var i = arr.length;
    var result = 0;
    while(i--){
        if(result <= arr[i]) result = arr[i];
    }
    return result;
}

function sumIf(arr, target){
    var i = 0;
    var result = 0;
    while(i < arr.length){
        if(target <= arr[i]) result += arr[i];
        i+=1;
    }
    return result;
}

function sumIf(arr,target){
    var i = arr.length;
    var result = 0;
    while(i--){
        if(target <= arr[i]) result += arr[i];
    }
    return result;
}