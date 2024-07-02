//Inspired by: ==>> https://reactjsexample.com/a-simple-digital-calculator-with-pixel-art-style/

// https://github.com/ExoJR/Calculator-project.git

import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./App.scss";
import Volume from "./components/Volume";
import { useState } from "react";

function App() {
  const [btnSound, setBtnSound] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(50);
  const [calc, setCalc] = useState("0");

  const ops = ["+", "-", "*", "/", "."];
  const isNumber = /^[0-9]$/;
  const dublicateOps = ["+", "-", "*", "/"];

  const updateCalc = (value) => {
    if (ops.includes(value) && calc === "") {
      return;
    } else if (ops.includes(value) && ops.includes(calc.slice(-1))) {
      if (value === "." && ops.includes(calc.slice(-1))) {
        setCalc("0");
      } else {
        setCalc(calc.slice(0, -1) + value);
        return;
      }
    } else if (value === "0" && calc === "0") {
      setCalc(value);
      return;
    } else if (value === ".") {
      let lastNum = calc.split(/[\+\-\*\/]/).pop();
      if (lastNum.includes(".")) {
        return;
      } else {
        !calc.includes("NaN") ? setCalc(calc + value) : setCalc("NaN");
        return;
      }
    }

    if (
      dublicateOps.some((op) => calc.includes(op)) &&
      dublicateOps.includes(value)
    ) {
      handleCalculation();
    }

    if (value === "c") {
      clearResult();
      return value;
    }

    if (calc.includes("e")) {
      return;
    }

    if (calc.includes("NaN")) {
      return;
    }

    if (!ops.includes(value) && value === "^") {
      if (calc !== "") {
        if (dublicateOps.some((op) => calc.slice(-1) === op)) {
          const sqrtResult = Math.sqrt(eval(calc.slice(0, -1)));
          const resultString = sqrtResult.toString();
          setCalc(
            resultString.length > 8
              ? resultString.substring(0, 9)
              : resultString
          );
        } else {
          const sqrtResult = Math.sqrt(eval(calc));
          const resultString = sqrtResult.toString();
          setCalc(
            resultString.length > 8
              ? resultString.substring(0, 9)
              : resultString
          );
        }
      }
      return;
    }

    if (calc.length > 7 && isNumber.test(value)) {
      let lastNum = calc.split(/[\+\-\*\/]/).pop();

      if (lastNum.length === 8 && !calc.includes(".")) {
        return;
      } else if (lastNum.length === 9 && calc.includes(".")) {
        return;
      }
    }

    if (value === "0") {
      let lastNum = calc.split(/[\+\-\*\/]/).pop();
      if (lastNum === "0.0" || lastNum === "0") {
        return;
      } else {
        setCalc(calc + value);

        return;
      }
    }

    if (!ops.includes(value) && value === "=" && calc !== "=") {
      handleCalculation();
      return value;
    }

    if (value === "+-") {
      pozitiveOrNegative();
      return;
    }

    if (value === "ce") {
      clearEntryResult();
      return;
    }

    if (calc === "0" && isNumber.test(value)) {
      setCalc(calc.slice(0, -1));
    }

    if (
      calc.endsWith("+0") ||
      calc.endsWith("-0") ||
      calc.endsWith("*0") ||
      calc.endsWith("/0")
    ) {
      if (isNumber.test(value)) {
        setCalc(calc.slice(0, -1));
      }
    }

    setCalc((prevCalc) => prevCalc + value);
  };

  const clearResult = () => {
    setCalc("0");
  };

  const clearEntryResult = () => {
    const lastNumIndex = calc
      .split("")
      .reverse()
      .findIndex((char) => dublicateOps.includes(char));

    if (calc === "" || calc === "0") {
      return;
    } else if (lastNumIndex > 0) {
      setCalc(calc.slice(0, calc.length - lastNumIndex));
    } else {
      setCalc("0");
    }
  };

  const pozitiveOrNegative = () => {
    if (calc.slice(0, 1) === "-") {
      setCalc((prevCalc) => prevCalc.substring(1));
    } else {
      setCalc((prevCalc) => `-` + prevCalc);
    }
  };

  const handleCalculation = () => {
    let finalResult;
    if (ops.includes(calc.slice(-1))) {
      finalResult = eval(calc.slice(0, -1));
    } else {
      finalResult = eval(calc);
    }

    const resultString = finalResult.toString();

    if (
      resultString.length > 8 &&
      !resultString.includes(".") &&
      !resultString.startsWith("-")
    ) {
      setCalc(finalResult.toExponential(4).replace("+", "").toString());
    } else if (
      resultString.length > 9 &&
      resultString.includes(".") &&
      calc >= 1
    ) {
      setCalc(finalResult.toExponential(4).replace("+", "").toString());
    } else if (
      resultString.length > 8 &&
      resultString <= 1 &&
      !resultString.startsWith("-")
    ) {
      setCalc(resultString.substring(0, 9));
    } else if (
      resultString.length == 10 &&
      resultString.startsWith("-") &&
      resultString.includes(".")
    ) {
      setCalc(resultString);
    } else if (resultString.length > 9 && resultString.startsWith("-")) {
      setCalc(resultString.substring(0, 9));
    } else {
      !resultString.includes(".") && !resultString.startsWith("-")
        ? setCalc(resultString.substring(0, 8))
        : setCalc(resultString.substring(0, 9));
    }
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
            <Display calculation={calc} />
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
