import { createContext,useState } from "react";
import axios from "axios";

const BookContext=createContext();

function Provider({children}){
    const [books,setBooks]=useState([]);

    const termObtained= async (term)=>{
        const response= await axios.post("http://localhost:3001/books",{
            "title":term
        })
        console.log(response)
        setBooks([...books,response.data])
    }

    const fetchBooks=async()=>{
        const response= await axios.get("http://localhost:3001/books")
        setBooks(response.data);
    }

    const deleteBook=async (bookdetail,newname)=>{
        
        if(newname===bookdetail.title){
            const response=await axios.delete(`http://localhost:3001/books/${bookdetail.id}`)
            const leftBooks=books.filter((book)=>{
                return book!==response.data;
            })
            setBooks(leftBooks);
        }
            
        else{
            const response=await axios.put(`http://localhost:3001/books/${bookdetail.id}`,{
                "title":newname
            })
            const updateList=books.map((book)=>{
                if(book.id===bookdetail.id){
                    return {...book,...response.data}
                }
                return book
            })
            setBooks(updateList)
        }


        
        }

        const valueToShare={
            deleteBook,
            fetchBooks,
            termObtained,
            books
        }

        return(
                <BookContext.Provider value={valueToShare}>
                    {children}
                </BookContext.Provider>
        )
}

export  {Provider};
export default BookContext;
