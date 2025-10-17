import { AppContext } from "./ContextAPI";
import Department from "./department"
import { useState } from "react";
function College() {
    const [subject, setSubject] = useState("")
    return (
        <AppContext.Provider value={subject}>
        <div style={{backgroundColor:"lightblue", textAlign:"center", padding:"20px"}}>
        <h1>College component</h1>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
        </select>
        <button onClick={() => setSubject("")}>clear</button>
        <Department />
        </div>
        </AppContext.Provider>
    )
}
export default College;