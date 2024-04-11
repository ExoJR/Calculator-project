import { useState } from "react";
import audio from "../utils/audio.js";

function Buttons({ buttonsSound ,volumeLevel}) {
  const [isPressed, setIsPressed] = useState(null);

  const imagesBtn = [
    "btn-c.png",
    "btn-ce.png",
    "btn-sign.png",
    "btn-sqrt.png",
    "btn-7.png",
    "btn-8.png",
    "btn-9.png",
    "btn-prod.png",
    "btn-4.png",
    "btn-5.png",
    "btn-6.png",
    "btn-div.png",
    "btn-1.png",
    "btn-2.png",
    "btn-3.png",
    "btn-dif.png",
    "btn-0.png",
    "btn-dot.png",
    "btn-sum.png",
    "btn-equal.png",
  ];

  const handleMouseDown = (index) => {
    setIsPressed(index);
    if(buttonsSound){
      audio.volume = volumeLevel/100
      audio.play()
      console.log(buttonsSound)
    };
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
            background: `url(/assets/${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "108px 48px",
            backgroundPosition: isPressed === index ? "-54px 0px" : "0px 0px",
          }}
          onMouseDown={() => handleMouseDown(index)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={() => handleMouseDown(index)}
          onTouchEnd={handleMouseUp}
        ></li>
      ))}
    </ul>
  );
}

export default Buttons;
