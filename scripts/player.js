class Player{
    constructor(){
        this.sprite = {
            run: [],
        }

        // Load each frame of animation into the sprite.run array
        for(let i = 1; i <= 10; i++){
            let frame = new Image();
            frame.src = "assets/run/run_" + i + ".png";
            this.sprite.run.push(frame);
        }

        this.X = 0;
        this.Y = 230;

        this.storedTicks = 0;
        this.animFrame = 0;
    }

    draw(frame){
        this.storedTicks += frame;

        this.X += 0.1*frame;

        if(this.storedTicks > 70){
            this.storedTicks -= 70;
            this.animFrame = (this.animFrame+1)%10;
        }

        // Draw the current animation frame
        ctx.drawImage(this.sprite.run[this.animFrame], this.X, this.Y, 29, 38);
    }
}


