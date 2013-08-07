define(['ash', 'components/player', 'components/position'], function(Ash, Player, Position){

	var PlayerCollisionNode = new Ash.Node.extend({

		player:null,
		position:null,

		types:{
			player:Player,
			position:Position
		},

		constructor: function(player, position){
			this.player = player;
			this.position = position;
		}
	});

return PlayerCollisionNode;
});