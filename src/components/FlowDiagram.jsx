import React from 'react';
import PostureSVG from './posture-flow.svg'; // Make sure it's imported as a file

const FlowDiagram = () => (
  <div>
    <img src={PostureSVG} alt="Posture Tracking Flow" />
  </div>
);

export default FlowDiagram;