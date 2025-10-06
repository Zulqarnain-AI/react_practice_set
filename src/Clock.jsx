import { useState } from "react"
function Clock(){
    const [time,settime]=useState()
    setInterval(()=>{
        settime(new Date().toLocaleTimeString(),1000)
    })
    return (
        <div style={{
            backgroundColor:"blue",
            width:"250px",
            padding:"20px",
            textAlign:"center",
            border:"5px solid black",
            borderRadius:"5px"
        }}>
            <h1>the digital clock</h1>
            <h2 style={{
                backgroundColor:"black",
                color:"white",
                width:"150px",
                padding:"10px",
                borderRadius:"10px"
                
            }}>{time}</h2>
        </div>
    )
}

export default Clock