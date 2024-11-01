'use client';
import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const requestRef = useRef();

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const tick = () => {
    setTimeLeft(calculateTimeLeft());
    requestRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(requestRef.current);
  }, [targetDate]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTimeLeft(calculateTimeLeft());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  return (
    <div className="text-white">
      <div className="flex space-x-4 items-center"> {/* Added items-center for vertical alignment */}
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="flex flex-col items-center" style={{ minWidth: '64px' }}> {/* Adjusted for vertical centering */}
            <span className="text-2xl font-bold">{formatTime(timeLeft[interval])}</span>
            <div className="text-sm">{interval.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
