define(['ash', 'components/bullet' ], function(Ash, Bullet){
	
	var BulletAgeNode = Ash.Node.extend({

		bullet: null,

		types:{
			bullet:Bullet			
		},

		constructor: function(bullet){
			this.bullet = bullet;			
		}		
	});

	return BulletAgeNode;
});