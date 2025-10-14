import { useState } from "react"


function Transitions() {
const [pending, setPending]=useState(false)
    const handled=()=>{
        setPending(true)
        setTimeout(()=>{
            setPending(false)
            
        },3000);
    }
  return (
    <>
    <h2>Transitions</h2>
    <button onClick={handled} disabled={pending}>Click Me</button>
    {pending && <p>Processing...</p>}
    </>
  )
}
export default Transitions