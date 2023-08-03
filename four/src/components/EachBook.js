import { useState,useContext} from "react";
import BookContext from "../context/BookContext";
import EditBook from "./EditBook";


const EachBook =({bookdetails})=>{
    const {deleteBook}=useContext(BookContext);
    const [showEdit,setShowEdit]=useState(false)
    let p;
    if(showEdit){
        p='block'
    }
    else{
        p='none'
    }

    const delBook=(event)=>{
        event.preventDefault();
        deleteBook(bookdetails);
    }
    
    const editBook=(e)=>{
        e.preventDefault();
        setShowEdit(!showEdit)
    }

    const bookEdit=(e)=>{
        setShowEdit(!showEdit)

    }

    

    return(
        <div>
            <h1>{bookdetails}</h1>
        <form>
            <button onClick={editBook}>Edit</button>
            <button onClick={delBook}>Delete</button>
        </form>
        <div style={{display: p}}>
        <EditBook edit={bookEdit} bookname={bookdetails}/>
        </div>
        
        </div>
    )
}

export default EachBook;