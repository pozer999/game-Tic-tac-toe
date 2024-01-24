import { createContext, useState } from "react";
import "./App.css";
import Board from "./ui/Board/Board";


function App() {

const [step, setStep] = useState(true);


function switchPlayer() {
    setStep(!step);
    alert(step)
}

    return (
    
        <div className="App">
            <h2 className="nextPlayer" onClick={switchPlayer}>Next player: {step ? 'x' : 'o'}</h2>
            <Board step={step}/>
        </div>
    );
}

export default App;
