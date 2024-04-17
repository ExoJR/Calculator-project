import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./App.scss";
import Volume from "./components/Volume";
import { useState } from "react";

function App() {
  const [btnSound, setBtnSound] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(50);
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {


    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    if (!ops.includes(value) && value === "^") {
      if (calc !== "") {
        console.log(value,calc,result)
        const sqrtResult = Math.sqrt(eval(calc));
        setCalc(sqrtResult.toString());
        setResult(sqrtResult.toString());
      }
      return;
    }
    
    if (!ops.includes(value) && value === "=" && calc !== "=") {
      handleCalculation();
      return value;
    }

    if(value === "c"){
      deleteResult()
      return value;
    }

    setCalc((prevCalc) => prevCalc + value);
    setResult((prevCalc) => prevCalc + value)
    console.log(value,calc,result)
  };

  const deleteResult = ()=>{
    setCalc('');
    setResult('')
  }

  const handleCalculation = () =>{
    const finalResult = eval(calc);
    console.log(calc)
    setCalc(finalResult.toString())
    setResult(finalResult.toString());
  }

  const toggleSound = () => {
    setBtnSound((prevState) => !prevState);
  };

  const handleVolumeChange = (event) => {
    setVolumeLevel(event.target.value);
    setBtnSound(true);
  };

  return (
    <>
      <header>
        <Volume
          onToggleSound={toggleSound}
          buttonsSound={btnSound}
          volumeLevel={volumeLevel}
          onVolumeChange={handleVolumeChange}
          setVolumeLevel={setVolumeLevel}
          setBtnSound={setBtnSound}
        />
      </header>
      <main>
        <div id="calculator-wrapper">
          <div id="calculator">
            <Display result={result} calculation={calc} />
            <Buttons
              updateCalc={updateCalc}
              buttonsSound={btnSound}
              volumeLevel={volumeLevel}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
