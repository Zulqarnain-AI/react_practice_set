import { useFormStatus } from 'react-dom'



function UseFormStatusHook(){
    async function handled() {
    await new premise(res => setTimeout(res, 5000));
    console.log('Submited')
  }
  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending)
    return (
      <div>
        <input type="text" placeholder='enter your name' /><br /><br />
        <input type="password" /><br /><br />
        <input type="submit" value="submit"/>
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
