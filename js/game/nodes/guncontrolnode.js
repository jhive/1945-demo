define(['ash','components/gun','components/guncontrols', 'components/position'], 
function(Ash, Gun, GunControl, Position){

	var GunControlNode = Ash.Node.extend({

		gun:null,
		control:null,
		position:null,

		types:{
			gun:Gun,
			control:GunControl,
			position:Position
		},

		constructor:function(gun, control, position){
			this.gun = gun;
			this.control = control;
			this.position = position;
		}

	});

	return GunControlNode;
});