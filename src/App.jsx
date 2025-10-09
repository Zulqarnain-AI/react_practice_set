import { useState } from 'react'
// import './App.css'
// import style from 'styled-components'
// import './css/style.css'
import { useRef } from 'react'

// import Checkbox from './Checkbox'
// import Radio_Dropdown from './Radio_Dropdown'
// import User from './User'
// import Clock from './Clock'
// import Useeffect from './Useeffect'
// import DynamicStyling from './dynamicStyling'
// import ForExternalCss from './forExternalCss'
// import ForModularCss from './forModulCss'
// const Heading= style.h1`
//   color:blue;
//   text-align:center;
//   font-size:30px;
//   `
//   const Subheading= style.h2({
//     color:"green",
//     textAlign:"center",
//     fontSize:"20px"
//   })
function App() {
  const inputRef= useRef("enter text");
const [value, setValue]= useState("");
  function handler(){
    inputRef.current.focus()
    inputRef.current.style="background-color:aqua"
    inputRef.current.style="color:red"
    setValue(inputRef.current.value)
  }
  // const user=[
  //   {name:"Ankit", age:24,email:"ankit@gmail.com"},
  //   {name:"Rohit", age:25,email:"rohit@gmail.com"},
  //   {name:"Sourav", age:26,email:"sourav2@gmail.com"},
  //   {name:"Rahul", age:27,email:"rahul@gmail.com"},
  // ]
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState(0)
  // const [hide, setHide] = useState(false)
  
  return (
    <>
      {/* <Checkbox />  
      <Radio_Dropdown />
      <User data={user} />
      <Clock />
      <button onClick={()=>setCount(count + 1)}>couter</button>
      <button onClick={()=>setData(data + 1)}>data</button>
      <button onClick={()=>setHide(!hide)}>{hide?"Unhide":"Hide"}</button>
      {
        hide?null:<Useeffect count={count} data={data}  />

      } */}

      {/* <DynamicStyling /> */}
      {/* <ForExternalCss /> */}
      {/* <ForModularCss /> */}
      {/* styled component
      <h1>Styled Component</h1> */}
{/* <Heading>Styled Component</Heading>
<Subheading>This is Subheading</Subheading> */}

{/* //useRef hook */}
      <h1>UseRef Hook</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handler}>show value</button>
      <p>you entered:{value}</p>

    </>
  )
}

export default App
