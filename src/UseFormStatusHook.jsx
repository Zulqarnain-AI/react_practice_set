import { useFormStatus } from 'react-dom'



function UseFormStatusHook(){
    const handled = async (e) => {
    e.preventDefault();
    await new Promise(res => setTimeout(res, 5000));
    console.log('Submited')
  }

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending)
    return (
      <div>
        <input type="text" placeholder='enter your name' /><br /><br />
        <input type="password" /><br /><br />
        <button onClick={handled}>Submit</button>
      </div>
    )

  }

  return(
    <form action="handled">
        <CustomerForm />
      </form>
  )
}
export default UseFormStatusHook
