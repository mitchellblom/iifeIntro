// var outside = "global";

// function scopeStuff(){
// 	var inside = "local";
// 	console.log("outside from inside the function", outside); //"global"
// 	console.log("inside from inside the function", inside); //"local"
// }

// console.log("outside from outside the function", outside); //"global"
// // console.log("inside from outside the function", inside); // error << This one breaks the code

// scopeStuff();

var global_base = 500;
(function throwAway(){
	global_base+=500;
	console.log(global_base); //1000
})();

var cats = (function(){				/*function inside of an object inside of a function */
	var color = "black";
	var type = "tiger";
	var name = "fluffy";		/*user will never know about this one, because there is no function showing it to user*/



	return {
		getColor : function (){		/*to access an object within a function, i need to use a : instead of a = */
			var result = "your cat is " + color;
			return color;
		},
		getType : function (){
			return type;
		},
		setColor: function (newColor){
			color = newColor;
		}
	};
})();

console.log(cats); //
cats.setColor("pink");
console.log(cats.getColor());


// throwAway();

// document.getElementById('cat').addEventListener("click", throwAway);