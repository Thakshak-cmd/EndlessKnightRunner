class Player{
    constructor(){
        this.sprite = {
            run: [],
            idle: [],
        }

        this.idle = true; // set initial idle state to true

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
        // Only set to idle state if no arrow keys are pressed
        if(!this.rightPressed && !this.leftPressed) {
            this.idle = true;
        } else {
            this.idle = false;
        }
    }
    

    draw(frame){
        this.storedTicks += frame;
        this.move(frame);
    
        if(this.idle){
            if(this.storedTicks > 80){
                this.storedTicks -= 70;
                this.animFrame = (this.animFrame+1)%6;
            }
            ctx.drawImage(this.sprite.idle[this.animFrame], this.X, this.Y);
        } else {
            if(this.storedTicks > 80){
                this.storedTicks -= 70;
                this.animFrame = (this.animFrame+1)%8;
            }
            ctx.drawImage(this.sprite.run[this.animFrame], this.X, this.Y);
        }
    }
    

    pressLeft(){
        this.leftPressed = true;
        this.idle = false; // player is no longer idle
    }
    
    releaseLeft(){
        this.leftPressed = false;
        this.idle = true; // player is now idle
    }
    
    pressRight(){
        this.rightPressed = true;
        this.idle = false; 
    }
    
    releaseRight(){
        this.rightPressed = false;
        this.idle = true; 
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


