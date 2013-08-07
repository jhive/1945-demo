define(['ash'],
function(Ash){	
	var Tile = Ash.Class.extend({		
		id:null,
		index:0,
		constructor:function(index){
			this.id = "tile";
			this.index = index;
		}
	});

	return Tile;
})