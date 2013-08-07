define(['ash'], function(Ash){
	
	var AnimationFrames = Ash.Class.extend({

		currentFrame:null,
		frames:null,
		totalFrames:null,
		frameRate:null,
		timeSinceUpdate:null,
		loopCount:null, 

		constructor:function(frames, frameRate, loopCount){
			this.currentFrame = 0;
			this.loopCount = loopCount;
			this.frames = frames;
			this.totalFrames = frames.length;
			this.frameRate = 1/frameRate;
			this.timeSinceUpdate = 0;			
		}

	});

	return AnimationFrames;
});