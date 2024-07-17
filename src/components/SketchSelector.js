import React from "react";

const SketchSelector = ({ chooseNothing, chooseSketchOne, chooseSketchTwo, chooseSketchThree }) => (
  <ul>
    <li>
      <button onClick={chooseNothing}>Choose nothing</button>
    </li>
    <li>
      <button onClick={chooseSketchOne}>Choose sketch 1</button>
    </li>
    <li>
      <button onClick={chooseSketchTwo}>Choose sketch 2</button>
    </li>
    <li>
      <button onClick={chooseSketchThree}>Choose sketch 3</button>
    </li>
  </ul>
);

export default SketchSelector;
