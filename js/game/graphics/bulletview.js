define(['ash', 'easeljs', 'jquery'], function(Ash, EaselJS, $)
{	
	var BulletView = Ash.Class.extend({		
		assets: null,
		self: null,
		constructor: function(assets){			

			self = this;
			self.assets = assets;		
			
			var texture = assets.getImage('assets/1945.png');			


			self.image = texture;							
			self.sourceRect = {x:268, y:169, width:32, height:32}
			self.regX = (32/2);
			self.regY = (32/2);
		}

	});
	
	BulletView.prototype = new createjs.Bitmap();	
	return BulletView;	
});
