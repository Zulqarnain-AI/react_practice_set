import { useState } from 'react'
import style from 'styled-components'
import './App.css'
// import './css/style.css'

// import Checkbox from './Checkbox'
// import Radio_Dropdown from './Radio_Dropdown'
// import User from './User'
// import Clock from './Clock'
// import Useeffect from './Useeffect'
// import DynamicStyling from './dynamicStyling'
// import ForExternalCss from './forExternalCss'
// import ForModularCss from './forModulCss'
const Heading= style.h1`
  color:blue;
  text-align:center;
  font-size:30px;
  `
  const Subheading= style.h2({
    color:"green",
    textAlign:"center",
    fontSize:"20px"
  })
function App() {
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
<Heading>Styled Component</Heading>
<Subheading>This is Subheading</Subheading>

    </>
  )
}

export default App
