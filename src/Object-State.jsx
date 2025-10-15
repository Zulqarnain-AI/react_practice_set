import { useState } from "react";
function ObjectState() {
    const [user, setUser] = useState({
        name: "Ankit",
        age: 24,
        address: {
            city: "Indore",
            state: "MP"
        }
    });

    const handled = (value) => {
        setUser({...user, name: value})}

    return <div>
        <h1>Object State in React</h1>
        <input type='text' placeholder='enter name' onChange={(e)=>{handled(e.target.value)}}/>
        <br />
        <button>add user</button>
        <h2>user name: {user.name}</h2>
        <h2>user age: {user.age}</h2>
        <h2>user city: {user.address.city}</h2>
        <h2>user state: {user.address.state}</h2>
    </div>;
}

export default ObjectState;