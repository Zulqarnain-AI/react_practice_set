import { useState } from 'react'
import './App.css'
// import Checkbox from './Checkbox'
// import Radio_Dropdown from './Radio_Dropdown'
// import User from './User'
// import Clock from './Clock'
import Useeffect from './Useeffect'

function App() {
// const user=[
//   {name:"Ankit", age:24,email:"ankit@gmail.com"},
//   {name:"Rohit", age:25,email:"rohit@gmail.com"},
//   {name:"Sourav", age:26,email:"sourav2@gmail.com"},
//   {name:"Rahul", age:27,email:"rahul@gmail.com"},
// ]
const [count, setCount] = useState(0)
const [data, setData] = useState(0)
  return (
    <>
      {/* <Checkbox />   */}
      {/* <Radio_Dropdown /> */}
      {/* <User data={user} /> */}
      {/* <Clock /> */}
      <Useeffect count={count} data={data}  />
      <button onClick={()=>setCount(count + 1)}>couter</button>
      <button onClick={()=>setData(data + 1)}>data</button>

    </>
  )
}

export default App
