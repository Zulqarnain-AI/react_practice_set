import { useEffect } from "react"
function Useeffect({count,data}) {
    function counter(){
        console.log("counter called: " + count);
    }

    function dataHandler(){
        console.log("data called: " + data);
    }

    useEffect(()=>{
        console.log("component mounted");
    },[])
    useEffect(()=>{
        counter();

    },[count])
    useEffect(()=>{
        dataHandler();

    },[data])
    return (
        <>
            <div>
                <h2>counter : {count} </h2>
                <h2>data : {data}   </h2>
            </div>
        </>
    )
}
export default Useeffect;