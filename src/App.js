import React, { useEffect, useState } from "react";
import ErrorBoundary from './components/ErrorBoundary';
import ErrorComponent from './components/ErrorComponent';
import SketchSelector from './components/SketchSelector';
import SketchWrapper from './components/SketchWrapper';
import { Wrapper, ErrorWrapper } from './components/StyledComponents';
import sketchOne from './sketches/sketchOne';
import sketchTwo from './sketches/sketchTwo';
import sketchThree from './sketches/sketchThree';

export function App() {
  const [sketch, setSketch] = useState(null);
  const chooseNothing = () => setSketch(null);
  const chooseSketchOne = () => setSketch(() => sketchOne);
  const chooseSketchTwo = () => setSketch(() => sketchTwo);
  const chooseSketchThree = () => setSketch(() => sketchThree);
  const [rotation, setRotation] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setRotation(rotation => rotation + 100),
      100
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Click a button to select a sketch</h1>
      <Wrapper>
        <SketchSelector
          chooseNothing={chooseNothing}
          chooseSketchOne={chooseSketchOne}
          chooseSketchTwo={chooseSketchTwo}
          chooseSketchThree={chooseSketchThree}
        />
        <ErrorBoundary fallback={<ErrorWrapper>There is an error, this is from fallback prop</ErrorWrapper>}>
          {sketch ? (
            <SketchWrapper sketch={sketch} rotation={rotation} />
          ) : (
            <h1>No sketch selected yet.</h1>
          )}
          <button onClick={() => setError(true)}>Simulate error and see fallback UI</button>
          {error && <ErrorComponent />}
        </ErrorBoundary>
      </Wrapper>
    </>
  );
}

export default App;

// not modular, all the codes 
// import React, { useEffect, useState, Fragment } from "react";
// import { ReactP5Wrapper } from "@p5-wrapper/react";
// import styled from "styled-components";
// import ErrorBoundary from './components/ErrorBoundary';
// import ErrorComponent from './components/ErrorComponent'; //this comp creates error

// const StyledCentredText = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   font-size: 3rem;
//   margin: 0;
//   text-align: center;
//   z-index: 1; /* Ensure it is above the canvas */
// `;

// const StyledSmallCentredText = styled.div`
//   position: absolute;
//   top: 60%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   font-size: 1rem;
//   margin: 0;
//   text-align: center;
//   z-index: 1; /* Ensure it is above the canvas */
// `;

// const Wrapper = styled.div`
// border:10px solid black;
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden; /* Ensure no overflow */
// `;

// // error UI
// const ErrorWrapper = styled.div` 

// position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: red;
//   font-size: 3rem;
//   margin: 0;
//   text-align: center;
//   z-index: 1; /* Ensure it is above the canvas */
// `;


// function sketchOne(p5) {
//   let rotation = 0;

//   p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);

//   p5.windowResized = () => {
//     p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
//   };

//   p5.updateWithProps = props => {
//     if (props.rotation) {
//       rotation = (props.rotation * Math.PI) / 180;
//     }
//   };

//   p5.draw = () => {
//     p5.background(100);
//     p5.normalMaterial();
//     p5.noStroke();
//     p5.push();
//     p5.rotateY(rotation);
//     p5.box(100);
//     p5.pop();
//   };
// }

// function sketchTwo(p5) {
//   let cols, rows, blocks = [];
//   let size = 10;
//   let offset = 5;
//   let disMouse = 50;

//   class Block {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.angle = 0;
//       this.c = 90;
//     }

//     display() {
//       p5.noFill();
//       p5.stroke(this.c);
//       p5.push();
//       p5.translate(this.x, this.y);
//       p5.rotate(p5.radians(this.angle));
//       if (this.angle < 45 && this.angle > 0) {
//         this.drawRect();
//       } else {
//         this.drawX();
//       }
//       p5.pop();
//     }

//     move() {
//       let distance = p5.dist(p5.mouseX, p5.mouseY, this.x, this.y);
//       if (p5.pmouseX !== p5.mouseX || p5.pmouseY !== p5.mouseY) { // detect if the mouse is moving
//         if (distance < disMouse) {
//           this.angle += 2;
//           this.c = 255;
//         }
//       }
//       // If squares are already rotating, keep rotating until angle = 90
//       if (this.angle > 0 && this.angle < 180) {
//         this.angle += 2;
//         if (this.c > 90) {
//           this.c -= 3;
//         }
//       } else {
//         this.angle = 0;
//         this.c = 90;
//       }
//     }

//     drawX() {
//       let margin = -size / 2;
//       p5.line(margin + offset / 2, margin + offset / 2, margin + size - offset / 2, margin + size - offset / 2);
//       p5.line(size + margin - offset / 2, margin + offset / 2, margin + offset / 2, size + margin - offset / 2);
//     }

//     drawRect() {
//       p5.rect(0, 0, size - offset, size - offset);
//     }
//   }

