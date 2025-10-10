

function ToPassFunctionAsProps({ Propfunction }) {
    return (
        <div>
            <h1>recieved function as a props</h1>
            <button onClick={()=>Propfunction('ali')}>Click Me</button>
        </div>
    )
}
export default ToPassFunctionAsProps