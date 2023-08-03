import React, { useState } from 'react'
import {GoChevronDown,GoChevronLeft} from "react-icons/go"

const Accordian = ({items}) => {
const [expanded,setExpanded]=useState(-1);

const rendercomp=items.map((item,key)=>{
    var content=key===expanded
    const accordionToggle=(key)=>{
        if (key===expanded)
            setExpanded(-1)
        else
        setExpanded(key)
        
    }
   return( <div >
   <div className='border-solid' onClick={()=>accordionToggle(key)}><span>{item.label}</span><span>{content?<GoChevronLeft/>:<GoChevronDown/>}</span></div>
   <div>{content && item.content}</div>
    </div>)
})

  return rendercomp;
}

export default Accordian