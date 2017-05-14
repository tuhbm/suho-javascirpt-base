function hoistingFunction(){
    var a = 1;
    console.log(b);

    if(false){
        var b =2;
    }

    var c = 3;
    return c;
}

hoistingFunction();