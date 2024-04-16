import { useState } from "react";
import audio from "../utils/audio.js";

function Buttons({ buttonsSound, volumeLevel, updateCalc }) {
  const [isPressed, setIsPressed] = useState(null);

  const imagesBtn = [
    { src: "btn-c.png", sign: "c" },
    { src: "btn-ce.png", sign: "ce" },
    { src: "btn-sign.png", sign: "+-" },
    { src: "btn-sqrt.png", sign: "^" },
    { src: "btn-7.png", sign: "7" },
    { src: "btn-8.png", sign: "8" },
    { src: "btn-9.png", sign: "9" },
    { src: "btn-prod.png", sign: "*" },
    { src: "btn-4.png", sign: "4" },
    { src: "btn-5.png", sign: "5" },
    { src: "btn-6.png", sign: "6" },
    { src: "btn-div.png", sign: "/" },
    { src: "btn-1.png", sign: "1" },
    { src: "btn-2.png", sign: "2" },
    { src: "btn-3.png", sign: "3" },
    { src: "btn-dif.png", sign: "-" },
    { src: "btn-0.png", sign: "0" },
    { src: "btn-dot.png", sign: "." },
    { src: "btn-sum.png", sign: "+" },
    { src: "btn-equal.png", sign: "=" },
  ];

  const handleMouseDown = (index) => {
    setIsPressed(index);
    if (buttonsSound && volumeLevel > 1) {
      audio.volume = volumeLevel / 100;
      audio.play();
    }
  };

  const handleMouseUp = () => {
    setIsPressed(null);
  };

  return (
    <ul className="buttons">
      {imagesBtn.map((image, index) => (
        <li
          key={index}
          id={`btn-${index}`}
          className="button"
          style={{
            background: `url(/assets/${image.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "108px 48px",
            backgroundPosition: isPressed === index ? "-54px 0px" : "0px 0px",
          }}
          onMouseDown={() => handleMouseDown(index)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={() => {
            updateCalc(image.sign);
          }}
        ></li>
      ))}
    </ul>
  );
}

export default Buttons;
