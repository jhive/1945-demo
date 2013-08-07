define(['ash', 'easeljs', 'jquery'], function(Ash, EaselJS, $)
{	
	var EnemyView = Ash.Class.extend({		
		assets: null,
		self: null,
		constructor: function(assets){			

			self = this;
			self.assets = assets;		
			
			var texture = assets.getImage('assets/1945.png');			


			self.image = texture;							
			self.sourceRect = {x:4, y:103, width:32, height:32}
			self.regX = (32/2);
			self.regY = (32/2);
		}

	});
	
	EnemyView.prototype = new createjs.Bitmap();	
	return EnemyView;	
});
