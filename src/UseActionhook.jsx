import { useActionState } from "react"

function UseActionHook() {
    const handlesubmit = async (prev, formData) => {
        
        await new Promise((resolve) => setTimeout(resolve, 2000))
        if(formData.get('name') && formData.get('password')){
            return {success:"Form submitted successfully", name:formData.get('name'), password:formData.get('password')}
        }
        else{
            return {error:"All fields are required", name:formData.get('name'), password:formData.get('password')}
        }
    }
    const [data, action, pending] = useActionState(handlesubmit, undefined)
    return (
        <div>
            <h1>Use Action Hook</h1>
            <form action={action}>
                <label htmlFor="name" >Name: </label>
                <input type="text" name="name" id='name' /><br /><br />
                <label htmlFor="password">Password: </label>
                <input type="password" id='password' name='password' /><br /><br />
                <button disabled={pending}>submit</button>
                {pending && <h2>Submitting...</h2>}
                {data?.error && <h2 style={{ color: "red" }}>{data.error}</h2>}
                {data?.success && <h2 style={{ color: "green" }}>{data.success}</h2>}
            </form>
            <h2>name:{data?.name}</h2>
            <h2>password:{data?.password}</h2>
        </div>
    )
}
export default UseActionHook