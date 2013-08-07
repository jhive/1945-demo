define(['ash', 'components/bullet', 'components/position'], 
function(Ash, Bullet, Position){

	var BulletCollisionNode = Ash.Node.extend({

		bullet: null,
		position: null,

		types:{
			bullet:Bullet,
			position:Position
		},

		constructor:function(bullet, position){
			this.bullet = bullet;
			this.position = position;
		}

	});

	return BulletCollisionNode;
});