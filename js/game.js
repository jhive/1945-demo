define([
	'ash',
	'easeljs', 
	'game/entitycreator', 
	'systems/gamemanager',
	'systems/rendersystem',
	'systems/movementsystem',
	'systems/motioncontrolsystem',
	'systems/spriteanimationsystem',
	'systems/guncontrolsystem',
	'systems/bulletagesystem',
	'systems/backgroundspawnsystem',
	'systems/enemyspawnsystem',	
	'systems/enemyagesystem',
	'systems/collisionsystem',
	'brejep/keypoll'
	], 
function
(
	Ash, 
	EaselJS, 
	EntityCreator,
	GameManager,
	RenderSystem,
	MovementSystem,
	MotionControlSystem,
	SpriteAnimationSystem,
	GunControlSystem,
	BulletAgeSystem,
	BackgroundSpawnSystem,
	EnemySpawnSystem,
	EnemyAgeSystem,
	CollisionSystem,
	KeyPoll
){	
	
	var Game = Ash.Class.extend({
		
		stage:null,		
		engine:null,
		creator:null,		
		keyPoll:null,

		constructor: function(assetLoader){			
			stage = new createjs.Stage("demoCanvas");			

			this.width = stage.width;
			this.height =  stage.height;

			this.engine = new Ash.Engine();			
			this.creator = new EntityCreator( this.engine, assetLoader );	
			this.keyPoll = new KeyPoll();			

			this.engine.addSystem( new GameManager(this.creator), 0);
			this.engine.addSystem( new MotionControlSystem(this.keyPoll), 0 );
			this.engine.addSystem( new GunControlSystem(this.keyPoll,this.creator), 0);
			this.engine.addSystem( new CollisionSystem(this.creator), 0);			
			this.engine.addSystem( new MovementSystem(), 1 );
			this.engine.addSystem( new SpriteAnimationSystem(this.creator), 1);
			this.engine.addSystem( new BackgroundSpawnSystem(this.creator), 1);
			this.engine.addSystem( new EnemySpawnSystem(this.creator), 1);
			this.engine.addSystem( new EnemyAgeSystem(this.creator), 2);
			this.engine.addSystem( new BulletAgeSystem(this.creator), 2 );			
			this.engine.addSystem( new RenderSystem(stage), 3 );


		},

		start: function()
		{					
			this.creator.createGame();			

            createjs.Ticker.addEventListener("tick", this.handleTick.bind(this));
			createjs.Ticker.setFPS(60);	
		},

		handleTick: function(event)
		{						
			this.engine.update(event.delta / 1000);
		}
	});	
	return Game;
})
