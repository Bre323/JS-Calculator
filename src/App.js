import React from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";

const operators = ["AC", "/", "x", "+", "-", "="]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const App = () => {
    const [input, setInput] = React.useState("0")
    const [output, setOutput] = React.useState("")

    return (
        <div className="container">
            <div className="calculator">
                <Display input={input} output={output} />
                <Keypad />
            </div>
        </div>
    )
}


export default App
