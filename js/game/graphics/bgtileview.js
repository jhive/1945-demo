define(['ash', 'easeljs', 'jquery'], function(Ash, EaselJS, $)
{	
	var BGTileView = Ash.Class.extend({		
		assets: null,
		self: null,
		constructor: function(assets){			

			self = this;
			self.assets = assets;		
			
			var texture = assets.getImage('assets/1945.png');			


			self.image = texture;			

			//var xPos = Math.random() > 0.5 ? 268 : (268 + 33);			
			var xPos = 268;
			self.sourceRect = {x:xPos, y:367, width:32, height:32}
			self.regX = (32/2);
			self.regY = (32/2);
		}

	});
	
	BGTileView.prototype = new createjs.Bitmap();	
	return BGTileView;	
});
