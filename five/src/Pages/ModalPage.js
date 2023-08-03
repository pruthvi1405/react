import Modal from "../Components/Modal"
import Button from "../Components/Button"
import { useState } from "react"

const ModalPage = () => {
    const [isOpen,setOpen]=useState(false)
    const handleChange=()=>{
        setOpen(!isOpen);
    }
    const handleClose=()=>{
        setOpen(false);
    }

  return (
    <div>
    <Button primary rounded onClick={handleChange}  >Click Me</Button>
    {isOpen && <Modal onClose={handleClose}>Hey Modal here!</Modal>}
    </div>
    
  )
}

export default ModalPage