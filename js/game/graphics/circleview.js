define(['ash', 'easeljs'], function(Ash, EaselJS)
{	
	var CircleView = Ash.Class.extend({
		constructor: function(){			
			this.graphics.beginFill('red').drawCircle(0, 0, 50);
			this.x = 100;
			this.y = 100;

			console.log();
		}

	});

	CircleView.prototype = new createjs.Shape();	
	return CircleView;	
});
