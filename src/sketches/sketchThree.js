function sketchThree(p5) {
    let r = 150;
    let angle = 0;
    let shiftingAngle = [];
    let numAxis = 5;
    let x;
    let y;
    let x2 = [];
    let y2 = [];
  
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.angleMode(p5.DEGREES);
  
      // Define shiftingAngle
      for (let i = 0; i < numAxis; i++) {
        shiftingAngle[i] = i * 90 / numAxis;
      }
    };
  
    p5.draw = () => {
      p5.stroke(0);
      x = r * p5.cos(angle);
      y = r * p5.sin(angle);
  
      p5.background(220);
      p5.translate(p5.width / 2, p5.height / 2);
  
      // Big outer circular orbit
      p5.noFill();
      p5.ellipse(0, 0, r * 2, r * 2);
  
      // Reference red circle 
      p5.fill(255, 0, 0);
      p5.ellipse(x, y, 20, 20);
  
      for (let i = 0; i < numAxis; i++) {
        x2[i] = r * p5.cos(angle + shiftingAngle[i]);
        y2[i] = r * p5.sin(angle + shiftingAngle[i]);
  
        p5.push();
        p5.rotate(-shiftingAngle[i]);
        p5.line(-r, 0, r, 0);
        p5.line(0, r, 0, -r);
  
        p5.fill(255);
        p5.ellipse(x2[i], 0, 20, 20);
        p5.ellipse(0, y2[i], 20, 20);
        p5.pop();
      }
  
      angle += 1; // Make it rotate automatically
    };
  }
  
  export default sketchThree;
  