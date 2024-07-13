obj = {
    fn : function(){
        console.log(this);
    },

    fn2 : () => {
        console.log(this);
    }
}

obj.fn();