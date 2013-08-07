define(['ash', 'easeljs'], function(Ash, EaselJS)
{	
	var ExplosionView = Ash.Class.extend({		
		assets: null,
		self: null,
		constructor: function(assets){			

			self = this;
			self.assets = assets;		
			
			var texture = assets.getImage('assets/1945.png');			
			self.image = texture;									
			self.sourceRect = {x:0, y:0, width:1, height:1};
		}

	});
	
	ExplosionView.prototype = new createjs.Bitmap();	
	return ExplosionView;	
});