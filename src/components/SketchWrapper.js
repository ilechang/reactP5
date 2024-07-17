import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { StyledCentredText, StyledSmallCentredText } from "./StyledComponents";
import sketchOne from '../sketches/sketchOne';
import sketchTwo from '../sketches/sketchTwo';
import sketchThree from '../sketches/sketchThree';

const SketchWrapper = ({ sketch, rotation }) => (
  <>
    <ReactP5Wrapper sketch={sketch} rotation={rotation} />
    {sketch === sketchOne && (
      <>
        <StyledCentredText>Sketch 1!</StyledCentredText>
        <StyledSmallCentredText>Sketch 1 is where everything started!</StyledSmallCentredText>
      </>
    )}
    {sketch === sketchTwo && (
      <>
        <StyledCentredText>Sketch 2!</StyledCentredText>
        <StyledSmallCentredText>Sketch 2 is darker and cooler!</StyledSmallCentredText>
      </>
    )}
  </>
);

export default SketchWrapper;
