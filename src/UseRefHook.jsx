import {useState} from "react"
import { useRef } from "react";

function UseRefHook() {
    const inputRef = useRef("enter text");
    const [value, setValue] = useState("");
    function handler() {
        inputRef.current.focus()
        inputRef.current.style = "background-color:aqua"
        inputRef.current.style = "color:red"
        setValue(inputRef.current.value)
    }
    return (
        <div>
            <h1>UseRef Hook</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handler}>show value</button>
            <p>you entered:{value}</p>
        </div>
    )
}
export default UseRefHook