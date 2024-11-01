'use client';

import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';

const LottiePlayer = ({ animationData, speed }) => {
  const [containerId, setContainerId] = useState('');

  useEffect(() => {
    // Generate a unique ID for each Lottie container when the component mounts
    const uniqueId = `lottie-${Math.random().toString(36).substr(2, 9)}`;
    setContainerId(uniqueId);

    // No need to set the animation instance in state if it's not used outside this effect
    let animationInstance;

    // Ensure the cleanup logic correctly destroys the animation instance
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!animationData || !containerId) return;

    // Initialize the animation instance with the provided animationData
    const anim = lottie.loadAnimation({
      container: document.getElementById(containerId),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Update the speed of the animation immediately after creating the instance
    anim.setSpeed(speed);

    // Cleanup function to destroy the animation instance when the component unmounts or the animationData changes
    return () => anim.destroy();
  }, [animationData, containerId, speed]);

  return <div id={containerId}></div>;
};

export default LottiePlayer;
