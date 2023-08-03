import { Button } from "bootstrap";
import { useState } from "react";

function App(){
    var [count,setCount]=useState(0);
    const clicker=()=>{
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={clicker}>click me</button>
            <p>{count}</p>
        </div>
    );
}

export default App;