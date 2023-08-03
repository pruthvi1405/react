import './Photo.css';
import heart from '../svg/heart.svg'
import { useState } from 'react';
function Photo({path,index}){
    const [w,setWidth]=useState(10)
    const upd=()=>{
        setWidth(w+10)
    }
    return(
        <div id="toincrease">
            <img src={path} onClick={upd} />
            <img src={heart} style={{width:w+"px"}}/>
        </div>
    );
}

 export default Photo;