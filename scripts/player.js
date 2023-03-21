class Player{
    constructor(){
        this.sprite = {
            run: new Image(),
        }

        this.sprite.run.src = "assets/_Run.png";

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
        ctx.drawImage(this.sprite.run, 40+this.animFrame*120, 42, 29, 38, this.X, this.Y, 29, 38);
    }
}



