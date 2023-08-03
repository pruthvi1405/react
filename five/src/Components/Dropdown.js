import { useState,useRef,useEffect} from "react"


const Dropdown = ({items,value,selection}) => {
    const[expanded,setExpanded]=useState(false)
    const divEl=useRef()
    const selected=(item)=>{
        setExpanded(!expanded)
        value(item)
    }

    useEffect(()=>{
        const change=(event)=>{
            if(!divEl.current.contains(event.target)){
                setExpanded(false)
            }
        }
        document.addEventListener('click',change,true)

        return ()=>document.removeEventListener('click',change);
    },
    [])
    
    const renderitems=items.map((item)=>{
        return <div onClick={()=>{selected(item)}}>{item.value}</div>
    })

    
    const open=()=>{
        setExpanded(!expanded)
    }

  return (<>
    <div ref={divEl}>
    <div  onClick={open}>{selection?.value || "select..."}</div>
    {expanded && renderitems}
    </div>
    </>
  )
}

export default Dropdown;