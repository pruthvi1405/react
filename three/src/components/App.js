import SearchBar from "./SearchBar";
import SearchImage from "./SearchImage";
import { useState } from "react";
import ImageList from  './ImageList';
 function App(){
    const[arr,setArr]=useState([])

    const handleSearch= async({term})=>{
    const result=await SearchImage(term);
    setArr(result.data.results);
    console.log(arr)
    }

    return (<>
        <SearchBar onSubmit={handleSearch}/>
        <ImageList objects={arr}/>
        </>
    )
 }


 export default App;