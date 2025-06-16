(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Social_540x540_atlas_1", frames: [[0,0,1913,1539]]},
		{name:"Social_540x540_atlas_2", frames: [[0,0,1913,1307]]},
		{name:"Social_540x540_atlas_3", frames: [[0,0,1913,842],[0,844,1633,608]]},
		{name:"Social_540x540_atlas_4", frames: [[0,0,1633,608],[0,610,1633,608],[0,1220,754,754]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Social_540x540_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Social_540x540_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Social_540x540_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Chinook1away = function() {
	this.initialize(ss["Social_540x540_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Chinook2mid = function() {
	this.initialize(ss["Social_540x540_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Chinook3near = function() {
	this.initialize(ss["Social_540x540_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Elk0 = function() {
	this.initialize(img.Elk0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2084,2084);


(lib.Elk1down = function() {
	this.initialize(img.Elk1down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2084,2084);


(lib.Elk2ear1 = function() {
	this.initialize(img.Elk2ear1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2084,2084);


(lib.Elk2ear2 = function() {
	this.initialize(img.Elk2ear2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2084,2084);


(lib.Shield = function() {
	this.initialize(ss["Social_540x540_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.HEAD1c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1c, new cjs.Rectangle(0,0,956.5,769.5), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(0,0,956.5,653.5), null);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(0,0,956.5,421), null);


(lib.elkorig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Elk0();
	this.instance.setTransform(416.8,-416.75,0.4,0.4,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elkorig, new cjs.Rectangle(-416.7,-416.7,833.5,833.5), null);


(lib.elkear2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Elk2ear2();
	this.instance.setTransform(416.75,-416.75,0.4,0.4,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elkear2, new cjs.Rectangle(-416.7,-416.7,833.5,833.5), null);


(lib.elkear1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Elk2ear1();
	this.instance.setTransform(416.75,-416.75,0.4,0.4,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elkear1, new cjs.Rectangle(-416.7,-416.7,833.5,833.5), null);


(lib.elkdown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Elk1down();
	this.instance.setTransform(416.75,-416.75,0.4,0.4,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elkdown, new cjs.Rectangle(-416.7,-416.7,833.5,833.5), null);


(lib.chinook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// away
	this.instance = new lib.Chinook1away();
	this.instance.setTransform(407.5,-152,0.5,0.5,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// near
	this.instance_1 = new lib.Chinook3near();
	this.instance_1.setTransform(407.5,-152,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3));

	// mid
	this.instance_2 = new lib.Chinook2mid();
	this.instance_2.setTransform(407.5,-152,0.5,0.5,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,-152,816.5,304);


// stage content:
(lib.Social_540x540 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shield
	this.instance = new lib.Shield();
	this.instance.setTransform(370,48,0.1657,0.1657);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(238));

	// HEAD1a
	this.instance_1 = new lib.HEAD1a();
	this.instance_1.setTransform(-217.55,213,0.455,0.455,0,0,0,478.2,384.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:254.7},36,cjs.Ease.quintOut).wait(172));

	// HEAD1b
	this.instance_2 = new lib.HEAD1b();
	this.instance_2.setTransform(-217.55,213,0.455,0.455,0,0,0,478.2,384.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({x:254.7},36,cjs.Ease.quintOut).wait(127));

	// HEAD1c
	this.instance_3 = new lib.HEAD1c();
	this.instance_3.setTransform(-217.55,213,0.455,0.455,0,0,0,478.2,384.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({x:254.7},36,cjs.Ease.quintOut).wait(82));

	// lg
	this.instance_4 = new lib.chinook();
	this.instance_4.setTransform(-134.85,175.75,0.35,0.35,0,0,0,-0.1,0.1);
	this.instance_4.compositeOperation = "multiply";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regX:0.1,x:669.65},32).to({_off:true},1).wait(194));

	// sm
	this.instance_5 = new lib.chinook();
	this.instance_5.setTransform(-101.55,87.9,0.2555,0.2555,0,0,0,-0.2,0.2);
	this.instance_5.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.2,x:627.25},42).to({_off:true},1).wait(195));

	// med
	this.instance_6 = new lib.chinook();
	this.instance_6.setTransform(-113.7,114.1,0.2835,0.2835,0,0,0,0,0.2);
	this.instance_6.compositeOperation = "multiply";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({regX:0.2,x:642.45},34).to({_off:true},1).wait(189));

	// ear2
	this.instance_7 = new lib.elkear2();
	this.instance_7.setTransform(552.4,551.4,0.6368,0.6368,0,0,0,0,0.1);
	this.instance_7.compositeOperation = "multiply";
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(199).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false},0).to({_off:true},1).wait(18));

	// ear1
	this.instance_8 = new lib.elkear1();
	this.instance_8.setTransform(552.4,551.4,0.6368,0.6368,0,0,0,0,0.1);
	this.instance_8.compositeOperation = "multiply";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(198).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(17));

	// down
	this.instance_9 = new lib.elkdown();
	this.instance_9.setTransform(552.4,551.4,0.6368,0.6368,0,0,0,0,0.1);
	this.instance_9.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},173).wait(28).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).wait(17));

	// orig
	this.instance_10 = new lib.elkorig();
	this.instance_10.setTransform(552.4,551.4,0.6368,0.6368,0,0,0,0.1,0.1);
	this.instance_10.compositeOperation = "multiply";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(173).to({_off:false},0).to({_off:true},25).wait(40));

	// BKGD
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0E3FF").s().p("EgqLAqMMAAAhUXMBUXAAAMAAABUXg");
	this.shape.setTransform(270,270);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(238));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgrvgrvMBXfAAAMAAABXfMhXfAAAg");
	this.shape_1.setTransform(270,270);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgrvArwMAAAhXfMBXfAAAMAAABXfg");
	this.shape_2.setTransform(270,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(238));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,259,982.9,557.7);
// library properties:
lib.properties = {
	id: 'E4194DAE6F444963B0B1D25A05153A23',
	width: 540,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Elk0.jpg", id:"Elk0"},
		{src:"images/Elk1down.jpg", id:"Elk1down"},
		{src:"images/Elk2ear1.jpg", id:"Elk2ear1"},
		{src:"images/Elk2ear2.jpg", id:"Elk2ear2"},
		{src:"images/Social_540x540_atlas_1.png", id:"Social_540x540_atlas_1"},
		{src:"images/Social_540x540_atlas_2.png", id:"Social_540x540_atlas_2"},
		{src:"images/Social_540x540_atlas_3.png", id:"Social_540x540_atlas_3"},
		{src:"images/Social_540x540_atlas_4.png", id:"Social_540x540_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E4194DAE6F444963B0B1D25A05153A23'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;