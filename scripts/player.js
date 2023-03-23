class Player{
    constructor(){
        this.sprite = {
            run: [],
            idle: [],
        }

        // Load each frame of animation into the sprite.run array
        for(let i = 1; i <= 10; i++){
            let frame = new Image();
            frame.src = "assets/run/run_" + i + ".png";
            this.sprite.run.push(frame);
        }

        for(let i = 1; i <= 10; i++){
            let frame = new Image();
            frame.src = "assets/idle/idle_" + i + ".png";
            this.sprite.idle.push(frame);
        }

        this.X = 0;
        this.Y = 240;

        this.storedTicks = 0;
        this.animFrame = 1;
    }

    move(frame){
        if(this.rightPressed && !this.leftPressed){
            this.X += 0.125*frame
        }
        if(this.leftPressed && !this.rightPressed){
            this.X -= 0.125*frame
        }
    }

    draw(frame){
        this.storedTicks += frame;

        this.move(frame);

        if(this.storedTicks > 80){
            this.storedTicks -= 70;
            this.animFrame = (this.animFrame+1)%8;
        }

        // Draw the current animation frame
        ctx.drawImage(this.sprite.run[this.animFrame], this.X, this.Y);
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


