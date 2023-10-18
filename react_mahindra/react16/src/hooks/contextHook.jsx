
import {useContext, createContext, useState} from 'react';


const empContext=createContext();

function ContextHookComponent() {
    const [name,setName]=useState("Santosh");




    return ( 
        <empContext.Provider value={name}>
            <MyComponent />
        </empContext.Provider>

      
     );
}

export default ContextHookComponent;

function MyComponent(){
   const empname= useContext(empContext);
   return (
       <div>
           {empname}
       </div>
   )
}