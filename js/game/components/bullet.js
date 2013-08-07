define(['ash'], function(Ash){

	var Bullet = Ash.Class.extend({
		
		constructor:function(lifetime){
			this.lifetime = lifetime;
		}

	});

	return Bullet;
});