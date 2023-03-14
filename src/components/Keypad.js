import React from "react";


const calcData = [
    { id: "clear", value: "AC" },
    { id: "divide", value: "/" },
    { id: "multiply", value: "x" },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "subtract", value: "-" },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "add", value: "+" },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "equals", value: "=" },
    { id: "zero", value: 0 },
    { id: "decimal", value: "." }
]


const Key = ({ keyData }) => {
    return (
        <button id={keyData.id} className="padButton">
            {keyData.value}
        </button>
    )
}

const Keypad = () => {
    return (
        <div className="keys">
            {
                calcData.map(key => {
                    return <Key id={key.id} keyData={key} />
                })
            }
        </div>
    )
}


export default Keypad
