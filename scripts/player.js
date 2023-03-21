class Player{
    constructor(){
        this.sprite = {
            run: new Image(),
            idle: new Image(),
            jump: new Image(),
        }

        this.sprite.run.src = "assets/_Run.png";

        this.X = 0;
        this.Y = 230;

        this.storedTicks = 0;
        this.animFrame = 0;

        this.leftPressed = false;
        this.rightPressed = false;
        this.downPressed = false;
        this.upPressed = false;

    }

    move(frame){
        if(this.rightPressed && !this.leftPressed){
            this.X += 0.1*frame
        }
        if(this.leftPressed && !this.rightPressed){
            this.X -= 0.1*frame
        }
    }

    draw(frame){
        this.move(frame);

        this.storedTicks += frame;
        if(this.storedTicks > 70){
            this.storedTicks -= 70;
            this.animFrame = (this.animFrame+1)%10;
        }

        ctx.drawImage(this.sprite.run, 40+this.animFrame*120, 42, 29, 38, this.X, this.Y, 29, 38);
    }

    pressLeft(){
        this.leftPressed = true;
    }

    releaseLeft(){
        this.leftPressed = false;
    }

    pressRight(){
        this.rightPressed = true;
    }

    releaseRight(){
        this.rightPressed = false;
    }

    pressUp(){
        this.upPressed = true;
    }

    releaseUp(){
        this.upPressed = false;
    }

    pressDown(){
        this.downPressed = true;
    }

    releaseDown(){
        this.downPressed = false;
    }
}



