

import { useState } from 'react';

function ArrayInState() {
    const [users, setUsers] = useState([
        {name:"Sourav", age:26,email:""},
        {name:"Rahul", age:27,email:""},
        {name:"Ankit", age:24,email:""},
        {name:"Rohit", age:25,email:""},
        {name:"Sourav", age:26,email:""},
        {name:"Rahul", age:27,email:""},
        {name:"Ankit", age:24,email:""},
    ]);


const handleChange=(vlaue)=>{      
    users[0].email = vlaue;
    setUsers([...users])
}

    return(
        <>
            <h1>Array In State</h1>
            <input type="text" onChange={(e)=>{handleChange(e.target.value)}}/>
            {
                users.map((user,index)=>(
                    <ul>
                        <h2>student {index + 1}</h2> 
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                    </ul>
                ))
            }


        </>
    )

}
export default ArrayInState;