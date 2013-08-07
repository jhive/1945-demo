define(['ash', 'components/tile', 'components/position' ], function(Ash, Tile, Position){
	
	var BGTileNode = Ash.Node.extend({

		tile: null,
		position: null,

		types:{
			tile:Tile,
			position:Position
		},

		constructor: function(tile, position){
			this.tile = tile;			
			this.position = position;
		}		
	});

	return BGTileNode;
});