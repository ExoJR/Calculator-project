import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./App.scss";
import Volume from "./components/Volume";
import { useState } from "react";

function App() {
  const [btnSound, setBtnSound] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(50);


  const toggleSound = () => {
    setBtnSound((prevState) => !prevState);
  };

  const handleVolumeChange = event => {
    setVolumeLevel(event.target.value);
   
  };

  return (
    <>
      <header>
        <Volume onToggleSound={toggleSound} buttonsSound={btnSound} volumeLevel={volumeLevel} onVolumeChange={handleVolumeChange} setVolumeLevel={setVolumeLevel} setBtnSound={setBtnSound}/>
      </header>
      <main>
        <div id="calculator-wrapper">
          <div id="calculator">
            <Display />
            <Buttons buttonsSound={btnSound} volumeLevel={volumeLevel} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
