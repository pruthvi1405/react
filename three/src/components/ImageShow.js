const ImageShow=({details})=>{
       return(
           <img src={details.urls.small} alt={details.alt_description}/>
       )
    }


export default ImageShow;