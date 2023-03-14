import React from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";

const operators = ["AC", "/", "x", "+", "-", "="]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const App = () => {
    const [input, setInput] = React.useState("0")
    const [output, setOutput] = React.useState("")
    const [calculatorData, setCalculatorData] = React.useState("")


    const handleSubmit = () => {
        console.log("handleSubmit function")
    }

    const handleClear = () => {
        setInput("0")
        setOutput("")
        setCalculatorData("")
    }

    const dotOperator = () => {
        console.log("dotOperator function")
    }

    const handleNumbers = (value) => {
        if(!calculatorData.length) {
            setInput(`${value}`)
            setCalculatorData(`${value}`)
        }
        else {
            if(value === 0 && (calculatorData === "0" || input === "0")) {
                setCalculatorData(`${calculatorData}`)
            }
            else {
                const lastChar = calculatorData.charAt(calculatorData.length - 1)
                const isLastCharOperator = (lastChar === "*" || operators.includes(lastChar))
                setInput(isLastCharOperator ? `${value}` : `${input}${value}`)
                setCalculatorData(`${calculatorData}${value}`)
            }
        }
    }

    const handleOperators = () => {
        console.log("handleOperators function")
    }

    const handleInput = (value) => {
        const number = numbers.find(num => num === value)
        const operator = operators.find(op => op === value)

        switch(value) {
            case "=":
                handleSubmit()
                break
            case "AC":
                handleClear()
                break
            case ".":
                dotOperator()
                break
            case number:
                handleNumbers(value)
                break
            case operator:
                handleOperators(value)
                break
            default:
                break
        }
    }


    return (
        <div className="container">
            <div className="calculator">
                <Display input={input} output={output} />
                <Keypad handleInput={handleInput} />
            </div>
        </div>
    )
}


export default App
