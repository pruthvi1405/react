import ReactDOM from "react-dom" 
import { useEffect } from "react"
const Modal = ({children,onClose}) => {
    useEffect(() => {
      document.body.classList.add('overflow-hidden')
    
      return () => {
        document.body.classList.remove('overflow-hidden')
      }
    }, [])
   

    return ReactDOM.createPortal(
    <div>
        <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80">
        </div>
        <div className="fixed inset-40 bg-white p-10">
            {children}
        </div>  
    </div>,
    document.querySelector(".modal-class")
    )
}

export default Modal