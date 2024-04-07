import Display from "./components/Display"
import Buttons from "./components/Buttons"
import './App.scss';
import Volume from "./components/Volume";





function App() {

  return (
    <>
    <header>
         <Volume/>
    </header>
    <main>
    <div id="calculator-wrapper">
      <div id="calculator">
        <Display/>
        <Buttons/>
      </div>
     </div>
    </main>
    </>
  )
}

export default App
