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
        const total = eval(calculatorData)
        setInput(`${total}`)
        setOutput(`${total}`)
        setCalculatorData(`${total}`)
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

    const handleOperators = (value) => {
        if(calculatorData.length) {
            setInput(`${value}`)
            const beforeLastChar = calculatorData.charAt(calculatorData.length - 2)
            const isBeforeLastCharOperator = (operators.includes(beforeLastChar) || beforeLastChar === "*")
            const lastChar = calculatorData.charAt(calculatorData.length - 1)
            const isLastCharOperator = (operators.includes(lastChar) || lastChar === "*")
            const validOperator = (value === "x" ? "*" : value)

            if((isLastCharOperator && value !== "-") || (isBeforeLastCharOperator && isLastCharOperator)) {
                if(isBeforeLastCharOperator) {
                    setCalculatorData(`${calculatorData.substring(0, calculatorData.length - 2)}${value}`)
                }
                else {
                    setCalculatorData(`${calculatorData.substring(0, calculatorData.length - 1)}${validOperator}`)
                }
            }
            else {
                setCalculatorData(`${calculatorData}${validOperator}`)
            }
        }
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
