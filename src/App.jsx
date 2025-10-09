// import { useState } from 'react'
// import './App.css'

import UncontrolledComponent from "./UncontrolledComponent"

// import './css/style.css'

// import Checkbox from './Checkbox'
// import Radio_Dropdown from './Radio_Dropdown'
// import User from './User'
// import Clock from './Clock'
// import Useeffect from './Useeffect'
// import DynamicStyling from './dynamicStyling'
// import ForExternalCss from './forExternalCss'
// import ForModularCss from './forModulCss'
// import UseRefHook from './UseRefHook'
// import StyledComponent from "./styledComponent"

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
      {/* <UseRefHook /> */}
      {/* <StyledComponent /> */}

      <UncontrolledComponent />


    </>
  )
}

export default App
