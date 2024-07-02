import React, { useState, useEffect } from "react";

const FadeInOutAnimation = ({ children, calculation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 70);
    return () => clearTimeout(timer);
  }, [calculation]);

  const handleAnimationEnd = () => {
  };

  return (
    <div
      className={`fade-in-out ${isVisible ? "visible" : ""}`}
      onTransitionEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default FadeInOutAnimation;