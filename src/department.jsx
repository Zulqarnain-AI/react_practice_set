import ClassComponent from "./classComponent"

function Department() {
    return (
        <div style={{backgroundColor:"lightgreen", textAlign:"center", padding:"20px"}}>
        <h1>Department component</h1>
        <ClassComponent />
        </div>
    )
}
export default Department;