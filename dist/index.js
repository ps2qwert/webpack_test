webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2); //加载初始化样式
	__webpack_require__(6); //加载组件样式


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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);