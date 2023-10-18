import { useRef } from "react";

function UncontrolledComponent() {
    const nameref=useRef();
    const passwordref=useRef();
    const emailref=useRef();
    const addressref=useRef();

    function createRecord(){
        alert(`Name : ${nameref.current.value}`);
    }

    return ( <div>
        <form>
               Name : <input type="text" name="name" ref={nameref}></input><br></br>
               Password : <input type="password" name="password" ref={passwordref}></input><br></br>
               Email : <input type="email" name="email" ref={emailref}></input><br></br>
               Address : <input type="text" name="address" ref={addressref}></input><br></br>
               <button type="button" onClick={createRecord}>Signup</button>
           </form>
    </div> );
}

export default UncontrolledComponent;