// renderer.js
var renderer = function(c) {
	return {
		draw: function(ctx) {
			c.draw(c, ctx);
		}
	};
};