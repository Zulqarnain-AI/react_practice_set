

import {useId} from 'react';

function UseIdHook() {
  const id = useId();
  const items = Array.from({ length: 5 });

  return (
    <>
      <form action="">
        <label htmlFor="name">enter name: </label>
        <input type="text" id="name"/><br /><br />
        <label htmlFor="pass">Password: </label>
        <input type="password" id='pass' /><br /><br />
        <fieldset>
          <legend>select your favorite fruits:</legend> 
            {items.map((_, index) => (
                <div key={index}>
                    <input type="checkbox" id={`${id}-fruit-${index}`} name="fruits" value={`fruit-${index}`} />
                    <label htmlFor={`${id}-fruit-${index}`}>Fruit {index + 1}</label>
                </div>
            ))}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default UseIdHook;