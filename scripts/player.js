class Player {
    constructor() {
      this.sprite = {
        run: [],
      };
  
      for (let i = 1; i <= 10; i++) {
        let frame = new Image();
        frame.src = "assets/run/run_" + i + ".png";
        this.sprite.run.push(frame);
      }
  
      this.X = 0;
      this.Y = 230;
  
      this.storedTicks = 0;
      this.animFrame = 0;
  
      // Set the scale factor to 1.5 (i.e., 150%)
      this.scaleFactor = 1.5;
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
  
    draw(frame) {
      this.storedTicks += frame;
  
      this.X += 0.1 * frame;
  
      if (this.storedTicks > 70) {
        this.storedTicks -= 70;
        this.animFrame = (this.animFrame + 1) % 10;
      }
  
      // Scale the player sprite image by the scale factor
      let width = 27 * this.scaleFactor;
      let height = 35 * this.scaleFactor;
  
      ctx.drawImage(
        this.sprite.run[this.animFrame],
        this.X,
        this.Y,
        width,
        height
      );
    }
  }
  



