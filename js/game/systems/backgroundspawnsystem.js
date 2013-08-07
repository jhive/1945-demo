define(['ash', 'nodes/bgtilenode', 'components/position', 'components/motion', 'components/display'], 
function(Ash, BGTileNode, Position, Motion, Display){

	var BackgroundSpawnSystem = Ash.System.extend({
		creator:null,
		nodes:null,

		constructor:function(creator){
			this.creator = creator;
		},

		addToEngine:function(engine){
			this.nodes = engine.getNodeList(BGTileNode);			

			//Fill the map with tiles
			for(var i = 0; i < 19; i++){
				for( var j = 0; j < 13; j++){
					var position = new Position(0, 0, 0, 16);
					var motion = new Motion(0, 60, 0);
					var entity = this.creator.createBGTile(position, motion);
					
					position.position.x = i * entity.get(Display).graphic.sourceRect.width;
					position.position.y = j * entity.get(Display).graphic.sourceRect.height;
				}
			}
		},

		update:function(time){									
			for(var node = this.nodes.head; node; node = node.next)
			{				
				if(node.position.position.y > 400){
					node.position.position.y = 0;
				}				
			}					
		},

		removeFromEngine:function(engine){
			nodes = null;
		}
	});

	return BackgroundSpawnSystem;	
});