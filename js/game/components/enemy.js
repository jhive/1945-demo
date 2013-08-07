define(['ash'],
function(Ash){

	var Enemy = Ash.Class.extend({
		
		id:null,
		health:null,

		constructor:function(health){
			this.id = "enemy";
			this.health = health;
		}
	});

	return Enemy;
})