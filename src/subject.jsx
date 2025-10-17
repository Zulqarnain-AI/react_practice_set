import { useContext } from "react";
import { AppContext } from "./ContextAPI";
function Subject() {

    return (
        <div style={{backgroundColor:"green", textAlign:"center", padding:"20px"}}>
        <h1>Subject component</h1>
        <h2>subject: {useContext(AppContext)}</h2>
        </div>
    )
}
export default Subject;