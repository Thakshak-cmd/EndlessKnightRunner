const canvas = document.querySelector(".game-canvas");
const ctx = canvas.getContext("2d");

//496:279 :: 16:9

var scale = 1;
var topLeftX = 0;
var topLeftY = 0;

//function is called at the start and when window is resized
//function correctly resizes and rescales canvas
function scaleCanvas(){
    const wHeight = window.innerHeight;
    const wWidth = window.innerWidth;
    
    var scaleFactor;
    if(wHeight * 16 > wWidth * 9){ //width constricts
        scale = wWidth/496; 
        scaleFactor = wWidth/496;
        canvas.width = scaleFactor*496;
        canvas.height = scaleFactor*279;
    }else{ // height constricts
        scale = wHeight/279;
        scaleFactor = wHeight/279;
        canvas.width = scaleFactor*496;
        canvas.height = scaleFactor*279;
    }
    
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
    ctx.scale(scaleFactor, scaleFactor);

    var rect = canvas.getBoundingClientRect();
    topLeftX = rect.left;
    topLeftY = rect.top;
}

scaleCanvas();
window.onresize = scaleCanvas;


let pauseAnimation = false;
window.onblur = function (event){
    pauseAnimation = true;
    //later put code to pause audio here also
}

window.onfocus = function (event){
    pauseAnimation = false;
    //later put code to resume audio here
}