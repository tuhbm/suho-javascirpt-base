var math = {
    sum : function(arr,aaa){
        arr.map(function(){
            return aaa+=aaa;
        })
    },
    max: function(){
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            return obj+=obj;

        }
    },

}