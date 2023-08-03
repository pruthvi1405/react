import { useState,useContext } from "react";
import BookContext from "../context/BookContext";


const EditBook=({bookname})=>{
    const {deleteBook}=useContext(BookContext);
    const [title,setTitle]=useState(bookname);
    const titleUpdate=(e)=>{
        e.preventDefault();
        
            deleteBook(bookname,title)
  
        
    }
    const update=(e)=>{
        setTitle(e.target.value);
    }

    return(
        <div>
            <form onSubmit={titleUpdate}>
                <input value={title} onChange={update}/>
                <button type="submit">SUMBIT</button>
            </form>
        </div>
    )
}

export default EditBook;