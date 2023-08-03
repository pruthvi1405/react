import { useState } from "react";
import Dropdown from "../Components/Dropdown"

const DropdownPage = () => {
    const [selection,setSelection]=useState("Select...")
    const setValue=(i)=>{
        setSelection(i)
    };
    const items=[
        {label:"red",value:"red"},
        {label:"green",value:"green"},
        {label:"blue",value:"blue"}]
  return (
      <div><Dropdown value={setValue} selection={selection} items={items}/></div>    
  )
}

export default DropdownPage