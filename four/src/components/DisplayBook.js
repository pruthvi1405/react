import EachBook from "./EachBook";
import { useContext } from "react";
import BookContext from "../context/BookContext";

const DisplayBook =()=>{
    const {books}=useContext(BookContext);
    
    const displayBooks=books.map((book)=>{
        return <EachBook key={book.id} bookdetails={book} />;
    })

    return displayBooks;
}

export default DisplayBook;