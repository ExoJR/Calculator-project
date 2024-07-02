import FadeInOutAnimation from "./FadeInOutAnimation";
import { useState, useEffect } from "react";

function Display({ calculation }) {
  const [isPromptDisplayed, setIsPromptDisplayed] = useState(false);

  let nums = calculation.split(/[\+\-\*\/]/);
  let lastNum = nums[nums.length - 1];


  useEffect(()=>{
    if(calculation.startsWith("-") && !isPromptDisplayed && nums[2] ){
      alert('The first number of the calculation start with minus');
      setIsPromptDisplayed(true);
    }else if(!calculation.startsWith('-')){
            setIsPromptDisplayed(false)
    }

    console.log(nums,nums[0],nums[1],nums[2],calculation);
   },[calculation]);



  const displayNumber = (number) => {
    return number.split("").map((digit, index) => {
      if (digit === ".") {
        return (
          <div
            key={`dot-wrapper-${index}`}
            data-key={`dot-wrapper-${index}`}
            className={`number-exo`}
          >
            <div
              key={`dot-${index}`}
              data-key={`dot-${index}`}
              className={`number-dot`}
            ></div>
          </div>
        );
      } else if (nums == "NaN") {
        nums = "";
        return (
          <>
            <div key={"e"} data-key={"e"} className={`number-${"e"}`}></div>
            <div key={"r0"} data-key={"r0"} className={`number-${"r"}`}></div>
            <div key={"r1"} data-key={"r1"} className={`number-${"r"}`}></div>
            <div key={"o"} data-key={"o"} className={`number-${"o"}`}></div>
            <div key={"r2"} data-key={"r2"} className={`number-${"r"}`}></div>
          </>
        );
      } else {
        return (
          <div
            key={`digit-${index}`}
            data-key={`digit-${index}`}
            className={`number-${digit}`}
          ></div>
        );
      }
    });
  };

  return (
    <>
      <div id="display">
        <FadeInOutAnimation calculation={calculation}>
          <div className="rezult">
            {calculation.startsWith("-") && !nums[2] && (
              <div className="negative-start"></div>
            )}
            {(() => {
              if (lastNum === "" && !calculation.startsWith("-")) {
                return displayNumber(nums[0]);
              } else if (calculation.startsWith("-")) {
                return displayNumber(lastNum || nums[1]);
              } else {
                return displayNumber(lastNum);
              }
            })()}
          </div>
        </FadeInOutAnimation>
      </div>
    </>
  );
}

export default Display;
