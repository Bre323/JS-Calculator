import React from "react";
import "../styles/Display.css"


const Display = ({ input, output }) => {
    return (
        <div className="output">
            <div id="display" className="input">{input}</div>
            <div className="result">{output}</div>
        </div>
    )
}


export default Display
