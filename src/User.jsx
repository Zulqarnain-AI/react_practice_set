
export default function User({data}) {
    return (
        <div style={{textAlign:"center",backgroundColor:"#6b717dff", minHeight:"100vh", color:"white", padding:"20px"}}>
            <h1>User Component</h1>
            {
                data.map((user) => (
                    <div key={user.email} style={{
                        border: "1px solid black",
                        margin: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                        width: "300px",
                        backgroundColor: "#728123ff",
                        color: "white",
                    }}>
                        <h3>Name: {user.name}</h3>
                        <h3>Age: {user.age}</h3>
                        <h3>Email: {user.email}</h3>
                    </div>
                ))
            }
        </div>
    )
}