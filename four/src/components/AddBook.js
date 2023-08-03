import { useState,useContext } from "react";
import BookContext from "../context/BookContext";
const AddBook =()=>{

    const {termObtained}=useContext(BookContext);

    const [term,setTerm]=useState('')
    const [text,setText]=useState('')
    const handleChange=(event)=>{
        setTerm(event.target.value)
    }

    const add =(e)=>{
        e.preventDefault();
        if(term===''){
            setText('Bookname Cannot be empty')
        }
        else{
            setText('')
            termObtained(term);
        }
        
    }

    return(
        <div>
        <form onSubmit={add}> 
            <input value={term} onChange={handleChange} />
        </form>
        <p>{text}</p>
        </div>
    )
}

export default AddBook;