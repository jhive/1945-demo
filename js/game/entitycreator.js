define([
	'ash', 
	'components/game',	
	'components/display', 
	'components/position',
	'components/motion',
	'components/motioncontrol',
	'components/gun',
	'components/guncontrols',
	'components/bullet',
	'components/player',
	'components/enemy',
	'components/animationframes',
	'components/tile',

	'graphics/spriteview',
	'graphics/circleview',
	'graphics/shipview',
	'graphics/bulletview',
	'graphics/enemyview',
	'graphics/explosionview',
	'graphics/bgtileview'
], 
function(
	Ash,
	Game,	
	Display,
	Position,
	Motion,
	MotionControl,
	Gun,
	GunControls,
	Bullet,
	Player,
	Enemy,
	AnimationFrames,
	Tile,

	SpriteView,
	CircleView,
	ShipView,
	BulletView,
	EnemyView,
	ExplosionView,
	BGTileView
	)
{
	var EntityCreator = function(engine, assets)
	{
		this.engine = engine;
		this.assets = assets;		

		this.spriteImage = assets.getImage('assets/1945.png');

		this.createCircle = function()
		{
			var entity = new Ash.Entity()				
				.add( new Display(new CircleView()))
				.add( new Position(100, 100, 0, 0))
				.add( new Motion(50, 0, 20) );

			this.engine.addEntity(entity);
			return entity;
		}

		this.createGame = function(){
			var game = new Ash.Entity()
				.add( new Game(0.4) );

			this.engine.addEntity( game );
			return game;
		};

		this.createPlayer = function()
		{
			var assets = this.assets;
			
			var entity = new Ash.Entity()
				.add( new Player(1))
				.add( new Display(
					new SpriteView(
						this.spriteImage, null, {regX:65/2, regY:65/2})
					))

				.add( new AnimationFrames([ {x:301, y: 103, width:65, height:65},
											{x:301, y: 169, width:65, height:65},
											{x:301, y: 235, width:65, height:65}], 24, -1))
				.add( new Position(100, 350, 0, 32))
				.add( new Motion(0, 0, 0) )
				.add( new MotionControl(Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, 300))
				.add( new Gun(0, -20, 0.1, 1))
				.add( new GunControls(Keyboard.Z));

			this.engine.addEntity(entity);
			return entity;
		}

		this.createPlayerExplosion = function(position){			

			var entity = new Ash.Entity()
				.add( new Display( new SpriteView(this.spriteImage, null, {regX:65/2, regY:65/2})))
				.add( new AnimationFrames([ {x:4, y:301, width:65, height:65},
											{x:70, y:301, width:65, height:65},
											{x:136, y:301, width:65, height:65},
											{x:202, y:301, width:65, height:65},
											{x:268, y:301, width:65, height:65},
											{x:334, y:301, width:65, height:65}], 
											24, 1))
				.add( position );

			this.engine.addEntity(entity);				
			return entity;
		}

		this.createEnemy = function(position, motion){

			var assets = this.assets;

			var entity = new Ash.Entity()
				.add( new Display( new EnemyView(assets)))
				.add( new AnimationFrames([ {x:4, y: 466, width:32, height:32},
											{x:37, y: 466, width:32, height:32},
											{x:70, y: 466, width:32, height:32}], 24, -1))
				.add( position )
				.add( motion )
				.add( new Enemy(4) );

			this.engine.addEntity(entity);

			return entity;
		}

		this.createHarrasser = function(){
			var assets = this.assets;
		}

		this.createBullet = function(gun, position){
			var assets = this.assets;

			var entity = new Ash.Entity()
				.add( new Display(new BulletView(assets)))
				.add( new Position(position.position.x + gun.offsetFromParent.x, 
								   position.position.y + gun.offsetFromParent.y, 
								   0, 5))
				.add( new Motion( 0, -500, 0 ))
				.add( new Bullet(1));

			this.engine.addEntity(entity);

			return entity;
		}

		this.createExplosion = function(position){
			var assets = this.assets;

			var entity = new Ash.Entity()
				.add( new Display(new ExplosionView(assets)))
				.add( new AnimationFrames([ {x:70, y:169, width:32, height:32},
											{x:103, y:169, width:32, height:32},
											{x:136, y:169, width:32, height:32},
											{x:169, y:169, width:32, height:32},
											{x:202, y:169, width:32, height:32},
											{x:235, y:169, width:32, height:32}], 
											24, 1))
				.add( position );

			position.alpha = 1;

			this.engine.addEntity(entity);				
			return entity;

		}

		this.createScoreLabel = function(position, label){
			
			for(var i = 0; i < label.length; i++){
				var digit = parseInt(label[i]);				
				var offset = digit * 11;
				var digitRect = {x:580, y:107, width:10, height:13};
				digitRect.x = digitRect.x + offset;

				var entity = new Ash.Entity()
					.add( new Display( new SpriteView(this.spriteImage, digitRect)))				
					.add( new Position(position.position.x + (10 * i), position.position.y, 0, 0) );
					//.add(position);
				engine.addEntity(entity);
			}

			return;
			
		}

		
		this.createBGTile = function(position, motion){

			var assets = this.assets;

			var entity = new Ash.Entity()
				.add( new Display( new BGTileView(assets)))				
				.add( position )
				.add( motion )
				.add( new Tile() );

			this.engine.addEntity(entity);

			return entity;
		}

		this.killEntity = function(entity){
			this.engine.removeEntity(entity);
		}
	}
	
	return EntityCreator;
});