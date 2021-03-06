define(['ash', 'easeljs', 'jquery'], function(Ash, EaselJS, $)
{	
	var SpriteView = Ash.Class.extend({		
		texture: null,
		self: null,
		constructor: function(texture, sourceRect, regPoint){			

			self = this;
			this.texture = texture;						

			self.image = texture;							
			self.sourceRect = sourceRect ? sourceRect : {x:0, y:0, width:0, height:0};
			self.regX = regPoint ? regPoint.regX : 0;
			self.regY = regPoint ? regPoint.regY : 0;
		}

	});
	
	SpriteView.prototype = new createjs.Bitmap();	
	return SpriteView;	
});
