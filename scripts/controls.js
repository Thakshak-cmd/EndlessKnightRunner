function initControls(player){
    document.onkeydown = function (event) {
        switch (event.key) {
            case "A":
            case "a":
            case "ArrowLeft": //Left
                player.pressLeft();
                break;
            case "W":    
            case "w":
            case "ArrowUp": //Up
                player.pressUp();
                break;
            case "D":    
            case "d":
            case "ArrowRight": //Right
                player.pressRight();
                break;
            case "S":
            case "s":
            case "ArrowDown": //Down
                player.pressDown();
                break;
        }
    };

    document.onkeyup = function (event) {
        switch (event.key){
            case "A":
            case "a":
            case "ArrowLeft": //Left
                player.releaseLeft();
                break;
            case "W":
            case "w":
            case "ArrowUp": //Up
                player.releaseUp();
                break;
            case "D":
            case "d":
            case "ArrowRight": //Right
                player.releaseRight();
                break;
            case "S":    
            case "s":
            case "ArrowDown": //Down
                player.releaseDown();
                break;
        }
    }
}


