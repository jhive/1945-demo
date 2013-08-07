define(['ash', 'components/enemy', 'components/position', 'components/display'], 
function(Ash, Enemy, Position, Display){

	var EnemyCollisionNode = new Ash.Node.extend({

		enemy:null,
		position:null,
		
		types:{
			enemy:Enemy,
			position:Position			
		},

		constructor: function(enemy, position){
			this.enemy = enemy;
			this.position = position;			
		}
	});

return EnemyCollisionNode;
});