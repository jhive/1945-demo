define(['ash', 'nodes/guncontrolnode', 'components/gun'], function(Ash, GunControlNode, Gun){

	var GunControlSystem = Ash.System.extend({

		keyPoll: null,
		creator: null,
		nodes: null,

		constructor: function( keyPoll, creator ){
			this.keyPoll = keyPoll;
			this.creator = creator;
		},

		addToEngine: function(engine){			
			this.nodes = engine.getNodeList(GunControlNode);			
		},

		update: function(time){	
					
			for( var node = this.nodes.head; node; node = node.next){
				var control = node.control,
					position = node.position,
					gun = node.gun;
					
				gun.timeSinceLastShot += time;
					
				if(this.keyPoll.isDown(control.trigger))
				{					
					if(gun.timeSinceLastShot >= gun.minimumShotInterval)
					{						
						gun.timeSinceLastShot = 0;
						this.creator.createBullet(gun, position);

						/*
						var gun2 = new Gun(-10, gun.offsetFromParent.y, 0, gun.bulletLifetime);
						this.creator.createBullet(gun2, position);
						
						var gun3 = new Gun(10, gun.offsetFromParent.y, 0, gun.bulletLifetime);
						this.creator.createBullet(gun3, position);
						*/
					}
				}				
			}
			
		},

		removeFromEngin: function(engine)
		{
			this.nodes = null;
		}
	});

	return GunControlSystem;
});

/*

			
			
			*/