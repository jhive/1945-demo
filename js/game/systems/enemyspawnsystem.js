define(['ash', 'nodes/gamenode', 'components/position', 'components/motion'], 
function(Ash, GameNode, Position, Motion){

	var EnemySpawnSystem = Ash.System.extend({

		nodelist:null,
		creator:null,
		timeRunning:0,

		constructor:function(creator){
			this.creator = creator;
		},

		addToEngine:function(engine){	
			nodelist = engine.getNodeList(GameNode);
		},

		update: function(time){

			this.timeRunning = (this.timeRunning + time);			
			for(var node = nodelist.head; node; node = node.next){				
				var game = node.game;			
				game.timeSinceLastEnemySpawn += time;

				if(game.timeSinceLastEnemySpawn >= game.enemySpawnTime){		
					game.enemySpawnTime = Math.random() * 2;
					game.timeSinceLastEnemySpawn = 0;									

					var xPos = 300 + Math.sin(this.timeRunning) * 50;
					var position = new Position(xPos, 0, 0, 16);
					var motion = new Motion(30 - (Math.random() * 60), 180, 0);
					this.creator.createEnemy(position, motion);	
				}
			}			
		},

		removeFromEngine:function(engine){
			nodelist = null;
		}
	});

	return EnemySpawnSystem;
})