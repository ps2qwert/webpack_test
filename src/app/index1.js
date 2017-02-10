require('../static/css/reset.css'); //加载初始化样式
require('../static/css/style.css'); //加载组件样式


$(".main").click(function(){
	alert("213")
})

Function.prototype.bind = function(){
    var self = this,
    context = [].shift.call(arguments),
    args = [].slice.call(arguments);
    console.log(self);
    console.log(arguments);//[1,2]
    return function(){
        console.log(arguments);//[3,4]
        return self.apply(context,[].concat.call(args,[].slice.call(arguments)));
    };

};
var obj = {
    name:"keke"
};
var fun = function (a,b,c,d){
    alert(this.name);
    alert([a,b,c,d]);
}.bind(obj,1,2);


fun(3,4);