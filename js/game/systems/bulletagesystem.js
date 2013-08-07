define(['ash', 'nodes/bulletagenode'], 
function(Ash, BulletAgeNode){

	var BulletAgeSystem = Ash.System.extend({

		creator:null,
		nodes:null,

		constructor:function(creator){
			this.creator = creator;
		},

		addToEngine:function(engine){
			nodes = engine.getNodeList(BulletAgeNode);			
		},

		update:function(time){			
			for(var node = nodes.head; node; node = node.next)
			{
				node.bullet.lifetime -= time;				
				if(node.bullet.lifetime <= 0){								
					this.creator.killEntity(node.entity);
				}
			}			
		},

		removeFromEngine:function(engine){
			nodes = null;
		}
	});

	return BulletAgeSystem;

})