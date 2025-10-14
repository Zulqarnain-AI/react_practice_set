

import { useState } from 'react';
function DerivedState() {
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");
const uniqueUsers =[...new Set(users)];
const lastUser= users[users.length -1];
const totalUsers= users.length;
    return (
        <div>
            <h2>Total user: {totalUsers}</h2>
            <h2>Last user: {lastUser}</h2>
            <h2>Unique user: {uniqueUsers.length}</h2>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => { setUsers([...users, inputValue]) }}>Add user</button>
            <ul>
                {users.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    )
}
export default DerivedState