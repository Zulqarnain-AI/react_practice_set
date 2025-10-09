function UncontrolledComponent() {
    const handelsubmit = (e) => {
        e.preventDefault();
        const name=document.querySelector("#name").value
        const pass=document.querySelector("#password").value
        console.log("name: "+name)
        console.log("password: "+pass)
    }
    return (
        <div>
            <form action="" method="post" onSubmit={handelsubmit} >
                <input type="text" placeholder="enter your name" id="name" />
                <br /><br />
                <input type="password" id="password" />
                <br /><br />
                <button>Submit</button>
            </form>
            <h2>details</h2>
            <h3></h3>
            <h3></h3>
        </div>
    )
}

export default UncontrolledComponent