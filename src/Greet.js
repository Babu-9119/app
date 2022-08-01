import { useState } from "react";


function Greet({login,logout}){
    const [state, setState] = useState(false);
    return(
        <div>
            <h2> please {state ?logout:login}</h2>
            <button onClick={() => setState(!state)}>{state ?logout:login}</button>
        </div>
    )
}

export default Greet;