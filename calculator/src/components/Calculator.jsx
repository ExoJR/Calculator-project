



function Calculator(){
return(
    <>
      <Header />
      <Main>
        <CalculatorWrapper>
          <Calculator>
            <Display />
            <Buttons>
              <FunctionButton func="c" />
              <FunctionButton func="ce" />
              <FunctionButton func="sign" />
              <FunctionButton func="sqrt" />
              <NumberButton number="7" />
              <NumberButton number="8" />
              <NumberButton number="9" />
              <OperationButton operation="div" />
              <NumberButton number="4" />
              <NumberButton number="5" />
              <NumberButton number="6" />
              <OperationButton operation="prod" />
              <NumberButton number="1" />
              <NumberButton number="2" />
              <NumberButton number="3" />
              <OperationButton operation="dif" />
              <NumberButton number="0" />
              <FunctionButton func="dot" />
              <OperationButton operation="sum" />
              <FunctionButton func="equal" />
            </Buttons>
          </Calculator>
        </CalculatorWrapper>
      </Main>
    </>
)
}




export default Calculator



// https://reactjsexample.com/a-simple-digital-calculator-with-pixel-art-style/

// https://github.com/ExoJR/Calculator-project.git