import { useContext,useEffect } from "react";
import AddBook from "./components/AddBook";
import DisplayBook from "./components/DisplayBook";
import BookContext from "./context/BookContext";
const App =()=>{
    
    const{fetchBooks}=useContext(BookContext);

    useEffect(()=>{
        fetchBooks();
    },[])


    return(
        <>
        <AddBook />
        <DisplayBook />
        </>
    )
}

export default App;