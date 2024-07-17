function sketchOne(p5) {
    let rotation = 0;
  
    p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  
    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };
  
    p5.updateWithProps = (props) => {
      if (props.rotation) {
        rotation = (props.rotation * Math.PI) / 180;
      }
    };
  
    p5.draw = () => {
      p5.background(100);
      p5.normalMaterial();
      p5.noStroke();
      p5.push();
      p5.rotateY(rotation);
      p5.box(100);
      p5.pop();
    };
  }
  
  export default sketchOne;