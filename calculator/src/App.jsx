import Display from "./components/Display"
import Buttons from "./components/Buttons"
import './App.scss';






function App() {

  return (
    <>
     <div id="calculator-wrapper">
      <div id="calculator">
        <Display/>
        <Buttons/>
      </div>
     </div>
    </>
  )
}

export default App
