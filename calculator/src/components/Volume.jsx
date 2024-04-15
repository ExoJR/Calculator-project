import { useState, useEffect } from "react";
import audio from "../utils/audio";

function Volume({
  onToggleSound,
  buttonsSound,
  volumeLevel,
  onVolumeChange,
  setVolumeLevel,
  setBtnSound,
}) {
  const [stateBtn, setStateBtn] = useState("normal");

  useEffect(() => {
    if (volumeLevel < 1) {
      setStateBtn("mute");
      setVolumeLevel(0);
    } else if (volumeLevel > 1) {
      setStateBtn("normal");
    }
  }, [volumeLevel]);

  const handleMouseDown = () => {
    if (stateBtn === "mute") {
      setStateBtn("mute-pressed");
    } else {
      setStateBtn("normal-pressed");
    }
    buttonsSound && audio.play();
  };

  const handleMouseUp = () => {
    if (stateBtn === "mute-pressed") {
      setStateBtn("normal");
      setVolumeLevel(50);
      setBtnSound(false);
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
        <p>{volumeLevel}</p>
        <img src="./assets/volume-bar.svg" alt="volume-bar" />
        <div className="volume-shape">
          <input
            className="input-volume"
            type="range"
            value={volumeLevel}
            min={0}
            max={100}
            onChange={onVolumeChange}
            style={{ backgroundSize: volumeLevel + "%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Volume;
