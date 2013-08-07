define(['ash', 'easeljs', 'jquery'], function(Ash, EaselJS, $)
{	
	var ShipView = Ash.Class.extend({		
		assets: null,
		self: null,
		constructor: function(assets){			

			self = this;
			self.assets = assets;		
			
			var texture = assets.getImage('assets/plane.png');			


			self.image = texture;							
			self.sourceRect = {x:0, y:0, width:64, height:65}
			self.regX = (65/2);
			self.regY = (65/2);
		}

	});
	
	ShipView.prototype = new createjs.Bitmap();	
	return ShipView;	
});
