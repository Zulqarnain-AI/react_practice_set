import { useState } from "react"
import { useEffect } from "react"
function Useeffect() {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState()
const [text, setText] = useState("heading three")
    const counterHandler = () => {
        setCount(count + 1)
    }

    const timeHandler = () => {

        setTime(new Date().toLocaleTimeString())

    }

    function updateTime() {
        setTime(new Date().toLocaleTimeString())
    }

    useEffect(() => {
        callme()
    }, [count])
    
    function callme() {
        setText("heading updated " + count)
    }

    
    return (
        <>
            <div>
                <h2>use effect practice set </h2>
                <h3>counter: {count}</h3>
                <h3>time: {time}</h3>
                <h3 id="three">{text}</h3>
                <button onClick={counterHandler}>counter</button>
                <button onClick={timeHandler}>time</button>
            </div>
        </>
    )
}
export default Useeffect;