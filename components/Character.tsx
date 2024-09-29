import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const ASLTutor = () => {
  const splineRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState(null);

  function onLoad(spline: any) {
    splineRef.current = spline;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Spline
        scene="https://prod.spline.design/your-scene-id/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
};

export default ASLTutor;