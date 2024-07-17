function sketchTwo(p5) {
    let cols, rows, blocks = [];
    let size = 10;
    let offset = 5;
    let disMouse = 50;
  
    class Block {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 90;
      }
  
      display() {
        p5.noFill();
        p5.stroke(this.c);
        p5.push();
        p5.translate(this.x, this.y);
        p5.rotate(p5.radians(this.angle));
        if (this.angle < 45 && this.angle > 0) {
          this.drawRect();
        } else {
          this.drawX();
        }
        p5.pop();
      }
  
      move() {
        let distance = p5.dist(p5.mouseX, p5.mouseY, this.x, this.y);
        if (p5.pmouseX !== p5.mouseX || p5.pmouseY !== p5.mouseY) { // detect if the mouse is moving
          if (distance < disMouse) {
            this.angle += 2;
            this.c = 255;
          }
        }
        // If squares are already rotating, keep rotating until angle = 90
        if (this.angle > 0 && this.angle < 180) {
          this.angle += 2;
          if (this.c > 90) {
            this.c -= 3;
          }
        } else {
          this.angle = 0;
          this.c = 90;
        }
      }
  
      drawX() {
        let margin = -size / 2;
        p5.line(margin + offset / 2, margin + offset / 2, margin + size - offset / 2, margin + size - offset / 2);
        p5.line(size + margin - offset / 2, margin + offset / 2, margin + offset / 2, size + margin - offset / 2);
      }
  
      drawRect() {
        p5.rect(0, 0, size - offset, size - offset);
      }
    }
  
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.rectMode(p5.CENTER);
      p5.angleMode(p5.DEGREES);
      cols = p5.width / size;
      rows = p5.height / size;
  
      // Create grid of blocks
      for (let i = 0; i < cols; i++) {
        blocks[i] = []; // Initialize each sub-array
        for (let j = 0; j < rows; j++) {
          blocks[i][j] = new Block(i * size + size / 2, j * size + size / 2);
        }
      }
    };
  
    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      cols = p5.width / size;
      rows = p5.height / size;
      blocks = [];
      for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
          blocks[i][j] = new Block(i * size + size / 2, j * size + size / 2);
        }
      }
    };
  
    p5.draw = () => {
      p5.background(0);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          blocks[i][j].display();
          blocks[i][j].move();
        }
      }
    };
  }
  
  export default sketchTwo;
  