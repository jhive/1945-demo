define(['ash', 'components/enemy', 'components/position' ], function(Ash, Enemy, Position){
	
	var EnemyAgeNode = Ash.Node.extend({

		enemy: null,
		position: null,

		types:{
			enemy:Enemy,
			position:Position
		},

		constructor: function(enemy, position){			
			this.enemy = enemy;			
			this.position = position;
		}		
	});

	return EnemyAgeNode;
});