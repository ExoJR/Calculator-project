import { useState } from "react";
import audio from "../utils/audio";

function Volume({ onToggleSound, buttonsSound,volumeLevel,onVolumeChange }) {
  const [stateBtn, setStateBtn] = useState("normal");

  const handleMouseDown = () => {
    if (stateBtn === "mute") {
      setStateBtn("mute-pressed");
    } else {
      setStateBtn("normal-pressed");
    }
    buttonsSound && audio.play() ;
  };

  const handleMouseUp = () => {
    if (stateBtn === "mute-pressed") {
      setStateBtn("normal");
    } else {
      setStateBtn("mute");
    }
  };

  const handleMouseLeave = () => {
    if (stateBtn === "normal-pressed") {
      setStateBtn("normal");
    } else if (stateBtn === "mute-pressed") {
      setStateBtn("mute");
    }
  };

 


  return (
    <div id="box-volume">
      <div className="box-btn-input-volume">
        <button
          className={`btn-volume ${stateBtn}`}
          onClick={onToggleSound}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        ></button>
      </div>
      <div className="box-btn-input-volume">
        <input className="input-volume" type="range" value={volumeLevel} min={0} max={100} onChange={onVolumeChange}/>
      </div>
    </div>
  );
}

export default Volume;
