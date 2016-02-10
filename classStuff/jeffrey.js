var tree = {apples: 10};
var basket = {apples: 0};
var jeffrey = {
	listen: function(){
		if(message === 'I HAVE APPLES'){
			robot = undefined;
		}
	}
};
var robot = {
	get_a_damn_apple: function(){
		tree.apples -= 1; 
		basket.apples += 1;
		console.log("tree_apples:", tree.apples, "basket_apples:", basket.apples);
		if(tree.apples === 0){
			robot_tell_jeffrey();
		}
	},
	tell_jeffrey: function(){
		jeffrey.listen('I HAVE APPLES');
	}
};
