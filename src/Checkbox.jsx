import { useState } from 'react'

function Checkbox() {
    const [FileList, setList] = useState([])
    const handleChange = (e) => {
        
        if(e.target.checked){
            setList([...FileList, e.target.id])
        }
        else{
            setList(FileList.filter((item)=> item !==e.target.id))
        } 

    }
    return (
        <div>
            <input onChange={handleChange} type="checkbox" id='js' />
            <label htmlFor="js">JS</label>
            <br />
            <input onChange={handleChange} type="checkbox" id='html' />
            <label htmlFor="html">HTML</label>
            <br />
            <input onChange={handleChange} type="checkbox" id='css' />
            <label htmlFor="css">CSS</label>
            <br />
            <input onChange={handleChange} type="checkbox" id='php' />
            <label htmlFor="php">php</label>
            <br />
            <h2>{FileList.join(", ")}</h2>
            <h3>checkbox end</h3>
        </div>
    )
}

export default Checkbox
