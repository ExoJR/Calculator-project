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
  const isNumber = /^[0-9]$/;

  const updateCalc = (value) => {
    console.log("updateCalc is called with value:", value);
    console.log("Current value of calc:", calc);
    console.log("Current value of result:", calc.length);

    const dublicateOps = ["+", "-", "*", "/"];

    if (ops.includes(value) && calc === "") {
      return;
    } else if (ops.includes(value) && ops.includes(calc.slice(-1))) {
      if (value === "." && ops.includes(calc.slice(-1))) {
        setResult("0");
        setCalc("0");
      } else {
        setCalc(calc.slice(0, -1) + value);
        console.log(calc);
        return;
      }
    } else if (value === "0" && calc === "0") {
      setCalc(value);
      return;
    } else if (
      !dublicateOps.some((op) => calc.includes(op)) &&
      calc.includes(".") &&
      value === "."
    ) {
      return;
    } else if (
      dublicateOps.some((op) => calc.includes(op)) &&
      calc.includes(".") &&
      value === "." &&
      calc.split(".").length - 1 >= 2
    ) {
      return;
    }

    if (
      dublicateOps.some((op) => calc.includes(op)) &&
      dublicateOps.includes(value)
    ) {
      handleCalculation();
    }

    if (!ops.includes(value) && value === "^") {
      console.log(value, calc, result);
      if (calc !== "") {
        if (dublicateOps.some((op) => calc.slice(-1) === op)) {
          const sqrtResult = Math.sqrt(eval(calc.slice(0, -1)));
          setCalc(sqrtResult.toString());
          setResult(sqrtResult.toString());
        } else {
          const sqrtResult = Math.sqrt(eval(calc));
          setCalc(sqrtResult.toString());
          setResult(sqrtResult.toString());
        }
      }
      return;
    }

    if (!ops.includes(value) && value === "=" && calc !== "=") {
      handleCalculation();
      return value;
    }

    if (value === "c") {
      deleteResult();
      return value;
    }

    if (isNumber.test(value) && calc.slice(-1) === "0") {
      return;
    }


    setCalc((prevCalc) => prevCalc + value);
    setResult((prevResult) => prevResult + value);
  };

  const deleteResult = () => {
    setCalc("");
    setResult("");
  };

  const handleCalculation = () => {
    let finalResult;
    if (ops.includes(calc.slice(-1))) {
      finalResult = eval(calc.slice(0, -1));
    } else {
      finalResult = eval(calc);
    }

    const resultString = finalResult.toString();
    setCalc(resultString);
    setResult(resultString);
    console.log(calc);
  };

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
