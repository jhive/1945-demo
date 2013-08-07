define(['ash', 'nodes/enemyagenode'], 
function(Ash, EnemyAgeNode){

	var EnemyAgeSystem = Ash.System.extend({

		creator:null,
		nodes:null,

		constructor:function(creator){
			this.creator = creator;
		},

		addToEngine:function(engine){
			this.nodes = engine.getNodeList(EnemyAgeNode);			
		},

		update:function(time){											
			for(var node = this.nodes.head; node; node = node.next)
			{								
				if(node.position.alpha < 1){
					node.position.alpha += time * 20;
				}

				if(node.position.position.y > 600){								
					this.creator.killEntity(node.entity);
				}
			}			
		},

		removeFromEngine:function(engine){
			nodes = null;
		}
	});

	return EnemyAgeSystem;

})