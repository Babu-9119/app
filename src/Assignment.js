import React, { useEffect, useState } from "react";


function Assignment() {
    const [state, setState] = useState(0);

    //mounting
    useEffect(() =>{
        console.log("component mounted")
    },[])
    //updating
    useEffect(() =>{
        console.log("component updated")
        
    },[state])

    useEffect(() => {
        console.log("component mounts");
    
        return () => {
          console.log("component will unmount");
        };
      }, []);

    return(
        <div>
            <h1>count : {state}</h1>
            <button onClick={()=> setState(state+1)}>Increment</button>
            
        </div>
        
    )
}

export default Assignment;