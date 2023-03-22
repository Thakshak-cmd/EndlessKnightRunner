let player = new Player();
initControls(player)


let lastTimeStamp = 0;
let frame = 0;

function draw(timestamp=0){
    frame = timestamp - lastTimeStamp;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 469, 279);    

    //all game code goes here
    player.draw(frame);

    lastTimeStamp = timestamp;
    window.requestAnimationFrame(draw);
}