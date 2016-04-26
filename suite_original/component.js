// component.js
var component = function(x, y, w, h) {	
	return {
		x: x || 0,
		y: y || 0,
		w: w || 0,
		h: h || 0,
		updates: [],
		update: function () { 
			var c = this;
			this.updates.forEach(function(f){ f(c); }); 
			// Runs each function in updates, passing 'this' which is the component.
		}
	};
};

