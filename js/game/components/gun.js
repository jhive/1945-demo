define(['ash'], function(Ash){

	var Gun = Ash.Class.extend({

		shooting:false,		
		timeSinceLastShot:0,			

		constructor:function(offsetX, offsetY, minimumShotInterval, bulletLifetime){
			this.offsetFromParent = {x:offsetX, y:offsetY};			
			this.minimumShotInterval = minimumShotInterval;
			this.bulletLifetime = bulletLifetime;
		}

	});

	return Gun;
})