//   p5.setup = () => {
//     p5.createCanvas(p5.windowWidth, p5.windowHeight);
//     p5.rectMode(p5.CENTER);
//     p5.angleMode(p5.DEGREES);
//     cols = p5.width / size;
//     rows = p5.height / size;

//     // Create grid of blocks
//     for (let i = 0; i < cols; i++) {
//       blocks[i] = []; // Initialize each sub-array
//       for (let j = 0; j < rows; j++) {
//         blocks[i][j] = new Block(i * size + size / 2, j * size + size / 2);
//       }
//     }
//   };

//   p5.windowResized = () => {
//     p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
//     cols = p5.width / size;
//     rows = p5.height / size;
//     blocks = [];
//     for (let i = 0; i < cols; i++) {
//       blocks[i] = [];
//       for (let j = 0; j < rows; j++) {
//         blocks[i][j] = new Block(i * size + size / 2, j * size + size / 2);
//       }
//     }
//   };

//   p5.draw = () => {
//     p5.background(0);
//     for (let i = 0; i < cols; i++) {
//       for (let j = 0; j < rows; j++) {
//         blocks[i][j].display();
//         blocks[i][j].move();
//       }
//     }
//   };
// }


// function sketchThree(p5) {
//   let r = 150;
//   let angle = 0;
//   let shiftingAngle = [];
//   let numAxis = 5;
//   let x;
//   let y;
//   let x2 = [];
//   let y2 = [];

//   p5.setup = () => {
//     p5.createCanvas(400, 400);
//     p5.angleMode(p5.DEGREES);

//     // Define shiftingAngle
//     for (let i = 0; i < numAxis; i++) {
//       shiftingAngle[i] = i * 90 / numAxis;
//     }
//   };

//   p5.draw = () => {
//     p5.stroke(0);
//     x = r * p5.cos(angle);
//     y = r * p5.sin(angle);

//     p5.background(220);
//     p5.translate(p5.width / 2, p5.height / 2);

//     // Big outer circular orbit
//     p5.noFill();
//     p5.ellipse(0, 0, r * 2, r * 2);

//     // Reference red circle 
//     p5.fill(255, 0, 0);
//     p5.ellipse(x, y, 20, 20);

//     for (let i = 0; i < numAxis; i++) {
//       x2[i] = r * p5.cos(angle + shiftingAngle[i]);
//       y2[i] = r * p5.sin(angle + shiftingAngle[i]);

//       p5.push();
//       p5.rotate(-shiftingAngle[i]);
//       p5.line(-r, 0, r, 0);
//       p5.line(0, r, 0, -r);

//       p5.fill(255);
//       p5.ellipse(x2[i], 0, 20, 20);
//       p5.ellipse(0, y2[i], 20, 20);
//       p5.pop();
//     }

//     angle += 1; // Make it rotate automatically
//   };
// }




// export function App() {
//   const [sketch, setSketch] = React.useState(null);
//   const chooseNothing = () => setSketch(null);
//   const chooseSketchOne = () => setSketch(() => sketchOne);
//   const chooseSketchTwo = () => setSketch(() => sketchTwo);
//   const chooseSketchThree = () => setSketch(() => sketchThree);
//   const [rotation, setRotation] = useState(0);
//   const [Error, setError] = useState(false);


//   useEffect(() => {
//     const interval = setInterval(
//       () => setRotation(rotation => rotation + 100),
//       100
//     );

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);



//   return (
//     <>
//     <h1>click a btn</h1>
//     <Wrapper>
     
//       <ul>
//         <li>
//           <button onClick={chooseNothing}>Choose nothing</button>
//         </li>
//         <li>
//           <button onClick={chooseSketchOne}>Choose sketch 1</button>
//         </li>
//         <li>
//           <button onClick={chooseSketchTwo}>Choose sketch 2</button>
//         </li>
//         <li>
//           <button onClick={chooseSketchThree}>Choose sketch 3</button>
//         </li>
      

//       </ul>
      
//       <ErrorBoundary fallback={<ErrorWrapper>There is an error, this is from fallback prop</ErrorWrapper>}>
//       {sketch ?  (
//             <>
//               <ReactP5Wrapper sketch={sketch} rotation={rotation} />
//               {sketch === sketchOne && (
//                 <>
//                   <StyledCentredText>Sketch 1!</StyledCentredText>
//                   <StyledSmallCentredText>Sketch 1 is where everything started!</StyledSmallCentredText>
//                 </>
//               )}
//               {sketch === sketchTwo && (
//                 <>
//                   <StyledCentredText>Sketch 2!</StyledCentredText>
//                   <StyledSmallCentredText>Sketch 2 is darker and cooler!</StyledSmallCentredText>
//                 </>
//               )}
//             </>
//       ) : (
//         <h1>No sketch selected yet.</h1>
//       )}
      

//       {/* this comp creates error */}
// <button onClick={()=>{setError(true)}}>
//   simulate error and see fallback UI
//   </button>
// {Error && <ErrorComponent/>}

//       </ErrorBoundary>
      
//     </Wrapper>
//     </>
//   );
// }

// export default App;

