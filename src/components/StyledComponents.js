import styled from "styled-components";

export const StyledCentredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  margin: 0;
  text-align: center;
  z-index: 1; /* Ensure it is above the canvas */
`;

export const StyledSmallCentredText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  z-index: 1; /* Ensure it is above the canvas */
`;

export const Wrapper = styled.div`
  border: 10px solid black;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Ensure no overflow */
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 3rem;
  margin: 0;
  text-align: center;
  z-index: 1; /* Ensure it is above the canvas */
`;
