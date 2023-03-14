import React from "react";
import Keypad from "./components/Keypad";

const operators = ["AC", "/", "x", "+", "-", "="]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const App = () => {
    return (
        <div className="container">
            <div className="calculator">
                <Keypad />
            </div>
        </div>
    )
}


export default App
